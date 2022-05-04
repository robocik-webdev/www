<script context="module">
  export async function load({ params }) {
    return { props: { id: params.id } };
  }
</script>

<script>
  import { socket } from '$lib/Hub/api';
  import { edited, debug, adminQuestions } from '$lib/Hub/stores';

  import { copy } from '$lib/Hub/utils';
  import { cancel, save } from '$lib/Hub/actions';

  import { DateTime } from 'luxon';

  import ButtonGroup from '$lib/Hub/ButtonGroup.svelte';
  import Button from '$lib/Hub/Button.svelte';
  import Input from '$lib/Hub/Input.svelte';
  import { onMount } from 'svelte';

  function getDate(iso) {
    // yyyy-mm-dd
    return DateTime.fromISO(iso).toISODate();
  }
  function getTime(iso) {
    // hh:mm:ss
    return DateTime.fromISO(iso).toISOTime().split('.')[0];
  }
  function makeISO(date, time) {
    // ISO 8601
    return DateTime.fromISO(date + 'T' + time).toISO();
  }

  function removeAnswer(i) {
    data.answers.splice(i,1);
    data = data;
  }
  function addAnswer() {
    data.answers.push({
      id: null,
      title: ''
    });
    data = data;
  }

  export let id;
  let error;

  let dataOriginal;
  let data;
  $: $edited = JSON.stringify(data) != JSON.stringify(dataOriginal);

  $: $socket?.on('adminModifyQuestion',d=>console.log('mq',d))
  $: $socket?.on('adminModifyAnswer',d=>console.log('ma',d))
  $: $socket?.on('adminAddAnswer',d=>console.log('aa',d))
  $: $socket?.on('adminRemoveAnswer',d=>console.log('ra',d))

  $cancel = () => (data = copy(dataOriginal));
  $save = async () => {
    $socket.emit('adminModifyQuestion', {
      id: id,
      title: data.title,
      openTime: makeISO(data.date, data.timeOpen),
      closeTime: makeISO(data.date, data.timeClose),
      showAnswers: data.showAnswers,
      possibleAnswers: data.maxAnswers
    });
    // TODO: this is probably very unefficient
    for (const answer of data.answers) {
      const answerOriginal = dataOriginal.answers.find(d => d.id == answer.id)
      if (answerOriginal) {
        if (JSON.stringify(answer) != JSON.stringify(answerOriginal)) {
          // modify existing questions
          console.log('mod', answer);
          $socket.emit('adminModifyAnswer', {
            id: answer.id,
            title: answer.title
          });
        }
      } else {
        // add new questions
        console.log('new', answer);
        $socket.emit('adminAddAnswer', {
          title: answer.title,
          questionId: id
        });
      }
    }
    for (const answer of dataOriginal.answers) {
      if (!data.answers.find(d => d.id == answer.id)) {
        // remove removed questions
        console.log('rem', answer);
        $socket.emit('adminRemoveAnswer', {
          id: answer.id
        });
      }
    }
    // dataOriginal = copy(data);
  };

  // load data and forbid to refresh (workaround async refreshing)
  // let loaded = false;
  $: $socket?.emit('adminQuestions');
  // TODO: find a different way of handling socket event refreshing, because this also refreshes when ANYTHING INSIDE changes (idea: make a function to call inside or make sure the socket is already connected)
  $: $socket?.on('adminQuestions', res => {
    $adminQuestions = res.data.questions;
    console.log('why');
    console.log($adminQuestions);
    // if (!loaded) {
      const q = $adminQuestions.find(q => q.id == id);
      if (q) {
        dataOriginal = {
          title: q.title,
          date: getDate(q.openTime),
          timeOpen: getTime(q.openTime),
          timeClose: getTime(q.closeTime),
          showAnswers: q.showAnswers,
          answers: q.answers,
          maxAnswers: q.possibleAnswers
        };
        data = copy(dataOriginal);
      } else {
        error = 'Brak pytania o podanym ID!';
      }
    // }
    // loaded = true;
  });
</script>

{#if data}
  <h1 class="title">{data.title}</h1>
  <Input bind:value={data.title}>Tytuł</Input>

  <h3 class="subtitle">Głosowanie</h3>
  <Input type="date" bind:value={data.date}>Data</Input>
  <ButtonGroup>
    <Input type="time" step={1} bind:value={data.timeOpen}>Otwarcie</Input>
    <Input type="time" step={1} bind:value={data.timeClose}>Zamknięcie</Input>
  </ButtonGroup>

  <h3 class="subtitle">Wyniki</h3>
  <Input type="checkbox" bind:value={data.showAnswers}>Pokaż wyniki</Input>

  <h3 class="subtitle">Odpowiedzi</h3>
  <div class="answers">
    {#each data.answers as answer, i}
      <div class="answer">
        <Input bind:value={answer.title} />
        <Button square icon="delete" onclick={() => removeAnswer(i)} />
      </div>
    {/each}
    <Button action onclick={addAnswer} icon="add">Dodaj</Button>
    <Input buttons type="number" bind:value={data.maxAnswers} min="1" step="1">Max do wyboru</Input>
  </div>
{:else if error}{error}{/if}

<style>
  .title,
  .subtitle {
    color: #fff;
  }
  .title {
    margin: 6rem 0 1rem 0;
    font-size: 2rem;
  }
  .subtitle {
    margin-top: 3rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 900;
  }

  .answers {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .answer {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 0.75rem;
    /* width: 100%; */
  }
</style>

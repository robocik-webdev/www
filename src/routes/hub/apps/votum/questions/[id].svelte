<script context="module">
  export async function load({ params }) {
    return { props: { id: params.id } };
  }
</script>

<script>
  import { socket } from '$lib/Hub/api';
  // import { datetime } from 'luxon';
  import ButtonGroup from '$lib/Hub/ButtonGroup.svelte';
  import Button from '$lib/Hub/Button.svelte';
  import Input from '$lib/Hub/Input.svelte';

  import { adminQuestions } from '$lib/Hub/stores';

  function getDate(iso) {
    return Date.now();
  }
  function getTime(iso) {
    return Date.now();
  }
  function makeISO(date, time) {
    return '';
  }

  export let id;

  let question;
  let questionOriginal;

  // TODO: generate ISO times with luxon
  // $: question.openTime = datetime.
  // $: question.closeTime = datetime.

  $: {
    console.log($adminQuestions);
    if ($adminQuestions.length == 0) {
      $socket?.emit('adminQuestions');
    }
    const q = $adminQuestions.find(q => q.id == id);
    if (q) {
      questionOriginal = {
        title: q.title,
        date: getDate(q.openTime),
        timeOpen: getTime(q.openTime),
        timeClose: getTime(q.closeTime),
        maxAnswers: q.possibleAnswers,
        answers: q.answers
      };
      console.log(JSON.stringify(question));
      console.log(JSON.stringify(questionOriginal));
      if (question && JSON.stringify(question) != JSON.stringify(questionOriginal)) {
        // show modal for permission
      } else {
        question = questionOriginal; // is this a copy or ref? XD
      }
    }
  }

  function removeAnswer(i) {}
  function addAnswer() {}

  $: $socket?.on('adminQuestions', res => {
    $adminQuestions = res.data.questions;
  });
</script>

{#if question}
  <h1 class="title">{question.title}</h1>
  <Input bind:value={question.title} edited>Tytuł</Input>

  <h3 class="subtitle">Głosowanie</h3>
  <Input type="date" bind:value={question.date}>Data</Input>
  <ButtonGroup>
    <Input type="time" bind:value={question.timeOpen}>Otwarcie</Input>
    <Input type="time" bind:value={question.timeClose}>Zamknięcie</Input>
  </ButtonGroup>

  <h3 class="subtitle">Wyniki</h3>
  <Input type="checkbox" bind:value={question.showAnswers}>Pokaż wyniki</Input>

  <h3 class="subtitle">Odpowiedzi</h3>
  <div class="answers">
    {#each question.answers as answer, i}
      <div class="answer">
        <Input bind:value={answer.title} />
        <Button square icon="delete" onclick={() => removeAnswer(i)} />
      </div>
    {/each}
    <Button action onclick={addAnswer} icon="add">Dodaj</Button>
    <Input buttons type="number" bind:value={question.maxAnswers} min="1" step="1">Max do wyboru</Input>
  </div>
{/if}

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

<script context="module">
  export async function load({ params }) {
    return { props: { id: params.id } };
  }
</script>

<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { DateTime } from 'luxon';

  import { api } from '$lib/Hub/api';
  import { cancel, save } from '$lib/Hub/actions';
  import { copy } from '$lib/Hub/utils';
  import { edited, adminQuestions } from '$lib/Hub/stores';
  import ButtonGroup from '$lib/Hub/ButtonGroup.svelte';
  import Button from '$lib/Hub/Button.svelte';
  import Input from '$lib/Hub/Input.svelte';
  import Modal from '$lib/Hub/Modal.svelte';

  const getDate = iso => DateTime.fromISO(iso).toISODate(); // yyyy-mm-dd
  const getTime = iso => DateTime.fromISO(iso).toISOTime().split('.')[0]; // hh:mm:ss
  const makeISO = (date, time) => DateTime.fromISO(date + 'T' + time).toISO(); // ISO 8601

  async function fetchData() {
    try {
      if (id == 'new') {
        const now = DateTime.now().toISO();
        data = {
          title: '',
          date: getDate(now),
          timeOpen: getTime(now),
          timeClose: getTime(now),
          showResults: false,
          answers: [{ title: '' }, { title: '' }],
          maxAnswers: 1
        };
      } else {
        let q = $adminQuestions.find(q => q.id == id);
        if (!q) {
          const res = await api('GET', `/votum/questions/${id}`);
          q = res.data;
        }
        dataOriginal = {
          title: q.title,
          date: getDate(q.timeOpen),
          timeOpen: getTime(q.timeOpen),
          timeClose: getTime(q.timeClose),
          showResults: q.showResults,
          answers: q.answers.sort((a, b) => a.id - b.id),
          maxAnswers: q.maxAnswers
        };
        data = copy(dataOriginal);
      }
    } catch (err) {
      error = 'Brak pytania o podanym ID!';
    }
  }

  function removeAnswer(i) {
    data.answers.splice(i, 1);
    data = data;
  }
  function addAnswer() {
    data.answers.push({ title: '' });
    data = data;
  }

  let deleteModal = false;
  async function deleteQuestion() {
    await api('DELETE', `/votum/questions/${id}`);
    $edited = false;
    goto('/hub/apps/votum/questions');
  }

  export let id;
  let error;

  let dataOriginal;
  let data;
  $: console.log(data);
  $: if (JSON.stringify(data) != JSON.stringify(dataOriginal)) {
    $edited = true;
  } else {
    $edited = false;
  }

  $cancel = () => {
    if (id == 'new') {
      $edited = false;
      goto('/hub/apps/votum/questions');
    } else {
      data = copy(dataOriginal);
    }
  };
  $save = async () => {
    try {
      data.answers = data.answers.filter(a => a.title != '');
      const updates = {
        title: data.title,
        timeOpen: makeISO(data.date, data.timeOpen),
        timeClose: makeISO(data.date, data.timeClose),
        showResults: data.showResults,
        answers: data.answers.map(a => a.title),
        maxAnswers: data.maxAnswers
      };
      console.log(updates);
      if (id == 'new') {
        const res = await api('POST', `/votum/questions`, updates);
        console.log(res);
        $edited = false;
        goto('/hub/apps/votum/questions');
      } else {
        api('PUT', `/votum/questions/${id}`, updates);
      }
      dataOriginal = copy(data);
    } catch (err) {
      error = err;
    }
  };

  onMount(fetchData);
</script>

{#if data}
  <div class="wrapper" in:fly={{ duration: 300 }}>
    <h1 class="title">{data.title}</h1>
    <Input bind:value={data.title}>Tytuł</Input>

    <h3 class="subtitle">Głosowanie</h3>
    <Input type="date" bind:value={data.date}>Data</Input>
    <ButtonGroup>
      <Input type="time" step={1} bind:value={data.timeOpen}>Otwarcie</Input>
      <Input type="time" step={1} bind:value={data.timeClose}>Zamknięcie</Input>
    </ButtonGroup>

    <h3 class="subtitle">Wyniki</h3>
    <Input type="checkbox" bind:value={data.showResults}>Pokaż wyniki</Input>

    <h3 class="subtitle">Odpowiedzi</h3>
    <div class="answers">
      {#each data.answers as answer, i}
        <div class="answer">
          <Input bind:value={answer.title} />
          <Button square icon="delete" onclick={() => removeAnswer(i)} />
        </div>
      {/each}
      <Button action onclick={addAnswer} icon="add">Dodaj</Button>
      <Input buttons type="number" bind:value={data.maxAnswers} min="1" max="3" step="1">Max do wyboru</Input>
    </div>

    <h3 class="subtitle">Danger zone</h3>
    {#if id != 'new'}
      <Button action onclick={() => (deleteModal = !deleteModal)} icon="delete">Usuń</Button>
    {/if}
  </div>
{:else if error}
  {error}
{/if}

<Modal bind:visible={deleteModal}>
  <h1>Na pewno chcesz usunąć to pytanie?</h1>
  <ButtonGroup>
    <Button action onclick={(deleteModal = false)}>Anuluj</Button>
    <Button transparent onclick={deleteQuestion}>Usuń</Button>
  </ButtonGroup>
</Modal>

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

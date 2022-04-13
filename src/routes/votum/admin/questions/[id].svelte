<script context="module">
  export async function load({ params }) {
    return { props: { id: params.id } };
  }
</script>

<script>
  export let id;

  let original = {
    title: 'Granie czy sranie?',
    openTime: '2022-04-10T22:35:00.000Z',
    closeTime: '2022-04-10T22:40:00.000Z',
    possibleAnswers: 1,
    showAnswers: true,
    answers: ['Granie', 'Sranie']
  };
  let question = {
    title: 'Granie czy sranie?',
    openTime: '2022-04-10T22:35:00.000Z',
    closeTime: '2022-04-10T22:40:00.000Z',
    possibleAnswers: 1,
    showAnswers: true,
    answers: ['Granie', 'Sranie']
  };
  $: console.log(question);
</script>

<h1 class="title" contenteditable bind:innerHTML={question.title}>
  {question.title}
</h1>

<h3 class="subtitle">Głosowanie</h3>
<label>
  <!-- <span>Dzień</span> -->
  <input type="date" />
</label>
<div class="columns">
  <label>
    <span>Otwarcie</span>
    <input type="time" />
  </label>
  <label>
    <span>Zamknięcie</span>
    <input type="time" />
  </label>
</div>

<h3 class="subtitle">Wyniki</h3>
<label class="checkbox">
  <input type="checkbox" />
  <span>Pokaż wyniki</span>
</label>

<h3 class="subtitle">Odpowiedzi</h3>
<div class="answers">
  {#each question.answers as answer, i}
    <div class="answer">
      <div
        class="answer-title"
        contenteditable
        bind:innerHTML={question.answers[i]}
      >
        {answer}
      </div>
      <div class="answer-remove">
        <img src="/icon/remove.svg" alt="remove" />
      </div>
    </div>
  {/each}
  <div class="answer-add"><img src="/icon/add.svg" alt="add" /></div>
  <div class="columns">
    <label>
      <span>Maks do wyboru</span>
      <input type="number" step="1" />
    </label>
  </div>
</div>

<style>
  .title {
    margin: 1rem 0;
    margin-bottom: 2rem;
  }
  .subtitle {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    width: 100%;
    min-width: 0;
  }
  label span {
    margin-bottom: 0.25rem;
  }
  label.checkbox {
    flex-direction: row;
    align-items: center;
    border: solid 2px rgb(190, 17, 17);
    border-radius: 0.5rem;
    padding: 0.5rem;
    height: 50px;
  }
  label.checkbox span {
    margin-bottom: 0;
  }

  input {
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    height: 50px;
    font-size: 1.2rem;
    background-color: var(--c-bg-1);
    color: var(--color-light);
  }
  input[type='checkbox'] {
    height: 20px;
    width: 20px;
    margin-right: 0.5rem;
    accent-color: rgb(253, 37, 37);
  }

  .answer {
    display: flex;
    gap: 0.5rem;
  }
  .answer-title,
  .answer-remove,
  .answer-add {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;
    min-height: 50px;
    font-size: 1.2rem;
  }
  .answer-title {
    flex-grow: 1;
    padding: 0.75rem 1rem;
    background-color: var(--c-bg-1);
  }
  .answer-remove,
  .answer-add {
    justify-content: center;
    min-width: 50px;
  }
  .answer-remove img,
  .answer-add img {
    width: 25px;
  }
  .answer-remove {
    background-color: rgb(190, 17, 17);
  }

  .answer-add {
    padding: 0.5rem;
    background-color: var(--color-complement);
  }
</style>

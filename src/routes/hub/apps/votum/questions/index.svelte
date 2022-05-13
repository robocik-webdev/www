<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { DateTime } from 'luxon';

  import { api } from '$lib/Hub/api';
  import { cancel, save } from '$lib/Hub/actions';
  import { copy } from '$lib/Hub/utils';
  import { edited, debug, adminQuestions } from '$lib/Hub/stores';
  import Button from '$lib/Hub/Button.svelte';
  import Add from '$lib/Hub/Add.svelte';

  function diff(time, now) {
    const pad = time => String(time).padStart(2, '0');
    let { days, hours, minutes, seconds } = DateTime.fromISO(time)
      // .minus({ hours: 2 })
      .diff(now, ['days', 'hours', 'minutes', 'seconds'])
      .toObject();
    seconds = Math.floor(seconds);
    if (days > 0 || hours > 0 || minutes > 0 || seconds > 0)
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${days > 0 ? '(+' + days + ' dni)' : ''}`;
    return null;
  }

  async function fetchData() {
    const res = await api('GET', '/votum/questions');
    $adminQuestions = res.data.questions;
    $adminQuestions.sort((a, b) => a.id - b.id);
    dataOriginal = copy($adminQuestions);
    data = copy($adminQuestions);
  }

  let now = DateTime.now();

  let dataOriginal = [];
  let data = [];

  // THIS CAUSES PROBLEMS
  // $: $edited = data.find(({ showResults }, i) => showResults != dataOriginal[i].showResults);
  // THIS IS FINE (why?)
  $: if (data.find(({ showResults }, i) => showResults != dataOriginal[i].showResults)) {
    $edited = true;
  } else {
    $edited = false;
  }

  $cancel = () => (data = copy(dataOriginal));
  $save = () => {
    for (const [i, { id, showResults }] of data.entries()) {
      if (showResults != dataOriginal[i].showResults) {
        api('PATCH', `/votum/questions/${id}/showResults`, { showResults });
      }
    }
    dataOriginal = copy(data);
  };
  const add = () => goto('/hub/apps/votum/questions/new');

  onMount(() => {
    fetchData();
    // clock
    const interval = setInterval(() => (now = DateTime.now()), 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="wrapper">
  {#each data as { id, title, timeOpen, timeClose, showResults }, i}
    <div class="item" in:fly={{ y: 20, duration: 300 + 300 * i }}>
      <a role="button" href="/hub/apps/votum/questions/{id}">
        {#if diff(timeOpen, now)}
          <div class="info">Live in <b>{diff(timeOpen, now)}</b></div>
        {:else if diff(timeClose, now)}
          <div class="info"><span class="active">Live</span> &nbsp;|&nbsp; Jeszcze <b>{diff(timeClose, now)}</b></div>
        {:else}
          <div class="info">Zakończone</div>
        {/if}
        <div class="title">{title}</div>
      </a>
      <div class="button">
        <Button
          square
          action={showResults}
          edited={showResults != dataOriginal[i].showResults}
          icon="leaderboard"
          onclick={() => (showResults = !showResults)}
        />
      </div>
    </div>
  {/each}

  {#if $debug}
    <button on:click={() => api('POST', '/votum/utilities/seedDB')}>seed database</button>
  {/if}
</div>

<Add onclick={add} />

<style>
  .wrapper {
    margin-bottom: calc(var(--h-bar) * 2 + 1rem);
  }
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    border: solid 2px var(--c-input);
    border-radius: 1rem;
  }

  a {
    flex-grow: 1;
    display: block;
    padding: 1rem;
    padding-right: 0;
    color: #fff;
    text-decoration: none;
  }

  .button {
    padding: 1rem;
  }

  .title {
    margin-top: 0.25rem;
    font-size: 1.2rem;
  }
  .info {
    color: rgb(165, 165, 165);
  }
  .active {
    color: var(--c-red);
  }
</style>

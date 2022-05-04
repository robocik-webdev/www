<script>
  import { socket } from '$lib/Hub/api';
  import { edited, debug, adminQuestions } from '$lib/Hub/stores';

  import { DateTime } from 'luxon';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import Button from '$lib/Hub/Button.svelte';

  import { copy } from '$lib/Hub/utils';
  import { cancel, save } from '$lib/Hub/actions';

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

  let dataOriginal = [];
  let data = [];
  $: $edited = data.find((d, i) => d.showAnswers != dataOriginal[i].showAnswers);

  $cancel = () => (data = copy(dataOriginal));
  $save = async () => {
    for (const [i, { id, showAnswers }] of data.entries()) {
      if (showAnswers != dataOriginal[i].showAnswers) {
        $socket.emit('adminSetQuestionShowAnswers', { id, showAnswers });
      }
    }
    dataOriginal = copy(data);
    // $socket.emit('adminQuestions');
  };

  $: $socket?.on('adminSetQuestionShowAnswers', data => console.log(data));

  // load data and forbid to refresh (workaround async refreshing)
  let loaded = false;
  $: $socket?.emit('adminQuestions');
  $: $socket?.on('adminQuestions', res => {
    res.data.questions.sort((a, b) => a.id - b.id);
    $adminQuestions = res.data.questions;
    if (!loaded) {
      // show modal (or small info somewhere) to ask to accept changes?
      dataOriginal = copy($adminQuestions);
      data = copy($adminQuestions);
      loaded = true;
    }
  });

  // clock
  let now = DateTime.now();
  onMount(() => {
    const interval = setInterval(() => {
      now = DateTime.now();
    }, 1000);
    return () => clearInterval(interval);
  });

  // debug
  let seed = 'seed';
  $: $socket?.on('adminSeedDatabase', res => {
    if (res.status == 200) {
      $socket?.emit('adminQuestions');
      seed = 'success';
      setTimeout(() => (seed = 'seed'), 2000);
    }
  });
</script>

{#each data as { id, title, openTime, closeTime, showAnswers }, i}
  <div class="item" in:fly={{ y: 20, duration: 300 + 300 * i }}>
    <a role="button" href="/hub/apps/votum/questions/{id}" sveltekit:prefetch>
      {#if diff(openTime, now)}
        <div class="info">Live in <b>{diff(openTime, now)}</b></div>
      {:else if diff(closeTime, now)}
        <div class="info"><span class="active">Live</span> &nbsp;|&nbsp; Jeszcze <b>{diff(closeTime, now)}</b></div>
      {:else}
        <div class="info">Zakończone</div>
      {/if}
      <div class="title">{title}</div>
    </a>
    <div class="button">
      <Button
        square
        action={showAnswers}
        edited={showAnswers != dataOriginal[i].showAnswers}
        icon="leaderboard"
        onclick={() => (showAnswers = !showAnswers)}
      />
    </div>
  </div>
{/each}

{#if $debug}
  <button
    on:click={() => {
      seed = 'working...';
      $socket.emit('adminSeedDatabase');
    }}
  >
    {seed}
  </button>
{/if}

<style>
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

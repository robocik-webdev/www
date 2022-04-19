<script>
  import { socket } from '$lib/Hub/api';
  import { adminQuestions } from '$lib/Hub/store';

  import { DateTime } from 'luxon';
  import { onDestroy, onMount } from 'svelte';

  import Button from '$lib/Hub/Button.svelte';

  function remainingTime(datetime1, datetime2) {
    function pad(time) {
      return time < 10 ? '0' + time : time;
    }
    function format(time) {
      return time > 0 ? pad(time) : '00';
    }
    let { days, hours, minutes, seconds } = datetime1
      // .minus({ hours: 2 })
      .diff(datetime2, ['days', 'hours', 'minutes', 'seconds'])
      .toObject();
    seconds = Math.floor(seconds);
    if (days > 0 || hours > 0 || minutes > 0 || seconds > 0)
      return `${format(hours)}:${format(minutes)}:${format(seconds)}
              ${days > 0 ? '(+' + days + ' dni)' : ''}`;
    return null;
  }

  let questions = [];

  let now = DateTime.now();
  let interval;
  onMount(() => {
    interval = setInterval(() => (now = DateTime.now()), 1000);
  });
  onDestroy(() => {
    clearInterval(interval);
  });

  function toggleAnswers(id) {
    questions[id].showAnswers = !questions[id].showAnswers;
  }

  $: $socket?.emit('adminQuestions');
  $: $socket?.on('adminQuestions', res => {
    $adminQuestions = res.data.questions;
    questions = $adminQuestions;
  });

  let seed;
  $: $socket?.on('adminSeedDatabase', data => {
    console.log(data);
    if (data.success) {
      seed = 'cyk';
      setTimeout((seed = 'seed'), 2000);
    }
  });
</script>

{#each questions as { id, title, openTime, closeTime, showAnswers }, i}
  <div class="item">
    <div class="bar">
      <a class="glass title" href="/hub/apps/votum/questions/{id}">{title}</a>
      <Button square action={showAnswers} icon="/hub/poll.svg" alt="wyniki" onclick={() => toggleAnswers(i)} />
    </div>
    {#if remainingTime(DateTime.fromISO(openTime), now)}
      <div class="info">
        Live in <b>{remainingTime(DateTime.fromISO(openTime), now)}</b>
      </div>
    {:else if remainingTime(DateTime.fromISO(closeTime), now)}
      <div class="info">
        <span class="active">Live</span> &nbsp;|&nbsp; Koniec in
        <b>{remainingTime(DateTime.fromISO(closeTime), now)}</b>
      </div>
    {:else}
      <div class="info">Zakończone</div>
    {/if}
  </div>
{/each}

<button on:click={() => $socket.emit('adminSeedDatabase')}>{seed}</button>

<style>
  .item {
    margin-bottom: 1rem;
  }

  .bar {
    display: flex;
    gap: 1rem;
    height: 3rem;
    border-radius: 1rem;
  }

  .title {
    flex-grow: 1;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    padding: 1rem;
    height: 100%;
    color: #fff;
    font-size: 1.1rem;
    text-decoration: none;
  }

  .info {
    margin-top: 0.25rem;
    color: rgb(165, 165, 165);
  }
  .active {
    color: rgb(255, 93, 93);
  }
</style>

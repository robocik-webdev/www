<script>
  import { DateTime } from 'luxon';
  import { onDestroy, onMount } from 'svelte';

  function remainingTime(datetime1, datetime2) {
    function pad(time) {
      return time < 10 ? '0' + time : time;
    }
    function format(time) {
      return time > 0 ? pad(time) : '00';
    }
    let { days, hours, minutes, seconds } = datetime1
      .minus({ hours: 2 })
      .diff(datetime2, ['days', 'hours', 'minutes', 'seconds'])
      .toObject();
    seconds = Math.floor(seconds);
    if (days > 0 || hours > 0 || minutes > 0 || seconds > 0)
      return `${format(hours)}:${format(minutes)}:${format(seconds)}
              ${days > 0 ? '(+' + days + ' dni)' : ''}`;
    return null;
  }

  let questions = [
    {
      id: 1,
      title: 'Granie czy sranie?',
      openTime: '2022-04-10T22:35:00.000Z',
      closeTime: '2022-04-10T22:40:00.000Z',
      possibleAnswers: 1,
      showAnswers: true,
      answers: ['Granie', 'Sranie']
    },
    {
      id: 2,
      title: 'CEO',
      openTime: '2022-04-11T02:41:50.000Z',
      closeTime: '2022-04-11T02:42:10.000Z',
      possibleAnswers: 2,
      showAnswers: true,
      answers: [
        'Ktoś',
        'Ktoś inny',
        'Wow, ktoś inny',
        'Więcej was matka nie miała?!'
      ]
    }
  ];

  let now = DateTime.now();
  let interval;
  onMount(() => {
    interval = setInterval(() => (now = DateTime.now()), 1000);
  });
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#each questions as { id, title, openTime, closeTime, showAnswers }}
  <div class="item">
    <div class="bar">
      <a class="title" href="/votum/admin/questions/{id}">{title}</a>
      <div class="button" class:active={showAnswers}>
        <img src="/icon/votum/poll.svg" alt="wyniki" />
      </div>
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

<style>
  .item {
    margin-bottom: 1rem;
  }

  .bar {
    display: flex;
    gap: 0.5rem;
    height: 50px;
  }

  .title,
  .button {
    border-radius: 0.5rem;
    background-color: var(--c-bg-1);
  }

  .title {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
    height: 100%;
    color: #fff;
    font-size: 1.1rem;
    text-decoration: none;
  }
  .button {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    height: 100%;
  }
  .button img {
    height: 100%;
  }

  .info {
    margin-top: 0.25rem;
    color: rgb(165, 165, 165);
  }
  .active {
    color: rgb(255, 93, 93);
  }
</style>

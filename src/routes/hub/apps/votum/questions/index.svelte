<script>
  import { socket } from '$lib/Hub/api';
  import { edited, adminQuestions } from '$lib/Hub/stores';

  import { DateTime } from 'luxon';
  import { onMount } from 'svelte';

  import Button from '$lib/Hub/Button.svelte';

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
  let changes = [];
  $: {
    changes = data
      .map((d, i) => {
        if (d.showAnswers != dataOriginal[i].showAnswers) {
          return { id: d.id, showAnswers: d.showAnswers };
        }
      })
      .filter(d => d);
  }
  $: $edited = changes.length > 0;
  $: console.log(changes);
  // data.map(d => {
  //   // @ts-ignore
  //   if (d.showAnswers != dataOriginal.showAnswers) {
  //     return { id: d.id, showAnswers: d.showAnswers };
  //   }
  // });
  // @ts-ignore
  // $: $edited = changes.find((c, i) => $adminQuestions[i].showAnswers != changes[i].showAnswers);
  $: console.log('dataOriginal', data);
  $: console.log('data', data);
  $: console.log('changes', changes);
  // $: console.log('edited', $edited);

  let now = DateTime.now();
  onMount(() => {
    const interval = setInterval(() => {
      now = DateTime.now();
    }, 1000);
    return () => clearInterval(interval);
  });

  // function toggleAnswers(id) {
  //   $edited = !$edited;
  //   data[id].showAnswers = !data[id].showAnswers;
  // }

  $: $socket?.emit('adminQuestions');
  $: $socket?.on('adminQuestions', res => {
    $adminQuestions = res.data.questions;
    // if ($edited) {
    //   // show modal to ask if changes
    // }
    dataOriginal = $adminQuestions.map(d => ({ ...d }));
    data = $adminQuestions.map(d => ({ ...d }));
    // console.log('data', data);
    // dataOriginal = [...data];
    // console.log('dataOriginal', dataOriginal);
  });

  // function save() {
  //   $adminQuestions = [...data];
  //   dataOriginal = [...data];
  // }

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
  <div class="item">
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
      <Button square action={showAnswers} icon="leaderboard" onclick={() => (showAnswers = !showAnswers)} />
    </div>
  </div>
{/each}

<button
  on:click={() => {
    seed = 'working...';
    $socket.emit('adminSeedDatabase');
  }}
>
  {seed}
</button>

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

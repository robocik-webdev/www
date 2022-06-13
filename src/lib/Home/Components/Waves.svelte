<script>
  import { range } from '$lib/utils.js';
  import { onMount } from 'svelte';

  export let h; // cta section height
  let y; // window scroll
  // let w; // window width

  const wavesRange = range(1, 4);
  $: offsets = wavesRange.map(i => {
    if (i == wavesRange.length) return 0;
    const scrolled = (h - y) / h;
    const multiplier = i + 2;
    let offset = y < h ? (1 - scrolled) / multiplier : 0;
    return offset;
  });

  // let waves = [
  //   { offset: 0, direction: -1 },
  //   { offset: 0, direction: 1 },
  //   { offset: 0, direction: -1 },
  //   { offset: 0, direction: 1 }
  // ];
  // console.log(waves);

  // onMount(() => {
  //   const interval = setInterval(() => {
  //     wavesRange.forEach(i => {
  //       i -= 1;
  //       waves[i].offset += waves[i].direction;
  //       if (waves[i].direction == 1) {
  //         if (waves[i].offset > 50 * i) waves[i].direction = -1;
  //       } else {
  //         if (waves[i].offset < -50 * i) waves[i].direction = 1;
  //       }
  //     });
  //   }, 50);
  //   return () => clearInterval(interval);
  // });
</script>

<svelte:window bind:scrollY={y} />

{#each wavesRange as i}
  <img
    class="wave"
    src="/cta/wave{i}.svg"
    alt=""
    style="z-index: {i}; transform: translateY({offsets[i - 1] * 100}%)"
  />
{/each}

<style>
  img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media (max-width: 600px) {
    /* TODO: scale with browser width */
    img {
      width: 200%;
    }
  }
</style>

<script>
  import { range } from '$lib/utils.js';

  export let h; // cta section height
  let y; // window scroll

  const wavesRange = range(1, 4);
  $: offsets = wavesRange.map(i => {
    if (i == wavesRange.length) return 0;
    const scrolled = (h - y) / h;
    const multiplier = i + 2;
    let offset = y < h ? (1 - scrolled) / multiplier : 0;
    return offset;
  });
</script>

<svelte:window bind:scrollY={y} />

<div>
  {#each wavesRange as i}
    <img class="wave" src="/cta/wave{i}.svg" alt="" style="transform: translateY({offsets[i - 1] * 100}%)" />
  {/each}
</div>

<style>
  div {
    z-index: 0;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-main);
  }
  img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media (max-width: 600px) {
    /* TODO: scale with browser width */
    img {
      left: -100%;
      width: 200%;
    }
  }
</style>

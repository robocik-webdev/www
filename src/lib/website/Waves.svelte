<script>
  import { range } from '$lib/utils';

  export let h; // cta section height
  let y; // window scroll

  const wavesRange = range(1, 4);
  $: offsets = wavesRange.map((i) => {
    if (i == wavesRange.length) return 0;
    const scrolled = (h - y) / h;
    const multiplier = i + 2;
    let offset = y < h ? (1 - scrolled) / multiplier : 0;
    return offset;
  });
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

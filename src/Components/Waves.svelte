<script>
  import { range } from '../utils.js';
  let wavesRange = range(0, 12);
  let waves = [];
  $: {
    // animating the waves
    waves.forEach((wave, i) => {
      let offset = 5 + i * 5;
      if (offset > 50) offset = 50; // stay above the header
      wave.animate(
        { transform: ['translateY(0)', `translateY(-${offset}px)`] },
        {
          direction: 'alternate',
          duration: i * 500,
          // delay: i * 400,
          iterations: Infinity,
          easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
        }
      );
    });
  }
</script>

<div>
  {#each wavesRange as i}
    <img
      src="/img/wavesbg/{i}.svg"
      alt="decorative background wave"
      bind:this={waves[i]}
    />
  {/each}
</div>

<style>
  div {
    z-index: -1;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-main);
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: 600px) {
    img {
      left: -100%;
      width: 200%;
    }
  }
</style>

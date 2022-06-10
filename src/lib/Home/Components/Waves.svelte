<script>
  import anime from 'animejs';
  import { range } from '$lib/utils.js';

  const wavesRange = range(1, 10);
  let waves = [];
  $: {
    waves.forEach((wave, i) => {
      let offset = 5 + i * 5;
      if (offset > 50) offset = 50;
      anime({
        targets: wave,
        translateY: -offset,
        direction: 'alternate',
        loop: true,
        duration: i * 500,
        easing: 'cubicBezier(.45, 0, .55, 1)'
      });
    });
  }
</script>

<div>
  {#each wavesRange as i}
    <img class="wave" src="/img/wavesbg/{i}.svg" alt="" bind:this={waves[i]} />
  {/each}
</div>

<style>
  div {
    z-index: 0;
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
    opacity: 0.5;
  }
  @media (max-width: 600px) {
    img {
      left: -100%;
      width: 200%;
    }
  }
</style>

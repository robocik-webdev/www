<script>
  import { spring } from 'svelte/motion';

  let y;
  let w;
  let change = spring(0);
  $: $change = y;
  $: translateX = w > 600 ? -$change / 5 : 0;
  $: translateY = w > 600 ? $change / 1.5 : 0;
  $: rotation = w > 600 ? -$change / 15 + 55 : -$change / 20 + 55;
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={w} />

<div>
  <img
    style="transform: translate({translateX}px, {translateY}px) rotate({rotation}deg)"
    src="/img/bluenemo/bluenemo.webp"
    alt="robocik vehicle"
  />
</div>

<style>
  div {
    z-index: 3;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }
  img {
    position: absolute;
    bottom: -15%;
    right: -10%;
    width: 110%;
  }

  @media (min-width: 600px) {
    img {
      bottom: -12%;
      right: 3%;
      width: 50%;
    }
  }
</style>

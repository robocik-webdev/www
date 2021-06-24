<script>
  import { spring } from 'svelte/motion';

  let y;
  let w;
  let change = spring(0);
  $: $change = y;
  $: translation = w > 600 ? $change / 2 : $change / 4;
  $: rotation = w > 600 ? -$change / 15 : -$change / 20;
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={w} />

<div>
  <img
    style="transform: translateY({translation}px) rotate({rotation}deg)"
    src="/img/rov5/rov_underwater_compressed.png"
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
    bottom: -10%;
    right: -25%;
    width: 125%;
  }

  @media (min-width: 600px) {
    img {
      bottom: -35%;
      right: -5%;
      width: 75%;
    }
  }
</style>

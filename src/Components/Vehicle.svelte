<script>
  import { spring } from 'svelte/motion';
  import { scrollY } from '../utils.js';

  let offset = spring(0);
  // $: {
  //   $offset = $scrollY;
  // }
</script>

<div>
  <img
    style="transform: translateY({$offset / 4}px) rotate({-$offset / 20}deg)"
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
</style>

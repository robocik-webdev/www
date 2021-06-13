<script>
  import { scrollY } from './utils.js';
  import Header from './Components/Header.svelte';
  import CTA from './Sections/CTA.svelte';
  import Vision from './Sections/Vision.svelte';
  import Vehicle from './Components/Vehicle.svelte';
</script>

<svelte:window bind:scrollY={$scrollY} />

<Header />
<main>
  <div>
    <Vehicle />
    <CTA />
    <Vision />
  </div>
</main>

<style>
  div {
    overflow: hidden;
    position: relative;
  }
</style>

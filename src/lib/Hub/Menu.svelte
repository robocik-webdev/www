<script>
  import { fade, fly } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';
  import Box from '$lib/Hub/Box.svelte';

  export let visible;
</script>

{#if visible}
  <div class="bg" transition:fade={{ duration: 300 }} on:click={() => (visible = false)} />
  <div class="wrapper" transition:fly={{ x: -50, duration: 300, easing: circInOut }}>
    <Box fill><slot /></Box>
  </div>
{/if}

<style>
  .bg,
  .wrapper {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .bg {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    position: fixed;
    border-radius: 0 1rem 1rem 0;
    padding: 0.5rem;
    width: 80%;
    height: 100%;
  }
</style>

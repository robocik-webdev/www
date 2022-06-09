<script>
  import { fade, fly } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';
  import Box from '$lib/Hub/Box.svelte';

  export let visible;
</script>

{#if visible}
  <div class="bg" transition:fade={{ duration: 300 }} on:click={() => (visible = false)} />
  <div class="wrapper" transition:fly={{ y: -50, duration: 300, easing: circInOut }}>
    <Box><slot /></Box>
  </div>
{/if}

<style>
  .bg {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .bg,
  .wrapper {
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .wrapper {
    left: 50%;
    padding: 1rem;
    max-width: var(--w);
    transform: translateX(-50%);
  }
</style>

<script>
  import { fly } from 'svelte/transition';

  import { edited } from '$lib/Hub/stores';
  import Button from '$lib/Hub/Button.svelte';

  export let onclick;
</script>

{#if !$edited}
  <div class="wrapper" transition:fly={{ y: 50, duration: 300 }}>
    <Button square action {onclick} icon="add" />
  </div>
{/if}

<style>
  .wrapper {
    position: fixed;
    bottom: calc(var(--h-bar) + 1.5rem);
    left: 50%;
    /* width: calc(100% - 1rem);
    max-width: calc(var(--w) - 2rem);
    margin: auto; */
    transform: translateX(-50%);
  }
</style>

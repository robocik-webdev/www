<script>
  export let dark = false;
  export let clear = false;

  export let href = null;
  export let target = null;
</script>

{#if href}
  <a class="button" class:dark class:clear on:click {href} {target}>
    <span><slot /></span>
  </a>
{:else}
  <button class="button" class:dark class:clear on:click>
    <span><slot /></span>
  </button>
{/if}

<style>
  .button {
    border: solid 4px var(--c-complement);
    border-radius: 2rem;
    padding: 0.4rem 1rem;
    background-color: var(--c-complement);
    text-decoration: none;
  }
  .button span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform var(--t-fast);
    font-weight: bold;
    color: var(--c-white);
  }
  .button:hover span {
    transform: scale(1.1);
  }

  .button.dark {
    border-color: var(--c-main);
    background-color: var(--c-main);
  }
  .button.clear {
    background-color: rgba(0, 0, 0, 0);
  }
  .button.clear span {
    color: var(--c-complement);
  }
  .button.clear.dark span {
    color: var(--c-main);
  }
</style>

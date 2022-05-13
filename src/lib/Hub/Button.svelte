<script>
  export let square = false;
  export let action = false;
  export let transparent = false;
  export let edited = false;
  export let disabled = false;

  export let icon = null;

  export let onclick;
</script>

<button
  on:click|preventDefault={() => (disabled ? {} : onclick())}
  class="glass"
  class:square
  class:action
  class:transparent
  class:edited
  class:disabled
>
  {#if icon}<span class="material-symbols-outlined" class:margin={$$slots.default}>{icon}</span>{/if}
  {#if $$slots.default}<slot />{/if}
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    border: none;
    width: 100%;
    height: var(--h);
    color: #fff;
    font-size: 1.1rem;
  }
  .square {
    aspect-ratio: 1 / 1;
  }
  .action {
    background-color: var(--c-action);
  }
  .transparent {
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: none;
    box-shadow: none;
  }
  .edited {
    outline: solid 0.15rem var(--c-action);
    outline-offset: 0.25rem;
  }
  .disabled {
    background-color: var(--c-input);
  }

  span.margin {
    margin-right: 0.5rem;
  }
</style>

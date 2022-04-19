<script>
  export let square = false;
  export let action = false;
  export let transparent = false;

  export let icon = null;
  export let alt = null;
  export let onclick;
</script>

<button on:click|preventDefault={onclick} class="glass" class:square class:action class:transparent>
  {#if icon}<img src="/icon{icon}" {alt} class:margin={$$slots.default} />{/if}
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
    height: 3rem;
    color: #fff;
    font-size: 1.1rem;
  }
  .square {
    width: 3rem;
  }
  .action {
    background-color: var(--color-complement);
  }
  .transparent {
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: none;
    box-shadow: none;
  }

  img {
    height: 60%;
    width: auto;
  }
  img.margin {
    margin-right: 0.5rem;
  }
</style>

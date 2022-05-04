<script>
  export let src = null;
  export let alt = null;

  export let icon = null;

  export let onclick;
</script>

<div role="button" class="button" on:click={onclick} class:icon>
  {#if src}
    <img {src} {alt} />
  {:else if icon}
    <span class="material-symbols-outlined">{icon}</span>
  {:else if $$slots.default}
    <slot />
  {/if}
</div>

<style>
  .material-symbols-outlined {
    color: #000;
  }

  .button {
    user-select: none;
    cursor: pointer;
    display: grid;
    place-items: center;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    overflow: hidden;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
  }
  .button.icon {
    padding: 0.25rem;
  }
</style>

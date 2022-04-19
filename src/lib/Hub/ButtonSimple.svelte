<script>
  export let src = null;
  export let icon = null;

  export let alt;
  export let onclick;
</script>

<div class="button" on:click={onclick} class:icon>
  {#if src || icon}<img src={src ? src : `/icon${icon}`} {alt} />{/if}
</div>

<style>
  .button {
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

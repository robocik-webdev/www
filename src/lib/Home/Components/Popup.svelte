<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div class="bg" transition:fade={{ duration: 400 }}>
  <div class="wrapper">
    <div class="content" id="docs-content">
      <slot />
    </div>
  </div>
</div>

<style>
  .bg {
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .wrapper {
    z-index: 10001;
    overflow: hidden;
    position: relative;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    background-color: var(--c-accent-light);
  }
  .content {
    overflow-y: scroll;
    height: 100%;
  }
</style>

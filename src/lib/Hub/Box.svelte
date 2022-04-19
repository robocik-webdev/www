<script>
  export let fill = false;
</script>

<div class="glass wrapper" class:fill>
  <slot />
</div>

<style>
  * {
    color: #fff;
  }
  .wrapper {
    padding: 1rem;
    border-radius: 1rem;
  }
  .fill {
    height: 100%;
  }
</style>

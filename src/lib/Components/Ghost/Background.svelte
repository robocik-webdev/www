<script>
  export let color;
</script>

<div style="background: linear-gradient(165deg, #162143 0%, {color} 90%);">
  <slot />
</div>

<style>
  div {
    min-height: 100vh;
  }
</style>

<script>
  export let img;
  export let title;
  export let content;
</script>

<div class="post">
  {#if img}<img src={img} alt="" />{/if}
  <br>
  <h3 class="title">{title}</h3>
  <div class="ghost">
    {@html content}
  </div>
</div>

<style>
  .post {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 20vh 20px 20px 20px;
    max-width: var(--w-content);
  }
</style>

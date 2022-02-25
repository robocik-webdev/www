<script>
  export let img;
  export let title;
  export let content;
</script>

<div class="post">
  {#if img}<img src={img} alt="" />{/if}
  <h3 class="title">{title}</h3>
  <div class="content content--post">
    {@html content}
  </div>
</div>

<style>
  .post {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 20vh 20px 20px 20px;
    max-width: 600px;
  }
  .post :global(*) {
    color: var(--color-light);
  }
</style>

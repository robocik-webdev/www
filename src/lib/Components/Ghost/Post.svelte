<script>
  export let img;
  export let title;
  export let content;
</script>

<div class="post">
  {#if img}<img src={img} alt="" />{/if}
  <br />
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
    padding: calc(var(--header-h) + var(--header-margin) * 3) 1rem 4rem 1rem;
    max-width: var(--content-w);
    color: var(--color-light);
  }
  .title {
    font-size: clamp(2rem, 6vw, 3rem);
    margin: 2rem 0 1rem 0;
    font-weight: 900;
  }
</style>

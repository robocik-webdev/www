<script>
  import { fly } from 'svelte/transition';
  export let img;
  export let title;
  export let content;
</script>

<div class="post" in:fly={{ y: 200, duration: 400 }}>
  {#if img}<img src={img} alt="" />{/if}
  <h3 class="title">{title}</h3>
  <div class="ghost">
    {@html content}
  </div>
</div>

<style>
  .post {
    --top: calc(var(--header-h) + var(--header-margin) * 2);
    --bottom: 6rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: var(--top) 0 var(--bottom) 0;
    padding: 0 1rem;
    max-width: var(--content-w);
    color: var(--color-light);
  }
  img {
    --bottom: -4rem;
    margin-bottom: var(--bottom);
  }
  .title {
    --top: 8rem;
    --bottom: 1rem;
    font-size: clamp(2rem, 6vw, 3rem);
    margin: var(--top) 0 var(--bottom) 0;
    font-weight: 900;
  }
</style>

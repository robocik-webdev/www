<script>
  import { arrow } from '$lib/Ghost/header.js';
  export let slug;
  export let img;
  export let title;
  export let excerpt;
  export let endpoint;

  function truncate(string, limit) {
    return string.length > limit ? string.substring(0, limit) + '...' : string;
  }

  let scroll;
  function saveScroll() {
    sessionStorage.setItem('scroll', scroll);
  }
</script>

<svelte:window bind:scrollY={scroll} />

<a
  sveltekit:prefetch
  class="box wrapper"
  href="{endpoint}/{slug}"
  on:click={saveScroll}
>
  {#if img}<img src={img} alt="" />{/if}
  <div class="text" class:img>
    <h4 class="title">{title}</h4>
    {#if excerpt != '#'}
      <p class="content">{@html truncate(excerpt, 100)}</p>
    {/if}
  </div>
</a>

<style>
  .wrapper {
    display: flex;
    align-items: flex-start;
    border-radius: 10px;
    padding: 1rem;
    text-decoration: none;
  }

  img {
    --max: 10ch;
    --shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
    max-width: var(--max);
    box-shadow: var(--shadow);
  }

  .text {
    color: var(--color-light);
    margin: 0;
    padding: 0;
  }
  .text.img {
    padding-left: 1rem;
  }

  @media (min-width: 60ch) {
    .wrapper {
      flex-direction: column;
    }
    img {
      --max: 100%;
    }
    .text.img {
      padding-left: 0;
      padding-top: 1.5rem;
    }
  }
</style>

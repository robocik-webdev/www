<script>
  export let slug;
  export let img;
  export let title;
  export let excerpt;
  export let endpoint;

  function truncate(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + '...';
    }
    return string;
  }

  let scroll;
  function saveScroll() {
    sessionStorage.setItem('scroll', scroll);
  }
</script>

<svelte:window bind:scrollY={scroll} />

<a
  sveltekit:prefetch
  class="wrapper"
  href="{endpoint}/{slug}"
  on:click={saveScroll}
>
  {#if img}<img src={img} alt="" />{/if}
  <div class="text">
    <h4 class="title">{title}</h4>
    <p class="content">{@html truncate(excerpt, 100)}</p>
  </div>
</a>

<style>
  .wrapper {
    display: flex;
    align-items: flex-start;
    border-radius: 10px;
    padding: 1rem;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .wrapper:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  img {
    --max: 10ch;
    aspect-ratio: 1/1;
    object-fit: fill;
    border-radius: 10px;
    padding-right: 1rem;
    max-width: var(--max);
    box-shadow: 0 0 0.25rem rgb(23, 23, 23);
  }

  .text {
    color: var(--color-light);
  }

  @media (min-width: 60ch) {
    .wrapper {
      flex-direction: column;
    }
    img {
      --max: 100%;
      padding-right: 0;
    }
    .text {
      padding-top: 1rem;
    }
  }
</style>

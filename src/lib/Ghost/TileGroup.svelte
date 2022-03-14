<script>
  import Tile from '$lib/Ghost/Tile.svelte';
  export let title;
  export let posts;
  export let path;
</script>

<div class="wrapper">
  <h2 class="title">{title}</h2>
  <div class="tiles">
    {#each posts as post}
      <Tile {...post} {path} />
    {/each}
  </div>
</div>

<style>
  .title {
    margin: 2rem 0 1rem 0;
    color: var(--color-light);
  }
  .tiles {
    --gap: 1rem;
    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: 1fr;
  }
  @media (min-width: 60ch) {
    .tiles {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

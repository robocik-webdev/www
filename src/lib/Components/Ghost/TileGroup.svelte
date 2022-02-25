<script>
  import Tile from '$lib/Components/Ghost/Tile.svelte';
  export let title;
  export let posts;
  export let endpoint;
</script>

<div class="wrapper">
  <h2 class="title">{title}</h2>
  <div class="tiles">
    {#each posts as post}
      <Tile {...post} {endpoint} />
    {/each}
  </div>
</div>

<style>
  .tiles {
    display: grid;
    row-gap: 20px;
    column-gap: 20px;
    grid-template-columns: 1fr;
  }
  @media (min-width: 600px) {
    .tiles {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .title {
    color: var(--color-light);
  }
</style>

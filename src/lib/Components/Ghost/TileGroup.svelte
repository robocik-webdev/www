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
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    display: flex;
  }
  @media (min-width: 600px) {
  }
  .title {
    color: var(--color-light);
  }
</style>

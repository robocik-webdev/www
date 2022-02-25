<script>
  import Post from '$lib/Components/Ghost/Post.svelte';
  import TileGroup from '$lib/Components/Ghost/TileGroup.svelte';
  export let page;
  export let tileGroups;
</script>

<Post {...page} />

<div class="wrapper">
  {#each tileGroups as tileGroup}
    <TileGroup {...tileGroup} />
  {/each}
</div>

<style>
  .wrapper {
    max-width: 600px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

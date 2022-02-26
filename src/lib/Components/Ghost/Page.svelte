<script>
  import Post from '$lib/Components/Ghost/Post.svelte';
  import TileGroup from '$lib/Components/Ghost/TileGroup.svelte';
  import { onMount } from 'svelte';
  import { scrollTo } from 'svelte-scrollto';
  export let page;
  export let tileGroups;

  onMount(() => {
    const scroll = sessionStorage.getItem('scroll');
    if (scroll) scrollTo({ y: scroll, duration: 0 });
  });
</script>

<Post {...page} />

<div class="wrapper">
  {#each tileGroups as tileGroup}
    <TileGroup {...tileGroup} />
  {/each}
</div>

<style>
  .wrapper {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 0 10vh 0;
    max-width: var(--content-w);
  }
</style>

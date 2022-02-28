<script>
  import Post from '$lib/Ghost/Post.svelte';
  import TileGroup from '$lib/Ghost/TileGroup.svelte';
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

<div class="tiles">
  {#each tileGroups as tileGroup}
    <TileGroup {...tileGroup} />
  {/each}
</div>

<style>
  .tiles {
    --top: -2rem;
    --bottom: 6rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: var(--top) 0 var(--bottom) 0;
    padding: 0 1rem;
    max-width: var(--content-w);
  }
</style>

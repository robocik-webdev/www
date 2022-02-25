<script>
  import { api } from '$lib/API.js';
  import Post from '$lib/Components/Post.svelte';
  import Tile from '$lib/Components/Tile.svelte';

  const pagePromise = api.pages.read({
    slug: 'hackathon-index',
    fields: ['title', 'html']
  });
  const postsPromise = api.posts.browse({
    filter: 'tag:hackathon',
    include: ['tags']
  });
</script>

<div class="wrapper">
  {#await pagePromise then { title, html }}
    <Post {title} content={html} />
  {/await}

  <div class="wall">
    {#await postsPromise then posts}
      {#each posts as { slug, feature_image, title, excerpt }}
        <Tile {slug} img={feature_image} {title} {excerpt} />
      {/each}
    {/await}
  </div>
</div>

<style>
  .wrapper {
    max-width: 600px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .wall {
    display: grid;
    row-gap: 20px;
    column-gap: 20px;
    margin: 20px;
    grid-template-columns: 1fr;
  }
  @media (min-width: 600px) {
    .wall {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

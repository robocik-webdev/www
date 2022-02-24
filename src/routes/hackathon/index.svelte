<script>
  import { api } from '$lib/API.js';
  import Tile from '$lib/Components/Tile.svelte';

  const pagePromise = api.pages.read({
    slug: 'hackathon-index',
    include: 'title,html'
  });
  export const postsPromise = api.posts.browse({
    filter: 'tag:hackathon',
    include: 'slug,title,html,custom_excerpt,excerpt,tags'
  });
</script>

<br />
<br />

<div class="wall">
    <section class="post">
      {#await pagePromise then { title, html }}
        <h3>{@html title}</h3>
        {@html html}
      {/await}
    </section>

  <Tile />
</div>

<style>
  h3 {
    color: var(--color-light);
  }
  .wall {
    overflow: hidden;
    position: relative;
    color: var(--color-light);
  }

  .post {
    color: var(--color-light);
    margin: var(--margin-mobile);
    display: block;
    width: 800px;
  }

  @media (min-width: 600px) {
    .wall {
      display: flex;
      align-content: center;
      flex-direction: column;
    }
  }
</style>

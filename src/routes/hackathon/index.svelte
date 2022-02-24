<script>
  import { api } from '$lib/API.js';

  const pagePromise = api.pages.read({
    slug: 'hackathon-index',
    include: 'title,html'
  });
  const postsPromise = api.posts.browse({
    filter: 'tag:hackathon',
    include: 'slug,title,html,custom_excerpt,excerpt,tags'
  });
</script>

{#await pagePromise then { title, html }}
  <h3>{title}</h3>
  {@html html}
{/await}

{#await postsPromise then posts}
  {#each posts as { title, html }}
    <div>
      <h5>{title}</h5>
      {@html html}
    </div>
  {/each}
{/await}

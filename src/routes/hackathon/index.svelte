<script>
  import { api } from '$lib/API.js';
  import { onMount } from 'svelte';

  const pagePromise = api.pages.read({
    slug: 'strona-glowna',
    filter: 'tag:hackathon-2'
  });
  const postsPromise = api.posts.browse({
    filter: 'tag:hackathon-2'
  });
</script>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
{#await pagePromise then page}
  <h3>{@html page.title}</h3>
  {@html page.html}
{/await}

<br />
<br />
<br />
<br />
<div>
  {#await postsPromise then posts}
    {#each posts as { title, html }}
      <h5>{@html title}</h5>
      {@html html}
    {/each}
  {/await}
</div>

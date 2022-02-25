<script context="module">
  import { getPage, getPosts } from '$lib/API.js';
  export async function load() {
    return {
      props: {
        page: await getPage('hackathon-index'),
        posts: await getPosts(['hackathon'])
      }
    };
  }
</script>

<script>
  import { arrow } from '$lib/Components/Ghost/header.js';
  import Page from '$lib/Components/Ghost/Page.svelte';
  export let page;
  export let posts;
  $arrow = null;
</script>

<Page
  {page}
  tileGroups={[
    {
      title: 'Artykuły',
      posts,
      endpoint: '/hackathon'
    }
  ]}
/>

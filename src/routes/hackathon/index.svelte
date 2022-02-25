<script context="module">
  import { getPage, getPosts } from '$lib/API.js';
  export async function load() {
    return {
      props: {
        page: await getPage('hackathon-index'),
        posts: await getPosts('hackathon')
      }
    };
  }
</script>

<script>
  import Page from '$lib/Components/Ghost/Page.svelte';
  export let page;
  export let posts;
</script>

<Page
  {page}
  tileGroups={[
    {
      title: 'Software',
      posts
    }
  ]}
/>

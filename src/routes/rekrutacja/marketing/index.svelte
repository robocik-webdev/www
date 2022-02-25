<script context="module">
  import { getPage, getPosts } from '$lib/API.js';
  export async function load() {
    return {
      props: {
        page: await getPage('rekrutacja-marketing'),
        marketing: await getPosts(['rekrutacja-marketing'])
      }
    };
  }
</script>

<script>
  import Page from '$lib/Components/Ghost/Page.svelte';
  export let page;
  export let marketing;
</script>

<Page
  {page}
  tileGroups={[
    {
      title: 'Stanowiska',
      posts: marketing,
      endpoint: '/rekrutacja/marketing'
    }
  ]}
/>

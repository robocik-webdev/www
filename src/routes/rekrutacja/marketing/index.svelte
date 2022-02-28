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
  import Meta from '$lib/Ghost/Meta.svelte';
  import Page from '$lib/Ghost/Page.svelte';
  export let page;
  export let marketing;
</script>

<Meta subtitle="Rekrutacja" data={page} />

<Page
  {page}
  tileGroups={[
    {
      title: 'Stanowiska',
      posts: marketing,
      path: '/rekrutacja/marketing'
    }
  ]}
/>

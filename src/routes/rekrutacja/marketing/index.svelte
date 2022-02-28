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
  import { arrow } from '$lib/Ghost/header.js';
  import Page from '$lib/Ghost/Page.svelte';

  export let page;
  export let marketing;

  $arrow = '/rekrutacja';
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

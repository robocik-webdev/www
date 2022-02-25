<script context="module">
  import { getPage, getPosts } from '$lib/API.js';
  export async function load() {
    return {
      props: {
        page: await getPage('hackathon-index'),
        marketing: await getPosts(['rekrutacja-marketing']),
        techniczni: await getPosts([
          'rekrutacja-techniczni-software',
          'rekrutacja-techniczni-elektronika',
          'rekrutacja-techniczni-konstrukcja'
        ])
      }
    };
  }
</script>

<script>
  import Page from '$lib/Components/Ghost/Page.svelte';
  export let page;
  export let marketing;
  export let techniczni;
</script>

<Page
  {page}
  tileGroups={[
    {
      title: 'Marketing',
      posts: marketing
    },
    {
      title: 'Techniczni',
      posts: techniczni
    }
  ]}
/>

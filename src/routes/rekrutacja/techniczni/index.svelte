<script context="module">
  import { getPage, getPosts } from '$lib/API.js';
  export async function load() {
    return {
      props: {
        page: await getPage('rekrutacja-techniczni'),
        software: await getPosts(['rekrutacja-techniczni-software']),
        elektronika: await getPosts(['rekrutacja-techniczni-elektronika']),
        konstrukcja: await getPosts(['rekrutacja-techniczni-konstrukcja'])
      }
    };
  }
</script>

<script>
  import { arrow } from '$lib/Ghost/header.js';
  import Page from '$lib/Ghost/Page.svelte';

  export let page;
  export let software;
  export let elektronika;
  export let konstrukcja;

  $arrow = '/rekrutacja';
</script>

<Page
  {page}
  tileGroups={[
    {
      title: 'Software',
      posts: software,
      endpoint: '/rekrutacja/techniczni'
    },
    {
      title: 'Elektronika',
      posts: elektronika,
      endpoint: '/rekrutacja/techniczni'
    },
    {
      title: 'Konstrukcja',
      posts: konstrukcja,
      endpoint: '/rekrutacja/techniczni'
    }
  ]}
/>

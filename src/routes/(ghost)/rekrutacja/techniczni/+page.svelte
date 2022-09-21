<script>
  import Meta from '$lib/ghost/Meta.svelte';
  import Page from '$lib/ghost/Page.svelte';

  export let data;
  const { page, software, elektronika, konstrukcja } = data;
</script>

<Meta subtitle="Rekrutacja" data={page} />

<Page
  {page}
  tileGroups={[
    {
      title: 'Software',
      posts: software,
      path: '/rekrutacja/techniczni'
    },
    {
      title: 'Elektronika',
      posts: elektronika,
      path: '/rekrutacja/techniczni'
    },
    {
      title: 'Konstrukcja',
      posts: konstrukcja,
      path: '/rekrutacja/techniczni'
    }
  ]}
/>

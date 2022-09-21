<script>
  import Meta from '$lib/ghost/Meta.svelte';
  import Page from '$lib/ghost/Page.svelte';

  export let data;
  const { page, marketing } = data;
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

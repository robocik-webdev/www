<script>
  import Nav from '$lib/Hub/Nav.svelte';
</script>

<Nav
  items={[
    {
      href: '/apps/votum',
      icon: 'how_to_vote',
      title: 'Głosowanie'
    },
    {
      href: '/apps/votum/results',
      icon: 'leaderboard',
      title: 'Wyniki'
    }
  ]}
/>

<slot />

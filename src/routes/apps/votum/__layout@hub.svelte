<script>
  import Nav from '$lib/Hub/Nav.svelte';
</script>

<Nav
  items={[
    {
      href: '/apps/votum',
      icon: '/hub/vote.svg',
      title: 'Głosowanie'
    },
    {
      href: '/apps/votum/results',
      icon: '/hub/poll.svg',
      title: 'Wyniki'
    }
  ]}
/>

<slot />

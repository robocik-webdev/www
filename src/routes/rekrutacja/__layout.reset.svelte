<script>
  import '$lib/global-ghost.css';
  import Header from '$lib/Components/Ghost/Header.svelte';
  import Background from '$lib/Components/Ghost/Background.svelte';
</script>

<Header
  nav={[
    {
      title: 'Marketing',
      endpoint: '/rekrutacja/marketing'
    },
    {
      title: 'Techniczni',
      endpoint: '/rekrutacja/techniczni'
    }
  ]}
/>
<Background color={'#206297'}>
  <slot />
</Background>

<script>
  import Header from '$lib/ghost/Header.svelte';
  import Background from '$lib/ghost/Background.svelte';
</script>

<Header
  nav={[
    {
      home: true,
      title: 'Rekrutacja',
      path: '/rekrutacja'
    },
    {
      title: 'Marketing',
      path: '/rekrutacja/marketing',
      icon: '/rekrutacja/marketing.svg'
    },
    {
      title: 'Techniczni',
      path: '/rekrutacja/techniczni',
      icon: '/rekrutacja/techniczni.svg'
    }
  ]}
/>

<Background color={'#206297'} />
<slot />

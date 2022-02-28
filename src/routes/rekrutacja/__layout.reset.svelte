<script>
  import Header from '$lib/Ghost/Header.svelte';
  import Background from '$lib/Ghost/Background.svelte';
</script>

<Header
  nav={[
    {
      hidden: true,
      home: true,
      title: 'Rekrutacja',
      endpoint: '/rekrutacja'
    },
    {
      title: 'Marketing',
      icon: '/rekrutacja/marketing.svg',
      endpoint: '/rekrutacja/marketing'
    },
    {
      title: 'Techniczni',
      icon: '/rekrutacja/techniczni.svg',
      endpoint: '/rekrutacja/techniczni'
    }
  ]}
/>

<Background color={'#206297'} />
<slot />

<script>
  import Header from '$lib/ghost/Header.svelte';
  import Background from '$lib/ghost/Background.svelte';
</script>

<Header
  nav={[
    {
      home: true,
      title: 'Hackathon',
      path: '/hackathon'
    }
  ]}
/>

<Background color={'#4b277a'} />
<slot />

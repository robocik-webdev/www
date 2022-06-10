<script>
  import Header from '$lib/Ghost/Header.svelte';
  import Background from '$lib/Ghost/Background.svelte';
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

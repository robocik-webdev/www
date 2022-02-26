<script>
  import '$lib/global-ghost.css';
  import Header from '$lib/Components/Ghost/Header.svelte';
  import Background from '$lib/Components/Ghost/Background.svelte';
</script>

<Header />

<Background color={'#4b277a'} />
<slot />

<script>
  import { docsOpened, partnersOpened, modalOpened } from '$lib/Home/stores.js';
  import Header from '$lib/Home/Components/Header.svelte';
  import Partners from '$lib/Home/Components/Partners.svelte';

  $: $modalOpened = $docsOpened || $partnersOpened;
</script>

<Header />

{#if $partnersOpened}
  <Partners />
{/if}

<slot />

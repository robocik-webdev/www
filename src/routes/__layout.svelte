<script>
  import { docsOpened, partnersOpened, modalOpened } from '$lib/Home/stores.js';
  import Header from '$lib/Home/Components/Header.svelte';
  import Partners from '$lib/Home/Components/Partners.svelte';
  import Docs from '$lib/Home/Components/Docs.svelte';

  $: $modalOpened = $docsOpened || $partnersOpened;
</script>

<Header />

{#if $docsOpened}
  <Docs />
{/if}

{#if $partnersOpened}
  <Partners />
{/if}

<slot />

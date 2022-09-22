<script>
  import '$lib/styles/website.css';

  import { docsOpened, partnersOpened, modalOpened } from '$lib/website/stores';

  import Header from '$lib/website/Header.svelte';
  import Partners from '$lib/website/Partners.svelte';
  import Docs from '$lib/website/Docs.svelte';

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

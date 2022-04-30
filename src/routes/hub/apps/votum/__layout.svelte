<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  import Header from '$lib/Hub/Header.svelte';
  import Nav from '$lib/Hub/Nav.svelte';
  import Button from '$lib/Hub/Button.svelte';

  $: pathname = $page.url.pathname;

  const items = [
    {
      href: '/hub/apps/votum/questions',
      icon: 'how_to_vote',
      title: 'Pytania'
    },
    {
      href: '/hub/apps/votum/users',
      icon: 'group',
      title: 'Użytkownicy'
    }
  ];

  $: back = !Boolean(items.find(item => item.href == pathname));

  function handleEmail() {}

  function handleCSV() {}
</script>

<Header title="Votum" subtitle="Hub" {back}>
  <Button action icon="exit_to_app" onclick={() => goto('/apps/votum')}>Otwórz apkę</Button><br />
  <Button transparent icon="email" onclick={handleEmail}>Wyślij email</Button><br />
  <Button transparent icon="table" onclick={handleCSV}>Wgraj CSV</Button><br />
</Header>

<Nav {items} />

<div class="wrapper">
  <slot />
</div>

<style>
  .wrapper {
    margin: calc(var(--h-bar) + 1rem) 0;
  }
</style>

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
      icon: '/hub/vote.svg',
      title: 'Pytania'
    },
    {
      href: '/hub/apps/votum/users',
      icon: '/hub/users.svg',
      title: 'Użytkownicy'
    }
  ];

  $: back = !Boolean(items.find(item => item.href == pathname));

  function handleEmail() {}

  function handleCSV() {}
</script>

<Header title="Votum" subtitle="Hub" {back}>
  <Button action icon="/hub/app.svg" alt="open app" onclick={() => goto('/apps/votum')}>Otwórz apkę</Button><br />
  <Button transparent icon="/hub/email.svg" alt="send email" onclick={handleEmail}>Wyślij email</Button><br />
  <Button transparent icon="/hub/csv.svg" alt="upload csv" onclick={handleCSV}>Wgraj CSV</Button><br />
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

<script>
  import { page } from '$app/stores';
  import { goto, beforeNavigate } from '$app/navigation';
  import { onMount, onDestroy } from 'svelte';

  import { socket, readme, connect, disconnect } from '$lib/Hub/api';
  import { sanitizePathname } from '$lib/Hub/utils';
  import { me, edited } from '$lib/Hub/stores';
  import Modal from '$lib/Hub/Modal.svelte';

  function gotoLogin(token) {
    const origin = sanitizePathname($page.url.pathname);
    let path = `${loginPathname}?o=${origin}`;
    if (token) path += `&t=${token}`;
    goto(path, { replaceState: false });
  }

  const loginPathname = '/hub/login';
  let onLoginPage = false;

  let loader = '.';

  onMount(async () => {
    onLoginPage = $page.url.pathname == loginPathname;
    if (!onLoginPage) {
      const token = $page.url.searchParams.get('t');
      if (token) {
        gotoLogin(token);
      } else {
        try {
          // $me could be set by /login already
          if (!$me) $me = await readme();
          connect();
        } catch (err) {
          gotoLogin();
        }
      }
    }
    // loader
    const interval = setInterval(() => (loader == '........' ? (loader = '.') : (loader += '.')), 300);
    return () => clearInterval(interval);
  });

  $: if ($socket) onDestroy(disconnect);

  let navigationCanceled = false;
  beforeNavigate(navigation => {
    if ($edited) {
      navigation.cancel();
      navigationCanceled = true;
    }
  });
</script>

<svelte:head>
  <style>
    body {
      background-color: var(--c-main);
    }
  </style>
</svelte:head>

<Modal bind:visible={navigationCanceled}>
  <h1>Masz niezapisane zmiany!</h1>
  <p>Stop right there, criminal scum!<br />Nim uciekniesz - zapisz lub anuluj swoje zmiany.</p>
</Modal>

{#if onLoginPage || $me}
  <main>
    <slot />
  </main>
{:else}
  <div class="loading-info">Serwer się<br />rozgrzewa<br />&nbsp;{@html loader}</div>
{/if}

<style>
  :root {
    --w: 50ch;
    --h-bar: 4rem;
    --h: 3.5rem;
    --t: cubic-bezier(0.85, 0, 0.15, 1);
    --c-main: var(--color-main);
    --c-second: hsl(223, 49%, 32%);
    --c-action: var(--color-complement);
    --c-input: rgb(13, 20, 38);
    --c-red: rgb(255, 80, 80);
  }

  main {
    margin: auto;
    padding: 1rem;
    max-width: var(--w);
  }

  .loading-info {
    display: grid;
    place-items: center;
    height: 100vh;
    color: #fff;
    text-align: center;
  }
</style>

<script context="module">
  const loginPathname = '/hub/login';

  function sanitizePathname(pathname) {
    // from '/path/name' to 'path-name'
    return pathname.replaceAll('/', '-').replace('-', '');
  }

  export async function load({ url }) {
    const origin = sanitizePathname(url.pathname);
    const loginPage = origin == sanitizePathname(loginPathname);
    const token = url.searchParams.get('t');
    if (!loginPage && token)
      return {
        status: 301,
        redirect: `${loginPathname}?o=${origin}&t=${token}`
      };
    return { props: { origin, loginPage, token } };
  }
</script>

<script>
  import { goto } from '$app/navigation';
  import { onDestroy, onMount } from 'svelte';
  import { socket, connect, saveUser, readUser } from '$lib/Hub/api';

  export let origin;
  export let loginPage;

  export let token;

  function gotoLogin() {
    if (!loginPage) goto(`${loginPathname}?o=${origin}`);
  }

  onMount(async () => {
    if (!token) {
      const user = readUser(window);
      if (user) {
        connect(user.refreshToken);
        $socket.on('connect_error', gotoLogin);
        saveUser(window, user);
      } else gotoLogin();
    }
  });

  onDestroy(() => $socket?.disconnect());
</script>

<svelte:head>
  <style>
    body {
      background-color: var(--c-main);
    }
  </style>
</svelte:head>

<main>
  <slot />
</main>

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
</style>

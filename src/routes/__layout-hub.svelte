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
  import { io } from 'socket.io-client';
  import { api, socket, saveUser, readUser } from '$lib/Hub/api';

  export let origin;
  export let loginPage;

  export let token;

  function gotoLogin() {
    if (!loginPage) goto(`${loginPathname}?o=${origin}`);
  }

  onMount(() => {
    if (!token) {
      const user = readUser(window);
      if (user) {
        $socket = io(api, { auth: { token: user.refreshToken } });
        $socket.on('connect_error', gotoLogin);
        saveUser(window, user);
      } else gotoLogin();
    }
  });

  onDestroy(() => $socket?.disconnect());
</script>

<div class="bg" />

<main>
  <slot />
</main>

<style>
  :root {
    --w: 50ch;
    --h-bar: 4rem;
    --h: 3rem;
    --t: cubic-bezier(0.85, 0, 0.15, 1);
  }

  .bg {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-main);
    /* background: linear-gradient(165deg, rgb(22, 33, 67), rgb(32, 98, 151)); */
    /* background-color: rgb(32, 98, 151); */
  }

  main {
    margin: auto;
    padding: 1rem;
    max-width: var(--w);
  }
</style>

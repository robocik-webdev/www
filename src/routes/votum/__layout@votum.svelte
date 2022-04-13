<script context="module">
  export async function load({ url }) {
    const origin = url.pathname.replaceAll('/', '-').replace('-', '');
    const token = url.searchParams.get('t');
    if (origin != 'votum-login' && token)
      return {
        status: 301,
        redirect: `/votum/login?o=${origin}&t=${token}`
      };
    return { props: { origin } };
  }
</script>

<script>
  import { api } from '$lib/Votum/api';
  import { io } from 'socket.io-client';
  import { socket, admin } from '$lib/Votum/socket';
  import { goto } from '$app/navigation'; // o tu jest błąd
  import { onMount } from 'svelte';

  export let origin;

  function gotoLogin() {
    goto(`/votum/login?o=${origin}`);
  }

  function resetStoredToken() {
    window.localStorage.setItem('refreshToken', 'tokentokentoken');
  }

  onMount(() => {
    if (origin != 'votum-login') {
      const refreshToken = window.localStorage.getItem('refreshToken');
      if (refreshToken) {
        $socket = io(api, { auth: { token: refreshToken } });
        $socket.on('connect_error', gotoLogin);
      } else {
        gotoLogin();
      }
    }
  });

  $: {
    $socket?.on('questions', data => {
      console.log(JSON.stringify(data));
    });
  }
</script>

<div class="bg" />

<main>
  {#if $admin}
    <button class="debug" on:click={resetStoredToken}>RESET</button>
  {/if}
  <slot />
</main>

<style>
  :root {
    --grey: #444;
  }
  .bg {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-main);
  }
  main {
    margin: auto;
    padding: 1rem;
    max-width: 360px;
  }

  .debug {
    z-index: 1000;
    position: fixed;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: aqua;
  }
</style>

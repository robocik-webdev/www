<script context="module">
  import { api } from '$lib/Votum/api';

  async function login(token) {
    const res = await fetch(`${api}/auth/login?token=${token}`);
    const json = await res.json();
    if (!json.loggedIn) throw 'Nieprawidłowy token!';
    return {
      refreshToken: json.token,
      adminUser: json.admin
    };
  }

  export async function load({ url }) {
    const origin = url.searchParams.get('o') || 'votum';
    const token = url.searchParams.get('t');
    if (token) {
      try {
        const { refreshToken, adminUser } = await login(token);
        return { props: { origin, refreshToken, adminUser } };
      } catch (error) {
        return { props: { origin, error } };
      }
    }
    return { props: { origin } };
  }
</script>

<script>
  import { io } from 'socket.io-client';
  import { socket, admin } from '$lib/Votum/socket';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  export let origin;
  export let refreshToken;
  export let adminUser;

  let token;
  export let error;

  function gotoOrigin() {
    goto(`/${origin.replaceAll('-', '/')}`);
  }

  function connectSocket() {
    window.localStorage.setItem('refreshToken', refreshToken);
    $socket = io(api, { auth: { token: refreshToken } });
    $admin = adminUser;
    gotoOrigin();
  }

  async function handleLogin() {
    try {
      const res = await login(token);
      refreshToken = res.refreshToken;
      adminUser = res.adminUser;
      connectSocket();
    } catch (err) {
      error = err;
    }
  }

  onMount(() => {
    if (refreshToken) connectSocket();
  });
</script>

<div class="wrapper">
  <div class="content">
    <h2>Autoryzacja</h2>
    <input type="password" placeholder="Token" bind:value={token} />
    <button on:click={handleLogin}>Zaloguj</button>
    {#if error}{error}{/if}
  </div>
</div>

<style>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    /* background-color: rgba(255, 255, 255, 0.411); */
  }
  .content {
    --gap: 2rem;
    position: absolute;
    top: var(--gap);
    left: var(--gap);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4rem;
    width: calc(100% - (var(--gap) * 2));
    height: calc(100vh - (var(--gap) * 2));
    background-color: #fff;
  }
  .wrapper h2 {
    margin-bottom: 0.5rem;
  }
  .wrapper button {
    margin-top: 0.5rem;
  }
</style>

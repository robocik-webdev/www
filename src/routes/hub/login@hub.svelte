<script context="module">
  import { login } from '$lib/Hub/api';

  export async function load({ url }) {
    const origin = url.searchParams.get('o') || 'hub';
    const token = url.searchParams.get('t');
    if (token) {
      try {
        const user = await login(token);
        return { props: { origin, user } };
      } catch (error) {
        return { props: { origin, token, error } };
      }
    }
    return { props: { origin } };
  }
</script>

<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { io } from 'socket.io-client';
  import { api, socket, me, saveUser } from '$lib/Hub/api';

  import HeaderSimple from '$lib/Hub/HeaderSimple.svelte';
  import Input from '$lib/Hub/Input.svelte';
  import Button from '$lib/Hub/Button.svelte';

  export let origin;

  // logged in
  export let user;

  // failed to login
  export let token;
  export let error;

  function connectSocket() {
    $socket = io(api, { auth: { token: user.refreshToken } });
    error = 'dupa';
    saveUser(window, user);
    goto(`/${origin.replaceAll('-', '/')}`);
  }

  async function handleLogin() {
    try {
      user = await login(token);
      error = 'what';
      connectSocket();
      error = 'idk';
    } catch (err) {
      error = 'ugh';
      error = err;
    }
  }

  onMount(() => {
    // if logged in in load function (with token)
    if (user) connectSocket();
  });

  $: if ($me) goto(`/${origin.replaceAll('-', '/')}`);
</script>

<div class="header">
  <HeaderSimple title="Login" subtitle="Hub" center={true} />
</div>

<div class="wrapper">
  {#if error}<span class="error">{error}</span>{/if}
  <br /><br />
  <form>
    <Input type="text" bind:value={token}>Token</Input>
    <br /><br />
    <Button action onclick={handleLogin}>Zaloguj</Button>
  </form>
</div>

<style>
  .header {
    margin-top: 2rem;
  }

  .wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
  }

  .error {
    color: rgb(255, 102, 102);
  }
</style>

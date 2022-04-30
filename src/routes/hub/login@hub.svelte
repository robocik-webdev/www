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
  import { connect, me, saveUser } from '$lib/Hub/api';

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
    connect(user.refreshToken);
    saveUser(window, user);
    goto(`/${origin.replaceAll('-', '/')}`);
  }

  async function handleLogin() {
    try {
      user = await login(token);
      connectSocket();
    } catch (err) {
      error = err;
    }
  }

  onMount(() => {
    // if logged in in load function (with token)
    if (user) connectSocket();
  });

  $: if ($me) goto(`/${origin.replaceAll('-', '/')}`);
</script>

<div class="wrapper">
  <HeaderSimple title="Login" subtitle="Hub" center={true} />
  <form>
    <!-- <Input type="email" bind:value={email}>Email</Input> -->
    <!-- <Input type="password" bind:value={password}>Hasło</Input> -->
    <Input type="password" bind:value={token} {error}>Token</Input>
    {#if !error}<br />{/if}
    <br /><br />
    <Button action onclick={handleLogin}>Zaloguj</Button>
  </form>
</div>

<style>
  .wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 1rem;
    width: 35ch;
    transform: translate(-50%, -50%);
  }
  form {
    margin-top: 4rem;
  }
</style>

<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  import { login } from '$lib/Hub/api';
  import { me } from '$lib/Hub/stores';
  import HeaderSimple from '$lib/Hub/HeaderSimple.svelte';
  import Input from '$lib/Hub/Input.svelte';
  import Button from '$lib/Hub/Button.svelte';

  let origin;
  let token;

  let error;
  let waiting = false;

  function gotoOrigin(origin) {
    goto(`/${origin.replaceAll('-', '/')}`);
  }

  async function handleLogin() {
    try {
      waiting = true;
      $me = await login(token);
      waiting = false;
      gotoOrigin(origin);
    } catch (err) {
      error = err;
    }
  }

  onMount(async () => {
    origin = $page.url.searchParams.get('o');
    token = $page.url.searchParams.get('t');
    if (token) handleLogin(token);
  });
</script>

<div class="wrapper">
  <HeaderSimple title="Login" subtitle="Hub" center={true} />
  <form>
    <!-- <Input type="email" bind:value={email}>Email</Input> -->
    <!-- <Input type="password" bind:value={password}>Hasło</Input> -->
    <Input type="password" bind:value={token} {error}>Token</Input>
    {#if !error}<br />{/if}
    <br /><br />
    <Button action onclick={handleLogin}>
      {#if waiting}Łączenie...{:else}Zaloguj{/if}
    </Button>
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

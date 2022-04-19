<script>
  import { goto } from '$app/navigation';

  import { me } from '$lib/Hub/api';

  import User from '$lib/Hub/User.svelte';
  import UserButton from '$lib/Hub/UserButton.svelte';
  import ButtonSimple from '$lib/Hub/ButtonSimple.svelte';

  export let title;
  export let subtitle = null;

  export let center = false;

  let userVisible = false;
</script>

<header class:center>
  <div class="logo">
    <img src="/img/logo.svg" alt="logo" />
    <span class="title">
      {title}
      {#if subtitle}<small class="subtitle">{subtitle}</small>{/if}
    </span>
  </div>
  {#if $me}
    <div class="buttons">
      {#if $me?.admin}
        <ButtonSimple icon="/hub/admin.svg" alt="admin" onclick={() => goto('/hub/apps/votum')} />
      {/if}
      <UserButton bind:visible={userVisible} />
    </div>
  {/if}
</header>

{#if $me}
  <User bind:visible={userVisible} />
{/if}

<style>
  header {
    display: flex;
    justify-content: space-between;
    height: 3.5rem;
  }
  header.center {
    justify-content: center;
  }

  .logo {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .buttons {
    display: grid;
    grid-template-columns: 2.25rem 2.25rem;
    place-items: center;
    column-gap: 1rem;
    padding: 0.5rem 0;
    height: 100%;
  }

  .logo img {
    height: 100%;
    margin-right: 1rem;
  }
  .title {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
  }
  .subtitle {
    margin-top: -0.34rem;
    font-weight: normal;
    font-size: 1rem;
  }
</style>

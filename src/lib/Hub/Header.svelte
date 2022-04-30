<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { edited } from '$lib/Hub/stores';

  import Menu from '$lib/Hub/Menu.svelte';
  import User from '$lib/Hub/User.svelte';
  import UserButton from '$lib/Hub/UserButton.svelte';

  $: pathname = $page.url.pathname;

  export let title;
  export let subtitle = null;
  export let back = false;

  let menuVisible = false;
  let userVisible = false;

  function handleButtonLeft() {
    if (back) {
      // back arrow
      const prevPathname = pathname.substring(0, pathname.lastIndexOf('/'));
      goto(prevPathname);
    } else {
      // menu
      menuVisible = true;
    }
  }
</script>

<header class="glass">
  <div class="button left" on:click={handleButtonLeft} class:hidden={$edited}>
    <span class="material-symbols-outlined">{back ? 'arrow_back' : 'menu'}</span>
  </div>
  <div class="logo">
    <img src="/img/logo.svg" alt="logo" />
    <span class="title">
      {title}
      {#if subtitle}<small class="subtitle">{subtitle}</small>{/if}
    </span>
  </div>
  <div class="button right">
    <UserButton bind:visible={userVisible} />
  </div>
</header>

<User bind:visible={userVisible} />

<Menu bind:visible={menuVisible}>
  <slot />
</Menu>

<style>
  header {
    z-index: 100;
    overflow: hidden;
    position: fixed;
    top: 0.5rem;
    left: 50%;
    display: flex;
    justify-content: space-between;
    border-radius: 1rem;
    width: calc(100% - 1rem);
    height: var(--h-bar);
    margin: auto;
    max-width: calc(var(--w) - 2rem);
    transform: translateX(-50%);
  }

  .button {
    aspect-ratio: 1 / 1;
    display: grid;
    place-items: center;
    padding: 0.75rem 1rem;
    height: 100%;
    transition: transform 200ms;
  }
  .hidden {
    pointer-events: none;
    transform: translateX(-100%);
  }

  .logo {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    height: 100%;
  }
  .logo img {
    height: 80%;
    margin-right: 0.5rem;
  }
  .title {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: 700;
    font-size: 1.5rem;
  }
  .subtitle {
    margin-top: -0.2rem;
    font-weight: normal;
    font-size: 0.8rem;
  }
</style>

<script>
  import { page } from '$app/stores';
  import Nav from '$lib/ghost/Nav.svelte';

  export let nav;
  let navVisible;
  let navOpen;
  $: menuIcon = `/ghost/icons/${navOpen ? 'close.svg' : 'menu.svg'}`;
  function toggleNav() {
    navOpen = !navOpen;
  }

  $: pathname = $page.url.pathname; // /path/name or /path/name/
  $: path = pathname.slice(-1) == '/' ? pathname.slice(0, -1) : pathname; // /path/name
  $: href = path.substring(0, path.lastIndexOf('/')); // /path

  let scroll = 0;
  let scrollPrev = 0;
  let visible = true;
  $: {
    visible = scroll > scrollPrev; // scrolled up
    scrollPrev = scroll;
  }

  let threshold = 120;
  $: inverted = scroll >= threshold;

  $: returnIcon = (() => {
    if (!nav) return 'prev.svg';
    const home = nav.find((item) => item.home == true);
    return href == home.path ? 'home.svg' : 'prev.svg';
  })();
</script>

<svelte:window bind:scrollY={scroll} />

<div class="wrapper">
  <header class="box" class:visible class:inverted>
    <a data-sveltekit-prefetch data-sveltekit-noscroll class="button arrow" class:visible={href} disabled={href} {href}>
      <img src="/ghost/icons/{returnIcon}" alt="arrow back" />
    </a>
    <a class="logo" href="/" data-sveltekit-reload>
      <img src="/ghost/logo.svg" alt="logo" />
      PWr Diving Crew
    </a>
    <button class="button menu" class:visible={navVisible} on:click={toggleNav}>
      <img src={menuIcon} alt="menu" />
    </button>
  </header>

  <Nav {nav} bind:visible={navVisible} bind:open={navOpen} />
</div>

<style>
  .wrapper {
    --bg: rgba(255, 255, 255, 0.1);
    --bg-inv: rgba(0, 0, 0, 1);
    z-index: 100;
    position: fixed;
    top: var(--header-margin);
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - var(--header-margin) * 2);
    max-width: var(--content-w);
  }

  header {
    --shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    height: var(--header-h);
    background-color: var(--bg);
    transition: background-color var(--t-normal), color var(--t-normal), filter var(--t-normal), transform var(--t-fast);
  }
  header.visible {
    transform: translateY(calc(-100% - var(--header-margin)));
  }
  header.inverted {
    background-color: var(--color-light);
  }
  header.inverted * {
    color: var(--color-dark);
  }
  header.inverted img {
    filter: invert();
  }
  header::after {
    display: none;
  }

  .button {
    position: absolute;
    top: 0;
    display: grid;
    place-items: center;
    border: none;
    padding: 0;
    width: var(--header-h);
    height: 100%;
    transition: transform var(--t-fast);
    background-color: transparent;
  }
  .button img {
    height: 45%;
  }
  .arrow {
    left: 0;
    transform: translateX(-100%);
  }
  .menu {
    right: 0;
    transform: translateX(100%);
  }
  .button.visible {
    transform: translateX(0);
  }

  .logo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    font-size: 18px;
    text-decoration: none;
  }
  .logo img {
    height: 50%;
    margin-right: 10px;
  }
</style>

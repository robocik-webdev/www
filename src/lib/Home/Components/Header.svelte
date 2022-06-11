<script>
  import { lang } from '$lib/lang.js';
  import { menuOpened, modalOpened, partnersOpened } from '$lib/Home/stores.js';
  import { scrollto } from '$lib/utils.js';
  import Menu from '$lib/Home/Components/Menu.svelte';
  import Social from '$lib/Home/Components/Social.svelte';
  import Lang from '$lib/Home/Components/Lang.svelte';

  let y;
  let h;
  let lastY;
  let visible = true;
  $: {
    visible = !$modalOpened && (y == 0 || y < lastY);
    lastY = y;
  }

  function toggleMenu() {
    $menuOpened = !$menuOpened;
  }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<header class:visible>
  <Social vertical />

  <div class="menu left">
    <div role="button" on:click={() => scrollto('#vision')}>{@html $lang['menu_vision']}</div>
    <div role="button" on:click={() => scrollto('#achievements')}>{@html $lang['menu_achievements']}</div>
    <div role="button" on:click={() => scrollto('#project')}>{@html $lang['menu_project']}</div>
  </div>

  <div class="part logo" on:click={() => scrollto('#top')}>
    <img src="/logo-dark.svg" alt="robocik logo" class:visible={!$menuOpened} />
    <img src="/logo-light.svg" alt="robocik logo" class:visible={$menuOpened} />
  </div>

  <div class="menu right">
    <div role="button" on:click={() => scrollto('#team')}>{@html $lang['menu_team']}</div>
    <div role="button" on:click={() => scrollto('#contact')}>{@html $lang['menu_contact']}</div>
    <div role="button" on:click={() => ($partnersOpened = true)}>{@html $lang['menu_partners']}</div>
  </div>

  <!-- <Lang vertical /> -->

  <div class="part hamburger" on:click={toggleMenu}>
    <span class="material-symbols-outlined open" alt="open menu" class:visible={!$menuOpened}>menu</span>
    <span class="material-symbols-outlined close" alt="close menu" class:visible={$menuOpened}>close</span>
  </div>
</header>

<Menu />

<style>
  header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    transform: translateY(-100%);
    transition: transform var(--t-normal);
  }
  header.visible {
    transform: translateY(0);
  }
  header * {
    color: var(--c-main);
  }
  .menu {
    height: 5rem;
    display: none;
    align-items: center;
    gap: 2rem;
  }
  .menu.left {
    margin-right: 1rem;
  }
  .menu.right {
    margin-left: 1rem;
  }
  .menu div {
    cursor: pointer;
    font-weight: bold;
    /* text-shadow: 0px 0px 10px var(--c-white); */
  }
  @media (min-width: 800px) {
    header {
      justify-content: center;
    }
    .menu {
      display: flex;
    }
  }

  .part {
    cursor: pointer;
    padding: 1rem;
  }
  .part img,
  .part span {
    height: 3rem;
    width: 3rem;
    font-size: 3rem;
  }

  .logo img {
    display: none;
  }
  .logo img.visible {
    display: block;
  }

  .hamburger span {
    display: none;
    color: var(--c-main);
  }
  .hamburger span.visible {
    display: block;
  }
  .hamburger span.close {
    color: var(--c-white);
  }

  @media (min-width: 800px) {
    .hamburger {
      display: none;
    }
  }
</style>

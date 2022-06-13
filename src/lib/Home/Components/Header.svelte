<script>
  import { lang } from '$lib/lang.js';
  import { menuOpened, modalOpened, partnersOpened } from '$lib/Home/stores.js';
  import { scrollto } from '$lib/utils.js';
  import Menu from '$lib/Home/Components/Menu.svelte';
  import Social from '$lib/Home/Components/Social.svelte';
  import Lang from '$lib/Home/Components/Lang.svelte';

  let y;
  let h;
  // let lastY;
  // let visible = true;
  // $: {
  //   visible = !$modalOpened && (y == 0 || y < lastY);
  //   lastY = y;
  // }

  function toggleMenu() {
    $menuOpened = !$menuOpened;
  }

  $: if (y < 200) {
    $menuOpened = false;
  }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<header>
  <div class="corner left">
    <Social vertical dark />
  </div>

  <div class="center">
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
      <div role="button" on:click={() => ($partnersOpened = true)}>{@html $lang['menu_partners']}</div>
      <div role="button" on:click={() => scrollto('#contact')}>{@html $lang['menu_contact']}</div>
    </div>
  </div>

  <div class="corner right">
    <Lang vertical />
  </div>

  <div class="part hamburger" class:visible={y > 200} on:click={toggleMenu}>
    <span class="material-symbols-outlined open" alt="open menu" class:visible={!$menuOpened}>menu</span>
    <span class="material-symbols-outlined close" alt="close menu" class:visible={$menuOpened}>close</span>
  </div>
</header>

<Menu />

<style>
  header {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }
  header * {
    color: var(--c-main);
  }

  .corner {
    display: none;
    padding: 2.5rem;
  }

  .center {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .menu {
    display: none;
    align-items: center;
    gap: 2rem;
  }
  .menu div {
    cursor: pointer;
    font-weight: 900;
  }
  @media (min-width: 1260px) {
    .menu {
      display: flex;
    }
    .corner {
      display: flex;
    }
  }

  .part {
    cursor: pointer;
    padding: 1rem;
  }
  .part img {
    height: 4rem;
    width: 4rem;
  }
  .part span {
    font-size: 4rem;
  }

  .logo img {
    display: none;
  }
  .logo img.visible {
    display: block;
  }

  .hamburger {
    position: fixed;
    right: 0;
    display: grid;
    place-items: center;
  }
  .hamburger span {
    border-radius: 2rem;
    display: none;
    padding: 0.5rem;
    color: var(--c-main);
    background-color: var(--c-white);
    font-size: 3rem;
  }
  .hamburger span.visible {
    display: grid;
  }

  @media (min-width: 1260px) {
    .hamburger {
      display: none;
      padding: 2rem;
      padding-right: 2.5rem;
    }
    .hamburger span {
      border-radius: 4rem;
      font-size: 4rem;
    }
    .hamburger.visible {
      display: grid;
    }
  }
</style>

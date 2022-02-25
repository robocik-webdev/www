<script>
  import { hidden } from '$lib/header.js';
  import { opened as showMenu } from '$lib/menu.js';
  import { scrollto } from '$lib/utils.js';
  import Menu from '$lib/Components/Menu.svelte';

  let y;
  let w;
  let h;
  $: scrolled = y > (h / 10) * 2;
  $: showLogo = !$hidden && ($showMenu || scrolled);
  $: showButton = !$hidden;

  function toggleMenu() {
    $showMenu = !$showMenu;
  }
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={w} bind:innerHeight={h} />

<header>
  <div
    class="part logo"
    class:visible={showLogo}
    on:click={() => scrollto('#top')}
  >
    <img src="/img/logo.svg" alt="robocik logo" />
    <h1><span>PW</span>R <span>D</span>IVING <span>C</span>REW</h1>
  </div>

  <Menu />

  <div class="part hamburger" class:visible={showButton} on:click={toggleMenu}>
    <img
      class="icon"
      class:visible={$showMenu}
      src="/icon/close_light.svg"
      alt="close menu"
    />
    <img
      class="icon"
      class:visible={!$showMenu}
      src="/icon/menu_light.svg"
      alt="open menu"
    />
  </div>
</header>

<slot />

<style>
  header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 50px;
  }

  .part {
    transform: translateY(-100%);
    background-color: var(--color-main);
    transition: transform var(--t-normal);
  }
  .part.visible {
    transform: translateY(0);
  }

  .logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 var(--margin-mobile);
    height: 100%;
    width: calc(100% - 50px);
  }
  .logo img {
    margin-right: 10px;
    height: 30px;
    width: 30px;
  }
  .logo h1 {
    display: inline-block;
    margin: 0;
    white-space: nowrap;
    font-weight: 400;
    font-size: 1.1rem;
    color: var(--color-light);
  }

  .hamburger {
    padding: 12px;
    height: 100%;
    width: 50px;
  }
  .icon {
    display: none;
  }
  .icon.visible {
    display: block;
  }

  @media (min-width: 600px) {
    header {
      background-color: var(--color-main);
    }
    .logo {
      padding-left: var(--margin-pc);
      width: auto;
    }
    .hamburger {
      display: none;
    }
  }
</style>

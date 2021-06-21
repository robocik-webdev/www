<script>
  import { scrollY } from '../utils.js';
  import { hidden } from '../header.js';
  import { opened as showMenu } from '../menu.js';
  import Menu from './Menu.svelte';

  $: showLogo =
    !$hidden && ($showMenu || $scrollY > (window.innerHeight / 10) * 2);
  $: showButton = !$hidden;

  function toggleMenu() {
    $showMenu = !$showMenu;
  }
</script>

<header>
  <div class="part logo" class:visible={showLogo}>
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
    display: flex;
    align-items: center;
    padding: 0 20px;
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
</style>

<script>
  import Menu from './Menu.svelte';
  import { scrollY } from '../utils.js';

  let opened = false;
  let visible = false;

  function open() {
    opened = true;
    visible = true;
  }
  function close() {
    opened = false;
    visible = false;
  }
  function toggle() {
    opened ? close() : open();
  }

  $: {
    visible = opened || $scrollY > (window.innerHeight / 10) * 2 ? true : false;
  }
</script>

<header>
  <div class="logo" class:visible>
    <img src="/img/logo.svg" alt="robocik logo" />
    <h1><span>PW</span>R <span>D</span>IVING <span>C</span>REW</h1>
  </div>

  <Menu {opened} />

  <div class="hamburger" on:click={toggle}>
    {#if opened}
      <img class="close" src="/icon/close_light.svg" alt="close menu" />
    {:else}
      <img class="open" src="/icon/menu_light.svg" alt="open menu" />
    {/if}
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

  .logo {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    width: calc(100% - 50px);
    transform: translateY(-100%);
    background-color: var(--color-main);
    transition: transform var(--t-normal);
  }
  .logo img {
    margin-right: 10px;
    height: 30px;
    width: 30px;
  }
  .logo h1 {
    display: inline-block;
    color: var(--color-light);
    font-weight: 400;
    font-size: 1.1rem;
  }
  .visible {
    transform: translateY(0);
  }

  .hamburger {
    padding: 12px;
    height: 100%;
    width: 50px;
    background-color: var(--color-main);
  }
</style>

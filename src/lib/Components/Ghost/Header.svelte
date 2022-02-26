<script>
  import { arrow } from '$lib/Components/Ghost/header.js';

  export let nav;

  $: href = $arrow ? $arrow : '/';

  let opened = false;

  let scroll = 0;
  let last = 0;
  let up = true;

  let threshold = 150;
  $: inverted = scroll >= threshold;

  $: {
    up = scroll > last;
    last = scroll;
  }

  function toggleMenu() {
    opened = !opened;
  }
</script>

<svelte:window bind:scrollY={scroll} on:scroll={() => (opened = false)} />

<div class="wrapper">
  <header class="box" class:inverted class:visible={up}>
    <a sveltekit:prefetch class="button arrow" class:visible={$arrow} {href}>
      <img src="/icon/prev_light.svg" alt="arrow back" />
    </a>
    <a sveltekit:prefetch class="logo" href="/">
      <img src="/img/logo.svg" alt="logo" />
      PWr Diving Crew
    </a>
    <div class="button menu" class:visible={nav} on:click={toggleMenu}>
      <img src="/icon/{opened ? 'close_light' : 'menu_light'}.svg" alt="menu" />
    </div>
  </header>

  {#if nav}
    <nav class:opened>
      {#each nav as { title, endpoint }}
        <a
          class="box item"
          class:inverted
          href={endpoint}
          on:click={toggleMenu}
        >
          {title}
        </a>
      {/each}
    </nav>
  {/if}
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
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    height: var(--header-h);
    background-color: var(--bg);
    transition: background-color var(--t-normal), filter var(--t-normal),
      transform var(--t-fast);
  }
  header.visible {
    transform: translateY(calc(-100% - var(--header-margin)));
  }

  .button {
    cursor: pointer;
    position: absolute;
    top: 0;
    display: grid;
    place-items: center;
    width: var(--header-h);
    height: 100%;
    transition: transform var(--t-fast);
  }
  .button img {
    height: 40%;
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

  nav {
    --menu-w: 60%;
    overflow: hidden;
    position: absolute;
    top: var(--header-h);
    right: 0;
    display: grid;
    place-items: center;
    width: var(--menu-w);
    transform: scale(0);
    transform-origin: top right;
    transition: transform var(--t-fast);
  }
  nav.opened {
    transform: scale(1);
  }
  nav .item {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 20px;
    border-radius: 10px;
    margin-top: var(--header-margin);
    padding: 10px;
    width: 100%;
  }
  nav * {
    color: var(--color-light);
  }
</style>

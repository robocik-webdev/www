<script>
  import { slide, scale } from 'svelte/transition';
  import { circInOut, backOut } from 'svelte/easing';
  import { goto } from '$app/navigation';
  import { arrow } from '$lib/Ghost/header.js';

  export let nav;
  let opened = false;

  let scrolled = 0;
  let scrolledPrev = 0;
  let scrolledUp = true;
  $: {
    scrolledUp = scrolled > scrolledPrev;
    scrolledPrev = scrolled;
  }

  let threshold = 120;
  $: inverted = scrolled >= threshold;

  function toggleMenu() {
    opened = !opened;
  }
  function closeMenu() {
    opened = false;
  }

  $: returnIcon = (() => {
    if (!nav) return 'prev_light.svg';
    const home = nav.find(item => item.home == true);
    return $arrow == home.endpoint ? 'home_light.svg' : 'prev_light.svg';
  })();

  function handleReturn() {
    const href = $arrow;
    $arrow = null;
    goto(href);
  }
</script>

<svelte:window bind:scrollY={scrolled} on:scroll={closeMenu} />

<div class="wrapper">
  <header class="box" class:visible={scrolledUp} class:inverted>
    <button
      sveltekit:prefetch
      class="arrow"
      class:visible={$arrow}
      disabled={!$arrow}
      on:click={handleReturn}
    >
      <img src="/icon/{returnIcon}" alt="arrow back" />
    </button>
    <a sveltekit:prefetch class="logo" href="/">
      <img src="/img/logo.svg" alt="logo" />
      PWr Diving Crew
    </a>
    <button class="menu" class:visible={nav} on:click={toggleMenu}>
      <img src="/icon/{opened ? 'close_light' : 'menu_light'}.svg" alt="menu" />
    </button>
  </header>

  {#if nav}
    <nav>
      {#each nav as { title, endpoint, hidden }, i}
        {#if opened && !hidden}
          <a
            class="box item"
            href={endpoint}
            on:click={toggleMenu}
            in:slide={{ delay: i * 100, duration: 200, easing: backOut }}
            out:slide={{
              delay: (nav.length - 1 - i) * 50,
              duration: 200,
              easing: circInOut
            }}
          >
            <span
              in:scale={{ delay: i * 100, duration: 500, easing: backOut }}
              out:scale={{
                delay: (nav.length - 1 - i) * 50,
                duration: 200,
                easing: circInOut
              }}
            >
              {title}
            </span>
          </a>
        {/if}
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
    --shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    height: var(--header-h);
    background-color: var(--bg);
    transition: background-color var(--t-normal), color var(--t-normal),
      filter var(--t-normal), transform var(--t-fast);
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

  button {
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
  button img {
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
  button.visible {
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
    --width: 60%;
    overflow: hidden;
    position: absolute;
    top: var(--header-h);
    right: 0;
    display: grid;
    place-items: center;
    grid-gap: var(--header-margin);
    margin-top: var(--header-margin);
    width: var(--width);
    transform-origin: top right;
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    border-radius: 10px;
    height: var(--header-h);
    width: 100%;
    background-color: var(--color-light);
    box-shadow: var(--shadow);
  }
  .item * {
    color: var(--color-dark);
  }
</style>

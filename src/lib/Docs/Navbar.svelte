<script>
  import { hidden } from '$lib/header.js';
  import { opened, picState } from '$lib/sidebar.js';

  $: if ($hidden) $opened = false;

  function showSidebar() {
    $opened = !$opened;
    $picState = !$opened
      ? '/img/docs/Logo/menu.svg'
      : '/img/docs/Logo/close.svg';
  }
</script>

<div class="navbar">
  <div class="navbar-static">
    <div class="navbar__logo">
      <a class="navbar__logo--link" href="http://robocik.pwr.edu.pl/">
        <img
          class="navbar__logo--link--img1"
          src="/img/docs/Logo/logo.svg"
          alt="logo"
        />
        <h1 class="navbar__logo--link--txt">PWr Diving Crew</h1>
      </a>
    </div>
    <div class="navbar__menu">
      <img
        class="navbar__menu--link--img2"
        class:opened={$opened}
        src={$picState}
        alt="it bwoke :'("
        on:click={showSidebar}
      />
    </div>
  </div>
</div>

<style>
  h1 {
    margin: 0;
  }
  div.navbar {
    z-index: 2;
    top: 0;
    background-color: var(--color-main);
    width: 100%;
    height: 55px;
    position: static;
    display: block;
  }

  div.navbar-static {
    z-index: 3;
    top: inherit;
    background-color: inherit;
    width: inherit;
    height: inherit;
    position: fixed;
  }

  .navbar__logo {
    text-align: left;
    height: 100%;
    width: 100%;
  }

  .navbar__logo--link {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;
    text-decoration: none;
    width: 350px;
  }

  .navbar__logo--link--img1 {
    display: inline-block;
    height: 100%;
    width: 35px;
    margin-left: 12px;
    cursor: pointer;
  }

  .navbar__logo--link--txt {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    font-size: 1.5rem;
    font-weight: 250;
    color: #fff;
  }

  .navbar__menu {
    display: none;
  }

  @media (max-width: 1000px) {
    div.navbar-static {
      text-align: right;
      display: flex;
    }
    .navbar__menu {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      height: 100%;
      width: 55px;
    }
    .navbar__menu--link--img2 {
      display: inline-block;
      height: 100%;
      width: 100%;
      cursor: pointer;
    }
  }
</style>

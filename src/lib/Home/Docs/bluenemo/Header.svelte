<script>
  import { opened } from '$lib/Docs/sidebar.js';

  function toggleSidebar() {
    $opened = !$opened;
  }
</script>

<header>
  <div class="wrapper">
    <a sveltekit:prefetch class="logo" href="/">
      <img class="home" src="/icon/prev_light.svg" alt="home" />
      <img class="icon" src="/img/logo.svg" alt="logo" />
      <span>PWr Diving Crew</span>
    </a>
    <div class="button" on:click={toggleSidebar}>
      <img
        class:opened={$opened}
        src={$opened ? '/icon/close_light.svg' : '/icon/menu_light.svg'}
        alt="menu"
      />
    </div>
  </div>
</header>

<style>
  header {
    --height: 55px;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    height: var(--height);
    width: 100%;
    background-color: var(--color-main);
  }
  .wrapper {
    --max-width: 1000px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: var(--max-width);
  }

  .logo {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    text-decoration: none;
    font-weight: 400;
    color: var(--color-light);
  }
  .home {
    height: 50%;
    margin-right: 1rem;
    transition: transform 200ms;
  }
  .logo:hover .home {
    transform: translateX(-50%);
  }
  .icon {
    height: 60%;
  }
  .logo span {
    white-space: nowrap;
    font-size: 1.4rem;
    margin-left: 0.7rem;
  }

  .button {
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  .button img {
    height: 60%;
  }

  @media (min-width: 1000px) {
    .button {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    .home {
      display: none;
    }
  }
</style>

<script>
  import { page } from '$app/stores';
  $: pathname = $page.url.pathname.replace('/votum/admin', '');
</script>

<nav>
  <a href="/votum" class="home">
    <img src="/icon/votum/back.svg" alt="home" />
  </a>
  <a href="/votum/admin/questions" class:active={pathname == '/questions'}>
    Pytania
  </a>
  <a href="/votum/admin/users" class:active={pathname == '/users'}>
    Użytkownicy
  </a>
</nav>

<main>
  <img src="/img/logo.svg" alt="logo" class="logo" />
  <slot />
</main>

<style>
  * {
    color: #fff;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 50px 1fr 1fr;
    grid-template-rows: 30px;
    column-gap: 0.5rem;
    padding: 1rem;
    width: 100%;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-decoration: none;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    transition: background-color var(--t-fast), color var(--t-fast);
  }
  a:hover {
    background-color: #aaa;
  }
  a.active {
    color: #fff;
    background-color: var(--color-complement);
  }

  a.home {
    padding: 0.2rem;
  }
  img {
    width: unset;
    height: 100%;
  }

  main {
    background-color: var(--c-bg-0);
    min-height: 100vh;
    padding: 1rem;
    padding-top: calc(30px + 2rem);
  }
  .logo {
    z-index: -1;
    position: fixed;
    bottom: 0;
    right: 0;
    transform: translate(35%, 25%);
    height: 50vh;
    opacity: 0.1;
  }
</style>

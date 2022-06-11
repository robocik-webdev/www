<script>
  import { lang } from '$lib/lang.js';
  import { scrollto } from '$lib/utils.js';
  import { menuOpened, partnersOpened } from '$lib/Home/stores.js';
  import Lang from '$lib/Home/Components/Lang.svelte';
  import Social from '$lib/Home/Components/Social.svelte';

  let menu = ['vision', 'achievements', 'project', 'team', 'contact'];

  console.log($menuOpened);

  function gotoSection(section) {
    scrollto('#' + section);
    $menuOpened = false;
  }
</script>

<nav class:opened={$menuOpened}>
  <ul>
    {#each menu as item}
      <li on:click={() => gotoSection(item)}>
        {@html $lang[`menu_${item}`]}
      </li>
    {/each}
    <li
      on:click={() => {
        $menuOpened = false;
        $partnersOpened = true;
      }}
    >
      {@html $lang.menu_partners}
    </li>
  </ul>
  <Lang />
  <Social />
</nav>

<style>
  nav {
    overflow-y: auto;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    padding-top: 7rem;
    width: 100%;
    height: 100%;
    background-color: var(--c-main);
    transform: translateX(100%);
    transition: transform var(--t-normal);
  }
  nav.opened {
    transform: translateX(0);
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
    margin-bottom: 1.75rem;
    list-style: none;
    font-size: 10vw;
    color: var(--c-white);
  }

  /* @media (min-width: 600px) {
    nav {
      display: none;
    }
  } */
</style>

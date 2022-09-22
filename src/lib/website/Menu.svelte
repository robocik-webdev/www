<script>
  import { lang } from '$lib/lang';
  import { scrollto } from '$lib/utils';
  import { menuOpened, partnersOpened } from '$lib/website/stores';
  import Lang from '$lib/website/Lang.svelte';
  import Social from '$lib/website/Social.svelte';

  let menu = ['vision', 'project', 'achievements', 'team', 'partners', 'contact'];

  function gotoSection(section) {
    scrollto('#' + section);
    $menuOpened = false;
  }
</script>

<nav class:opened={$menuOpened}>
  <ul>
    {#each menu as item}
      {#if item == 'partners'}
        <li
          on:click={() => {
            $menuOpened = false;
            $partnersOpened = true;
          }}
        >
          {@html $lang.menu_partners}
        </li>
      {:else}
        <li on:click={() => gotoSection(item)}>
          {@html $lang[`menu_${item}`]}
        </li>
      {/if}
    {/each}
  </ul>
  <Lang right />
  <div class="br" />
  <Social right />
</nav>

<style>
  nav {
    overflow-y: auto;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem;
    padding-top: 7rem;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateX(100%);
    transition: transform var(--t-normal);
    text-align: right;
    backdrop-filter: blur(10px);
  }
  nav.opened {
    transform: translateX(0);
  }

  ul {
    margin: 0;
    margin-bottom: 3rem;
    padding: 0;
  }
  li {
    cursor: pointer;
    margin-bottom: 1.75rem;
    list-style: none;
    font-size: clamp(2rem, 10vw, 4rem);
    color: var(--c-white);
    font-weight: 900;
  }
  .br {
    height: 2rem;
  }

  @media (min-width: 1260px) {
    nav {
      padding-top: 8.5rem;
    }
  }
</style>

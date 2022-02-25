<script>
  import { lang, langChoice } from '$lib/lang.js';
  import { scrollto } from '$lib/utils.js';
  import { hidden } from '$lib/header.js';
  import { opened } from '$lib/menu.js';
  import { visible as showPartners } from '$lib/partners.js';
  import Partners from '$lib/Components/Partners.svelte';

  $: if ($hidden) $opened = false;

  let menu = ['vision', 'timeline', 'project', 'team', 'contact'];
</script>

<nav class:opened={$opened}>
  <ul>
    <li><a href="/hackathon">Hackathon</a></li>
    <li><a href="/rekrutacja">Rekrutacja</a></li>
    {#each menu as item}
      <li
        on:click={() => {
          scrollto('#' + item);
          $opened = false;
        }}
      >
        {@html $lang[`menu_${item}`]}
      </li>
    {/each}
    <li
      on:click={() => {
        $opened = false;
        $hidden = true;
        $showPartners = true;
      }}
    >
      {@html $lang.menu_partners}
    </li>
  </ul>
  <div class="lang">
    <img
      src="/icon/lang/eng.svg"
      alt="english version"
      on:click={() => ($langChoice = 'eng')}
    />
    <img
      src="/icon/lang/pl.svg"
      alt="polish version"
      on:click={() => ($langChoice = 'pl')}
    />
  </div>
</nav>

{#if $showPartners}
  <Partners />
{/if}

<style>
  nav {
    position: fixed;
    left: 0;
    top: 50px;
    padding: 20px 20px 20px 60px;
    width: 100%;
    height: calc(100% - 50px);
    transform: translateX(100%);
    transition: transform var(--t-fast);
    background-color: var(--color-main);
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
    margin-bottom: 20px;
    list-style: none;
    font-size: 2.2rem;
    color: var(--color-light);
  }
  .opened {
    transform: translateX(0);
  }
  .lang {
    display: flex;
    align-items: flex-start;
    margin-top: 40px;
  }
  .lang img {
    cursor: pointer;
    margin-right: 20px;
    width: 40px;
  }

  @media (min-width: 600px) {
    nav {
      position: static;
      display: flex;
      justify-content: flex-end;
      padding: 0;
      padding-right: var(--margin-pc);
      height: 50px;
      transform: translateX(0);
    }
    ul {
      display: flex;
      align-items: center;
    }
    li {
      margin: 0;
      margin-right: 20px;
      font-size: 1.1rem;
    }
    .lang {
      display: flex;
      align-items: center;
      margin-top: 0;
      margin-right: 5px;
    }
    .lang img {
      margin-right: 15px;
      width: 30px;
    }
  }
</style>

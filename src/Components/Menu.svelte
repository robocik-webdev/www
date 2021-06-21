<script>
  import { lang, langChoice } from '../lang.js';
  import { scrollto } from '../utils.js';
  import { hidden } from '../header.js';
  import { opened } from '../menu.js';

  $: if ($hidden) $opened = false;

  let menu = ['vision', 'timeline', 'project', 'team', 'contact'];
</script>

<nav class:opened={$opened}>
  <ul>
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
  </ul>
  <div class="lang">
    <img
      src="/icon/lang/eng.svg"
      alt="english version"
      on:click={() => {
        $langChoice = 'eng';
      }}
    />
    <img
      src="/icon/lang/pl.svg"
      alt="polish version"
      on:click={() => {
        $langChoice = 'pl';
      }}
    />
  </div>
</nav>

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
    margin-right: 20px;
    width: 40px;
  }
</style>

<script>
  import { langChoice } from '../lang.js';
  // import { scrollto } from '../utils.js';
  import { hidden } from '../header.js';
  import { opened } from '../menu.js';

  import { scrollto } from 'svelte-scrollto';

  $: if ($hidden) $opened = false;

  let menu = [
    ['Osiągnięcia', '#achievements'],
    ['Wizja', '#vision'],
  ];
</script>

<nav class:opened={$opened}>
  <ul>
    {#each menu as menuItem}
      <li
        use:scrollto={menuItem[1]}
        on:click={() => {
          console.log('test');
        }}
      >
        {menuItem[0]}
      </li>
    {/each}
  </ul>
  <div class="lang">
    <button
      on:click={() => {
        $langChoice = 'pl';
      }}>pl</button
    >
    <button
      on:click={() => {
        $langChoice = 'eng';
      }}>eng</button
    >
  </div>
</nav>

<style>
  nav {
    position: fixed;
    left: 0;
    top: 50px;
    width: 100%;
    height: calc(100% - 50px);
    transform: translateX(100%);
    transition: transform var(--t-fast);
    background-color: var(--color-main);
  }
  .opened {
    transform: translateX(0);
  }
  .lang {
    display: flex;
    align-items: flex-start;
  }
</style>

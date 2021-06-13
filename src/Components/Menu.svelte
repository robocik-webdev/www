<script>
  import { langChoice } from '../lang.js';
  import { goto } from '../utils.js';

  export let opened;

  let menu = [
    ['Osiągnięcia', '#achievements'],
    ['Wizja', '#vision'],
  ];
</script>

<nav class:opened>
  <ul>
    {#each menu as menuItem}
      <li on:click={() => goto(menuItem[1])}>{menuItem[0]}</li>
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

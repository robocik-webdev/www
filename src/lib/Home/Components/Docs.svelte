<script>
  import { docsOpened } from '$lib/Home/stores.js';
  import Popup from '$lib/Home/Components/Popup.svelte';
  import Sidebar from '$lib/Home/Docs/bluenemo/Sidebar.svelte';
  import Content from '$lib/Home/Docs/bluenemo/Content.svelte';
  import { opened } from '$lib/Home/Docs/sidebar.js';

  function toggleMenu() {
    $opened = !$opened;
  }
</script>

<Popup>
  <div class="menu">
    <div class="close" on:click={() => ($docsOpened = false)}>
      <span class="material-symbols-outlined" class:visible={$opened}>close</span>
    </div>

    <div class="part hamburger" on:click={toggleMenu}>
      <span class="material-symbols-outlined open" alt="open menu" class:visible={!$opened}>menu</span>
      <span class="material-symbols-outlined close" alt="close menu" class:visible={$opened}>close</span>
    </div>
  </div>

  <div class="content">
    <Sidebar />
    <Content />
  </div>
</Popup>

<style>
  * {
    color: var(--c-main);
  }

  .menu {
    z-index: 2;
    position: absolute;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: var(--c-accent-light);
    padding: 1rem;
  }

  .close {
    cursor: pointer;
  }

  .part {
    cursor: pointer;
  }

  .close span.visible {
    display: none;
  }

  .part span {
    height: 3rem;
    width: 3rem;
    font-size: 2.5rem;
  }

  .hamburger span {
    display: none;
    color: var(--c-main);
  }
  .hamburger span.visible {
    display: block;
  }
  .hamburger span.close {
    color: var(--c-main);
  }

  .close span {
    font-size: 2.5rem;
  }

  .content {
    display: flex;
    overflow-y: hidden;
  }

  @media (min-width: 600px) {
    .close {
      width: 60px;
      height: 60px;
    }

    .hamburger {
      display: none;
    }

    .close span.visible {
      display: inherit;
    }
  }
</style>

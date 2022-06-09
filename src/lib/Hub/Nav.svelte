<script>
  import { fly } from 'svelte/transition';
  import { goto } from '$app/navigation';

  import { page } from '$app/stores';
  import { edited, saving } from '$lib/Hub/stores';
  import { cancel, save } from '$lib/Hub/actions';

  import ButtonGroup from '$lib/Hub/ButtonGroup.svelte';
  import Button from '$lib/Hub/Button.svelte';

  export let items;

  $: pathname = $page.url.pathname;
</script>

{#if $edited}
  <div class="controls" transition:fly={{ y: 50 }}>
    <ButtonGroup>
      <Button icon="close" onclick={$cancel}>Anuluj</Button>
      <Button
        action
        icon="done"
        onclick={async () => {
          $saving = true;
          await $save();
          $saving = false;
        }}
      >
        {#if $saving}Zapisywanie...{:else}Zapisz{/if}
      </Button>
    </ButtonGroup>
  </div>
{/if}

{#if !$edited}
  <nav class="glass" transition:fly={{ y: 50, duration: 200 }}>
    {#each items as { href, icon, title }}
      <div
        role="button"
        class="item"
        on:click={() => (pathname != href ? goto(href) : () => {})}
        class:current={pathname == href}
      >
        <div class="icon">
          <span class="material-symbols-outlined">{icon}</span>
        </div>
        <small>{title}</small>
      </div>
    {/each}
  </nav>
{/if}

<style>
  nav,
  .controls {
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    width: calc(100% - 1rem);
    max-width: calc(var(--w) - 2rem);
    margin: auto;
    transform: translateX(-50%);
  }

  .controls {
    z-index: 1000;
    margin-bottom: 0.25rem;
  }

  nav {
    z-index: 100;
    display: flex;
    justify-content: space-around;
    border-radius: 1rem;
    height: var(--h-bar);
  }
  .item {
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.11rem;
    height: 100%;
  }
  .icon {
    display: flex;
    justify-content: center;
    position: relative;
    width: 4rem;
    height: 100%;
    transition: width 100ms;
  }
  .icon::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    background-color: var(--c-action);
    opacity: 0;
    transform: translateX(-50%) scaleX(0);
    transition: opacity 200ms, transform 300ms;
  }
  .item.current .icon::before {
    opacity: 1;
    transform: translateX(-50%) scaleX(1);
  }
  small {
    margin-top: 0.3rem;
    font-size: 0.8rem;
    color: #fff;
  }
</style>

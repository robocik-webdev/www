<script>
  import { goto } from '$app/navigation';

  import { page } from '$app/stores';
  $: pathname = $page.url.pathname;

  export let items;
</script>

<nav class="glass">
  {#each items as { href, icon, title }}
    <div
      role="button"
      class="item"
      on:click={() => (pathname != href ? goto(href) : () => {})}
      class:current={pathname == href}
    >
      <div class="img">
        <img src="/icon{icon}" alt={title} />
      </div>
      <small>{title}</small>
    </div>
  {/each}
</nav>

<style>
  nav {
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    display: flex;
    justify-content: space-around;
    border-radius: 1rem;
    width: calc(100% - 1rem);
    height: var(--h-bar);
    margin: auto;
    max-width: calc(var(--w) - 2rem);
    transform: translateX(-50%);
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

  .img {
    position: relative;
    width: 4rem;
    height: 100%;
    transition: width 100ms;
  }
  .img::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    background-color: var(--color-complement);
    opacity: 0;
    transform: translateX(-50%) scaleX(0);
    transition: opacity 200ms, transform 300ms;
  }
  .item.current .img::before {
    opacity: 1;
    transform: translateX(-50%) scaleX(1);
  }
  img {
    height: 100%;
  }

  small {
    margin-top: 0.3rem;
    font-size: 0.8rem;
    color: #fff;
  }
</style>

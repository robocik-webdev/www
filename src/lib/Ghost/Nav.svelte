<script>
  import { slide, scale } from 'svelte/transition';
  import { circInOut, backOut } from 'svelte/easing';

  export let nav;
  export let open = false;
  export let visible;

  nav.forEach(item => {
    if (!item.home) visible = true;
  });

  const invert = i => nav.map(item => item.home != true).length - 1 - i;
  const itemIn = i => ({ delay: i * 100, duration: 200, easing: backOut });
  const itemOut = i => ({
    delay: invert(i) * 50,
    duration: 200,
    easing: circInOut
  });
  const textIn = i => ({ delay: i * 100, duration: 500, easing: backOut });
  const textOut = i => ({
    delay: invert(i) * 50,
    duration: 200,
    easing: circInOut
  });

  function close() {
    open = false;
  }
</script>

<svelte:window on:scroll={close} />

{#if visible}
  <nav>
    {#each nav as { title, path, home }, i}
      {#if open && !home}
        <a
          class="box"
          href={path}
          on:click={close}
          in:slide={itemIn(i)}
          out:slide={itemOut(i)}
        >
          <span in:scale={textIn(i)} out:scale={textOut(i)}>
            {title}
          </span>
        </a>
      {/if}
    {/each}
  </nav>
{/if}

<style>
  nav {
    --width: 60%;
    overflow: hidden;
    position: absolute;
    top: var(--header-h);
    right: 0;
    display: grid;
    place-items: center;
    grid-gap: var(--header-margin);
    margin-top: var(--header-margin);
    width: var(--width);
    transform-origin: top right;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    border-radius: 10px;
    height: var(--header-h);
    width: 100%;
    background-color: var(--color-light);
    box-shadow: var(--shadow);
  }
  a * {
    color: var(--color-dark);
  }
</style>

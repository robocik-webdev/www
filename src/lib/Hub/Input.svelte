<script>
  // import { fly } from 'svelte/transition';
  import Button from '$lib/Hub/Button.svelte';

  export let type = 'text';
  export let min = null;
  export let max = null;
  export let step = null;
  export let buttons = false;

  export let value;

  // const t = { y: 50, duration: 1000 };
</script>

{#if type == 'text'}
  <label>
    {#if $$slots.default}<p><slot /></p>{/if}
    <input class="glass" type="text" bind:value />
  </label>
{:else if type == 'password'}
  <label>
    {#if $$slots.default}<p><slot /></p>{/if}
    <input class="glass" type="password" bind:value />
  </label>
{:else if type == 'number'}
  <label for="n">
    {#if $$slots.default}<p><slot /></p>{/if}
    <div class="wrapper">
      {#if buttons}
        <Button
          square
          icon="/hub/minus.svg"
          alt="minus"
          onclick={() => (min && value - 1 < min ? () => {} : value--)}
        />
      {/if}
      <input class="glass" type="number" {min} {max} {step} bind:value name="n" class:center={buttons} />
      {#if buttons}
        <Button square icon="/hub/add.svg" alt="plus" onclick={() => (max && value + 1 > max ? () => {} : value++)} />
      {/if}
    </div>
  </label>
{:else if type == 'checkbox'}
  <label class="glass checkbox">
    <input type="checkbox" bind:checked={value} />{#if $$slots.default}<span><slot /></span>{/if}
  </label>
{:else if type == 'date'}
  <label>
    {#if $$slots.default}<p><slot /></p>{/if}
    <input class="glass" type="date" bind:value />
  </label>
{:else if type == 'time'}
  <label>
    {#if $$slots.default}<p><slot /></p>{/if}
    <input class="glass" type="time" bind:value />
  </label>
{/if}

<style>
  p {
    margin: 0.5rem 0 0.25rem 0;
    color: #fff;
  }

  .wrapper {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 1rem;
  }

  label.checkbox,
  input {
    border-radius: 1rem;
    border: none;
    padding: 1rem;
    width: 100%;
    height: var(--h);
    color: #fff;
  }
  label.checkbox:focus,
  input:focus {
    border: none;
    outline: solid 2px var(--color-complement);
  }

  label.checkbox {
    display: flex;
    align-items: center;
  }
  input[type='checkbox'] {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    accent-color: var(--color-complement);
  }

  input.center {
    text-align: center;
  }
</style>

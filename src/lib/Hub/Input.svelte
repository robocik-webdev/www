<script>
  // import { fly } from 'svelte/transition';
  import Button from '$lib/Hub/Button.svelte';

  export let type = 'text';
  export let value;
  export let error = null;

  export let edited = false;

  export let min = null;
  export let max = null;
  export let step = null;
  export let buttons = false;

  const minus = () => (min && value - 1 < min ? () => {} : value--);
  const plus = () => (max && value + 1 > max ? () => {} : value++);

  const token = () => Math.random().toString(36).substring(2);
  const id = `input-${token()}`; // token for explicit labelling
</script>

<div class="wrapper">
  {#if $$slots.default && type != 'checkbox'}
    <label for={id}><slot /></label>
  {/if}

  {#if type == 'text'}
    <input {id} class:error class:edited bind:value type="text" />
  {:else if type == 'email'}
    <input {id} class:error class:edited bind:value type="email" />
  {:else if type == 'password'}
    <input {id} class:error class:edited bind:value type="password" />
  {:else if type == 'date'}
    <input {id} class:error class:edited bind:value type="date" />
  {:else if type == 'time'}
    <input {id} class:error class:edited {step} bind:value type="time" />
  {:else if type == 'checkbox'}
    <div class="checkbox" class:error class:edited on:click={() => (value = !value)}>
      <input {id} bind:checked={value} type="checkbox" />
      {#if $$slots.default}<label for={id} on:click|preventDefault><slot /></label>{/if}
    </div>
  {:else if type == 'number'}
    <div class="number-wrapper">
      {#if buttons}<Button square icon="remove" onclick={minus} disabled={value <= min} />{/if}
      <div class="number">
        <input {id} class:error class:edited class:center={buttons} {min} {max} {step} bind:value type="number" />
        {#if error}<span class="error-info">{error}</span>{/if}
      </div>
      {#if buttons}<Button square icon="add" onclick={plus} disabled={value >= max} />{/if}
    </div>
  {/if}

  {#if error && type != 'number'}
    <span class="error-info">{error}</span>
  {/if}
</div>

<style>
  label {
    display: block;
    margin: 0.5rem 0;
    color: #fff;
  }

  input,
  .checkbox {
    --edit: solid 2px var(--c-action);
    border-radius: 1rem;
    border: none;
    padding: 1rem;
    width: 100%;
    height: var(--h);
    color: #fff;
    background-color: var(--c-input);
  }

  input:focus {
    border: none;
    outline: var(--edit);
  }
  input.center {
    text-align: center;
  }

  .checkbox {
    display: flex;
    align-items: center;
  }
  input[type='checkbox'] {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 1rem;
    accent-color: var(--color-complement);
  }

  .number-wrapper {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 1rem;
  }

  .error {
    outline: solid 2px var(--c-red);
  }
  .error-info {
    display: inline-block; /* allows to put an optional <br> after the input to minimize content shift */
    margin-top: 0.25rem;
    margin-left: 0.75rem;
    color: var(--c-red);
  }

  .edited {
    outline: var(--edit);
  }
</style>

<script>
  import { langChoice } from '$lib/lang.js';

  export let vertical = false;
</script>

<div class="lang" class:vertical>
  <img src="/lang/eng.svg" alt="english version" on:click={() => ($langChoice = 'eng')} />
  <img src="/lang/pl.svg" alt="polish version" on:click={() => ($langChoice = 'pl')} />
</div>

<style>
  .lang {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .lang img {
    border-radius: 7px;
    cursor: pointer;
    width: clamp(2rem, 4vw, 4rem);
  }
  .vertical {
    flex-direction: column;
  }
</style>

<script>
  import { langChoice } from '$lib/lang';

  export let vertical = false;
  export let right = false;
</script>

<div class="lang" class:vertical class:right>
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
  .right {
    justify-content: flex-end;
  }
</style>

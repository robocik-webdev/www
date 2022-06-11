<script>
  import { langChoice } from '$lib/lang.js';

  export let vertical;
</script>

<div class="lang" class:vertical>
  <img src="/lang/eng.svg" alt="english version" on:click={() => ($langChoice = 'eng')} />
  <img src="/lang/pl.svg" alt="polish version" on:click={() => ($langChoice = 'pl')} />
</div>

<style>
  .lang {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
  .lang img {
    cursor: pointer;
    width: 3rem;
  }
  .vertical {
    flex-direction: column;
  }
  @media (min-width: 600px) {
    .lang {
      display: flex;
      align-items: center;
      margin-top: 0;
      margin-right: 5px;
    }
    .lang img {
      margin-right: 15px;
      width: 30px;
    }
  }
</style>

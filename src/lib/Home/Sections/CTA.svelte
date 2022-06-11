<script>
  import { lang } from '$lib/lang.js';
  import { scrollto } from '$lib/utils.js';
  import { partnersOpened } from '$lib/Home/stores.js';
  import Button from '$lib/Home/Components/Button.svelte';
  import Waves from '$lib/Home/Components/Waves.svelte';

  let h; // cta height
</script>

<section id="cta" bind:clientHeight={h}>
  <div class="clouds">
    <img class="cloud1" src="/cta/cloud1.svg" alt="" />
    <img class="cloud2" src="/cta/cloud2.svg" alt="" />
  </div>
  <Waves {h} />
  <div class="text">
    <h1>{@html $lang.cta_title}</h1>
    <p>{@html $lang.cta_text_1}</p>
    <p>{@html $lang.cta_text_2}</p>
    <div class="buttons">
      <Button dark clear on:click={() => ($partnersOpened = true)}>
        {@html $lang.cta_button_2}
      </Button>
      <Button dark on:click={() => scrollto('#vision')}>
        {@html $lang.cta_button_1}
      </Button>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    padding: 6rem 1rem 0 1rem;
    height: 100%;
    width: 100%;
    background: linear-gradient(var(--c-accent-light), var(--c-accent-dark));
  }
  section * {
    color: var(--c-main);
  }

  .clouds {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .cloud1,
  .cloud2 {
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .cloud1 {
    top: 20%;
    left: 30%;
    width: 50%;
  }
  .cloud2 {
    top: 15%;
    left: 70%;
    width: 30%;
  }

  .text {
    grid-column: 2 / 12;
    position: relative;
    z-index: 2;
    margin-top: 15vh;
    text-align: center;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
</style>

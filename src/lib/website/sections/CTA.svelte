<script>
  import { lang } from '$lib/lang';
  import { scrollto } from '$lib/utils';
  import { partnersOpened } from '$lib/website/stores';
  import Button from '$lib/website/Button.svelte';
  import Waves from '$lib/website/Waves.svelte';

  let h; // cta height
</script>

<section id="cta" bind:clientHeight={h}>
  <img class="cloud1" src="/cta/cloud1.svg" alt="" />
  <img class="cloud2" src="/cta/cloud2.svg" alt="" />

  <Waves {h} />

  <div class="text">
    <h1>{@html $lang.cta_title}</h1>
    <p>{@html $lang.cta_text_1}</p>
    <p>{@html $lang.cta_text_2}</p>
    <div class="buttons">
      <Button href="/rekrutacja" external>{@html $lang.cta_button_recruitment}</Button>
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
    overflow: hidden;
    position: relative;
    height: 100%;
    background: linear-gradient(var(--c-accent-light), var(--c-accent-dark));
  }
  section * {
    color: var(--c-main);
  }

  .cloud1,
  .cloud2 {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%) scaleX(-1);
  }
  .cloud1 {
    z-index: 0;
    top: 20%;
    left: 30%;
    width: 50%;
  }
  .cloud2 {
    z-index: 0;
    top: 15%;
    left: 80%;
    width: 30%;
  }

  .text {
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 1rem;
    width: 100%;
    text-align: center;
    font-weight: 400;
    transform: translate(-50%, -50%);
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
</style>

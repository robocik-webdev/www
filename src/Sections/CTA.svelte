<script>
  import { scrollto } from '../utils.js';
  import { lang } from '../lang.js';
  import { hidden } from '../header.js';
  import Waves from '../Components/Waves.svelte';
</script>

<section id="cta">
  <Waves />

  <div class="wrapper logo">
    <img src="/img/logo.svg" alt="robocik logo" />
  </div>

  <div class="wrapper bottom-wave">
    <img src="/img/wave.svg" alt="decorative wave" />
  </div>

  <div class="text">
    <h3>{@html $lang.cta_subtitle}</h3>
    <h1>{@html $lang.cta_title}</h1>
    <p>{@html $lang.cta_text_1}</p>
    <p>{@html $lang.cta_text_2}</p>
    <div class="buttons">
      <button on:click={() => scrollto('#vision')}>
        <img src="/icon/arrow_down_light.svg" alt="arrow down" />
        <span>{@html $lang.cta_button_1}</span>
      </button>
      <button
        class="clear"
        on:click={() => {
          $hidden = !$hidden;
        }}><span>{@html $lang.cta_button_2}</span></button
      >
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .wrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  img {
    position: absolute;
  }

  .logo {
    z-index: 0;
  }
  .logo img {
    top: 30%;
    right: -50%;
    opacity: 0.1;
  }

  .bottom-wave {
    z-index: 1;
  }
  .bottom-wave img {
    bottom: 0;
    left: 0;
    width: 125%;
  }

  .text {
    position: relative;
    z-index: 2;
    margin-top: 10vh;
  }
  .text * {
    color: var(--color-light);
  }

  .buttons {
    display: flex;
    margin-top: 40px;
  }

  button {
    overflow: hidden;
    position: relative;
    display: inline-block;
    border: none;
    padding: 7px 14px;
    background: var(--color-complement);
    font-size: 1rem;
    font-weight: 700;
  }
  button span {
    display: inline-block;
    transition: transform var(--t-normal), opacity var(--t-normal);
  }
  button:hover span {
    transform: scale(0.8);
    opacity: 0;
  }
  button img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 80%;
    transform: translate(-50%, -150%);
    transition: transform var(--t-normal);
  }
  button:hover img {
    transform: translate(-50%, -50%);
  }

  button.clear {
    background: rgba(0, 0, 0, 0);
  }
  button.clear:hover span {
    transform: scale(0.8);
    opacity: 1;
  }
</style>

<script>
  import { lang } from '../lang.js';

  const imgs = [
    '3mind.webp',
    'robomaticon.webp',
    'robosub.webp',
    'strategic_science_club.webp',
  ];

  let section;
  let slider;
  let slides = [];
  let slideIndex = 0;

  let visible = false;

  function navigation() {
    const rect = section.getBoundingClientRect();
    const { y, bottom } = rect;
    const w = window.innerHeight / 2;
    visible = y < w && bottom > w;
  }

  function set(i) {
    const width = slides[0].offsetWidth;
    slider.style.transform = `translateX(${-i * width}px)`;
  }
  function prev() {
    const i = slideIndex - 1;
    if (i != -1) slideIndex = i;
  }
  function next() {
    const i = slideIndex + 1;
    if (i != slides.length) slideIndex = i;
  }
  $: {
    if (slider) set(slideIndex);
  }
</script>

<svelte:window on:scroll={navigation} on:resize={() => set(slideIndex)} />

<section id="timeline" bind:this={section}>
  <div
    class="control prev"
    class:visible={visible && slideIndex != 0}
    on:click={prev}
  >
    <img src="/icon/prev_light.svg" alt="scroll arrow facing left" />
  </div>
  <div class="slider" bind:this={slider}>
    {#each imgs as img, i}
      <div class="slide" bind:this={slides[i]}>
        <img src="/img/timeline/{img}" alt="timeline image {img}" />
        <h2>{@html $lang[`timeline_${i + 1}_title`]}</h2>
        <h3>{@html $lang[`timeline_${i + 1}_subtitle_1`]}</h3>
        <h3>
          {@html $lang[`timeline_${i + 1}_year`]} /
          {@html $lang[`timeline_${i + 1}_subtitle_2`]}
        </h3>
        <p>{@html $lang[`timeline_${i + 1}_text`]}</p>
      </div>
    {/each}
  </div>
  <div
    class="control next"
    class:visible={visible && slideIndex != slides.length - 1}
    on:click={next}
  >
    <img src="/icon/next_light.svg" alt="scroll arrow facing right" />
  </div>
</section>

<style>
  section {
    overflow: hidden;
    min-height: 100vh;
  }

  .slider {
    display: flex;
    align-items: flex-start;
    transition: transform var(--t-normal);
  }

  .slide {
    padding: 0 5px;
    width: 100%;
    flex-shrink: 0;
  }

  .control {
    z-index: 1;
    position: fixed;
    top: 50%;
    width: 50px;
    height: 50px;
    background-color: var(--color-complement);
    transition: transform var(--t-fast);
  }
  .control.prev {
    left: 0;
    transform: translateX(calc(-100% - 1px));
  }
  .control.next {
    right: 0;
    transform: translateX(calc(100% + 1px));
  }
  .control.visible {
    transform: translateX(0);
  }
  .control img {
    padding: 5px;
  }
</style>

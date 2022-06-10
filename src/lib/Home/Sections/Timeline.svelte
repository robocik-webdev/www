<script>
  import { lang } from '$lib/lang.js';

  const imgs = [
    'robosub.webp',
    'robomaticon.webp',
    '3mind.webp',
    'strategic_science_club.webp'
  ];

  let section;
  let slider;
  let sliderWidth;
  let slides = [];
  let slideIndex = 0;
  let slideWidth;

  let visible = false;
  let prevVisible = false;
  let nextVisible = false;
  let end = false;

  function navigation() {
    const rect = section.getBoundingClientRect();
    const { y, bottom } = rect;
    const w = window.innerHeight / 2;
    visible = y < w && bottom > w;
  }

  function checkVisibleAtOnceAmount() {
    sliderWidth = slider.getBoundingClientRect().width;
    slideWidth = slides[0].getBoundingClientRect().width;
    return Math.round(sliderWidth / slideWidth);
  }

  function set(i) {
    let translation = -i * slideWidth;
    slider.style.transform = `translateX(${translation}px)`;
  }
  function prev() {
    const n = checkVisibleAtOnceAmount();
    let i = slideIndex - n;
    if (i < 0) i = 0;
    slideIndex = i;
    end = false;
  }
  function next() {
    const n = checkVisibleAtOnceAmount();
    let i = slideIndex + n;
    let offset = n - (slides.length - i);
    if (offset >= 0) {
      end = true;
      i -= offset;
    } else end = false;
    slideIndex = i;
  }
  $: {
    if (slider) set(slideIndex);
    prevVisible = visible && slideIndex != 0;
    nextVisible = visible && !end;
  }
</script>

<svelte:window on:scroll={navigation} on:resize={() => set(slideIndex)} />

<section id="timeline" bind:this={section}>
  <div class="control prev" class:visible={prevVisible} on:click={prev}>
    <img src="/icon/prev_light.svg" alt="scroll arrow facing left" />
  </div>
  <div class="slider" bind:this={slider}>
    {#each imgs as img, i}
      <div class="slide" bind:this={slides[i]}>
        <img src="/img/timeline/{img}" alt="timeline image {img}" />
        <h2>{@html $lang[`timeline_${i + 1}_title`]}</h2>
        <h4>{@html $lang[`timeline_${i + 1}_subtitle_1`]}</h4>
        <h4>
          {@html $lang[`timeline_${i + 1}_year`]} /
          {@html $lang[`timeline_${i + 1}_subtitle_2`]}
        </h4>
        <p>{@html $lang[`timeline_${i + 1}_text`]}</p>
      </div>
    {/each}
  </div>
  <div class="control next" class:visible={nextVisible} on:click={next}>
    <img src="/icon/next_light.svg" alt="scroll arrow facing right" />
  </div>
</section>

<style>
  section {
    overflow: hidden;
    min-height: 100vh;
  }

  .control {
    cursor: pointer;
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

  .slider {
    grid-column: 2 / 12;
    display: flex;
    align-items: flex-start;
    transition: transform var(--t-normal);
  }
  .slide {
    padding: 0 5px;
    width: 100%;
    flex-shrink: 0;
  }
  h2 {
    margin: 20px 0 10px 0;
  }

  @media (min-width: 600px) {
    section {
      grid-template-rows: repeat(2, auto);
    }
    .control {
      width: 80px;
      height: 80px;
    }
    .slide {
      padding: 0 20px;
      width: calc(100% / 3);
    }
  }
</style>

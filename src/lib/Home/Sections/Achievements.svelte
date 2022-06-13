<script>
  import { lang } from '$lib/lang.js';

  const imgs = ['robosub.webp', 'robomaticon.webp', '3mind.webp', 'strategic_science_club.webp'];

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

<section id="achievements" bind:this={section}>
  <div class="wrapper">
    <div class="control prev" class:visible={prevVisible} on:click={prev}>
      <span class="material-symbols-outlined">arrow_back</span>
    </div>
    <h1><span class="material-symbols-outlined">workspace_premium</span> {@html $lang.achievements_title}</h1>
    <div class="slider" bind:this={slider}>
      {#each imgs as img, i}
        <div class="slide" bind:this={slides[i]}>
          <img src="/achievements/{img}" alt="achievement image {img}" />
          <h2>{@html $lang[`achievements_${i + 1}_title`]}</h2>
          <h3>{@html $lang[`achievements_${i + 1}_subtitle_1`]}</h3>
          <h3>
            {@html $lang[`achievements_${i + 1}_year`]} /
            {@html $lang[`achievements_${i + 1}_subtitle_2`]}
          </h3>
          <p>{@html $lang[`achievements_${i + 1}_text`]}</p>
        </div>
      {/each}
    </div>
    <div class="control next" class:visible={nextVisible} on:click={next}>
      <span class="material-symbols-outlined">arrow_forward</span>
    </div>
  </div>
</section>

<style>
  section {
    overflow: hidden;
  }
  .wrapper {
    padding: 1em;
    max-width: var(--w-max);
    margin: 0 auto;
  }

  .control {
    cursor: pointer;
    display: grid;
    place-items: center;
    z-index: 1;
    position: fixed;
    top: 50%;
    border-radius: 2rem;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    background-color: var(--c-complement);
    transition: transform var(--t-fast);
  }
  .control.prev {
    left: 1rem;
    transform: translateX(calc(-100% - 1px - 2rem));
  }
  .control.next {
    right: 1rem;
    transform: translateX(calc(100% + 1px + 2rem));
  }
  .control.visible {
    transform: translateX(0);
  }
  .control span {
    padding: 0.5rem;
    font-size: 2.5rem;
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
  .slide img {
    border: 5px solid var(--c-white);
    border-radius: 2rem;
  }
  h1 {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  h1 span {
    margin-right: 0.5rem;
    font-size: 2.5rem;
  }
  h2 {
    margin: 1rem 0 0.5em 0;
    text-transform: uppercase;
    font-weight: 900;
  }
  h3 {
    color: var(--c-accent-dark);
  }
  p {
    font-size: var(--fs-200);
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

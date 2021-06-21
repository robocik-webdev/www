<script>
  import { fetchJSON } from '../utils.js';
  import { onMount, onDestroy } from 'svelte';

  let fetchTeam = fetchJSON('team.json');

  const time = 5; // s
  const fps = 60; // ms
  const time_delta = 1000 / fps;
  const progress_delta = 1 / ((time * 1000) / time_delta);
  let loaded;
  let interval;
  let progress = 0;
  $: if (loaded) loaded.style.width = `${progress * 100}%`;

  function startProgressbar() {
    interval = setInterval(() => {
      progress += progress_delta;
      if (progress > 1) {
        progress = 0;
        next();
      }
    }, time_delta);
  }
  function stopProgressbar() {
    clearInterval(interval);
  }
  onMount(() => {
    startProgressbar();
  });
  onDestroy(() => {
    stopProgressbar();
  });

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
    if (i == -1) slideIndex = slides.length - 1;
    else slideIndex = i;
  }
  function next() {
    const i = slideIndex + 1;
    if (i == slides.length) slideIndex = 0;
    else slideIndex = i;
  }
  $: {
    if (slides.length > 0) set(slideIndex);
  }
</script>

<svelte:window on:scroll={navigation} on:resize={() => set(slideIndex)} />

<section id="people" bind:this={section}>
  <div
    class="control prev"
    class:visible
    on:click={prev}
    on:mouseenter={stopProgressbar}
    on:mouseleave={startProgressbar}
  >
    <img src="/icon/prev_light.svg" alt="scroll arrow facing left" />
  </div>

  <div class="loader">
    <div class="loaded" bind:this={loaded} />
    <span>#RobocikPeople</span>
  </div>

  <div class="slider" bind:this={slider}>
    {#await fetchTeam then team}
      {#each team as { name, role, contact, text, photo }, i}
        <div class="slide" bind:this={slides[i]}>
          <img src={photo} alt="crew member" />
          <h1>{@html name}</h1>
          <h4>{@html role}</h4>
          <h5>{@html contact}</h5>
          <p>{@html text}</p>
        </div>
      {/each}
    {/await}
  </div>

  <div
    class="control next"
    class:visible
    on:click={next}
    on:mouseenter={stopProgressbar}
    on:mouseleave={startProgressbar}
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

  .loader {
    position: relative;
    display: inline-block;
    margin: 0 0 10px 5px;
    padding: 5px 10px;
    background-color: var(--color-main);
  }
  .loader span {
    z-index: 1;
    position: relative;
    color: var(--color-light);
  }
  .loaded {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--color-complement);
  }
</style>

<script>
  import { langChoice } from '../lang.js';
  import { fetchJSON } from '../utils.js';
  import { onMount, onDestroy } from 'svelte';

  let fetchTeam = fetchJSON('team.json');

  const time = 6; // s
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
  let sliderWidth;
  let slides = [];
  let slideIndex = 0;
  let slideWith;

  let visible = false;
  let start = true;
  let end = false;

  function navigation() {
    const rect = section.getBoundingClientRect();
    const { y, bottom } = rect;
    const w = window.innerHeight / 2;
    visible = y < w && bottom > w;
  }

  function checkVisibleAtOnceAmount() {
    sliderWidth = slider.getBoundingClientRect().width;
    slideWith = slides[0].getBoundingClientRect().width;
    return Math.round(sliderWidth / slideWith);
  }

  function set(i) {
    let translation = -i * slideWith;
    slider.style.transform = `translateX(${translation}px)`;
  }
  function prev() {
    const n = checkVisibleAtOnceAmount();
    let i = slideIndex - n;
    if (i < 0) {
      if (start) {
        start = false;
        end = true;
        const n = checkVisibleAtOnceAmount();
        i = slides.length - 1;
        let offset = n - (slides.length - i);
        i -= offset;
      } else {
        start = true;
        i = 0;
      }
    }
    slideIndex = i;
    end = false;
  }
  function next() {
    const n = checkVisibleAtOnceAmount();
    let i = slideIndex + n;
    let offset = n - (slides.length - i);
    if (offset >= 0) {
      if (end) {
        start = true;
        end = false;
        i = 0;
      } else {
        start = false;
        end = true;
        i -= offset;
      }
    } else {
      start = false;
      end = false;
    }
    slideIndex = i;
  }
  $: {
    if (slider) set(slideIndex);
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

  <div class="loader-wrapper">
    <div class="loader">
      <div class="loaded" bind:this={loaded} />
      <span>#RobocikPeople</span>
    </div>
  </div>

  <div class="slider" bind:this={slider}>
    {#await fetchTeam then team}
      {#each team as t, i}
        <div class="slide" bind:this={slides[i]}>
          <img src={t.photo} alt="crew member" />
          <h1>{t.name} {t.surname}</h1>
          {#each t.division as d}<h2>{d}</h2>{/each}

          {#if $langChoice == 'eng' && t.speciality_eng}
            <h4>{t.speciality_eng}</h4>
          {:else if $langChoice == 'pl' && t.speciality_pl}
            <h4>{t.speciality_pl}</h4>
          {/if}

          {#if t.email}
            <h6 class="email">{t.email}</h6>
          {/if}

          {#if t.linkedin}
            <a href={t.linkedin} target="_blank">
              <img
                class="linkedin"
                src="/icon/contact/linkedin.png"
                alt="linkedin icon"
              />
            </a>
          {/if}

          {#if $langChoice == 'eng' && t.quote_eng}
            <p>{t.quote_eng}</p>
          {:else if $langChoice == 'pl' && t.quote_pl}
            <p>{t.quote_pl}</p>
          {:else if t.quote_eng}
            <p>{t.quote_eng}</p>
          {:else if t.quote_pl}
            <p>{t.quote_pl}</p>
          {/if}
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

  .email {
    margin-top: 10px;
  }
  .linkedin {
    margin-top: 10px;
    filter: invert(1);
    width: 40px;
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

  .loader-wrapper {
    grid-column: 2 / 10;
    grid-row: 1;
    height: auto;
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

  .slider {
    grid-column: 2 / 12;
    grid-row: 2;
    display: flex;
    align-items: flex-start;
    transition: transform var(--t-normal);
  }
  .slide {
    padding: 0 5px;
    width: 100%;
    flex-shrink: 0;
  }

  @media (min-width: 600px) {
    section {
      grid-template-rows: repeat(2, auto);
    }
    .control {
      width: 80px;
      height: 80px;
    }
    .loader {
      margin: 20px 0 35px 20px;
    }
    .slide {
      padding: 0 20px;
      width: calc(100% / 4);
    }
  }
</style>

<script>
  import { langChoice } from '../lang.js';
  import { onMount, onDestroy } from 'svelte';
  import PaPa from 'papaparse';

  async function fetchTeam(lang) {
    const res = await fetch('team.csv');
    const text = await res.text();
    const csv = PaPa.parse(text).data;
    const keys = csv.shift();
    let people = [];
    for (const p of csv) {
      let person = {};
      for (let [i, key] of keys.entries()) {
        const locale = key.match(/eng|pl/);
        if (locale) {
          if (locale == lang) {
            key = key.replace(`_${locale}`, '');
          } else continue;
        }
        const value = p[i].split(';');
        person[key] = value.length == 1 ? value[0] : value;
      }
      people.push(person);
    }
    team = people;
  }

  let team = [];
  $: fetchTeam($langChoice);

  const time = 6; // s
  const fps = 25;
  const time_delta = 1000 / fps;
  const progress_delta = 1 / ((time * 1000) / time_delta);
  let interval;
  let progress = 0;

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
  onMount(startProgressbar);
  onDestroy(stopProgressbar);

  let section;
  let visible = false;

  let slider;
  let fullWidth;
  let cards = [];
  let cardWidth;
  let swipeAmount;

  let cardIndex = 0;
  $: offset = -cardIndex * cardWidth;

  function refresh() {
    // sliderWidth = slider?.getBoundingClientRect().width;
    cardWidth = cards[0]?.getBoundingClientRect().width;
    swipeAmount = Math.round(fullWidth / cardWidth);
    console.log(fullWidth);
    console.log(cardWidth);
    console.log(swipeAmount);
  }

  function navigation() {
    const rect = section.getBoundingClientRect();
    const { y, bottom } = rect;
    const w = window.innerHeight / 2;
    visible = y < w && bottom > w;
  }

  function prev() {
    refresh();
    let i = cardIndex - swipeAmount;
    if (i < 0) i = Math.floor(cards.length / swipeAmount) * swipeAmount;
    cardIndex = i;
  }
  function next() {
    refresh();
    let i = cardIndex + swipeAmount;
    if (i > cards.length - 1) i = 0;
    cardIndex = i;
  }
</script>

<svelte:window on:scroll={navigation} on:resize={refresh} />

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

  <div class="loader-wrapper" bind:offsetWidth={fullWidth}>
    <div class="loader">
      <div class="loaded" style="width: {progress * 100}%" />
      <span>#RobocikPeople</span>
    </div>
  </div>

  <div
    class="slider"
    style="transform: translateX({offset}px)"
    bind:this={slider}
  >
    {#each team as t, i}
      <div class="card" bind:this={cards[i]}>
        <img src={t.photo} alt="crew member" />
        <h2 class="name">{t.name} {t.surname}</h2>

        {#if Array.isArray(t.division)}
          <div class="division">
            {#each t.division as d}
              <h3>{d}</h3>
            {/each}
          </div>
        {:else}
          <h3 class="division">{t.division}</h3>
        {/if}

        {#if t.specialty}
          <p class="specialty">{t.specialty}</p>
        {/if}

        <div class="contact">
          {#if t.linkedin}
            <a href={t.linkedin} target="_blank" class="linkedin">
              <img src="/icon/contact/linkedin.png" alt="linkedin icon" />
            </a>
          {/if}
          {#if t.email}
            <a href="mailto:{t.linkedin}" class="email">
              <h6>{t.email}</h6>
            </a>
          {/if}
        </div>

        {#if t.quote}
          <p class="quote">{t.quote}</p>
        {/if}
      </div>
    {/each}
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
    grid-column: 2 / 12;
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
  .card {
    padding: 0 5px;
    width: 100%;
    flex-shrink: 0;
  }
  .name {
    margin: 15px 0 5px 0;
    font-weight: 900;
  }
  .division {
    margin-top: 5px;
  }
  .specialty {
    margin-top: 5px;
    line-height: 1.2;
  }
  .contact {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .linkedin img {
    filter: invert(1);
    margin-right: 10px;
    width: 25px;
  }
  .email {
    text-decoration: none;
  }
  .quote {
    margin-top: 20px;
    line-height: 1.2;
  }

  @media (min-width: 600px) {
    /* section {
      grid-template-rows: repeat(2, auto);
    } */
    .control {
      width: 80px;
      height: 80px;
    }
    .loader {
      margin: 20px 0 35px 20px;
    }
    .card {
      padding: 0 20px;
      width: calc(100vw / 5);
    }
  }
</style>

<script>
  import { lang, langChoice } from '$lib/lang';
  import { onMount, onDestroy } from 'svelte';
  import team from '$lib/data/team.json';

  const divisions = ['electronics', 'software', 'construction', 'marketing'];

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

  let people;
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
  }

  function navigation() {
    const rect = people.getBoundingClientRect();
    const { y, bottom } = rect;
    const w = window.innerHeight / 2;
    visible = y < w && bottom > w;
  }

  function prev() {
    refresh();
    let i = cardIndex - swipeAmount;
    if (i < 0) i = Math.floor(cards.length / swipeAmount) * swipeAmount - 1;
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

<section id="team">
  <div class="wrapper">
    <div class="divisions">
      {#each divisions as division}
        <div class="division">
          <div class="title">
            <img src="/team/divisions/{division}.svg" alt="division icon" />
            <h2>{@html $lang[`team_${division}_title`]}</h2>
          </div>
          <p>{@html $lang[`team_${division}_text`]}</p>
        </div>
      {/each}
    </div>
  </div>
  <div class="people" bind:this={people}>
    <div
      class="control prev"
      class:visible
      on:click={prev}
      on:mouseenter={stopProgressbar}
      on:mouseleave={startProgressbar}
    >
      <span class="material-symbols-outlined">arrow_back</span>
    </div>

    <div class="loader-wrapper" bind:offsetWidth={fullWidth}>
      <div class="loader">
        <div class="loaded" style="width: {progress * 100}%" />
        <span>#RobocikPeople</span>
      </div>
    </div>

    <div class="slider" style="transform: translateX({offset}px)" bind:this={slider}>
      {#each team as t, i}
        <div class="card" bind:this={cards[i]}>
          <img class="photo" src="/team/photos/{t.photo}" alt="crew member" />
          <h2 class="name">{t.name}<br />{t.surname}</h2>

          {#if Array.isArray(t.division[$langChoice])}
            <div class="division">
              {#each t.division[$langChoice] as d}
                <h3>{d}</h3>
              {/each}
            </div>
          {:else if t.division[$langChoice]}
            <h3 class="division">{t.division[$langChoice]}</h3>
          {/if}

          {#if t.specialty[$langChoice]}
            <h4 class="specialty">{t.specialty[$langChoice]}</h4>
          {/if}

          {#if t.quote[$langChoice]}
            <p class="quote">{t.quote[$langChoice]}</p>
          {/if}

          <div class="contact">
            {#if t.linkedin}
              <a href={t.linkedin} target="_blank" class="linkedin">
                <img src="/social/linkedin-light.svg" alt="linkedin icon" />
              </a>
            {/if}
          </div>
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
      <span class="material-symbols-outlined">arrow_forward</span>
    </div>
  </div>
</section>

<style>
  .wrapper {
    margin: 0 auto;
    max-width: var(--w-max);
  }

  .divisions {
    padding: 1rem;
  }
  @media screen and (min-width: 1000px) {
    .divisions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }
  .division .title {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
  }
  .division .title img {
    display: inline-block;
    width: 20%;
  }
  .division .title h2 {
    font-weight: 900;
    margin: 0;
  }

  .people {
    overflow: hidden;
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

  .loader-wrapper {
    grid-row: 1;
    display: flex;
    justify-content: center;
    height: auto;
  }
  .loader {
    overflow: hidden;
    border-radius: 2rem;
    position: relative;
    display: inline-block;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--c-main);
  }
  .loader span {
    z-index: 1;
    position: relative;
    color: var(--c-white);
  }
  .loaded {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2rem;
    width: 0;
    height: 100%;
    background-color: var(--c-complement);
  }

  .slider {
    grid-column: 2 / 12;
    grid-row: 2;
    display: flex;
    align-items: flex-start;
    transition: transform var(--t-normal);
  }
  .card {
    padding: 0 1rem;
    width: 100%;
    flex-shrink: 0;
    text-align: center;
  }
  .card .photo {
    border-radius: 2rem;
    border: solid 5px var(--c-white);
  }
  .card .name {
    margin: 15px 0 5px 0;
    font-weight: 900;
  }
  .card .division {
    margin: 0;
    color: var(--c-accent-dark);
  }
  .card .specialty {
    margin-top: 1rem;
    line-height: 1.2;
  }
  .card .contact {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .card .linkedin {
    display: flex;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    margin-top: 1rem;
  }
  .card .linkedin img {
    width: 2rem;
  }
  .card .quote {
    margin-top: 20px;
    line-height: 1.2;
  }
  .card h3 {
    margin: 0;
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

<script>
  import { fly } from 'svelte/transition';
  import { lang } from '$lib/lang';
  import { docsOpened } from '$lib/website/stores';
  import Button from '$lib/website/Button.svelte';

  const points = [
    [17, 61],
    [22, 36],
    [78, 55],
    [39, 58],
    [69, 28],
    [86, 16],
    [60, 72],
    [49, 36]
  ];

  const icons = [
    '1_depth',
    '2_weight',
    '3_vision',
    '4_hydrophones',
    '5_propulsion',
    '6_navigation',
    '7_nvidia',
    '8_torpedoes',
    '9_ahrs'
  ];

  let cardTitle;
  let cardText;
  let cardVisible = false;
  let iconCard = false;

  async function activatePointCard(i) {
    cardVisible = true;
    iconCard = false;
    cardTitle = $lang[`drone_point_card_${i + 1}_title`];
    cardText = $lang[`drone_point_card_${i + 1}_text`];
  }
  async function activateIconCard(i) {
    cardVisible = true;
    iconCard = true;
    cardTitle = $lang[`drone_icon_card_${i + 1}_title`];
    cardText = $lang[`drone_icon_card_${i + 1}_text`];
  }
  function deactivateCard() {
    cardVisible = false;
  }
</script>

<section id="project">
  <div class="wrapper">
    <div class="text">
      <span>{@html $lang.project_subtitle}</span>
      <h1>{@html $lang.project_title}</h1>
      <div class="content">
        {#if cardVisible}
          <div transition:fly={{ y: 30, duration: 500 }} id="project-card" class:card-icon={iconCard}>
            <h3>{cardTitle}</h3>
            <p>{cardText}</p>
          </div>
        {:else}
          <div transition:fly={{ y: 30, duration: 500 }}>
            <p>{@html $lang.project_text}</p>
            <Button on:click={() => ($docsOpened = true)}>{@html $lang.project_docs}</Button>
          </div>
        {/if}
        <div class="fish">
          <img src="/decor/rekin3.webp" alt="" class="shark" />
        </div>
      </div>
    </div>

    <div class="drone">
      <div class="render-wrapper">
        <div class="render">
          <img src="/drones/bluenemo/bluenemo-4.webp" alt="AUV render" />
          {#each points as point, i}
            <div
              class="point"
              style="left:{point[0]}%; top:{point[1]}%;"
              on:mouseenter={() => activatePointCard(i)}
              on:mouseleave={deactivateCard}
            />
          {/each}
        </div>
      </div>

      <div class="icons-wrapper">
        <div class="icons">
          {#each icons as icon, i}
            <div class="icon" on:mouseenter={() => activateIconCard(i)} on:mouseleave={deactivateCard}>
              <img src="/drones/bluenemo/icons/{icon}.png" alt="InsideAUV: {icon}" />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    margin-top: 3em;
    margin-bottom: 2em;
  }
  .wrapper {
    padding: 1em;
    max-width: var(--w-max);
    margin: 0 auto;
  }
  @media screen and (min-width: 1000px) {
    .wrapper {
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 1000px) {
    .text {
      width: 55%;
    }
  }
  .text p {
    margin-bottom: 1em;
  }
  .content {
    position: relative;
    height: calc(var(--fs-400) * 15);
  }
  #project-card {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2rem;
    padding: 1rem 2rem;
    width: 100%;
    background-color: var(--c-accent-light);
  }
  #project-card.card-icon {
    background-color: var(--c-accent-dark);
  }
  #project-card h3 {
    margin-bottom: 1rem;
  }
  #project-card * {
    color: var(--c-main);
  }

  .fish {
    pointer-events: none;
    z-index: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70%;
    transform: translateY(100%);
  }

  @media screen and (min-width: 1000px) {
    .drone {
      width: 35%;
    }
  }

  .render-wrapper {
    margin-top: 20px;
  }
  .render {
    position: relative;
    height: auto;
  }
  @keyframes pulse {
    from {
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  .point {
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    height: 1.5em;
    width: 1.5em;
    border: solid 1px var(--c-white);
    opacity: 0.5;
    background-color: var(--c-complement);
    transform: translate(-50%, -50%);
    transition: transform var(--t-fast), background-color var(--t-fast);
    animation: pulse 500ms alternate infinite;
  }
  .point:hover {
    background-color: var(--c-accent-light);
    transform: translate(-50%, -50%) scale(1.3);
  }

  .icons-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .icons {
    grid-column: 3 / 11;
    grid-row: 2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }
  .icon {
    cursor: pointer;
    overflow: hidden;
    display: grid;
    border-radius: 1rem;
    place-items: center;
    position: relative;
    padding: 17.5%;
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: var(--c-complement);
    transition: background-color var(--t-fast);
  }
  .icon:hover {
    background-color: var(--c-accent-dark);
  }
</style>

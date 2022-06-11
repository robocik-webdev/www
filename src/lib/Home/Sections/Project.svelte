<!-- <script>
  import { fly } from 'svelte/transition';
  import { lang } from '$lib/lang.js';

  const points = [
    [28, 69],
    [59, 39],
    [70, 58],
    [39, 58],
    [76, 28],
    [58, 18],
    [63, 79],
    [49, 50]
  ];

  const icons = [
    '1_depth.svg',
    '2_weight.svg',
    '3_cameras.svg',
    '4_sound.svg',
    '5_engine.svg',
    '6_radar.svg',
    '7_nvidia.svg',
    '8_torpedes.svg',
    '9_xsens.svg'
  ];

  let cardTitle;
  let cardText;
  let cardVisible = false;
  let iconCard = false;

  function activatePointCard(i) {
    cardVisible = true;
    iconCard = false;
    cardTitle = $lang[`drone_point_card_${i + 1}_title`];
    cardText = $lang[`drone_point_card_${i + 1}_text`];
  }
  function activateIconCard(i) {
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
  <div class="text">
    <h2>{@html $lang.project_subtitle}</h2>
    <h1>{@html $lang.project_title}</h1>
    <div class="content">
      <p>{@html $lang.project_text_1}</p>
      <p>{@html $lang.project_text_2}</p>
      <h6>{@html $lang.project_info}</h6>
      {#if cardVisible}
        <div
          transition:fly={{ y: 10, duration: 300 }}
          class="card"
          class:card--icon={iconCard}
        >
          <h3>{cardTitle}</h3>
          <p>{cardText}</p>
        </div>
      {/if}
    </div>
  </div>

  <div class="render">
    <div class="render-wrapper">
      <img src="/img/rov4/drone.webp" alt="AUV render" />
      {#each points as point, i}
        <div
          class="point"
          style="left:{point[0]}%; top:{point[1]}%;"
          on:mouseenter={() => {
            activatePointCard(i);
          }}
          on:mouseleave={deactivateCard}
        />
      {/each}
    </div>
  </div>

  <div class="icons">
    {#each icons as icon, i}
      <img
        class="icon"
        src="/icon/auv_inside/{icon}"
        alt="InsideAUV: {icon}"
        on:mouseenter={() => {
          activateIconCard(i);
        }}
        on:mouseleave={deactivateCard}
      />
    {/each}
  </div>
</section>

<style>
  section {
    margin-bottom: 40px;
  }

  .text {
    grid-column: 3 / span 3;
  }
  .content {
    position: relative;
  }
  .card {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    background-color: var(--color-complement);
  }
  .card * {
    color: var(--color-light);
  }
  .card--icon {
    background-color: rgb(194, 194, 194);
  }
  .card--icon * {
    color: var(--color-dark);
  }

  .render {
    grid-column: 7 / 11;
    margin-top: 20px;
  }
  .render-wrapper {
    position: relative;
    height: auto;
  }
  .point {
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    border: solid 1px var(--color-light);
    opacity: 0.5;
    background-color: var(--color-complement);
    transform: translate(-50%, -50%);
    transition: transform var(--t-fast), background-color var(--t-fast);
  }
  .point:hover {
    background-color: var(--color-main);
    transform: translate(-50%, -50%) scale(1.2);
  }

  .icons {
    grid-column: 3 / 11;
    grid-row: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  .icon {
    cursor: pointer;
    margin: 5px;
    width: 18vw;
    border-radius: 2vw;
    transition: background-color var(--t-fast);
  }
  .icon:hover {
    background-color: rgb(194, 194, 194);
  }

  @media (min-width: 600px) {
    section {
      grid-template-rows: repeat(2, auto);
      margin-bottom: 80px;
    }

    .icons {
      flex-wrap: nowrap;
      justify-content: space-between;
      margin-top: 40px;
    }
    .icon {
      width: 5vw;
      border-radius: 0.5vw;
    }
  }
</style> -->

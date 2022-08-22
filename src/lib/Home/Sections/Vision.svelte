<script>
  import { lang } from '$lib/lang.js';

  function z(val, oldMin, oldMax, newMin, newMax) {
    // convert value from (oldMin, oldMax) range to (newMin, newMax)
    const oldRange = oldMax - oldMin;
    const newRange = newMax - newMin;
    return ((val - oldMin) * newRange) / oldRange + newMin;
  }

  let y; // scrollY
  let hw; // window height (cta height)
  let hs; // section height (vision section height)
  let ws; // section width (vision section height)
  let hr; // drone height
  $: hp = y / (hw + hs); // hs progress from 0 to 1
  $: zp = hp < 0.5 ? z(hp, 0, 0.5, 0, 1) : z(hp, 0.5, 1, 1, 0); // hs progress from 0 to 1 to 0
  $: s = zp * 1.5;
  // $: r = 0(z(hp) * -y) / 40; // rotation
  $: r = hp * 90; // rotation
  // $: ty = y - hw; // translation y
  // $: tx = hp * ws * 0.1; // translation x
  $: ty = hp < 0.1 ? 0.1 * hs : hp > 0.75 ? 0.75 * hs : hp * hs; // translation y
  $: tx = zp * hr * 0.15; // translation x
</script>

<section id="vision" bind:clientHeight={hs} bind:clientWidth={ws}>
  <div class="wrapper">
    <div class="elements">
      <div class="element">
        <div class="title">
          <img src="/vision/vision.png" alt="vision icon" />
          <h2>{@html $lang.vision_vision_title}</h2>
        </div>
        <p>{@html $lang.vision_vision_text}</p>
      </div>

      <div class="element">
        <div class="title">
          <img src="/vision/mission.png" alt="mission icon" />
          <h2>{@html $lang.vision_mission_title}</h2>
        </div>
        <p>{@html $lang.vision_mission_text}</p>
      </div>

      <div class="element">
        <div class="title">
          <img src="/vision/values.png" alt="values icon" />
          <h2>{@html $lang.vision_values_title}</h2>
        </div>
        <p>{@html $lang.vision_values_text}</p>
      </div>
    </div>
  </div>

  <div
    class="drone"
    style="top: {ty}px; right: {tx}px; transform: rotate({r}deg) scale({s}) translateY(-50%);"
    bind:clientHeight={hr}
  >
    <img src="/drones/bluenemo/bluenemo-1.webp" alt="bluenemo view from the top" />
  </div>
</section>

<svelte:window bind:scrollY={y} bind:innerHeight={hw} />

<style>
  section {
    overflow: hidden;
    position: relative;
  }
  .wrapper {
    z-index: 1;
    position: relative;
    margin: 0 auto;
    max-width: var(--w-max);
  }

  .elements {
    padding: 1em;
    max-width: 35ch;
  }
  .element {
    margin-bottom: 3rem;
  }
  .title {
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;
  }
  .title img {
    display: inline-block;
    width: 20%;
  }
  .title h2 {
    margin: 0;
    font-weight: 900;
  }

  .drone {
    z-index: 0;
    position: absolute;
    top: 0;
    /* top: 50%; */
    right: 0;
    width: 25vw;
    transform-origin: top center;
  }
  @media screen and (max-width: 550px) {
    .drone {
      display: none;
    }
  }
</style>

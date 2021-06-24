<script>
  import { lang } from '../lang.js';
</script>

<section id="vision">
  <div class="element">
    <img src="/icon/vision/vision_dark.png" alt="vision icon" />
    <div class="text">
      <h2>{@html $lang.vision_vision_title}</h2>
      <p>{@html $lang.vision_vision_text}</p>
    </div>
  </div>

  <div class="element">
    <img src="/icon/vision/mission_dark.png" alt="mission icon" />
    <div class="text">
      <h2>{@html $lang.vision_mission_title}</h2>
      <p>{@html $lang.vision_mission_text}</p>
    </div>
  </div>

  <div class="element">
    <img src="/icon/vision/values_dark.png" alt="values icon" />
    <div class="text">
      <h2>{@html $lang.vision_values_title}</h2>
      <p>{@html $lang.vision_values_text}</p>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    margin-top: 80px;
  }
  .element {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 40px 0;
  }
  img {
    display: inline-block;
    width: 20%;
    margin-right: 20px;
  }

  @media (min-width: 600px) {
    .element {
      width: 50%;
      margin: 40px 0;
    }
    img {
      width: 100px;
      margin-right: 60px;
    }
  }
</style>

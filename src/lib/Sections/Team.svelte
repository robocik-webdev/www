<script>
  import { lang } from '$lib/lang.js';
  const divisions = ['electronics', 'software', 'construction', 'marketing'];
</script>

<section id="team" class="dark">
  <div class="crew">
    <div class="img">
      <img src="/icon/divisions/crew.png" alt="crew icon" />
    </div>
    <div class="text">
      <h1>{@html $lang.team_title}</h1>
      <p>{@html $lang.team_text}</p>
    </div>
  </div>

  <div class="divisions">
    {#each divisions as division}
      <div class="card">
        <img src="/icon/divisions/{division}.svg" alt="{division} division" />
        <h2>{@html $lang[`team_${division}_title`]}</h2>
        <p>{@html $lang[`team_${division}_text`]}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    padding: 60px 20px;
  }

  .crew {
    grid-column: 3 / 11;
    display: flex;
    flex-flow: column;
  }
  .crew .img {
    margin: auto;
    width: 50%;
  }
  .crew .text {
    text-align: center;
  }

  .divisions {
    grid-column: 3 / 11;
    grid-row: 2;
    display: flex;
    flex-flow: column;
  }
  .card {
    margin-top: 40px;
    /* width: 100%; */
    text-align: center;
  }
  .card img {
    margin: auto;
    margin-bottom: 20px;
    width: 50%;
  }

  @media (min-width: 600px) {
    section {
      padding: 60px 0;
      grid-template-rows: repeat(2, auto);
    }

    .crew {
      flex-flow: row;
    }
    .crew .text {
      margin-left: 80px;
    }

    .divisions {
      flex-flow: row;
      justify-content: space-between;
      margin-top: 80px;
    }
    .card {
      width: 25%;
    }
  }
</style>

<script>
  import { lang } from '$lib/lang.js';
  import { partnersOpened } from '$lib/Home/stores.js';
  import Popup from '$lib/Home/Components/Popup.svelte';
  import Button from '$lib/Home/Components/Button.svelte';

  const partners = {
    platinum: [
      [
        ['1_1__tme.svg', 'https://www.tme.eu/en/'],
        ['1_2__pwr.png', 'https://pwr.edu.pl/'],
        ['1_3__cnc_kramet.png', 'http://cnckramet.pl/index.php/en/']
      ],
      [
        ['2_20__mitutoyo.png', 'https://www.mitutoyo.pl/pl_pl'],
        ['2_21__bossard.svg', 'https://www.bossard.com/pl-pl/'],
        ['2_6__botland.png', 'https://botland.com.pl/pl/']
      ]
    ],
    gold: [
      [
        ['1_4__dps_software.svg', 'https://www.dps-software.pl/'],
        ['1_5__aquapark_wroclaw.svg', 'https://aquapark.wroc.pl/'],
        ['1_6__w4.png', 'http://weka.pwr.edu.pl/']
      ],
      [
        ['1_7__gralmarine.png', 'https://www.gralmarine.com/'],
        ['1_8__wolczanka.svg', 'https://www.wolczanka.pl/'],
        ['1_9__lapp.svg', 'https://www.lappgroup.com/']
      ],
      [
        ['1_10__inprogress.svg', 'https://inprogress.pl/'],
        ['2_22__alox.png', 'https://www.alox.pl/'],
        ['2_23__3dconnexion.png', 'https://3dconnexion.com/pl/']
      ]
    ],
    silver: [
      [
        ['2_1__wobit.png', 'http://www.wobit.com.pl/'],
        ['2_2__zkz.png', 'http://zkz.net.pl/pl/'],
        ['2_3__wimarol.png', 'https://www.wimarol.pl/'],
        ['2_4__ppg.png', 'https://www.ppg.com/'],
        ['2_5__manus.png', 'https://manus.pl/']
      ],
      [
        ['2_7__toya.png', 'https://toya24.pl/'],
        ['2_8__2b3d.png', 'https://2b3d.pl/'],
        ['2_9__cyfrus.png', 'https://cyfrus.pl/'],
        ['2_10__power_rubber.png', 'https://powerrubber.com/'],
        ['2_11__amelectronics.png', 'https://amelectronics.pl/']
      ],
      [
        ['2_12__fabryka_pcb.png', 'https://www.fabrykapcb.pl/'],
        ['2_13__elbit.png', 'http://www.elbit.info.pl/'],
        ['2_14__metel.gif', 'https://www.metel.eu/en/newdesign'],
        ['2_15__agent_tools.svg', 'http://agentools.pl/'],
        ['2_16__boltman.svg', 'https://boltman.pl/']
      ],
      [
        ['2_17__blue_robotics.png', 'https://boltman.pl/'],
        ['2_19__mechatronika_dla_wszystkich.png', 'https://mechatronikadlawszystkich.pl/']
      ]
    ]
  };
</script>

<Popup>
  <div class="close" on:click={() => ($partnersOpened = false)}>
    <span class="material-symbols-outlined">close</span>
  </div>

  <div class="content">
    <h1>{@html $lang.partners_title}</h1>
    <p>{@html $lang.partners_text}</p>

    <p>{@html $lang.partners_text_brochure}</p>
    <div class="brochures">
      <Button href="https://drive.google.com/file/d/1Kne9tE6h_qbhRd6RwA9q6cPlMD5z6mtT/view?usp=sharing" target="_blank">
        <span class="material-symbols-outlined">download</span>ENG
      </Button>
      <Button href="https://drive.google.com/file/d/1vgoWluqU-giMLhKhlXG3ZxIqI9atl6mE/view?usp=sharing" target="_blank">
        <span class="material-symbols-outlined">download</span>PL
      </Button>
    </div>

    {#each Object.keys(partners) as tier}
      <h2>{@html $lang[`partners_${tier}`]}</h2>
      <hr />
      <div class="icons {tier}">
        {#each partners[tier] as row}
          <div class="row">
            {#each row as partner}
              <a href={partner[1]} class="icon">
                <img src="/partners/{partner[0]}" alt="partner {partner[0]}" />
              </a>
            {/each}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</Popup>

<style>
  * {
    color: var(--c-main);
  }

  h1,
  p {
    margin-bottom: 1rem;
    text-align: center;
  }

  h2 {
    text-align: center;
  }
  hr {
    width: 25%;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .icons {
    margin-bottom: 80px;
  }
  .icon {
    width: 50%;
    padding: 10px 3px;
  }

  .close {
    cursor: pointer;
    position: absolute;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .close span {
    font-size: 2.5rem;
  }

  .content {
    margin-top: 50px;
  }

  @media (min-width: 600px) {
    .close {
      width: 60px;
      height: 60px;
    }

    .content {
      margin-top: 60px;
    }

    .icon {
      padding: 20px;
    }
    .platinum .icon {
      width: 20%;
    }
    .gold .icon {
      width: 15%;
    }
    .silver .icon {
      width: 10%;
    }
    .icon img {
      width: 100%;
    }
  }

  .brochures {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  .brochures span {
    color: var(--c-white);
  }
</style>

<script>
  import { lang } from '$lib/lang';
  import { partnersOpened } from '$lib/website/stores';
  import Popup from '$lib/website/Popup.svelte';
  import Button from '$lib/website/Button.svelte';

  const partners = {
    strategic: [
      [
        ['pwr.png', 'https://pwr.edu.pl/'],
        ['manus.png', 'https://manus.pl/']
      ]
    ],
    platinum: [
      [
        ['tme.svg', 'https://www.tme.eu/en/'],
        ['cnc_kramet.png', 'http://cnckramet.pl/index.php/en/']
      ],
      [
        ['mitutoyo.png', 'https://www.mitutoyo.pl/pl_pl'],
        ['bossard.svg', 'https://www.bossard.com/pl-pl/'],
        ['botland.png', 'https://botland.com.pl/pl/']
      ]
    ],
    gold: [
      [
        ['dps_software.svg', 'https://www.dps-software.pl/'],
        ['aquapark_wroclaw.svg', 'https://aquapark.wroc.pl/'],
        ['w4.png', 'http://weka.pwr.edu.pl/']
      ],
      [
        ['gralmarine.png', 'https://www.gralmarine.com/'],
        ['wolczanka.svg', 'https://www.wolczanka.pl/'],
        ['lapp.svg', 'https://www.lappgroup.com/'],
        ['sklad_techniczny.png', 'https://www.skladtechniczny.pl/en/home/']
      ],
      [
        ['inprogress.svg', 'https://inprogress.pl/'],
        ['alox.png', 'https://www.alox.pl/'],
        ['3dconnexion.png', 'https://3dconnexion.com/pl/']
      ]
    ],
    silver: [
      [
        ['wobit.png', 'http://www.wobit.com.pl/'],
        ['zkz.png', 'http://zkz.net.pl/pl/'],
        ['wimarol.png', 'https://www.wimarol.pl/'],
        ['ppg.png', 'https://www.ppg.com/']
      ],
      [
        ['toya.png', 'https://toya24.pl/'],
        ['2b3d.png', 'https://2b3d.pl/'],
        ['cyfrus.png', 'https://cyfrus.pl/'],
        ['power_rubber.png', 'https://powerrubber.com/'],
        ['amelectronics.png', 'https://amelectronics.pl/']
      ],
      [
        ['fabryka_pcb.png', 'https://www.fabrykapcb.pl/'],
        ['elbit.png', 'http://www.elbit.info.pl/'],
        ['metel.gif', 'https://www.metel.eu/en/newdesign'],
        ['agent_tools.svg', 'http://agentools.pl/'],
        ['boltman.svg', 'https://boltman.pl/']
      ],
      [
        ['blue_robotics.png', 'https://boltman.pl/'],
        ['mechatronika_dla_wszystkich.png', 'https://mechatronikadlawszystkich.pl/']
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

  .close {
    cursor: pointer;
    position: absolute;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    width: 100%;
  }
  .close span {
    font-size: 2.5rem;
  }

  .content {
    margin: 1rem;
    margin-top: 2rem;
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

  @media (min-width: 600px) {
    .icon {
      padding: 20px;
    }
    .strategic .icon {
      width: 20%;
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

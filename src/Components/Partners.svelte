<script>
  import { fade } from 'svelte/transition';
  import { visible } from '../partners.js';
  import { hidden as headerHidden } from '../header.js';
  import { lang } from '../lang.js';

  function hide() {
    $visible = false;
    $headerHidden = false;
  }

  const partners = {
    gold: [
      [
        ['1_1__tme.svg', 'https://www.tme.eu/en/'],
        ['1_2__pwr.png', 'https://pwr.edu.pl/'],
        ['1_3__cnc_kramet.png', 'http://cnckramet.pl/index.php/en/'],
      ],
      [
        ['1_4__dps_software.svg', 'https://www.dps-software.pl/'],
        ['1_5__aquapark_wroclaw.svg', 'https://aquapark.wroc.pl/'],
        ['1_6__w4.png', 'http://weka.pwr.edu.pl/'],
      ],
      [
        ['1_7__gralmarine.png', 'https://www.gralmarine.com/'],
        ['1_8__wolczanka.svg', 'https://www.wolczanka.pl/'],
      ],
      [
        ['1_9__lapp.svg', 'https://www.lappgroup.com/'],
        ['1_10__inprogress.svg', 'https://inprogress.pl/'],
      ],
    ],
    silver: [
      [
        ['2_1__wobit.png', 'http://www.wobit.com.pl/'],
        ['2_2__zkz.png', 'http://zkz.net.pl/pl/'],
        ['2_3__wimarol.png', 'https://www.wimarol.pl/'],
        ['2_4__ppg.png', 'https://www.ppg.com/'],
        ['2_5__manus.png', 'https://manus.pl/'],
      ],
      [
        ['2_6__botland.png', 'https://botland.com.pl/pl/'],
        ['2_7__toya.png', 'https://toya24.pl/'],
        ['2_8__2b3d.png', 'https://2b3d.pl/'],
        ['2_9__cyfrus.png', 'https://cyfrus.pl/'],
        ['2_10__power_rubber.png', 'https://powerrubber.com/'],
      ],
      [
        ['2_11__amelectronics.png', 'https://amelectronics.pl/'],
        ['2_12__fabryka_pcb.png', 'https://www.fabrykapcb.pl/'],
        ['2_13__elbit.png', 'http://www.elbit.info.pl/'],
        ['2_14__metel.gif', 'https://www.metel.eu/en/newdesign'],
        ['2_15__agent_tools.svg', 'http://agentools.pl/'],
      ],
      [
        ['2_16__boltman.svg', 'https://boltman.pl/'],
        ['2_17__blue_robotics.png', 'https://boltman.pl/'],
        [
          '2_19__mechatronika_dla_wszystkich.png',
          'https://mechatronikadlawszystkich.pl/',
        ],
      ],
    ],
  };
</script>

<div transition:fade={{ duration: 400 }} class="wrapper">
  <div class="popup">
    <div class="close" on:click={hide}>
      <img src="/icon/close_dark.svg" alt="cross icon" />
    </div>

    <div class="content">
      <h1>{@html $lang.partners_title}</h1>
      <p>{@html $lang.partners_text}</p>

      <hr />

      <div class="icons gold">
        {#each partners.gold as row}
          <div class="row">
            {#each row as partner}
              <a href={partner[1]} class="icon">
                <img
                  src="/img/partners/{partner[0]}"
                  alt="partner {partner[0]}"
                />
              </a>
            {/each}
          </div>
        {/each}
      </div>

      <div class="icons silver">
        {#each partners.silver as row}
          <div class="row">
            {#each row as partner}
              <a href={partner[1]} class="icon">
                <img
                  src="/img/partners/{partner[0]}"
                  alt="partner {partner[0]}"
                />
              </a>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .wrapper {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 20px 1fr 20px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
  }
  .popup {
    overflow-y: scroll;
    grid-column: 2 / 12;
    grid-row: 2;
    position: relative;
    padding: 20px;
    background: var(--color-light);
  }

  h1,
  p {
    margin-bottom: 40px;
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
    margin-left: auto;
    top: 0;
    right: 0;
    padding: 10px;
    width: 50px;
    height: 50px;
    transition: background-color var(--t-fast);
  }
  .close:hover {
    background-color: rgb(235, 235, 235);
  }

  .content {
    margin-top: 50px;
  }

  @media (min-width: 600px) {
    .wrapper {
      /* grid-template-rows: calc(100vw / 12) 1fr calc(100vw / 12); */
      grid-template-rows: 80px 1fr 30px;
    }
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
    .gold .icon {
      width: 15%;
    }
    .silver .icon {
      width: 10vw;
    }
    .icon img {
      width: 100%;
    }
  }
</style>

<script>
  import { scrollto } from '$lib/utils.js';
  import { lang } from '$lib/Home/Docs/lang.js';
  import { opened } from '$lib/Home/Docs/sidebar.js';

  function toggleSidebar() {
    $opened = !$opened;
  }

  const items = [
    { depth: 0, title: 'ReportSummary' },
    { depth: 0, title: 'OrganizationChart' },
    { depth: 0, title: 'VehicleDesign' },
    { depth: 1, title: 'SystemDesign' },
    { depth: 1, title: 'MechanicalDesign' },
    { depth: 2, title: 'MechanicalDesignProcess' },
    { depth: 2, title: 'Materials' },
    { depth: 2, title: 'ProductionMethods' },
    { depth: 2, title: 'PhysicalProperties' },
    { depth: 1, title: 'ElectronicDesign' },
    { depth: 2, title: 'ElectronicDesignProcess' },
    { depth: 3, title: 'PowerSupply' },
    { depth: 3, title: 'LogicControl' },
    { depth: 3, title: 'Sensors' },
    { depth: 3, title: 'Communication' },
    { depth: 3, title: 'VisionSystem' },
    { depth: 2, title: 'AlgorithmDesign' },
    { depth: 2, title: 'SoftwareDesign' },
    { depth: 1, title: 'ExternalInterfaces' },
    { depth: 0, title: 'Security' },
    { depth: 0, title: 'Experience' }
  ];
</script>

<nav class:opened={$opened} on:click={toggleSidebar}>
  <div class="wrapper">
    {#each items as { depth, title }}
      <li role="button" class={'depth--' + depth} on:click={() => scrollto('#' + title, -105, '#docs-content')}>
        {$lang[title.toLowerCase() + 'Header']}
      </li>
    {/each}
  </div>
</nav>

<style>
  nav {
    --header-height: 85px;
    overflow-y: auto;
    z-index: 1;
    position: absolute;
    top: var(--header-height);
    padding: 1rem;
    width: 100%;
    height: calc(100% - var(--header-height));
    background-color: var(--c-accent-light);
    transform: translateX(100%);
    transition: transform 400ms;
    border-radius: 2rem;
  }
  nav.opened {
    transform: translateX(0%);
  }

  .wrapper {
    overflow-y: auto;
  }

  li {
    cursor: pointer;
    display: block;
    padding: 1rem;
    font-size: 1rem;
    background-color: var(--c-accent-dark);
    border-radius: 10px;
    margin-bottom: 0.5rem;
  }
  li:hover {
    background-color: var(--color-main);
    color: var(--color-light);
  }
  li.depth--1 {
    margin-left: 1rem;
  }
  li.depth--2 {
    margin-left: 1.5rem;
  }
  li.depth--3 {
    margin-left: 2rem;
  }

  @media (min-width: 600px) {
    nav {
      --width: 35%;
      --header-height: 105px;
      position: sticky;
      position: absolute;
      height: calc(100vh - var(--header-height));
      width: var(--width);
      transform: translateX(0);
    }
    li {
      padding: 0.5rem 1rem;
    }
  }
</style>

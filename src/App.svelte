<script>
  import { scrollY } from './utils.js';
  import Header from './Components/Header.svelte';
  import Vehicle from './Components/Vehicle.svelte';
  import CTA from './Sections/CTA.svelte';
  import Vision from './Sections/Vision.svelte';
  import Timeline from './Sections/Timeline.svelte';
  import Project from './Sections/Project.svelte';
  import Team from './Sections/Team.svelte';
  import People from './Sections/People.svelte';
  import Contact from './Sections/Contact.svelte';
</script>

<svelte:window bind:scrollY={$scrollY} />

<Header />
<main>
  <div>
    <Vehicle />
    <CTA />
    <Vision />
  </div>
  <Timeline />
  <Project />
  <Team />
  <People />
  <Contact />
</main>

<style>
  div {
    overflow: hidden;
    position: relative;
  }
</style>

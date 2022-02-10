<script>
  import Header from './Components/Header.svelte';
  import Waves from './Components/Waves.svelte';
  import Vehicle from './Components/Vehicle.svelte';
  import CTA from './Sections/CTA.svelte';
  import Vision from './Sections/Vision.svelte';
  import Timeline from './Sections/Timeline.svelte';
  import Project from './Sections/Project.svelte';
  import Tech from './Sections/Tech.svelte';
  import Team from './Sections/Team.svelte';
  import People from './Sections/People.svelte';
  import Newsletter from './Sections/Newsletter.svelte';
  import Contact from './Sections/Contact.svelte';
</script>

<Header />
<main id="top">
  <div>
    <Waves />
    <Vehicle />
    <CTA />
    <Vision />
  </div>
  <Timeline />
  <Project />
  <Tech />
  <Team />
  <People />
  <Newsletter />
  <Contact />
</main>

<style>
  div {
    overflow: hidden;
    position: relative;
  }
</style>

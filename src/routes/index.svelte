<script>
  import '$lib/global.css';
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
  import Waves from '$lib/Components/Waves.svelte';
  import Vehicle from '$lib/Components/Vehicle.svelte';
  import CTA from '$lib/Sections/CTA.svelte';
  import Vision from '$lib/Sections/Vision.svelte';
  import Timeline from '$lib/Sections/Timeline.svelte';
  import Project from '$lib/Sections/Project.svelte';
  import Tech from '$lib/Sections/Tech.svelte';
  import Team from '$lib/Sections/Team.svelte';
  import People from '$lib/Sections/People.svelte';
  import Newsletter from '$lib/Sections/Newsletter.svelte';
  import Contact from '$lib/Sections/Contact.svelte';
</script>

<MetaTags
  title="KN Robocik"
  description="Koło Naukowe Automatyki i Robotyki „Robocik”, działające na Politechnice Wrocławskiej."
  openGraph={{
    url: 'http://www.robocik.pwr.edu.pl/',
    title: 'KN Robocik',
    description:
      'Koło Naukowe Automatyki i Robotyki „Robocik”, działające na Politechnice Wrocławskiej.',
    images: [
      { url: 'http://robocik.pwr.edu.pl/static/img/timeline/robosub.webp' }
    ]
  }}
/>

<JsonLd
  schema={{
    '@type': 'Organization',
    url: 'http://robocik.pwr.edu.pl/',
    logo: 'http://robocik.pwr.edu.pl/static/favicon.png'
  }}
/>

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

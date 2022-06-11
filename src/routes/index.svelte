<script>
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
  import CTA from '$lib/Home/Sections/CTA.svelte';
  import Vision from '$lib/Home/Sections/Vision.svelte';
  import Project from '$lib/Home/Sections/Project.svelte';
  import Achievements from '$lib/Home/Sections/Achievements.svelte';
  import Team from '$lib/Home/Sections/Team.svelte';
  import Contact from '$lib/Home/Sections/Contact.svelte';
</script>

<MetaTags
  title="KN Robocik"
  description="Koło Naukowe Automatyki i Robotyki „Robocik”, działające na Politechnice Wrocławskiej."
  openGraph={{
    url: 'http://www.robocik.pwr.edu.pl/',
    title: 'KN Robocik',
    description: 'Koło Naukowe Automatyki i Robotyki „Robocik”, działające na Politechnice Wrocławskiej.',
    images: [{ url: 'http://robocik.pwr.edu.pl/achievements/robosub.webp' }]
  }}
/>

<JsonLd
  schema={{
    '@type': 'Organization',
    url: 'http://robocik.pwr.edu.pl/',
    logo: 'http://robocik.pwr.edu.pl/favicon.png'
  }}
/>

<main id="top">
  <CTA />
  <div class="underwater">
    <Vision />
    <Project />
    <Achievements />
    <Team />
    <Contact />
  </div>
</main>

<style>
  main {
    height: 100%;
  }
  .underwater {
    min-height: 200vh;
    background: linear-gradient(var(--c-complement), var(--c-main));
  }
</style>

<script>
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
  import Page from '$lib/ghost/Page.svelte';

  export let data;
  const { page, posts } = data;
</script>

<MetaTags
  title="KN Robocik - Hackathon"
  description="Hackathon organizowany przez Koło Naukowe Automatyki i Robotyki „Robocik”"
  openGraph={{
    url: 'http://www.robocik.pwr.edu.pl/hackathon',
    title: 'KN Robocik - Hackathon',
    description: 'Hackathon organizowany przez Koło Naukowe Automatyki i Robotyki „Robocik”',
    images: [{ url: 'http://robocik.pwr.edu.pl/static/img/timeline/robosub.webp' }]
  }}
/>

<JsonLd
  schema={{
    '@type': 'Organization',
    url: 'http://robocik.pwr.edu.pl/',
    logo: 'http://robocik.pwr.edu.pl/static/favicon.png'
  }}
/>

<Page
  {page}
  tileGroups={[
    {
      title: 'Posty',
      posts,
      path: '/hackathon'
    }
  ]}
/>

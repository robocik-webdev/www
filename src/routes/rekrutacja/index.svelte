<script context="module">
  import { getPage, getPosts } from '$lib/API.js';
  export async function load() {
    return {
      props: {
        page: await getPage('rekrutacja-index'),
        marketing: await getPosts(['rekrutacja-marketing']),
        software: await getPosts(['rekrutacja-techniczni-software']),
        elektronika: await getPosts(['rekrutacja-techniczni-elektronika']),
        konstrukcja: await getPosts(['rekrutacja-techniczni-konstrukcja'])
      }
    };
  }
</script>

<script>
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
  import Page from '$lib/Ghost/Page.svelte';
  export let page;
  export let marketing;
  export let software;
  export let elektronika;
  export let konstrukcja;
</script>

<MetaTags
  title="KN Robocik - Rekrutacja"
  description="Rekrutacja do Koła Naukowego Automatyki i Robotyki „Robocik”"
  openGraph={{
    url: 'http://www.robocik.pwr.edu.pl/rekrutacja',
    title: 'KN Robocik - Rekrutacja',
    description: 'Rekrutacja do Koła Naukowego Automatyki i Robotyki „Robocik”',
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

<Page
  {page}
  tileGroups={[
    {
      title: 'Marketing',
      posts: marketing,
      path: '/rekrutacja/marketing'
    },
    {
      title: 'Software',
      posts: software,
      path: '/rekrutacja/techniczni'
    },
    {
      title: 'Elektronika',
      posts: elektronika,
      path: '/rekrutacja/techniczni'
    },
    {
      title: 'Konstrukcja',
      posts: konstrukcja,
      path: '/rekrutacja/techniczni'
    }
  ]}
/>

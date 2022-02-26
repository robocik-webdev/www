<script context="module">
  import { getPage, getPosts } from '$lib/API.js';
  export async function load() {
    return {
      props: {
        page: await getPage('rekrutacja-index'),
        marketing: await getPosts(['rekrutacja-marketing']),
        techniczni: await getPosts([
          'rekrutacja-techniczni-software',
          'rekrutacja-techniczni-elektronika',
          'rekrutacja-techniczni-konstrukcja'
        ])
      }
    };
  }
</script>

<script>
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
  import { arrow } from '$lib/Components/Ghost/header.js';
  import Page from '$lib/Components/Ghost/Page.svelte';
  export let page;
  export let marketing;
  export let techniczni;
  $arrow = null;
</script>

<MetaTags
  title="KN Robocik Rekrutacja"
  description="Rekrutacja do Koła Naukowego Automatyki i Robotyki „Robocik”"
  openGraph={{
    url: 'http://www.robocik.pwr.edu.pl/rekrutacja',
    title: 'KN Robocik Rekrutacja',
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
      endpoint: '/rekrutacja/marketing'
    },
    {
      title: 'Techniczni',
      posts: techniczni,
      endpoint: '/rekrutacja/techniczni'
    }
  ]}
/>

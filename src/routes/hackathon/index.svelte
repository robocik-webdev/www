<script context="module">
  import { getPage, getPosts } from '$lib/Ghost/API.js';
  export async function load() {
    return {
      props: {
        page: await getPage('hackathon-index'),
        posts: await getPosts(['hackathon'])
      }
    };
  }
</script>

<script>
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
  import Page from '$lib/Ghost/Page.svelte';
  export let page;
  export let posts;
</script>

<MetaTags
  title="KN Robocik - Hackathon"
  description="Hackathon organizowany przez Koło Naukowe Automatyki i Robotyki „Robocik”"
  openGraph={{
    url: 'http://www.robocik.pwr.edu.pl/hackathon',
    title: 'KN Robocik - Hackathon',
    description: 'Hackathon organizowany przez Koło Naukowe Automatyki i Robotyki „Robocik”',
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

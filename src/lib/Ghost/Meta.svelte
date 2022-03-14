<script>
  import { page } from '$app/stores';
  import { MetaTags } from 'svelte-meta-tags';
  export let subtitle = '';
  export let data;
  const sub = subtitle ? ` - ${subtitle}` : '';
  const url = `http://www.robocik.pwr.edu.pl${$page.url.pathname}`;
  const title = `KN Robocik${sub} - ${data.title}`;
  const description = data.excerpt != '#' ? data.excerpt : '';
  const images = [{ url: data.img }];
</script>

<MetaTags
  {title}
  {description}
  openGraph={{ url, title, description, images }}
/>

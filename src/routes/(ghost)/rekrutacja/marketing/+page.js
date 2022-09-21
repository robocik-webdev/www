import { getPage, getPosts } from '$lib/ghost/api';

export async function load() {
  return {
    page: await getPage('rekrutacja-marketing'),
    marketing: await getPosts(['rekrutacja-marketing'])
  };
}

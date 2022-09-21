import { getPage, getPosts } from '$lib/ghost/api';

export async function load() {
  return {
    page: await getPage('rekrutacja-index'),
    marketing: await getPosts(['rekrutacja-marketing']),
    software: await getPosts(['rekrutacja-techniczni-software']),
    elektronika: await getPosts(['rekrutacja-techniczni-elektronika']),
    konstrukcja: await getPosts(['rekrutacja-techniczni-konstrukcja'])
  };
}

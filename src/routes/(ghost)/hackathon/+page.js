import { getPage, getPosts } from '$lib/ghost/api';

export async function load() {
  return {
    page: await getPage('hackathon-index'),
    posts: await getPosts(['hackathon'])
  };
}

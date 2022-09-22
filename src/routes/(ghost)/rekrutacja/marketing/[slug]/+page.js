import { getPost } from '$lib/ghost/api';

export async function load({ params }) {
  return {
    post: await getPost(params.slug)
  };
}

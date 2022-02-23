import { api } from '$lib/API.js';

export async function get({ params }) {
  console.log(api);
  const item = await api.posts.read({});

  if (item) {
    return {
      body: { item }
    };
  }

  return {
    status: 404
  };
}

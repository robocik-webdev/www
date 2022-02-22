import api from '$lib/API';

export async function get({ params }) {
  const item = await api.get(params.post);

  if (item) {
    return {
      body: { item }
    };
  }

  return {
    status: 404
  };
}

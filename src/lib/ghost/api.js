import GhostContentAPI from '@tryghost/content-api';

export const baseUrl = 'https://robocik-ghost.ddns.net';

export const api = new GhostContentAPI({
  url: baseUrl,
  key: '64f1856389693e8f246f450f2f',
  version: 'v3.0'
});

export const getPost = async (slug, endpoint = api.posts) => {
  try {
    const post = await endpoint.read({ slug });
    return {
      img: post.feature_image,
      title: post.title,
      content: post.html
    };
  } catch (err) {
    return {
      title: 'Nasze API zrobiło fikołka.',
      content: '<span style="font-size:3em;">🚲🤸‍♂️</span>'
    };
  }
};

export const getPage = async (slug) => {
  return await getPost(slug, api.pages);
};

export const getPosts = async (tags) => {
  try {
    const posts = await api.posts.browse({
      filter: `tags:[${tags.join(',')}]`
    });
    return posts.map((post) => ({
      slug: post.slug,
      img: post.feature_image,
      title: post.title,
      excerpt: post.excerpt
    }));
  } catch (err) {
    return [];
  }
};

export default api;

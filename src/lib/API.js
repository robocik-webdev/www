import GhostContentAPI from '@tryghost/content-api';

export const baseUrl = 'https://robocik-ghost.ddns.net';

export const api = new GhostContentAPI({
  url: baseUrl,
  key: '64f1856389693e8f246f450f2f',
  version: 'v3'
});

export const getPost = async (slug, endpoint = api.posts) => {
  try {
    const post = await endpoint.read({
      slug,
      fields: ['feature_image', 'title', 'html']
    });
    return {
      img: post.feature_image,
      title: post.title,
      content: post.html
    };
  } catch (err) {
    return {
      title: 'Nasze API zrobiło fikołka.',
      content: 'Przepraszamy za usterki!'
    };
  }
};

export const getPage = async slug => {
  return await getPost(slug, api.pages);
};

export const getPosts = async tag => {
  try {
    const posts = await api.posts.browse({
      filter: `tag:${tag}`,
      include: ['tags']
    });
    return posts.map(post => ({
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

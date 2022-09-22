import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: '/opt/render/project/src',
      assets: '/opt/render/project/src'
    })
  }
};

import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [sveltekit()],
  alias: {
    '/opt/render/project/src/': './'
  }
};

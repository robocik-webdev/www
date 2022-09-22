import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '/opt/render/project/src/': ''
    }
  }
};

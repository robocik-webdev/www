import adapter from '@sveltejs/adapter-static';
import content from '@originjs/vite-plugin-content';

export default {
  kit: {
    vite: {
      plugins: [content.default()]
    },
    adapter: adapter()
  }
};

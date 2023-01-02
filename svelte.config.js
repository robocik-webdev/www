import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ['/hackathon/[slug]', '/rekrutacja/marketing/[slug]', '/rekrutacja/techniczni/[slug]', '/admin']
    }
  }
};

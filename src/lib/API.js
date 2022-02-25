import GhostContentAPI from '@tryghost/content-api';

export const baseUrl = 'http://localhost:2368';

export const api = new GhostContentAPI({
  url: baseUrl,
  key: '1fbe2ae6d6234fe5f35fdeb610',
  version: 'v3'
});

export default api;

import GhostContentAPI from '@tryghost/content-api';
export const baseUrl = 'http://localhost:2368';

export const api = new GhostContentAPI({
  url: baseUrl,
  key: 'a9b3e44b93525eddf358db920e',
  version: 'v3'
});

export default api;

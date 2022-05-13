export function copy(object) {
  return JSON.parse(JSON.stringify(object));
}

export function sanitizePathname(pathname) {
  // from '/path/name' to 'path-name'
  return pathname.replaceAll('/', '-').replace('-', '');
}

import { get, writable } from 'svelte/store';
import { io } from 'socket.io-client';

const url = 'http://localhost:8000/api';
// const url = 'http://192.168.1.10:8000/api';
// const url = 'http://192.168.1.17:8000/api';
// const url = 'http://robocik-devtest.ddns.net:8000/api';

export const socket = writable(null);

export async function api(method, route, data, form = false) {
  let options = { method, credentials: 'include' };
  if (data) {
    if (form) {
      options.headers = { 'Content-Type': 'multipart/form-data' };
      options.body = data;
    } else {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(data);
    }
  }
  const path = url + route;
  const res = await fetch(path, options);
  return await res.json();
}

export async function login(token) {
  const json = await api('POST', '/census/login', { token });
  if (!json.success) throw 'Nieprawidłowy token!';
  return json.data;
}
export async function logout() {
  const json = await api('GET', '/census/logout');
  if (!json.success) throw `Błąd przy wylogowywaniu! ${json?.error}`;
  return json.data;
}
export async function readme() {
  const json = await api('GET', '/census/me');
  if (!json.success) throw 'Błąd przy wczytywaniu użytkownika!';
  return json.data;
}

export function connect() {
  socket.set(io(url));
}
export async function disconnect() {
  // does this actually work? needs more testing
  const s = get(socket);
  await s.disconnect();
  socket.set(null);
}

import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import { io } from 'socket.io-client';

// const api = 'http://localhost:8000';
const api = 'http://192.168.1.10:8000';
// const api = 'http://192.168.1.17:8000';

export const socket = writable(null);
export const me = writable(null);

export function connect(token) {
  socket.set(io(api, { auth: { token } }));
}

export async function saveUser(window, user) {
  me.set({
    firstName: user.firstName,
    lastName: user.lastName,
    admin: user.adminUser,
    photo: user.photo
  });
  window.localStorage.setItem('user', JSON.stringify(user));
}

export function readUser(window) {
  return JSON.parse(window.localStorage.getItem('user'));
}

export async function login(token) {
  const res = await fetch(`${api}/auth/login?token=${token}`);
  const json = await res.json();
  if (!json.loggedIn) throw 'Nieprawidłowy token!';
  console.log(json);
  return {
    refreshToken: json.token,
    adminUser: json.admin,
    firstName: json.name,
    lastName: json.surname
  };
}

export function logout(window) {
  if (socket) socket.set(null);
  me.set(null);
  window.localStorage.removeItem('user');
  const origin = window.location.pathname.replaceAll('/', '-').replace('-', '');
  goto(`/hub/login?o=${origin}`);
}

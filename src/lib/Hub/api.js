import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

// export const api = 'http://192.168.1.17:8000';
export const api = 'http://localhost:8000';

export const socket = writable(null);
export const me = writable(null);

async function getPhoto() {
  try {
    const res = await fetch('https://picsum.photos/100.webp');
    return await res.url;
  } catch (err) {
    return '/icon/hub/user.svg';
  }
}

export async function saveUser(window, user) {
  me.set({
    firstName: user.firstName,
    lastName: user.lastName,
    admin: user.adminUser,
    photo: await getPhoto()
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

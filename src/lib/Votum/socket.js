import { writable } from 'svelte/store';

export const socket = writable();
export const admin = writable(false);

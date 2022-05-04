import { writable } from 'svelte/store';

export const edited = writable(false);
export const saving = writable(false);

export const debug = writable(false);

export const adminQuestions = writable([]);

import { writable } from 'svelte/store';

export const me = writable(null);

export const edited = writable(false);
export const saving = writable(false);
// export const

export const debug = writable(false);

export const adminQuestions = writable([]);

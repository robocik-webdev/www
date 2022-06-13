import { writable } from 'svelte/store';

export const menuOpened = writable(false);
export const docsOpened = writable(false);
export const partnersOpened = writable(false);
export const modalOpened = writable(false); // docsOpened || partnersOpened

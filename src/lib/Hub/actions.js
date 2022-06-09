import { writable } from 'svelte/store';

export const cancel = writable(() => console.log('Cancel action unspecified!'));
export const save = writable(() => console.log('Save action unspecified!'));

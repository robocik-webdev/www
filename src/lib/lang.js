import { writable, derived } from 'svelte/store';
import json from '$lib/data/lang.json';

export const langChoice = writable('pl');
export const lang = derived(
  langChoice,
  async ($langChoice, set) => {
    set(json[$langChoice]);
  },
  {}
);

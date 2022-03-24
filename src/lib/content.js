import { writable, derived } from 'svelte/store';
import json from '$lib/data/content.json';

export const langChoice = writable('eng');
export const lang = derived(
  langChoice,
  async ($langChoice, set) => {
    set(json[$langChoice]);
  },
  {}
);

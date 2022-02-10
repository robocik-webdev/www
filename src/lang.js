import { writable, derived } from 'svelte/store';
import { fetchJSON } from './utils.js';

export const langChoice = writable('pl');
export const lang = derived(
  langChoice,
  async ($langChoice, set) => {
    const json = await fetchJSON('lang.json?v=1');
    set(json[$langChoice]);
  },
  {}
);

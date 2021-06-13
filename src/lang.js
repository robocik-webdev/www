import { writable, derived } from 'svelte/store';

async function fetchLang() {
  const req = await fetch('lang.json');
  const json = await req.json();
  return json;
}

export const langChoice = writable('pl');
export const lang = derived(
  langChoice,
  async ($langChoice, set) => {
    const json = await fetchLang();
    set(json[$langChoice]);
  },
  {}
);

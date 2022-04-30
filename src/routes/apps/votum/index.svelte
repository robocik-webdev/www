<script>
  import { socket, me } from '$lib/Hub/api';
  import HeaderSimple from '$lib/Hub/HeaderSimple.svelte';
</script>

<HeaderSimple title="Votum" subtitle="Hub" />

<h1>Oczekiwanie na pytania...</h1>

<br />

<small class="subtitle">Ciekawostka</small>
<p>
  "Out of this time also rose one of the most legendary of all Tamrielic figures, Ysgramor, from whom all Nordic kings
  to this day are descended."<br />&nbsp;&nbsp;&nbsp;— Unknown,
  <a href="https://elderscrolls.fandom.com/wiki/Pocket_Guide_to_the_Empire,_Third_Edition">Pocket Guide to the Empire</a
  >
</p>

<style>
  * {
    color: var(--color-light);
  }
  h1 {
    margin-top: 3rem;
    font-size: 2.5rem;
  }
  .subtitle {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
  }
</style>

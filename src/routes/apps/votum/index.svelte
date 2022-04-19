<script>
  import { socket, me } from '$lib/Hub/api';
  import HeaderSimple from '$lib/Hub/HeaderSimple.svelte';
</script>

<HeaderSimple title="Votum" subtitle="Hub" />

<h1>Oczekiwanie na pytania...</h1>

<br />

<small class="subtitle">Ciekawostka</small>
<p>Naukowcy z Uniwersytetu nie wynaleźli absolutnie nic ciekawego.</p>

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

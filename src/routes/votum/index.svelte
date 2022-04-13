<script>
  import { socket, admin } from '$lib/Votum/socket';
</script>

<h1>Exspectans<br />suffragium...</h1>

<p>Strona jest aktualizowana<br />w czasie rzeczywistym.</p>

<p>Tip:<br />Srebrny miecz jest bronią<br />odpowiednią na zabicie Orka.</p>

{$admin}
{#if $admin}
  <button>Admin</button>
{/if}
<button>Wyniki</button>

<style>
  h1 {
    font-size: 2.5rem;
  }
  h1,
  p {
    color: var(--color-light);
  }
</style>

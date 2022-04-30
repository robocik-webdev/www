<script>
  import { me, logout } from '$lib/Hub/api';

  import UserPhoto from '$lib/Hub/UserPhoto.svelte';
  import Modal from '$lib/Hub/Modal.svelte';
  import Button from '$lib/Hub/Button.svelte';

  export let visible;
</script>

<Modal bind:visible>
  <div class="user">
    <UserPhoto />
    <div class="info">
      <span class="name">{$me?.firstName} {$me?.lastName}</span>
      {#if $me?.admin}<small>Admin</small>{/if}
    </div>
  </div>
  <Button action icon="logout" onclick={() => logout(window)}>Wyloguj</Button>
</Modal>

<style>
  .user {
    display: grid;
    grid-template-columns: 3rem 1fr;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
  }
  .name {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
  }
</style>

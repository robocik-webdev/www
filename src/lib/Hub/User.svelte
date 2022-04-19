<script>
  import { me, logout } from '$lib/Hub/api';

  import Modal from '$lib/Hub/Modal.svelte';
  import Button from '$lib/Hub/Button.svelte';

  export let visible;
</script>

<Modal bind:visible>
  <div class="user">
    <div class="photo">
      <img src={$me?.photo} alt="user" />
    </div>
    <div class="info">
      <span class="name">{$me?.firstName} {$me?.lastName}</span>
      {#if $me?.admin}<small>Admin</small>{/if}
    </div>
  </div>
  <Button action onclick={() => logout(window)}>Wyloguj</Button>
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

  .photo {
    overflow: hidden;
    display: grid;
    place-items: center;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  }
  .photo img {
    height: calc(100% + 10px);
    width: calc(100% + 10px);
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

<script>
  import { me } from '$lib/Hub/api';
</script>

<div class="photo">
  {#if $me?.photo}
    <img src={$me?.photo} alt="user" />
  {:else}
    <span class="initials">{$me?.firstName[0]}{$me?.lastName[0]}</span>
  {/if}
</div>

<style>
  .photo {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    display: grid;
    place-items: center;
    border-radius: 50%;
    width: 100%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    background-color: #fff;
  }
  .initials {
    padding-top: 0.1rem;
    font-size: 1.2rem;
    color: var(--c-input);
    font-weight: bold;
  }
</style>

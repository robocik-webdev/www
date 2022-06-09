<script>
  import UserPhoto from '$lib/Hub/UserPhoto.svelte';
  import ButtonSimple from '$lib/Hub/ButtonSimple.svelte';

  export let visible;
</script>

<ButtonSimple onclick={() => (visible = true)}>
  <UserPhoto />
</ButtonSimple>

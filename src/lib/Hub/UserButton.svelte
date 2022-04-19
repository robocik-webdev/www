<script>
  import { me } from '$lib/Hub/api';

  import ButtonSimple from '$lib/Hub/ButtonSimple.svelte';

  export let visible;
</script>

<ButtonSimple src={$me?.photo} alt="user" onclick={() => (visible = true)} />

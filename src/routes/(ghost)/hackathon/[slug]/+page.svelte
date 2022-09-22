<script>
  import Meta from '$lib/ghost/Meta.svelte';
  import Post from '$lib/ghost/Post.svelte';

  export let data;
  const { post } = data;
</script>

<Meta subtitle="Hackathon" data={post} />

<Post {...post} />

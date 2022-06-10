<script context="module">
  import { getPost } from '$lib/Ghost/API.js';
  export async function load({ params }) {
    return {
      props: {
        post: await getPost(params.post)
      }
    };
  }
</script>

<script>
  import Meta from '$lib/Ghost/Meta.svelte';
  import Post from '$lib/Ghost/Post.svelte';
  export let post;
</script>

<Meta subtitle="Hackathon" data={post} />

<Post {...post} />

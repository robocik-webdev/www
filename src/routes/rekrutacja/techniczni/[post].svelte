<script context="module">
  import { getPost } from '$lib/API.js';
  export async function load({ params }) {
    return {
      props: {
        post: await getPost(params.post)
      }
    };
  }
</script>

<script>
  import Post from '$lib/Ghost/Post.svelte';
  export let post;
</script>

<Post {...post} />

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
  import { arrow } from '$lib/Components/Ghost/header.js';
  import Post from '$lib/Components/Ghost/Post.svelte';
  export let post;
  $arrow = '/hackathon';
</script>

<Post {...post} />

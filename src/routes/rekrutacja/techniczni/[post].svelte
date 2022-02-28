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
  import { arrow } from '$lib/Ghost/header.js';
  import Post from '$lib/Ghost/Post.svelte';

  export let post;

  $arrow = '/rekrutacja/techniczni';
</script>

<Post {...post} />

<script context="module">
  export async function load({ params }) {
    return {
      props: {
        slug: params.post
      }
    };
  }
</script>

<script>
  import { api } from '$lib/API.js';
  import Post from '$lib/Components/Post.svelte';

  export let slug;

  const postPromise = api.posts.read({
    slug: slug,
    fields: ['title', 'html']
  });
</script>

<div class="wrapper">
  {#await postPromise then { title, html }}
    <Post {title} content={html} />
  {/await}
</div>

<style>
  .wrapper {
    max-width: 600px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

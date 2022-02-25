<script context="module">
  import { api } from '$lib/API.js';
  export async function load({ params }) {
    const post = await api.posts.read({
      slug: params.post,
      fields: ['title', 'html']
    });
    return {
      props: {
        title: post.title,
        content: post.html
      }
    };
  }
</script>

<script>
  import Post from '$lib/Components/Post.svelte';

  export let title;
  export let content;
</script>

<div class="wrapper">
  <Post {title} {content} />
</div>

<style>
  .wrapper {
    max-width: 600px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

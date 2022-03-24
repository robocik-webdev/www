<script>
  import Sidebar from '$lib/Docs/Sidebar.svelte';
  import Content from '$lib/Docs/Content.svelte';
</script>

<div class="main">
  <Sidebar />
  <Content />
</div>

<style>
  .main {
    width: 1000px;
    height: 100%;
    margin: auto;
  }

  @media (max-width: 1000px) {
    .main {
      width: 100%;
    }
  }
</style>

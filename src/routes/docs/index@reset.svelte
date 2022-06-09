<script>
  import Header from '$lib/Docs/Header.svelte';
  import Sidebar from '$lib/Docs/Sidebar.svelte';
  import Content from '$lib/Docs/Content.svelte';
</script>

<Header />

<div class="wrapper">
  <main>
    <Sidebar />
    <Content />
  </main>
</div>

<style>
  .wrapper {
    --header-height: 55px;
    display: flex;
    justify-content: center;
    margin-top: var(--header-height);
  }
  main {
    --max-width: 1000px;
    display: flex;
    width: 100%;
    max-width: var(--max-width);
  }
</style>

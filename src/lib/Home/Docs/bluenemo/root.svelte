<script>
  import Header from '$lib/Home/Docs/bluenemo/Header.svelte';
  import Sidebar from '$lib/Home/Docs/bluenemo/Sidebar.svelte';
  import Content from '$lib/Home/Docs/bluenemo/Content.svelte';
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

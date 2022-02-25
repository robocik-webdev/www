<script>
  export let slug;
  export let img;
  export let title;
  export let excerpt;
  export let endpoint;

  function truncate(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + '...';
    }
    return string;
  }
</script>

<a sveltekit:prefetch href="{endpoint}/{slug}" class="tile">
  <div class="img" style="background-image: url({img})" />
  <div class="content">
    <h3 class="title">{title}</h3>
    <div class="excerpt">{@html truncate(excerpt, 100)}</div>
  </div>
</a>

<style>
  .tile {
    --img-size: 25vw;
    --bg: rgba(255, 255, 255, 0.1);
    --bg-hover: rgba(255, 255, 255, 0.2);
    overflow: hidden;
    display: grid;
    grid-template-columns: var(--img-size) 1fr;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    background-color: var(--bg);
    transition: background-color 100ms;
    text-decoration: none;
    color: var(--color-light);
  }
  .tile:hover {
    background-color: var(--bg-hover);
  }

  .img {
    border-radius: 10px;
    height: var(--img-size);
    width: var(--img-size);
    background-size: cover;
    margin:auto;
    filter: drop-shadow(0 0 0.2rem rgb(53, 52, 52));
  }

  .content {
    height: 100%;
    padding: 5px 15px;
  }
  .title {
    color: var(--color-light);
    margin-bottom: 5px;
  }

  @media (min-width: 600px) {
    .tile {
      --img-size: 153.333px;
      grid-template-columns: 1fr;
      grid-template-rows: var(--img-size) 1fr;
    }
    .content {
      height: 100%;
      padding: 5px;
    }
    .title {
      margin-top: 10px;
    }
  }
</style>

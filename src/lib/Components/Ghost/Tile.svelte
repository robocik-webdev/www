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

<a class="wrapper" sveltekit:prefetch href="{endpoint}/{slug}">
  <img src={img} alt="" class="img-item" />
  <div class="container-content">
    <h3 class="title">{title}</h3>
    <p class="content">{@html truncate(excerpt, 100)}</p>
  </div>
</a>

<style>
  .wrapper {
    --min: 15ch;
    display: grid;
    grid-template-columns: 1fr, 3fr;
    column-gap: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .wrapper:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .img-item {
    aspect-ratio: 1/1;
    object-fit: fill;
    padding: 20px;
    grid-column: 1;
    filter: drop-shadow(0 0 0.25rem rgb(23, 23, 23));
  }

  .container-content {
    grid-column: 2;
    margin-right: 15px;
  }
</style>

<script>
  export let title;
  export let content;
</script>

<div class="post">
  <h3 class="title">{title}</h3>
  <div class="content content--post">
    {@html content}
  </div>
</div>

<style>
  .post {
    margin: 20vh 20px 20px 20px;
  }
  .title,
  .content {
    color: #fff;
  }
</style>

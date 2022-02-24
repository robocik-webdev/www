<script>
  import { api } from '$lib/API.js';

  export const postsPromise = api.posts.browse({
    filter: 'tag:hackathon',
    include: 'slug,title,html,excerpt,tags,feature_image'
  });
</script>

{#await postsPromise then posts}
  <div class="tileContainer" href="sad.css">
    {#each posts as { title, excerpt, feature_image, slug }}
      <a class="tile" href="hackathon/{slug}">
        <div class="imgContainer">
          <img src={feature_image} alt="nie dziala :(" />
        </div>
        <div class="contentContainer">
          <div class="content">
            <h5>{title}</h5>
            <div>{@html excerpt}</div>
          </div>
        </div>
      </a>
    {/each}
  </div>
{/await}

<style>
  h5 {
    color: var(--color-light);
  }

  .tileContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: var(--margin-mobile);
  }

  .tile {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    overflow: hidden;
    text-decoration: none;
    color: var(--color-light);
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    height: 150px;
    padding: 10px;
    margin: 10px auto;
    border-radius: 10px;
  }

  .tile:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .imgContainer {
    height: 100%;
  }

  img {
    border-radius: 10px;
    width: 100%;
    min-width: 130px;
    height: 100%;
  }

  .contentContainer {
    height: 100%;
    width: 80%;
    padding: 0 10px;
  }

  .content {
    display: block;
    width: 100%;
  }

  @media (min-width: 600px) {
    .tileContainer {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    .tile {
      width: 210px;
      height: 350px;
      display: block;
      margin: 20px;
    }

    .imgContainer {
      height: 165px;
      width: 165px;
    }
  }
</style>

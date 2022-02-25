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

<a
  data-component
  class="smol-css-grid"
  style="--min: 22ch; --gap: 2rem;"
  sveltekit:prefetch
  href="{endpoint}/{slug}"
>
  <li data-component class="smol-card-component">
    <div class="wrapper"><img src={img} alt="" /></div>
    <h3>{title}</h3>
    <p>{@html truncate(excerpt, 100)}.</p>
  </li>
</a>

<style>
  /* Box sizing rules */
  * {
    text-decoration: none;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .wrapper {
    display: block;
    border-radius: 10px;
    overflow: hidden;
  }

  /***
 🟣 SmolCSS Snippet Styles
 */

  .smol-css-grid {
    --min: 20ch;
    --gap: 1rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  .smol-css-grid:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .smol-card-component {
    --img-ratio: 2/2;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
  }

  /* Soon we can replace this with: gap: 1rem; */
  .smol-card-component > * + * {
    margin-top: 1rem;
  }

  .smol-card-component > .wrapper {
    aspect-ratio: var(--img-ratio);
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.35);
  }

  .smol-card-component > :not(img) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .smol-card-component > :not(img):first-child {
    margin-top: 1rem;
  }

  /* Enhanced `:not()` accepts a selector list,
but as a fallback you can chain `:not()` instead */
  .smol-card-component > :last-of-type:not(img, h2, h3, h4) {
    margin-bottom: 1rem;
  }

  .smol-card-component > :not(h2, h3, h4) {
    font-size: 0.9rem;
  }
</style>

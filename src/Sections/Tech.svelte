<script>
  import { range, randomElem } from '../utils.js';
  import { lang } from '../lang.js';

  let tilesElems = [];
  let slideElems = [];
  let slideIndex = 0;

  const imagesAmount = 30;
  let tilesAmount = 8;
  let tiles = [];
  $: {
    tiles = range(0, tilesAmount).map(() => []);
    let imagesCount = 0;
    let count = 0;
    while (imagesCount < imagesAmount) {
      // choose possible spots for prev and next buttons
      let imagesRemaining = imagesAmount - imagesCount;
      let elems = range(0, tilesAmount);
      console.log(imagesCount);
      // insert buttons
      if (imagesCount != 0) {
        let prev = randomElem(elems);
        elems = elems.filter(elem => elem != prev);
        tiles[prev].push({ type: 'prev' });
      }
      if (imagesRemaining > tilesAmount - 1) {
        let next = randomElem(elems);
        elems = elems.filter(elem => elem != next);
        tiles[next].push({ type: 'next' });
      }
      // insert images
      elems.forEach(i => {
        let tile = {};
        // img or placeholder
        if (imagesCount < imagesAmount) {
          imagesCount++;
          tile.type = 'img';
          tile.img = `${imagesCount}.webp`;
        } else {
          tile.type = 'placeholder';
        }
        tiles[i].push(tile);
      });
      // add separating placeholders
      range(0, tilesAmount).forEach(i => {
        tiles[i].push({ type: 'placeholder' });
      });
      count++;
    }
    console.log(tiles);
  }

  function getSingleSlideWidth() {
    return slideElems[0].getBoundingClientRect().width;
  }
  function set(i) {
    const slideWidth = getSingleSlideWidth();
    const translation = -i * slideWidth * 2;
    tilesElems.forEach(elem => {
      elem.style.transform = `translateX(${translation}px)`;
    });
  }
  function prev() {
    slideIndex--;
  }
  function next() {
    slideIndex++;
  }
  $: if (tilesElems.length) {
    set(slideIndex);
  }
</script>

<svelte:window on:resize={() => set(slideIndex)} />

<section id="tech">
  <div class="text">
    <h2>{@html $lang.tech_subtitle}</h2>
    <h1>{@html $lang.tech_title}</h1>
  </div>

  <div class="wrapper">
    {#each tiles as tile, i}
      <div class="tile">
        <div class="tiles" bind:this={tilesElems[i]}>
          {#each tile as slide, j}
            {#if slide.type == 'prev'}
              <div class="slide prev" bind:this={slideElems[j]} on:click={prev}>
                <img
                  src="/icon/prev_light.svg"
                  alt="scroll arrow facing left"
                />
              </div>
            {:else if slide.type == 'next'}
              <div class="slide next" bind:this={slideElems[j]} on:click={next}>
                <img
                  src="/icon/next_light.svg"
                  alt="scroll arrow facing right"
                />
              </div>
            {:else if slide.type == 'img'}
              <div class="slide img" bind:this={slideElems[j]}>
                <img
                  src="/img/tech/{slide.img}"
                  alt="{slide.img} development image"
                />
              </div>
            {:else if slide.type == 'placeholder'}
              <div class="slide placeholder" bind:this={slideElems[j]} />
            {/if}
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <div class="docs">
    <img src="/img/tech/docs.webp" alt="blurry text" />
    <a href="http://robocik.pwr.edu.pl/docs">
      <span>{@html $lang.menu_tech}</span>
    </a>
  </div>
</section>

<style>
  .text {
    grid-column: 3 / 11;
  }

  .wrapper {
    grid-column: 3 / 11;
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    width: 100%;
  }
  .tile {
    overflow: hidden;
    position: relative;
  }
  .tile::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  .tiles {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100%;
    transition: transform var(--t-slow);
  }
  .slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }
  .slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .prev,
  .next {
    cursor: pointer;
    padding: 15%;
    background-color: var(--color-main);
  }
  .placeholder {
    background-color: var(--color-main);
  }

  .docs {
    grid-column: 3 / 11;
    position: relative;
    margin: 40px 0;
  }
  .docs a {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    padding: 20px;
    background-color: var(--color-complement);
    color: var(--color-light);
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    transform: translate(-50%, -50%);
    transition: transform var(--t-fast);
  }
  .docs a:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  @media (min-width: 600px) {
    section {
      grid-template-rows: repeat(3, auto);
      margin-bottom: 80px;
    }
    .wrapper {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    .docs img {
      width: 60%;
    }
    .docs a {
      left: 60%;
      transform: translate(-50%, -50%) scale(1.5);
      width: 300px;
    }
    .docs a:hover {
      transform: translate(-50%, -50%) scale(1.6);
    }
  }
</style>

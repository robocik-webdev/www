<script>
  import { lang } from '$lib/lang';
  import Recruiting from '$lib/website/Recruiting.svelte';
  import Newsletter from '$lib/website/Newsletter.svelte';
  import Social from '$lib/website/Social.svelte';
</script>

<section id="contact">
  <div class="wrapper">
    <Recruiting />
    <br />
    <Newsletter />

    <h1>{@html $lang.contact_title}</h1>

    <div class="items">
      <div class="item">
        <span class="material-symbols-outlined icon">pin_drop</span>
        <div class="text">
          <p>{@html $lang.contact_location_1}</p>
          <p>{@html $lang.contact_location_2}</p>
        </div>
      </div>
      <div class="item">
        <span class="material-symbols-outlined icon">mail</span>
        <div class="text">
          <p>
            <a href="mailto:{$lang.contact_email}">
              {@html $lang.contact_email}
            </a>
          </p>
        </div>
      </div>
      <div class="item">
        <span class="material-symbols-outlined icon">call</span>
        <div class="text">
          <p><b>{@html $lang.contact_phone_1}</b></p>
          <p>{@html $lang.contact_phone_2}</p>
          <br />
          <p><b>{@html $lang.contact_phone_3}</b></p>
          <p>{@html $lang.contact_phone_4}</p>
        </div>
      </div>
      <div class="social">
        <Social />
      </div>
    </div>
  </div>

  <img src="/decor/podloga.webp" alt="" class="bottom" />
  <img src="/decor/osmiornica.webp" alt="octopus" class="octopus" />
</section>

<div class="footnote">
  <span>Designed with ❤️ and ☕ by:</span>
  <span class="names">Mikołaj Kaźmierczak&nbsp; & &nbsp;Ola Ostrowska</span>
  <span class="names">Agnieszka Faryś&nbsp; & &nbsp;Kuba Borowiec</span>
  <span>© Copyright 2022</span>
</div>

<style>
  section {
    position: relative;
  }
  .wrapper {
    padding: 1em;
    max-width: var(--w-max);
    margin: 0 auto;
  }

  * {
    color: var(--c-white);
  }
  h1 {
    margin-top: 3rem;
    grid-column: 4 / 10;
  }

  .items {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .item {
    display: flex;
  }
  .icon {
    font-size: 2rem;
  }
  .text {
    margin-left: 15px;
  }
  .text p {
    margin: 0;
  }
  .social {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .bottom,
  .octopus {
    z-index: 0;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .octopus {
    width: 50%;
    bottom: 5%;
    right: 5%;
  }

  .footnote {
    padding: 10px;
    background-color: rgb(11, 20, 39);
    color: var(--c-white);
  }
  .footnote span {
    display: block;
    text-align: center;
    font-size: 0.75rem;
    opacity: 0.7;
  }
  .footnote .names {
    font-size: 0.8rem;
  }
</style>

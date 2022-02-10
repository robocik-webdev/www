<script>
  import { lang } from '../lang.js';

  const socialMedia = [
    [
      'linkedin.png',
      'https://zw.linkedin.com/company/ko%C5%82o-naukowe-automatyki-i-robotyki-robocik',
    ],
    ['facebook.png', 'https://www.facebook.com/knrobocik/'],
    ['instagram.png', 'https://www.instagram.com/robocikpwr/?hl=en'],
    ['youtube.svg', 'https://www.youtube.com/channel/UCWaBdSXJdCexMjQ0nd5RBdw'],
  ];
</script>

<section id="contact" class="dark">
  <h1>{@html $lang.contact_title}</h1>

  <div class="column column-1">
    <div class="item">
      <h4 class="title">{@html $lang.contact_location_title}</h4>
      <div class="content">
        <img
          class="icon"
          src="/icon/contact/location.png"
          alt="location icon"
        />
        <div class="text">
          <p>{@html $lang.contact_location_1}</p>
          <p>{@html $lang.contact_location_2}</p>
        </div>
      </div>
    </div>
    <div class="item">
      <h4 class="title">{@html $lang.contact_email_title}</h4>
      <div class="content">
        <img class="icon" src="/icon/contact/email.png" alt="email icon" />
        <div class="text">
          <p>
            <a href="mailto:{$lang.contact_email}">
              {@html $lang.contact_email}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="column column-2">
    <div class="item">
      <h4 class="title">{@html $lang.contact_phone_title}</h4>
      <div class="content">
        <img class="icon" src="/icon/contact/phone.png" alt="phone icon" />
        <div class="text">
          <p><b>{@html $lang.contact_phone_1}</b></p>
          <p>{@html $lang.contact_phone_2}</p>
          <br />
          <p><b>{@html $lang.contact_phone_3}</b></p>
          <p>{@html $lang.contact_phone_4}</p>
        </div>
      </div>
    </div>
    <div class="item">
      <h4 class="title">{@html $lang.contact_sm_title}</h4>
      <div class="content icons">
        {#each socialMedia as sm}
          <a href={sm[1]} target="_blank">
            <img class="icon" src="/icon/contact/{sm[0]}" alt="{sm[0]} icon" />
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<div class="footnote">
  <span>Designed with ❤️ and ☕ by:</span>
  <span class="names">Mikołaj Kaźmierczak&nbsp; & &nbsp;Darya Machulskaya</span>
  <span class="names">Kuba Borowiec&nbsp; & &nbsp;Katarzyna Smagacz</span>
  <span>© Copyright 2021</span>
</div>

<style>
  h1 {
    grid-column: 4 / 10;
  }
  .column-1 {
    grid-column: 4 / 7;
    grid-row: 2;
  }
  .column-2 {
    grid-column: 7 / 10;
    grid-row: 2;
  }

  .title {
    margin: 30px 0 15px 0;
  }
  .content {
    display: flex;
    align-items: flex-start;
  }
  .icon {
    width: 35px;
  }
  .text {
    margin-left: 15px;
  }
  .text p {
    margin: 0;
  }
  .icons a {
    margin-right: 15px;
    transition: transform var(--t-fast);
  }
  .icons a:hover {
    transform: rotate(45deg);
  }

  .footnote {
    padding: 10px;
    background-color: rgb(11, 20, 39);
  }
  .footnote span {
    display: block;
    text-align: center;
    color: var(--color-light);
    font-size: 0.75rem;
    opacity: 0.7;
  }
  .footnote .names {
    font-size: 0.8rem;
  }

  @media (min-width: 600px) {
    section {
      grid-template-rows: repeat(2, auto);
    }
  }
</style>

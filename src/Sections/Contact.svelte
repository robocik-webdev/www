<script>
  import { lang } from '../lang.js';

  const socialMedia = [
    [
      'linkedin.png',
      'https://zw.linkedin.com/company/ko%C5%82o-naukowe-automatyki-i-robotyki-robocik',
    ],
    [
      'facebook.png',
      'https://zw.linkedin.com/company/ko%C5%82o-naukowe-automatyki-i-robotyki-robocik',
    ],
    [
      'instagram.png',
      'https://zw.linkedin.com/company/ko%C5%82o-naukowe-automatyki-i-robotyki-robocik',
    ],
    [
      'youtube.svg',
      'https://zw.linkedin.com/company/ko%C5%82o-naukowe-automatyki-i-robotyki-robocik',
    ],
  ];
</script>

<section id="contact" class="dark">
  <div class="wrapper">
    <h1>{@html $lang.contact_title}</h1>
    <div class="info">
      <div class="column">
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
              <p>{@html $lang.contact_email_1}</p>
              <p>{@html $lang.contact_email_2}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="item">
          <h4 class="title">{@html $lang.contact_phone_title}</h4>
          <div class="content">
            <img class="icon" src="/icon/contact/phone.png" alt="phone icon" />
            <div class="text">
              <p>{@html $lang.contact_phone_1}</p>
              <p>{@html $lang.contact_phone_2}</p>
            </div>
          </div>
        </div>
        <div class="item">
          <h4 class="title">{@html $lang.contact_sm_title}</h4>
          <div class="content icons">
            {#each socialMedia as sm}
              <a href={sm[1]} target="_blank">
                <img
                  class="icon"
                  src="/icon/contact/{sm[0]}"
                  alt="{sm[0]} icon"
                />
              </a>
            {/each}
          </div>
        </div>
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
  .icon {
    width: 35px;
  }
  .content {
    display: flex;
    align-items: flex-start;
  }
  .title {
    margin: 30px 0 15px 0;
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
    }
    .wrapper {
      margin: auto;
      width: 50%;
    }
    .info {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

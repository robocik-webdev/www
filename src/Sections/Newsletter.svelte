<script>
  import { lang } from '../lang.js';
</script>

<section id="newsletter" class="dark">
  <h1>{@html $lang.newsletter_title}</h1>

  <p>
    {@html $lang.newsletter_text_1}<br />
    {@html $lang.newsletter_text_2}<br />
    {@html $lang.newsletter_text_3}
  </p>

  <!-- Begin Mailchimp Signup Form -->
  <div id="mc_embed_signup">
    <form
      action="https://pwr.us4.list-manage.com/subscribe/post?u=5de683a3a7658ffd94b4e9b37&amp;id=feb6c296b1"
      method="post"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <div class="mc-field-group">
          <input
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            value=""
            placeholder={$lang.newsletter_email}
          />
          <input
            id="mc-embedded-subscribe"
            name="subscribe"
            type="submit"
            value={$lang.newsletter_submit}
          />
        </div>

        <div id="mce-responses">
          <div id="mce-error-response" style="display:none" />
          <div id="mce-success-response" style="display:none" />
        </div>

        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups -->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input
            type="text"
            name="b_5de683a3a7658ffd94b4e9b37_feb6c296b1"
            tabindex="-1"
            value=""
          />
        </div>

        <small>
          {$lang.newsletter_consent_before}
          <a
            href="https://pwr.us4.list-manage.com/profile/?u=5de683a3a7658ffd94b4e9b37&id=feb6c296b1&e=fdbeab5567"
            target="_blank"
          >
            {$lang.newsletter_consent_preferences}
          </a>
          {$lang.newsletter_consent_after}
        </small>
      </div>
    </form>
  </div>
  <!-- End Mailchimp Signup Form -->
</section>

<style>
  h1,
  p {
    grid-column: 4 / 10;
    text-align: center;
  }

  #mc_embed_signup {
    grid-column: 4 / 10;
    margin-top: 25px;
    user-select: none;
  }

  #mc_embed_signup_scroll {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  small {
    display: block;
    margin-top: 15px;
    line-height: 1.5;
    font-size: 0.6rem;
    max-width: 400px;
  }
  small * {
    font-size: 0.6rem;
  }

  input {
    padding: 10px;
    color: var(--color-main);
    border: none;
  }
  input:focus {
    outline: solid 2px var(--color-complement);
  }

  #mc-embedded-subscribe {
    cursor: pointer;
    background-color: var(--color-complement);
    font-weight: bold;
  }
</style>

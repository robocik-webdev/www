<script>
  import { lang } from '$lib/lang.js';
</script>

<div class="wrapper">
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
          <input id="mce-EMAIL" name="EMAIL" type="email" value="" placeholder={$lang.newsletter_email} />
          <button id="mc-embedded-subscribe" name="subscribe" type="submit">
            <span class="material-symbols-outlined">send</span>
          </button>
        </div>

        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups -->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_5de683a3a7658ffd94b4e9b37_feb6c296b1" tabindex="-1" value="" />
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
</div>

<style>
  * {
    color: var(--c-white);
  }

  #mc_embed_signup {
    user-select: none;
  }

  .mc-field-group {
    display: flex;
    align-items: stretch;
    gap: 0.75rem;
  }
  input {
    border-radius: 2rem;
    border: none;
    padding: 0.5rem 1em;
  }
  input:focus {
    outline: solid 4px var(--c-complement);
  }
  #mc-embedded-subscribe {
    display: grid;
    place-items: center;
    border-radius: 2rem;
    border: none;
    padding: 0.5rem 1rem;
    background-color: var(--c-complement);
    font-weight: bold;
  }

  small {
    display: block;
    margin-top: 1rem;
    line-height: 1.5;
    font-size: 0.6rem;
    max-width: 380px;
  }
  small * {
    font-size: 0.6rem;
  }
</style>

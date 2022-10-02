<script>
  import { lang } from '$lib/lang';
  import Button from '$lib/website/Button.svelte';
</script>

<div class="wrapper">
  <h1>{@html $lang.recruiting_title}</h1>

  <p>
    {@html $lang.recruiting_text_1}<br />
    {@html $lang.recruiting_text_2}
  </p>

  <Button href="/rekrutacja" external>{@html $lang.recruiting_button}</Button>
</div>

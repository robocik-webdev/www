<script>
  export let vertical = false;
  export let dark = false;

  $: color = dark ? 'dark' : 'light';
  $: socialMedia = [
    [`facebook-${color}.svg`, 'https://www.facebook.com/knrobocik/'],
    [`instagram-${color}.svg`, 'https://www.instagram.com/robocikpwr/?hl=en'],
    [`youtube-${color}.svg`, 'https://www.youtube.com/channel/UCWaBdSXJdCexMjQ0nd5RBdw'],
    [`linkedin-${color}.svg`, 'https://zw.linkedin.com/company/ko%C5%82o-naukowe-automatyki-i-robotyki-robocik']
  ];
</script>

<div class="wrapper" class:vertical>
  {#each socialMedia as sm}
    <a href={sm[1]} target="_blank">
      <img class="icon" src="/social/{sm[0]}" alt="{sm[0]} icon" />
    </a>
  {/each}
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  a {
    width: clamp(2rem, 4vw, 4rem);
    text-decoration: none;
  }

  .vertical {
    flex-direction: column;
  }
</style>

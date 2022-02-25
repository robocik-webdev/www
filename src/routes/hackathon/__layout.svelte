<div class="bg" />
<slot />

<style>
  .bg {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      165deg,
      rgba(22, 33, 67, 1) 0%,
      rgba(75, 39, 122, 1) 75%
    );
  }
</style>

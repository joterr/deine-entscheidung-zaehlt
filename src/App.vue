<template>
  <div id="app">
    <router-view />
    <footer>
      <router-link to="/fakten" class="high">Weitere Fakten</router-link>|<router-link to="/datenschutz">Datenschutz</router-link>|<router-link to="/impressum">Impressum</router-link>
    </footer>
  </div>
</template>

<style lang="scss">
footer {
  position: fixed;
  z-index: 999999;
  bottom: calc(1.125rem - 0.5rem);
  right: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  @include std-text();
  font-size: x-small;
  opacity: 0;
  animation: animateIn 0.5s ease forwards 4s;

  @include respond-to("medium") {
    right: 0;
    left: 0;
    width: 100vw;
    text-align: center;
  }

  a {
    position: relative;
    @include std-text();
    font-size: x-small;
    color: $white;
    text-transform: uppercase;
    display: inline-block;
    padding: 0.5rem .35rem;
    opacity: 0.65;

    @include respond-to("small") {
      font-size: xx-small;
    }

    &.high {
      @include std-text-bold();
      opacity: 1;
    }
  }
}


@keyframes animateIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

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
  z-index: 9999;
  bottom: 1.5vh;
  right: 1vw;
  color: rgba(255, 255, 255, 0.5);
  @include std-text();
  font-size: x-small;

  @include respond-to("medium") {
    right: 0;
    left: 0;
    width: 100vw;
    text-align: center;
  }

  a {
    @include std-text();
    font-size: x-small;
    color: $white;
    text-transform: uppercase;
    display: inline-block;
    padding: 0 .35rem;
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
</style>

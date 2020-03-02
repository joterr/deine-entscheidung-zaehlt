<template>
  <div id="app">
    <router-view />
    <footer>
      <nav><router-link to="/fakten" class="high">Weitere Fakten</router-link>|<router-link to="/impressum">Impressum</router-link></nav>
      <div class="green-energy"><span>Läuft mit 100% Grünem Strom.</span></div>
    </footer>
  </div>
</template>

<style lang="scss">
footer {
  position: fixed;
  z-index: 999999;
  bottom: calc(1.125rem - 0.5rem);
  right: 0;
  left: 0;
  width: 100vw;
  padding: 0 1.25rem;
  opacity: 0;
  animation: animateIn 0.5s ease forwards 1s;
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  @include respond-to("small") {
    position: relative;
    top: auto;
    left: auto;
    bottom: auto;
    right: auto;
    flex-direction: column;
    text-align: center;
    padding-bottom: 1rem;
  }

  .green-energy {
    span {
      vertical-align: text-bottom;
      font-size: xx-small;
      color: rgba(255, 255, 255, 0.4);
      @include std-text();

      @include respond-to("small") {
        vertical-align: top;
      }

      &:hover {
        color: $cl-accent1;
      }
    }
  }

  nav {
    color: rgba(255, 255, 255, 0.6);
    @include std-text();
    font-size: x-small;
    @include respond-to("small") {
      font-size: xx-small;
    }

    a {
      position: relative;
      @include std-text();
      font-size: x-small;
      color: $white;
      text-transform: uppercase;
      display: inline-block;
      padding: 0.5rem .35rem;
      opacity: 0.6;

      @include respond-to("small") {
        font-size: xx-small;
      }

      &.high {
        @include std-text-bold();
        opacity: 1;
      }
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

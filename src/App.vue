<template>
  <div id="app">
    <router-view />
    <footer>
      <nav><router-link to="/fakten" class="high">Weitere Fakten</router-link>|<router-link to="/impressum">Impressum</router-link></nav>
      <div class="green-energy"><span>Läuft mit 100% Grünem Strom</span></div>
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
  animation: animateIn 0.5s ease forwards 4s;
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  @include respond-to("small") {
    bottom: .5rem;
    flex-direction: column-reverse;
    text-align: center;
  }


  nav {
    color: rgba(255, 255, 255, 0.5);
    @include std-text();
    font-size: x-small;
  }

  .green-energy {
    @include respond-to("small") {
      margin-bottom: .25rem;
    }

    span {
      vertical-align: text-bottom;
      font-size: xx-small;
      color: rgba(255, 255, 255, 0.35);
      @include std-text();

      &:hover {
        color: $cl-accent1;
      }
    }
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

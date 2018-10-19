<template>
  <div id="app">
    <router-view/>
    <footer>
      <router-link to="/quellennachweis">Quellennachweis</router-link> |
      <router-link to="/datenschutz">Datenschutz</router-link> |
      <router-link to="/impressum">Impressum</router-link>
    </footer>
  </div>
</template>

<style lang="scss">
footer {
  position: fixed;
  bottom: 1vh;
  right: 1vw;
  color: $white;
  @include std-text();
  font-size: x-small;

  a {
    @include std-text-bold();
      font-size: x-small;
      color: $white;
      text-transform: uppercase;
      display: inline-block;
      padding: 0 2pt;
  }
}
</style>

<template>
  <div class="truth-overlay" v-bind:class="{ opened:  isVisible }">
    <div class="content">
      <h1>Deine Entscheidung zählt.</h1>
        TEST<br/>
        TEST<br/>
        TEST<br/>
        TEST<br/>
        TEST<br/>
        TEST<br/>
        TEST
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TruthOverlay extends Vue {
  @Prop()
  isVisible: boolean = false;
}
</script>

<style scoped lang="scss">
.truth-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: $cl-accent1;
  display: none;
  overflow: hidden;
  height: 0;
  opacity: 0;

  .content {
    opacity: 0;
    padding: 16vh 8vw;
  }

  &.opened {
    display: block;
    animation: slideIn 1s linear forwards;

    .content {
      animation: fadeIn 1s linear forwards 2s;
    }
  }

  @keyframes slideIn {
    0% {
      height: 0;
      opacity: 0.5;
    }
    100% {
      height: 100vh;
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h1 {
    color: $white;
    font-size: xx-large;
    text-align: center;
  }
}
</style>

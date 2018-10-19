<template>
  <div class="truth-overlay" v-bind:class="{ opened:  isVisible }">
    TEST<br/>
    TEST<br/>
    TEST<br/>
    TEST<br/>
    TEST<br/>
    TEST<br/>
    TEST
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
    opacity: 0.98;
    padding: 8vh 8vw;
    display: none;

    &.opened {
      display: block;
    }
  }
</style>

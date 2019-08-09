<template>
  <span
    class="linked-detail"
    v-bind:class="{ opened: active && active.ID === type.ID }"
    v-on:click="$emit('show-details', type)"
  >
    <span>{{makeLocaleInteger(cnt, type.COUNT_ONE)}} <span v-html="cnt <= 1 ? type.SINGULAR : type.PLURAL"></span></span>
  </span>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["type", "cnt", "active"]
})
export default class AdditionalDetails extends Vue {
  public makeLocaleInteger(val: number, one: string = "ein"): string {
    const intedVal: number = this.makeInt(val);
    const counters: string[] = ["0", one, "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun"];
    return counters[intedVal] || intedVal.toLocaleString("de-DE");
  }

  private makeInt(val: number): number {
    return Math.ceil(val);
  }
}
</script>

<style scoped lang="scss">
span.linked-detail {
  display: inline-block;
  color: $white;
  @include highlight-text-bold();
  transition: 500ms ease font-size;

  &:hover,
  &.opened {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>

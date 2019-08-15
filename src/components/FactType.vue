<template>
  <span
    class="linked-detail"
    v-bind:class="{ opened: active && active.ID === type.ID }"
    v-on:click="$emit('show-details', type)"
  >
    <span>{{makeLocaleInteger(counted, type.COUNT_ONE)}} <span v-html="counted <= 1 ? type.SINGULAR : type.PLURAL"></span></span>
  </span>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["type", "active"]
})
export default class AdditionalDetails extends Vue {
  @Provide()
  private type: any;

  @Provide()
  private counted: number = 1;

  public makeLocaleInteger(val: number, one: string = "ein"): string {
    const intedVal: number = this.makeInt(val);
    const counters: string[] = ["0", one, "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun"];
    return counters[intedVal] || intedVal.toLocaleString("de-DE");
  }

  private mounted() {
      setInterval(() => {
        this.counted += 1;
      }, this.getMillisecondsPerCountUp(this.type.PER_YEAR));
  }

  private getMillisecondsPerCountUp(val: number): number {
    const animalsPerSecond: number = val / 365 / 24 / 60 / 60;
    return 1000 / animalsPerSecond;
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

  span {
    white-space: nowrap;
  }

  &:hover,
  &.opened {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>

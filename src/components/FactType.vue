<template>
  <span
    class="linked-detail"
    v-bind:class="{ opened: active && active.ID === type.ID }"
    v-on:click="$emit('show-details', type)"
  >
    <span>{{makeLocaleInteger(counted, type.COUNT_ONE)}} <span v-html="counted <= 1 ? type.LABEL_1 : counted < 10 ? type.LABEL_10 : type.LABEL"></span></span>
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
      const yearly: number = this.type.FACTOR ? this.type.PER_YEAR * this.type.FACTOR : this.type.PER_YEAR;
      setInterval(() => {
        this.counted += 1;
      }, this.getMillisecondsPerCountUp(yearly));
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
  transition: 300ms ease;
  position: relative;

  span {
    white-space: nowrap;
  }

  &:hover {
    cursor: pointer;
    color: #000;

    &:after {
      content:"";
      position: absolute;
      top: .125rem;
      left: -.125rem;;
      right: -.125rem;
      bottom: .125rem;
      z-index: -1;
      border-radius: .0125rem;
      background-color: #fff;
    }
  }
}
</style>

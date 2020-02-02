<template>
  <span
    class="linked-detail"
    :class="{ opened: (active && active.ID === type.ID), hovered: highlight }"
    v-on:click="$emit('show-details', type)"
  >
    <span>
      {{makeLocaleInteger(counted, type.COUNT_ONE)}}
      <span v-html="counted <= 1 ? type.LABEL_1 : counted < 10 ? type.LABEL_10 : type.LABEL"></span>
    </span>
  </span>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["type", "active", "highlight"]
})
export default class AdditionalDetails extends Vue {
  @Provide()
  private type: any;

  @Provide()
  private counted: number = 1;

  public makeLocaleInteger(val: number, one: string = "ein"): string {
    const intedVal: number = this.makeInt(val);
    const counters: string[] = [
      "0",
      one,
      "zwei",
      "drei",
      "vier",
      "fünf",
      "sechs",
      "sieben",
      "acht",
      "neun"
    ];
    return counters[intedVal] || intedVal.toLocaleString("de-DE");
  }

  private mounted() {
    const yearly: number = this.type.FACTOR
      ? this.type.PER_YEAR * this.type.FACTOR
      : this.type.PER_YEAR;
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

  &:hover,
  &.opened {
    cursor: pointer;
    color: #000;

    &:after {
      content: "";
      position: absolute;
      top: 0.125rem;
      left: -0.125rem;
      right: -0.125rem;
      bottom: 0.125rem;
      z-index: -1;
      border-radius: 0.0125rem;
      background-color: #fff;
    }
  }

  &.hovered {
    animation: changeFontColor linear 1.75s 16s;

    &:after {
      content: "";
      position: absolute;
      top: 0.125rem;
      left: -0.125rem;
      right: -0.125rem;
      bottom: 0.125rem;
      z-index: -1;
      border-radius: 0.0125rem;
      animation: changeBackground linear 1.75s 16s;   
    }
  }

  @keyframes changeFontColor {
    0% {
      color: $white;
    }
    15% {
      color: #000;
    }
    90% {
      color: #000;
    }
    100% {
      color: $white;
    }
  }

  @keyframes changeBackground {
    0% {
      background-color: transparent;
    }
    15% {
      background-color: #fff;
    }
    90% {
      background-color: #fff;
    }
    100% {
      background-color: transparent;
    }
  }
}
</style>

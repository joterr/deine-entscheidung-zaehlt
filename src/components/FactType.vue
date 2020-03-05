<template>
  <span class="linked-detail" :class="{'zero': calced === 0}" v-on:click="showAdditionalDetails($event)">
    <span v-if="calced === 0">{{ type.IS_ANIMAL ? 'keine' : '0'}}</span>
    <span v-else>{{ makeLocaleInteger(calced, type.COUNT_ONE) }}</span>
    {{ ' ' }}
    <span v-html="type.LABEL"></span>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide, Watch } from "vue-property-decorator";
import {
  ModeEnum,
  AVERAGE_LIFE_SPAN,
  Type,
  ModeValue
} from "../factTypes.constant";
import ICountUp from "vue-countup-v2";

@Component({
  components: {
    ICountUp
  },
  props: ["counter", "type", "mode", "active", "highlight"]
})
export default class FactType extends Vue {
  @Prop()
  private type!: Type;

  @Prop()
  private mode!: ModeEnum;

  @Prop()
  private counter!: number;

  @Provide()
  private calced: number = 0;

  @Provide()
  private countUpOptions: any = {
    useEasing: false,
    useGrouping: false,
    separator: ".",
    decimal: ","
  };

  private microCounter!: number;

  public showAdditionalDetails(event: MouseEvent): void {
    if (this.calced !== 0) {
      this.$emit("show-details", this.type);
    }
    event.stopImmediatePropagation();
  }

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

  private mounted(): void {
    this.calc();
  }

  @Watch("mode")
  private onModeChanged(): void {
    this.calc(true);
  }

  @Watch("counter")
  private onCounterChanged(): void {
    this.calc();
  }

  private calc(modeChanged: boolean = false): void {
    let calcedNew: number;
    if (this.mode === ModeEnum.DE) {
      calcedNew = this.makeInt(this.counter * this.getCountUpPerSecond());
    } else {
      calcedNew = this.makeInt(
        this.counter < AVERAGE_LIFE_SPAN
          ? this.counter * this.getCountUpPerSecond()
          : this.calcYearlyByMode() * AVERAGE_LIFE_SPAN
      );
    }

    if (modeChanged) {
      this.calced =
        calcedNew > this.calced ? calcedNew * 0.99 : calcedNew * 1.01;
    }

    clearInterval(this.microCounter);

    const diff: number = calcedNew - this.calced;
    const absDiff: number = Math.abs(diff);
    const timer: number = absDiff > 1000 ? 1 : 1000 / absDiff;
    const steps: number = absDiff / 1000 < 1 ? 1 : absDiff / 1000;

    if (absDiff !== 0) {
      this.microCounter = setInterval(() => {
        if (Math.abs(calcedNew - this.calced) <= steps) {
          clearInterval(this.microCounter);
          this.calced = calcedNew;
        } else {
          this.calced += diff > 0 ? steps : -1 * steps;
        }
      }, timer);
    }
  }

  private calcYearlyByMode(): number {
    const modeValue: ModeValue = this.type[this.mode];
    return modeValue.FACTOR
      ? modeValue.PER_YEAR * modeValue.FACTOR
      : modeValue.PER_YEAR;
  }

  private getCountUpPerSecond(): number {
    const yearly: number = this.calcYearlyByMode();
    return this.mode === ModeEnum.DE ? yearly / 365 / 24 / 60 / 60 : yearly;
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
  font-size: $font-size-highlight;

  @include respond-to("small") {
    font-size: $font-size-medium-highlight;
  }
  @include respond-to("x-small") {
    font-size: $font-size-small-highlight;
  }

  &.zero {
    opacity: 0.5;
  }

  span {
    white-space: nowrap;
  }

  &:not(.zero):hover {
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
}
</style>

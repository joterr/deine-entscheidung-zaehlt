<template>
  <span class="linked-detail" v-on:click="$emit('show-details', type)">
    <span v-if="calced === 0">{{ !type.UNIT ? 'keine' : '0'}}</span>
    <span v-else-if="calced < 10">{{ makeLocaleInteger(calced, type.COUNT_ONE) }}</span>
    <span v-else>
      <ICountUp :endVal="calced" :options="countUpOptions" :delay="1000" />
    </span>
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
    useGrouping: true,
    separator: ".",
    decimal: ","
  };

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
    this.calc();
  }

  @Watch("counter")
  private onCounterChanged(): void {
    this.calc();
  }

  private calc(): void {
    if (this.mode === "DE") {
      this.calced = this.makeInt(
        this.counter * this.getCountUpPerMilliseconds()
      );
    } else {
      this.calced = this.makeInt(
        this.counter < AVERAGE_LIFE_SPAN
          ? this.counter * this.getCountUpPerMilliseconds()
          : this.calcYearlyByMode() * AVERAGE_LIFE_SPAN
      );
    }
  }

  private calcYearlyByMode(): number {
    const modeValue: ModeValue = this.type[this.mode];
    return modeValue.FACTOR
      ? modeValue.PER_YEAR * modeValue.FACTOR
      : modeValue.PER_YEAR;
  }

  private getCountUpPerMilliseconds(): number {
    const yearly: number = this.calcYearlyByMode();
    return this.mode === "DE" ? yearly / 365 / 24 / 60 / 60 : yearly;
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
  @include respond-to("x-small") {
    font-size: $font-size-small-highlight;
  }

  span {
    white-space: nowrap;
  }

  &:hover {
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

<template>
  <span class="linked-detail" v-on:click="$emit('show-details', type)">
    <span v-if="calced === 0">{{ !type.UNIT ? 'kein' : '0'}}</span>
    <span v-else-if="calced < 10">{{ makeLocaleInteger(calced, type.COUNT_ONE) }}</span>
    <span v-else>
      <ICountUp :endVal="calced" :options="countUpOptions" />
      <!-- {{calc()}} <ICountUp :endVal="calc()" :options="countUpOptions" /> -->
    </span>
    {{ ' ' }}
    <span
      v-html="calced <= 1 ? type.LABEL_1 : calced < 10 ? type.LABEL_10 : type.LABEL"
    ></span>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide, Watch } from "vue-property-decorator";
import { ModeEnum, AVERAGE_LIFE_SPAN } from "../factTypes.constant";
import ICountUp from "vue-countup-v2";

@Component({
  components: {
    ICountUp
  },
  props: ["counter", "type", "mode", "active", "highlight"]
})
export default class FactType extends Vue {
  @Prop()
  private type: any;

  @Prop()
  private mode!: ModeEnum;

  @Prop()
  private counter!: number;

  @Provide()
  private calced: number = 0;

  @Provide()
  private countUpOptions: any = {
    useEasing: true,
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
  private onPropertyChanged(): void {
    this.calc();
  }

  private calc(): void {
    if (this.mode === "DE") {
      this.calced = this.makeInt(this.counter * this.getCountUpPerMilliseconds());
    } else {
      this.calced = this.makeInt(
        this.counter < AVERAGE_LIFE_SPAN
          ? this.counter * this.getCountUpPerMilliseconds()
          : this.calcYearlyByMode() * AVERAGE_LIFE_SPAN
      );
    }
  }

  private calcYearlyByMode(): number {
    return this.type[this.mode].FACTOR
      ? this.type[this.mode].PER_YEAR / this.type[this.mode].FACTOR
      : this.type[this.mode].PER_YEAR;
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
  @include respond-to("xx-small") {
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

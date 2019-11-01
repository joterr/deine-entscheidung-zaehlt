<template>
  <div class="additional-wrapper" v-if="activeType">
    <div class="overlay" v-on:click="$emit('close-details')"></div>
    <div class="additional-details">
      <div class="close" v-on:click="$emit('close-details')">
        <span></span>
      </div>
      <div class="inner">
        <div
          class="content"
          v-bind:class="{'over-a-million': activeType.PER_YEAR  > 1000000, 'over-a-billion': activeType.PER_YEAR  > 1000000000}"
        >
          <h3>
            <span class="timespan">Das sind jährlich über</span>
          </h3>

          <h1 class="animate million big-screen">
            <ICountUp :endVal="activeType.PER_YEAR" :options="countUpOptions" />
          </h1>
          <h1 class="animate million small-screen">
            <ICountUp :endVal="activeType.PER_YEAR / 1000000" :options="countUpOptions" />&nbsp;Mio.
          </h1>
          <h1 class="animate billion big-screen">
            <ICountUp :endVal="activeType.PER_YEAR / 1000000" :options="countUpOptions" />&nbsp;Mio.
          </h1>
          <h1 class="animate billion small-screen">
            <ICountUp :endVal="activeType.PER_YEAR / 1000000000" :options="countUpOptions" />&nbsp;Mrd.
          </h1>
          <h2 class="animate">
            <span v-if="activeType.UNIT">{{activeType.UNIT}}&nbsp;</span>
            <span v-html="activeType.UNIT ? activeType.NAME : activeType.LABEL"></span>
            <span class="included-types-annotation" v-if="activeType.INCLUDED_TYPES">*</span>
          </h2>
          <div
            class="included-types"
            v-if="activeType.INCLUDED_TYPES"
          >*{{activeType.INCLUDED_TYPES}}</div>
          <div class="special-content" v-if="activeType.ID === TYPES.HUHNER.ID">
            <h4 class="intro">umgerechnet</h4>
            <!-- 63470000 (Tod 11424600) aus Eierproduktion, 45000850 Müll, 622000000 Geschlachtet (43540000 Krankheit), : 54964600 Krank gesamt :: 727540000 Gesamt-->
            <h4>72% nur für Fleisch, 15% ursprünglich für Eier, 7% sterben durch Krankheit und 6% landen im Müll.</h4>
          </div>
          <div class="special-content" v-else-if="activeType.ID === TYPES.SCHWEINE.ID">
            <h4 class="intro">umgerechnet</h4>
            <!-- 4100000 landen im Müll, 56605100 geschlachtet, 13500000 in der TBA -->
            <h4>
              74% für Fleisch, 20% sterben durch Krankheit und
              <br />6% landen im Müll.
            </h4>
          </div>
          <div class="special-content" v-else-if="activeType.ID === TYPES.RINDER.ID">
            <h4 class="intro">umgerechnet</h4>
            <!-- 229950 Müll, 1700000 Milchvieh wg. Krankheit geschlachtet (1200000 geschlachtet) und TBA, 579111 TBA -->
            <h4>49% für Fleisch, 30% ursprünglich für Milch, 15% sterben durch Krankheit und 6% landen im Müll.</h4>
          </div>
          <div class="special-content" v-else-if="activeType.ID === TYPES.ANTIBIOTIKA.ID">
            <h4 class="intro">davon sind mindestens</h4>
            <h4>18% überlebensnotwendige Reserveantibiotika</h4>
          </div>
          <div
            class="relative-data-hint"
            v-if="activeType.ID === TYPES.HUHNER.ID || activeType.ID === TYPES.RINDER.ID"
          >Die relativen Werte bilden auf Grund einer unzureichenden Datenlage nur grobe Annäherungen.</div>
          <div class="source-declaration">
            <div class="calculation">Grundlage: {{ activeType.CALCULATION }}</div>
            <div class="source">
              Quelle
              <span v-if="activeType.SOURCES.length > 1">n</span>:
              <span v-for="(source, index) in activeType.SOURCES" v-bind:key="source.SOURCE">
                <a :href="source.SOURCE_URL" target="_blanc">{{ source.SOURCE }}</a>
                <span v-if="index !== activeType.SOURCES.length - 1">,&nbsp;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { FACT_TYPES_CONST } from "@/factTypes.constant";
import ICountUp from "vue-countup-v2";

@Component({
  props: ["activeType"],
  components: {
    ICountUp
  }
})
export default class AdditionalDetails extends Vue {
  @Provide()
  private TYPES = FACT_TYPES_CONST;

  @Provide()
  private countUpOptions: any = {
    useEasing: true,
    useGrouping: true,
    separator: ".",
    decimal: ","
  };

  public makeLocaleInteger(val: number): string {
    return Math.ceil(val).toLocaleString("de-DE");
  }
}
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  cursor: pointer;
}

.additional-details {
  position: fixed;
  top: 50vh;
  left: 50vw;
  color: #000;
  transform: translateX(-50%) translateY(-50%);
  width: 40vw;
  transition: opacity ease 500ms;
  background-color: #fff;
  padding: 2.5rem;
  padding-bottom: 1.25rem;
  border-radius: 1pt;
  z-index: 999;
  animation: animateIn 0.75s ease forwards;

  @include respond-to("xx-large") {
    width: 44vw;
  }

  @include respond-to("x-large") {
    width: 60vw;
  }

  @include respond-to("large") {
    width: 80vw;
  }

  @include respond-to("medium") {
    width: 80vw;
  }

  @include respond-to("small") {
    padding: 4.5rem 1.5rem 1.25rem 1.5rem;
    width: 90vw;
  }

  .close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    @include std-text-bold();
    font-size: x-large;
    height: 39px;
    width: 39px;

    &:after {
      content: "";
      position: absolute;
      top: -2rem;
      left: -2rem;
      right: -2rem;
      bottom: -2rem;
      cursor: pointer;
      z-index: 9999;
    }

    span:before,
    span:after {
      content: "";
      position: absolute;
      width: 39px;
      height: 3px;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
      border-radius: 3px;
      background-color: #000;
      opacity: 0;
    }
    span:before {
      animation: animateXBeforeIn 0.05s ease forwards 1.125s;
    }
    span:after {
      animation: animateXAfterIn 0.05s ease forwards 1.25s;
    }

    @keyframes animateXBeforeIn {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0) rotate(0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 17px, 0) rotate(45deg);
      }
    }

    @keyframes animateXAfterIn {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0) rotate(0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 17px, 0) rotate(-45deg);
      }
    }
  }

  .inner {
    position: relative;
    overflow: hidden;

    .animate {
      transform: translateX(100%);
      animation: delayShowAndSliceIn 1s ease forwards 0.1s;

      &:nth-child(2) {
        animation: delayShowAndSliceIn 1s ease forwards 0.15s;
      }
      &:nth-child(3) {
        animation: delayShowAndSliceIn 1s ease forwards 0.2s;
      }
    }

    & > *:not(.animate) {
      opacity: 0;
      animation: blurIn 1s ease forwards 0.125s;
    }

    .billion {
      display: none;
    }

    .million.small-screen {
      display: none;
    }

    .over-a-million {
      .million.small-screen {
        display: none;
      }

      @include respond-to("small") {
        .million.big-screen {
          display: none;
        }
        .million.small-screen {
          display: block;
        }
      }
    }

    .over-a-million.over-a-billion {
      .million,
      .billion.small-screen {
        display: none;
      }

      .billion.big-screen {
        display: block;
      }

      @include respond-to("small") {
        .billion.big-screen {
          display: none;
        }
        .billion.small-screen {
          display: block;
        }
      }
    }

    h1 {
      @include std-text-bold-italic();
      font-size: 7rem;
      padding-bottom: 0.25rem;

      @include respond-to("medium") {
        font-size: 6rem;
      }

      @include respond-to("small") {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }
    }

    h2 {
      @include std-text-bold-italic();
      font-size: 3.5rem;

      @include respond-to("small") {
        font-size: 2.25rem;
      }
    }

    h3 {
      font-size: 1.75rem;

      @include respond-to("small") {
        font-size: 1.25rem;
      }
    }

    h4 {
      font-size: 1.5rem;
      padding: 0.25rem 0;
      line-height: 140%;

      @include respond-to("small") {
        font-size: 1.25rem;
      }

      &.intro {
        @include std-text();
        font-size: 1rem;
        padding-bottom: 0.5rem;
      }
    }

    .timespan {
      @include std-text-bold();
    }

    .included-types {
      padding-top: 15pt;
    }

    .special-content {
      padding-top: 1.75rem;
    }

    .relative-data-hint {
      padding-top: 0.125rem;
      font-size: xx-small;
      opacity: 0.4;
    }

    .source-declaration {
      display: flex;
      justify-content: space-between;
      margin-top: 1.75rem;
      padding: 0.125rem;
      font-size: x-small;
      opacity: 0.25;
      transition: ease 0.3s;

      &:hover {
        opacity: 1;
      }

      .source {
        text-align: right;
      }

      @include respond-to("medium") {
        flex-direction: column;

        .source {
          margin-top: 0.5rem;
        }
      }

      a {
        text-decoration: underline;
        color: #000;
        transition: ease 0.3s;
      }

      &:hover {
        color: #fff;
        background-color: #000;

        a {
          color: #fff;
        }
      }
    }
  }

  @keyframes delayShowAndSliceIn {
    0% {
      transform: translateX(1000px);
      filter: blur(3px);
    }
    100% {
      transform: translateX(0);
      filter: blur(0);
    }
  }

  @keyframes blurIn {
    0% {
      opacity: 0;
      filter: blur(3px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  @keyframes animateIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>

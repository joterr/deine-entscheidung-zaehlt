<template>
  <div class="additional-wrapper" v-if="activeType">
    <div class="overlay" v-on:click="close()"></div>
    <div class="additional-details">
      <div class="close" v-on:click="close()">schließen</div>
      <div class="inner">
        <div
          class="content"
          :class="{
              'over-a-million': activeType[mode].PER_YEAR  > 1000000,
              'over-a-billion': activeType[mode].PER_YEAR  > 1000000000
            }"
        >
          <h3>
            <span class="timespan">Das sind jährlich über</span>
          </h3>
          <h1 class="animate million big-screen">
            <ICountUp :endVal="activeType[mode].PER_YEAR < 1 ? 1 : activeType[mode].PER_YEAR" :options="countUpOptions" />
          </h1>
          <h1 class="animate million small-screen">
            <ICountUp :endVal="activeType[mode].PER_YEAR / 1000000" :options="countUpOptions" />&nbsp;Mio.
          </h1>
          <h1 class="animate billion big-screen">
            <ICountUp :endVal="activeType[mode].PER_YEAR / 1000000" :options="countUpOptions" />&nbsp;Mio.
          </h1>
          <h1 class="animate billion small-screen">
            <ICountUp :endVal="activeType[mode].PER_YEAR / 1000000000" :options="countUpOptions" />&nbsp;Mrd.
          </h1>
          <h2 class="animate">
            <span v-if="activeType[mode].UNIT">{{activeType[mode].UNIT}}&nbsp;</span>
            <span v-html="activeType[mode].UNIT ? activeType.NAME : activeType.LABEL"></span>
            <span class="included-types-annotation" v-if="activeType.INCLUDED_TYPES">*</span>
          </h2>
          <div
            class="included-types"
            v-if="activeType[mode].INCLUDED_TYPES || activeType.INCLUDED_TYPES"
          >*{{activeType[mode].INCLUDED_TYPES || activeType.INCLUDED_TYPES}}</div>
          <div class="special-content" v-if="activeType.ID === TYPES.HUHNER.ID && mode !== veggieMode">
            <h4 class="intro">umgerechnet</h4>
            <!-- 63470000 (Tod 11424600) aus Eierproduktion, 45000850 Geschreddert, 622000000 Geschlachtet (43540000 Krankheit), : 54964600 Krank gesamt :: 727540000 Gesamt-->
            <h4>72&percnt;&nbsp;nur für Fleisch, 9&percnt;&nbsp;ursprünglich für Eier, 6&percnt;&nbsp;werden direkt geschreddert, 7&percnt;&nbsp;sterben durch Krankheit und 6&percnt;&nbsp;landen im Müll.</h4>
          </div>
          <div class="special-content" v-if="activeType.ID === TYPES.HUHNER.ID && mode === veggieMode">
            <h4 class="intro">umgerechnet</h4>
            <h4>50&percnt;&nbsp;werden direkt geschreddert, 32&percnt;&nbsp;ursprünglich für Eier<br />und 18&percnt;&nbsp;sterben durch Krankheit.</h4>
          </div>
          <div class="special-content" v-else-if="activeType.ID === TYPES.SCHWEINE.ID">
            <h4 class="intro">umgerechnet</h4>
            <!-- 4100000 landen im Müll, 56605100 geschlachtet, 13500000 in der TBA -->
            <h4>
              74&percnt;&nbsp;für Fleisch, 20&percnt;&nbsp;sterben durch Krankheit und
              <br />6&percnt;&nbsp;landen im Müll.
            </h4>
          </div>
          <div class="special-content" v-else-if="activeType.ID === TYPES.RINDER.ID && mode !== veggieMode">
            <h4 class="intro">umgerechnet</h4>
            <!-- 229950 Müll, 1700000 Milchvieh wg. Krankheit geschlachtet (1200000 geschlachtet) und TBA, 579111 TBA -->
            <h4>49&percnt;&nbsp;für Fleisch, 30&percnt;&nbsp;ursprünglich für Milch, 15&percnt;&nbsp;sterben durch Krankheit und 6&percnt;&nbsp;landen im Müll.</h4>
          </div>
          <div class="special-content" v-else-if="activeType.ID === TYPES.RINDER.ID && mode === veggieMode">
            <h4>jährlich wird nahezu jede zweite Kuh wegen u.a. Verletzungen, Krankheit oder geringer Milchleistung aussortiert</h4>
          </div>
          <div class="special-content" v-else-if="activeType.ID === TYPES.ANTIBIOTIKA.ID">
            <h4 class="intro">davon sind mindestens</h4>
            <h4>18&percnt;&nbsp;überlebensnotwendige Reserveantibiotika</h4>
          </div>
          <div
            class="relative-data-hint"
            v-if="activeType.ID === TYPES.HUHNER.ID || activeType.ID === TYPES.RINDER.ID"
          >Die relativen Werte bilden auf Grund einer unzureichenden Datenlage nur grobe Annäherungen.</div>
          <div class="problem-declaration" v-if="activeType.PROBLEM">
            <span>Was ist das Problem?</span>
            {{ activeType.PROBLEM }}
          </div>
          <div class="source-declaration">
            <div
              class="calculation"
              v-if="activeType[mode].CALCULATION"
            >Grundlage: {{ activeType[mode].CALCULATION }}</div>
            <div class="source">
              Quelle<span v-if="activeType[mode].SOURCES.length > 1">n</span>:
              <span v-for="(source, index) in activeType[mode].SOURCES" :key="source.SOURCE">
                <a :href="source.SOURCE_URL" target="_blanc">{{ source.SOURCE }}</a>
                <span v-if="index !== activeType[mode].SOURCES.length - 1">,&nbsp;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { FACT_TYPES_CONST, ModeEnum, Types, Type, Mode } from "@/factTypes.constant";
import ICountUp from "vue-countup-v2";
import ModeSelector from "@/components/ModeSelector.vue";

@Component({
  props: ["activeType", "mode"],
  components: {
    ModeSelector,
    ICountUp
  }
})
export default class AdditionalDetails extends Vue {
  @Provide()
  private TYPES: Types = FACT_TYPES_CONST;

  @Provide()
  private activeType!: Type;

  @Provide()
  private mode!: ModeEnum;

  @Provide()
  private veggieMode: ModeEnum = ModeEnum.VEGGIE;

  @Provide()
  private countUpOptions: any = {
    useEasing: true,
    useGrouping: true,
    separator: ".",
    decimal: ","
  };

  public close(): void {
      this.$emit("close-details");
  }

  @Watch("mode")
  private onModeChanged(value: Mode): void {
    if (this.activeType && this.activeType[this.mode].PER_YEAR === 0) {
        this.close();
    }
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
  z-index: 9999;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
}

.additional-details {
  position: fixed;
  top: 50vh;
  left: 50vw;
  color: #fff;
  transform: translateX(-50%) translateY(-50%);
  width: 44vw;
  transition: opacity ease 500ms;
  background-color: rgba(255, 255, 255, 0.065);
  box-sizing: content-box;
  padding: 2.5rem;
  padding-bottom: 1.25rem;
  border-radius: 1pt;
  z-index: 99999;
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
    right: -2.125rem;
    transform: rotate(90deg);
    @include std-text-bold();
    font-size: x-small;
    color: #fff;
    cursor: pointer;

    @include respond-to("small") {
      top: 1.75rem;
      right: -0.5rem;
    }
  }

  .inner {
    position: relative;

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
      font-size: 8rem;

      @include respond-to("medium") {
        font-size: 6rem;
      }

      @include respond-to("small") {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }

      @include respond-to("x-small") {
        font-size: 4.25rem;
      }

      @include respond-to("xx-small") {
        font-size: 3.5rem;
      }
    }

    h2 {
      @include std-text-bold-italic();
      font-size: 3.5rem;

      @include respond-to("small") {
        font-size: 2.25rem;
      }

      @include respond-to("x-small") {
        font-size: 2rem;
        word-break: break-all;
      }

      @include respond-to("xx-small") {
        font-size: 1.75rem;
      }
    }

    h3 {
      font-size: 1.75rem;

      @include respond-to("small") {
        font-size: 1.25rem;
      }

      @include respond-to("x-small") {
        font-size: 1.125rem;
      }
    }

    h4 {
      font-size: 1.5rem;
      line-height: 140%;

      @include respond-to("small") {
        font-size: 1.25rem;
      }

      @include respond-to("x-small") {
        font-size: 1.125rem;
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
      padding-top: 1.15rem;
    }

    .relative-data-hint {
      padding-top: 0.125rem;
      font-size: xx-small;
      opacity: 0.4;
    }

    .problem-declaration {
      padding-top: 0.75rem;
      padding-bottom: 0.25rem;
      font-size: small;
      opacity: 0.6;

      span {
        display: block;
        @include std-text-bold();
      }
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

        span {
          white-space: nowrap;
        }
      }

      @include respond-to("medium") {
        flex-direction: column;

        .source {
          margin-top: 0.5rem;
        }
      }

      a {
        text-decoration: underline;
        color: #fff;
        transition: ease 0.3s;
      }

      &:hover {
        color: #000;
        background-color: rgba(255, 255, 255, 0.85);
        border-radius: 0.01rem;

        a {
          color: #000;
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

<template>
  <div class="fact-wrapper" :class="{'hide': activeDetail !== null}">
    <div class="sentance-wrapper initial-question">
      <div class="inner">
        <h1>Deine Entscheidung zählt?</h1>
      </div>
    </div>
    <div class="sentance-wrapper fact-sentence" v-on:click="$emit('open-truth-overlay')">
      <div class="inner">
        <h1 class="main-info">
          <span v-if="activeMode === ModeDE">
            In
            <span class="highlight">{{getPastTimeString(pastSeconds)}}</span> wurde<i v-if="pastSeconds > 1">n</i> mehr als
          </span>
          <span v-if="activeMode !== ModeDE">
            In
            <span
              class="highlight"
            >{{ averageLifeSpan > pastSeconds ? pastSeconds : averageLifeSpan }} Jahren</span>
            werden für eine<span class="highlight">{{ getSelectedModeName() }}</span>
            durchschnittlich
          </span>
          <span class="highlight-1">
            <FactType
              :counter="pastSeconds"
              :type="types.FISCHE"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span class="highlight-2">
            <FactType
              :counter="pastSeconds"
              :type="types.HUHNER"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span class="highlight-3">
            <FactType
              :counter="pastSeconds"
              :type="types.SCHWEINE"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span class="highlight-4">
            <FactType
              :counter="pastSeconds"
              :type="types.TRUTHAHNER"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span class="additional highlight-5">
            <FactType
              :counter="pastSeconds"
              :type="types.ENTEN"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />&nbsp;und
          </span>
          <span class="highlight-6">
            <FactType
              :counter="pastSeconds"
              :type="types.RINDER"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />
          </span>
          allein für Essen getötet oder sind in Folge schlechter Haltebedingungen verendet.
        </h1>
        <h1 class="additional-info">
          Zusätzliche
          <span class="highlight-7">
            <FactType
              :counter="pastSeconds"
              :type="types.SOY"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span class="highlight-8">
            <FactType
              :counter="pastSeconds"
              :type="types.GULLE"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span class="highlight-9">
            <FactType
              :counter="pastSeconds"
              :type="types.ANTIBIOTIKA"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />&nbsp;und
          </span>
          <span class="highlight-10">
            <FactType
              :counter="pastSeconds"
              :type="types.CO2"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />
          </span>
          belasten unsere Gesundheit und Umwelt.
        </h1>
      </div>
    </div>
    <div class="sentance-wrapper show-truth" v-on:click="openTruthOverlay()">
      <span>
        Ohne Fleisch,
        <br />Eier oder Milch.
      </span>
      <span class="question">Ist das möglich?</span>
    </div>
    <AdditionalDetails
      :activeType="activeDetail"
      :mode="activeMode"
      v-on:close-details="closeDetail()"
    />
  </div>
</template>

<script lang="ts">
import AdditionalDetails from "@/components/AdditionalDetails.vue";
import FactType from "@/components/FactType.vue";
import { Component, Vue, Provide } from "vue-property-decorator";
import {
  FACT_TYPES_CONST,
  ModeEnum,
  Mode,
  MODES,
  AVERAGE_LIFE_SPAN,
  Types
} from "@/factTypes.constant";

@Component({
  components: { AdditionalDetails, FactType },
  props: ["activeMode"]
})
export default class FactSentence extends Vue {
  @Provide()
  private types: Types = FACT_TYPES_CONST;
  @Provide()
  private averageLifeSpan: number = AVERAGE_LIFE_SPAN;
  @Provide()
  private ModeDE: ModeEnum = ModeEnum.DE;
  @Provide()
  private activeMode!: ModeEnum;
  @Provide()
  private activeDetail = null;
  @Provide()
  private pastSeconds: number = 1;
  @Provide()
  private highlight: boolean = true;

  private SELECTABLE_MODES: Mode[] = MODES;

  private readonly maxPastSeconds: number = 24 * 60 * 60;

  public getPastTimeString(time: number): string {
    let pastTimeString = "";

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    if (minutes > 0) {
      pastTimeString = minutes === 1 ? "einer Minute" : minutes + " Minuten";
    }
    if (minutes > 0 && seconds !== 0) {
      pastTimeString += " und ";
    }
    if (seconds > 0 && seconds !== 0) {
      pastTimeString +=
        (seconds === 1 ? "einer" : seconds) +
        " Sekunde" +
        (seconds === 1 ? "" : "n");
    }
    return pastTimeString;
  }

  public showDetail(id: any) {
    this.activeDetail = id;
    this.highlight = false;
  }

  public closeDetail() {
    this.activeDetail = null;
  }

  public getSelectedModeName(): string {
    const mode: Mode | undefined = this.SELECTABLE_MODES.find(
      (m: any) => m.id === this.activeMode
    );
    return mode ? mode.niceNameFull : "MODE_NOT_FOUND";
  }

  private mounted() {
    this.startInterval();
  }

  private startInterval() {
    setInterval(() => {
      if (this.pastSeconds < this.maxPastSeconds) {
        this.pastSeconds++;
      }
    }, 1000);
  }
}
</script>

<style scoped lang="scss">
i {
  @include highlight-text();
}

.fact-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;

  &.hide > .sentance-wrapper {
    opacity: 0;

    &.show-truth {
      opacity: 1;

      & > span {
        opacity: 1;
        animation: delayHideBlur 600ms ease forwards;
      }
    }
  }

  .sentance-wrapper {
    position: absolute;
    top: 50vh;
    left: 50vw;
    z-index: 999;
    width: 20vw;
    margin-left: 20vw;
    transform: translate(-50%, -50%);
    text-align: left;
    cursor: pointer;

    @include respond-to("xx-large") {
      width: 22vw;
    }

    @include respond-to("x-large") {
      width: 26vw;
      margin-left: 14vw;
    }

    @include respond-to("large") {
      width: 30vw;
      margin-left: 12vw;
    }

    @include respond-to("medium") {
      width: 40vw;
      margin-left: 8vw;
    }

    @include respond-to("small") {
      width: 80vw;
      margin-left: 0;
      left: 10vw;
      top: 44vh;
      transform: translate(0, -50%);
    }

    @include respond-to("x-small") {
      width: 80vw;
      left: 8vw;
      transform: translate(0, -50%);
    }

    @include respond-to("xx-small") {
      width: 86vw;
      left: 8vw;
    }

    .inner {
      display: inline-block;
      margin: 0 auto;

      .additional {
        @include respond-to("small") {
          position: absolute;
          top: -100vh;
        }
      }

      & > * {
        transform: translateY(2000px);
      }
    }

    &.show-truth {
      text-align: right;
      cursor: pointer;
      z-index: 9;
      opacity: 0;
      animation: delayShowBlur 500ms ease forwards 16s;

      span {
        display: block;
        color: $cl-accent1;
        @include std-text-bold-italic();
        font-size: 4rem;
        @include respond-to("small") {
          font-size: 3.5rem;
        }
        line-height: 115%;
        text-decoration: underline;
        text-shadow: 0 0 0.25rem $dark;
        opacity: 0.9;

        &.question {
          margin-top: 1.5rem;
        }
      }
    }
  }
}

.initial-question {
  width: 20rem !important;
  text-align: center;

  .inner {
    text-align: center;
  }

  h1 {
    animation: delayShowAndSliceInOut 3s ease-in-out forwards 1s;
    display: inline-block;
    @include highlight-text-bold();
    color: $white;
    font-size: $font-size;
    @include respond-to("small") {
      font-size: $font-size-medium-highlight;
    }
    @include respond-to("x-small") {
      font-size: $font-size-small-highlight;
    }
  }
}

.fact-sentence {
  h1 {
    @include highlight-text();
    color: rgba(255, 255, 255, 0.5);
    font-size: $font-size;
    @include respond-to("small") {
      font-size: $font-size-medium;
    }
    @include respond-to("x-small") {
      font-size: $font-size-small;
    }
    line-height: 160%;
    animation: delayShowAndSliceIn 1.25s ease forwards 3.5s;
    white-space: normal;
    word-wrap: break-word;

    & > * {
      font-size: 0;
    }

    & > span,
    & > i {
      font-size: $font-size;
      @include respond-to("small") {
        font-size: $font-size-medium;
      }
      @include respond-to("x-small") {
        font-size: $font-size-small;
      }
      font-style: normal;
      display: block;
    }

    & span.highlight {
      display: block;
      font-size: $font-size-highlight;
      @include respond-to("small") {
        font-size: $font-size-medium-highlight;
      }
      @include respond-to("x-small") {
        font-size: $font-size-small-highlight;
      }
      @include highlight-text-bold();
      color: $white;
      transition: 500ms ease font-size;
    }

    &.additional-info {
      padding-top: 1.5rem;
      animation: delayShowAndSliceIn 1.25s ease forwards 4s;
    }

    @for $i from 1 through 10 {
      span.highlight-#{$i} span.linked-detail {
        animation: changeFontColor linear 0.6s calc(12s + #{$i} * 0.2s);

        &:after {
          content: "";
          position: absolute;
          top: 0.125rem;
          left: -0.125rem;
          right: -0.125rem;
          bottom: 0.125rem;
          z-index: -1;
          border-radius: 0.0125rem;
          animation: changeBackground linear 0.6s calc(12s + #{$i} * 0.2s);
        }
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
}

@keyframes delayShowAndSliceInOut {
  0% {
    transform: translateY(2000px);
    filter: blur(4px);
  }
  25% {
    transform: translateY(0);
    filter: blur(0);
  }
  75% {
    transform: translateY(0);
    filter: blur(0);
  }
  100% {
    transform: translateY(-2000px);
    filter: blur(4px);
  }
}

@keyframes delayShowAndSliceIn {
  0% {
    transform: translateY(2000px);
    filter: blur(4px);
  }
  100% {
    transform: translateY(0);
    filter: blur(0);
  }
}
</style>

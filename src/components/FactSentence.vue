<template>
  <div class="fact-wrapper">
    <div class="sentance-wrapper initial-question" v-if="false">
      <div class="inner">
        <h1>Deine Entscheidung zählt?</h1>
      </div>
    </div>
    <div class="sentance-wrapper fact-sentence" :class="{'hide': activeDetail !== null}">
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
            werden für eine
            <span class="highlight">{{ getSelectedModeName() }}</span>
            durchschnittlich
          </span>
          <span>
            <FactType
              :counter="pastSeconds"
              :type="types.FISCHE"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span>
            <FactType
              :counter="pastSeconds"
              :type="types.HUHNER"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span>
            <FactType
              :counter="pastSeconds"
              :type="types.SCHWEINE"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span>
            <FactType
              :counter="pastSeconds"
              :type="types.TRUTHAHNER"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span class="additional">
            <FactType
              :counter="pastSeconds"
              :type="types.ENTEN"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />&nbsp;und
          </span>
          <span>
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
          <span>
            <FactType
              :counter="pastSeconds"
              :type="types.SOY"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span>
            <FactType
              :counter="pastSeconds"
              :type="types.GULLE"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />,
          </span>
          <span>
            <FactType
              :counter="pastSeconds"
              :type="types.ANTIBIOTIKA"
              :mode="activeMode"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            />&nbsp;und
          </span>
          <span>
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
      <div class="show-truth" v-if="false">
        <span v-on:click="$emit('open-truth-overlay')">Findest Du nicht okay?</span>
      </div>
      <div class="what-do-you-eat">
        <span>Und Du?</span>
        <span>Ich esse konventionell / vegetarisch / vegan.</span>
      </div>
    </div>
    <AdditionalDetails
      :activeType="activeDetail"
      :mode="activeMode"
      v-on:close-details="closeDetail()"
    />
    <div class="mode-selector-dd">
      <ModeSelector :activeMode="activeMode" v-on:selected-mode="selectedMode($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import AdditionalDetails from "@/components/AdditionalDetails.vue";
import FactType from "@/components/FactType.vue";
import ModeSelector from "@/components/ModeSelector.vue";
import { Component, Vue, Provide } from "vue-property-decorator";
import {
  FACT_TYPES_CONST,
  ModeEnum,
  Mode,
  MODES,
  AVERAGE_LIFE_SPAN
} from "@/factTypes.constant";

@Component({
  components: { AdditionalDetails, FactType, ModeSelector }
})
export default class FactSentence extends Vue {
  @Provide()
  private types = FACT_TYPES_CONST;
  @Provide()
  private averageLifeSpan: number = AVERAGE_LIFE_SPAN;
  @Provide()
  private ModeDE: ModeEnum = ModeEnum.DE;
  @Provide()
  private activeMode: ModeEnum = ModeEnum.DE;
  @Provide()
  private activeDetail = null;
  @Provide()
  private pastSeconds: number = 1;
  @Provide()
  private highlight = true;

  private SELECTABLE_MODES: Mode[] = MODES;

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

  public selectedMode(mode: ModeEnum) {
    this.activeMode = mode;
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
      this.pastSeconds++;
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
  z-index: 999;

  .sentance-wrapper {
    position: fixed;
    top: 50vh;
    left: 51vw;
    width: 20vw;
    transform: translateY(-50%);
    text-align: left;

    &.hide {
      opacity: 0;
    }

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
      margin-top: -4vh;
      width: 86vw;
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

      .small-view {
        position: absolute;
        top: -100vh;
        @include respond-to("small") {
          position: relative;
          top: auto;
        }
      }

      & > * {
        //  transform: translateX(1000px);
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
    //  animation: delayShowAndSliceInOut 3s ease-in-out forwards 1s;
    display: inline-block;
    @include highlight-text-bold();
    color: $white;
    font-size: $font-size;
    @include respond-to("xx-small") {
      font-size: $font-size-small;
    }
  }
}

div.mode-selector-dd {
  position: fixed;
  top: 50vh;
  right: 2vw;
  transform: translateY(calc(-2.2625rem / 2));
  z-index: 99999;
}

.fact-sentence {
  h1 {
    @include highlight-text();
    color: rgba(255, 255, 255, 0.5);
    font-size: $font-size;
    @include respond-to("xx-small") {
      font-size: $font-size-small;
    }
    line-height: 160%;
    //  animation: delayShowAndSliceIn 1.25s ease forwards 3.5s;
    white-space: normal;
    word-wrap: break-word;

    & > * {
      font-size: 0;
    }

    & > span,
    & > i {
      font-size: $font-size;
      @include respond-to("xx-small") {
        font-size: $font-size-small;
      }
      font-style: normal;
      display: block;
    }

    & span.highlight {
      display: block;
      font-size: $font-size-highlight;
      @include respond-to("xx-small") {
        font-size: $font-size-small-highlight;
      }
      @include highlight-text-bold();
      color: $white;
      transition: 500ms ease font-size;
    }

    &.additional-info {
      padding-top: 1.5rem;
      //  animation: delayShowAndSliceIn 1.25s ease forwards 4.5s;
    }
  }

  .show-truth {
    display: block;
    margin-top: 3.125rem;
    width: 15rem;
    transform: translateX(0) !important;
    overflow: hidden;

    span {
      display: block;
      color: $cl-accent1;
      @include std-text-bold-italic();
      font-size: 1rem;
      text-decoration: none;
      cursor: pointer;
      //  transform: translateX(1000px);
      //  animation: delayShowAndSliceIn 500ms ease forwards 8s;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .what-do-you-eat {
    display: none;

    margin-top: 3.125rem;
    transform: translateX(0) !important;

    span {
      display: inline-block;
      margin-top: 0.625rem;
      margin-right: 1rem;
      padding: 0.625rem;
      background-color: $cl-accent1;
      opacity: 0.85;
      color: #000;
      @include std-text-bold-italic();
      font-size: 1rem;
      border-radius: 0.25rem;
    }
  }
}

@keyframes delayShowAndSliceInOut {
  0% {
    transform: translateX(1000px);
    filter: blur(4px);
  }
  25% {
    transform: translateX(0);
    filter: blur(0);
  }
  75% {
    transform: translateX(0);
    filter: blur(0);
  }
  100% {
    transform: translateX(-1000px);
    filter: blur(4px);
  }
}

@keyframes delayShowAndSliceIn {
  0% {
    transform: translateX(1000px);
    filter: blur(4px);
  }
  100% {
    transform: translateX(0);
    filter: blur(0);
  }
}
</style>

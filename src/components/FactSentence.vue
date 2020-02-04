<template>
  <div class="fact-wrapper">
    <div class="sentance-wrapper initial-question">
      <div class="inner">
        <h1>Deine Entscheidung zählt?</h1>
      </div>
    </div>
    <div class="sentance-wrapper fact-sentence">
      <div class="inner" v-if="activeMode === ModeDE">
        <h1 class="main-info">
          In
          <span class="time">{{getPastTimeString(pastTime)}}</span> wurde
          <i v-if="pastTime > 1">n</i> in
          <ModeSelector
            :inline="true"
            :activeMode="activeMode"
            v-on:selected-mode="selectedMode($event)"
          />mehr als
          <span>
            <FactType
              :type="TYPES.FISCHE"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              :type="TYPES.HUHNER"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              :type="TYPES.SCHWEINE"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              :type="TYPES.TRUTHAHNER"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span class="additional">
            <FactType
              :type="TYPES.ENTEN"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              :type="TYPES.RINDER"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
            <span class="additional">,</span>
          </span>
          <span class="additional">
            <FactType
              :type="TYPES.SCHAFE"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span class="additional">
            <FactType
              :type="TYPES.ZIEGEN"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span> und
          <span class="additional">
            <FactType
              :type="TYPES.PFERDE"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span>
          <span class="small-view">
            <FactType
              :type="TYPES.ENTEN"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span>
          allein für Essen getötet oder sind in Folge schlechter Haltebedingungen verendet.
        </h1>
        <h1 class="additional-info">
          Zusätzliche
          <span>
            <FactType
              :type="TYPES.SOY"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              :type="TYPES.GULLE"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              :type="TYPES.ANTIBIOTIKA"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span> und
          <span>
            <FactType
              :type="TYPES.CO2"
              :active="activeDetail"
              :highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span>
          gefährden unsere Gesundheit und Umwelt.
        </h1>
      </div>
      <div class="inner" v-else>
        <h1>
          Eine
          <ModeSelector
            :inline="true"
            :activeMode="activeMode"
            v-on:selected-mode="selectedMode($event)"
          /> Ernährungsweise führt zu...
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
      :activeMode="activeMode"
      v-on:selected-mode="selectedMode($event)"
      v-on:close-details="closeDetail()"
    />
  </div>
</template>

<script lang="ts">
import AdditionalDetails from "@/components/AdditionalDetails.vue";
import FactType from "@/components/FactType.vue";
import ModeSelector from "@/components/ModeSelector.vue";
import { Component, Provide, Vue } from "vue-property-decorator";
import { FACT_TYPES_CONST, MODES, ModeEnum } from "@/factTypes.constant";

@Component({
  components: { AdditionalDetails, FactType, ModeSelector }
})
export default class FactSentence extends Vue {
  @Provide()
  private TYPES = FACT_TYPES_CONST;
  @Provide()
  private MODES = MODES;
  @Provide()
  private ModeDE: ModeEnum = ModeEnum.DE;
  @Provide()
  private activeMode: ModeEnum = ModeEnum.DE;
  @Provide()
  private activeDetail = null;
  @Provide()
  private pastTime = 0;
  @Provide()
  private highlight = true;

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

  private mounted() {
    this.startInterval();
  }

  private startInterval() {
    setInterval(() => {
      this.pastTime += 1;
    }, 1000);
  }
}
</script>

<style scoped lang="scss">
$sentance-font-size: 1.15rem;
$sentance-font-size-small: 1rem;

.fact-wrapper {
  position: relative;
  z-index: 999;

  .sentance-wrapper {
    position: absolute;
    top: 50vh;
    left: 50vw;
    width: 38vw;
    transform: translate(-50%, -50%);

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
      overflow: hidden;
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
    @include highlight-text-bold();
    color: $white;
    font-size: $sentance-font-size;
    @include respond-to("xx-small") {
      font-size: $sentance-font-size-small;
    }
    display: inline-block;
  }
}

.fact-sentence {
  h1 {
    @include highlight-text();
    color: rgba(255, 255, 255, 0.5);
    font-size: $sentance-font-size;
    @include respond-to("xx-small") {
      font-size: $sentance-font-size-small;
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
      font-size: $sentance-font-size;
      @include respond-to("xx-small") {
        font-size: $sentance-font-size-small;
      }
      font-style: normal;
      display: inline;
    }

    & span.time {
      display: inline-block;
      @include highlight-text-bold();
      color: $white;
      transition: 500ms ease font-size;
    }

    &.additional-info {
      margin-top: 1.25rem;
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

<template>
  <div class="fact-wrapper">
    <div class="sentance-wrapper initial-question">
      <div class="inner">
        <h1>Deine Entscheidung zählt?</h1>
      </div>
    </div>
    <div class="sentance-wrapper fact-sentence">
      <div class="inner">
        <h1 class="main-info">
          In
          <span class="time">{{getPastTimeString(pastTime)}}</span> wurde<i v-if="pastTime > 1">n</i> in Deutschland mehr als
          <span>
            <FactType
              v-bind:type="TYPES.FISCHE"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.HUHNER"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.SCHWEINE"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.TRUTHAHNER"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span class="additional">
            <FactType
              v-bind:type="TYPES.ENTEN"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.RINDER"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType><span class="additional">, </span>
          </span>
          <span class="additional">
            <FactType
              v-bind:type="TYPES.SCHAFE"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span class="additional">
            <FactType
              v-bind:type="TYPES.ZIEGEN"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span> und <span class="additional">
            <FactType
              v-bind:type="TYPES.PFERDE"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span><span class="small-view">
            <FactType
              v-bind:type="TYPES.ENTEN"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span>
          allein für Essen getötet oder sind in Folge schlechter Haltebedingungen verendet.
        </h1>
        <h1 class="additional-info">
          Zusätzliche
          <span>
            <FactType
              v-bind:type="TYPES.SOY"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.GULLE"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.ANTIBIOTIKA"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span> und <span>
            <FactType
              v-bind:type="TYPES.CO2"
              v-bind:active="activeDetail"
              v-bind:highlight="highlight"
              v-on:show-details="showDetail"
            ></FactType>
          </span>
          gefährden unsere Gesundheit und Umwelt.
        </h1>
        <div class="show-truth" v-if="false">
          <span v-on:click="$emit('open-truth-overlay')">Findest Du nicht okay?</span>
        </div>
      </div>
    </div>
    <AdditionalDetails v-bind:activeType="activeDetail" v-on:close-details="closeDetail()" />
  </div>
</template>

<script lang="ts">
import AdditionalDetails from "@/components/AdditionalDetails.vue";
import FactType from "@/components/FactType.vue";
import { Component, Provide, Vue } from "vue-property-decorator";
import { FACT_TYPES_CONST } from "@/factTypes.constant";

@Component({
  components: { AdditionalDetails, FactType }
})
export default class FactSentence extends Vue {
  @Provide()
  private TYPES = FACT_TYPES_CONST;
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
      &.fact-sentence {
        top: 12vh;
        transform: translateX(-50%);
      }
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
        transform: translateX(1000px);
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
    @include highlight-text-bold();
    color: $white;
    font-size: $sentance-font-size;
    display: inline-block;
  }
}

.fact-sentence {
  h1 {
    @include highlight-text();
    color: rgba(255, 255, 255, 0.5);
    font-size: $sentance-font-size;
    line-height: 160%;
    animation: delayShowAndSliceIn 1.25s ease forwards 3.5s;
    white-space: normal;
    word-wrap: break-word;

    & > * {
      font-size: 0;
    }

    & > span,
    & > i {
      font-size: $sentance-font-size;
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
      animation: delayShowAndSliceIn 1.25s ease forwards 4.5s;
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
      transform: translateX(1000px);
      animation: delayShowAndSliceIn 500ms ease forwards 8s;

      &:hover {
        text-decoration: underline;
      }
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

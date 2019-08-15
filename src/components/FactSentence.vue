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
              v-bind:type="TYPES.HUHNER"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.FISCHE"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.SCHWEINE"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.TRUTHAHNER"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.ENTEN"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.RINDER"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.SCHAFE"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.ZIEGEN"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>
          </span> und
          <span>
            <FactType
              v-bind:type="TYPES.PFERDE"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>
          </span>
          <span>&nbsp;allein für Essen getötet oder sind in Folge schlechter Haltebedingungen verendet.</span>
        </h1>
        <h1 class="additional-info">
          Zusätzliche
          <span>
            <FactType
              v-bind:type="TYPES.GULLE"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>,
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.ANTIBIOTIKA"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>&nbsp;und
            <br />
          </span>
          <span>
            <FactType
              v-bind:type="TYPES.CO2"
              v-bind:active="activeDetail"
              v-on:show-details="showDetail"
            ></FactType>
          </span>&nbsp;gefährden unsere Gesundheit und Umwelt.
        </h1>
        <div class="show-truth">
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

  public getPastTimeString(time: number): string {
    let pastTimeString = "";

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    if (minutes > 0) {
      pastTimeString = minutes === 1 ? "einer Minute" : minutes + " Minuten";
    }
    if (time > 60) {
      pastTimeString += " und ";
    }
    if (seconds > 0 || time > 60) {
      pastTimeString +=
        (seconds === 1 ? "einer" : seconds) +
        " Sekunde" +
        (seconds === 1 ? "" : "n");
    }
    return pastTimeString;
  }

  public showDetail(id: any) {
    this.activeDetail = id;
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
$sentance-font-size: 1.125rem;

.fact-wrapper {
  position: relative;
  z-index: 999;

  .sentance-wrapper {
    position: absolute;
    top: 50vh;
    left: 50vw;
    width: 40vw;
    transform: translate(-50%, -50%);

    @include respond-to("medium") {
      width: 80vw;
    }

    @include respond-to("small") {
      width: 86vw;
    }

    .inner {
      overflow: hidden;
      display: inline-block;
      margin: 0 auto;

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
    animation: delayShowAndSliceInOut 5s ease-in-out forwards 1s;
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
    animation: delayShowAndSliceIn 1.5s ease forwards 6s;
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
      animation: delayShowAndSliceIn 1.5s ease forwards 8.5s;
    }
  }

  .show-truth {
    display: block;
    margin-top: 2.5em;
    width: 15rem;
    transform: translateX(0) !important;
    overflow: hidden;

    span {
      display: block;
      color: $cl-accent1;
      @include std-text-bold();
      text-decoration: none;
      font-size: 1rem;
      transition: filter 250ms linear;
      cursor: pointer;
      transform: translateX(1000px);
      animation: delayShowAndSliceIn 500ms ease forwards 14s;

      &:hover {
        filter: blur(1px);
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

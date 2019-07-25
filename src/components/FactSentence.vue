<template>
  <div class="fact-sentence">
    <h1 class="main-info">
      In&nbsp;<span class="time">{{getPastTimeString(pastTime)}}</span> wurde<i v-if="pastTime > 1">n</i> allein in Deutschland mehr als<span>&nbsp;<FactType
        v-bind:type="TYPES.HUHNER"
        v-bind:cnt="cntHuhner"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>,&nbsp;</span><span><FactType
        v-bind:type="TYPES.FISCHE"
        v-bind:cnt="cntFische"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>,&nbsp;</span><span><FactType
        v-bind:type="TYPES.SCHWEINE"
        v-bind:cnt="cntSchweine"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>,&nbsp;</span><span><FactType
        v-bind:type="TYPES.TRUTHAHNER"
        v-bind:cnt="cntTruthahner"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>,&nbsp;</span><span><FactType
        v-bind:type="TYPES.ENTEN"
        v-bind:cnt="cntEnten"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>,&nbsp;</span><span><FactType
        v-bind:type="TYPES.RINDER"
        v-bind:cnt="cntRinder"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>,</span>&nbsp;<span><FactType
        v-bind:type="TYPES.SCHAFE"
        v-bind:cnt="cntSchafe"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>,</span>&nbsp;<span><FactType
        v-bind:type="TYPES.ZIEGEN"
        v-bind:cnt="cntZiegen"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>&nbsp;und&nbsp;</span><span><FactType
        v-bind:type="TYPES.PFERDE"
        v-bind:cnt="cntPferde"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>&nbsp;</span><span>allein für Essen getötet oder sind in Folge schlechter Haltebedingungen verendet.</span>
    </h1>
    <h1 class="additional-info">
      Zusätzliche&nbsp;<span><FactType
        v-bind:type="TYPES.GULLE"
        v-bind:cnt="cntGulle"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>,&nbsp;</span><span><FactType
        v-bind:type="TYPES.ANTIBIOTIKA"
        v-bind:cnt="cntAntibiotika"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType>&nbsp;und</span>
      <br /><span><FactType
        v-bind:type="TYPES.CO2"
        v-bind:cnt="cntCo2"
        v-bind:active="activeDetail"
        v-on:show-details="showDetail"
      ></FactType></span>&nbsp;gefährden unsere Gesundheit und Umwelt.
    </h1>
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
  private cntHuhner = 0;
  @Provide()
  private cntSchweine = 0;
  @Provide()
  private cntFische = 0;
  @Provide()
  private cntRinder = 0;
  @Provide()
  private cntTruthahner = 0;
  @Provide()
  private cntEnten = 0;
  @Provide()
  private cntSchafe = 0;
  @Provide()
  private cntZiegen = 0;
  @Provide()
  private cntPferde = 0;
  @Provide()
  private cntAntibiotika = 0;
  @Provide()
  private cntGulle = 0;
  @Provide()
  private cntCo2 = 0;

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
    this.pastTime += 1;
    this.cntUpValues();

    setInterval(() => {
      this.pastTime += 1;
      this.cntUpValues();
    }, 1000);
  }

  private cntUpValues() {
    this.cntHuhner += this.getAmountForSecond(this.TYPES.HUHNER.PER_YEAR);
    this.cntSchweine += this.getAmountForSecond(this.TYPES.SCHWEINE.PER_YEAR);
    this.cntFische += this.getAmountForSecond(this.TYPES.FISCHE.PER_YEAR);
    this.cntTruthahner += this.getAmountForSecond(this.TYPES.TRUTHAHNER.PER_YEAR);
    this.cntRinder += this.getAmountForSecond(this.TYPES.RINDER.PER_YEAR);
    this.cntEnten += this.getAmountForSecond(this.TYPES.ENTEN.PER_YEAR);
    this.cntSchafe += this.getAmountForSecond(this.TYPES.SCHAFE.PER_YEAR);
    this.cntZiegen += this.getAmountForSecond(this.TYPES.ZIEGEN.PER_YEAR);
    this.cntPferde += this.getAmountForSecond(this.TYPES.PFERDE.PER_YEAR);
    this.cntAntibiotika += this.getAmountForSecond(this.TYPES.ANTIBIOTIKA.PER_YEAR);
    this.cntGulle += this.getAmountForSecond(this.TYPES.GULLE.PER_YEAR);
    this.cntCo2 += this.getAmountForSecond(this.TYPES.CO2.PER_YEAR);
  }

  private getAmountForSecond(val: number): number {
    return val / 365 / 24 / 60 / 60;
  }
}
</script>

<style scoped lang="scss">
.fact-sentence {
  margin-left: -0.1em;

  h1 {
    @include highlight-text();
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.5em;
    line-height: 140%;
    opacity: 0;
    animation: delayShowBlur 1.5s ease forwards 5s;

    @include respond-to("large") {
      font-size: 1.25em;

      @include respond-to-portrait() {
        font-size: 1.4em;
      }
    }

    @include respond-to("medium") {
      font-size: 1.2em;

      @include respond-to-portrait() {
        font-size: 1.3em;
      }
    }

    @include respond-to("x-small") {
      font-size: 0.8em;

      @include respond-to-portrait() {
        font-size: 0.9em;
      }
    }

    @include respond-to("xx-small") {
      font-size: 0.7em;

      @include respond-to-portrait() {
        font-size: 0.8em;
      }
    }

    i {
      font-style: normal;
    }

    & span.time {
      display: inline-block;
      color: $white;
      transition: 500ms ease font-size;
    }

    &.main-info {
      margin-right: 10%;
    }

    &.additional-info {
      margin-top: 0.75em;
      opacity: 0;
      animation: delayShowBlur 1.5s ease forwards 7.5s;
    }
  }
}

@keyframes delayShowBlur {
  0% {
    opacity: 0;
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>

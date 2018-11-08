<template>
  <div class="fact-sentence">
      <h1>In <span>{{getPastTimeString(pastTime)}}</span> wurde<i v-if="pastTime > 1">n</i> in Deutschland mehr als <span>{{makeLocaleInteger(cntHuhner)}} Hühner,&nbsp;</span><span>{{makeLocaleInteger(cntSchweine)}} Schweine,&nbsp;</span><span>{{makeLocaleInteger(cntTruthahner)}} Truthähner,&nbsp;</span><span>{{makeLocaleInteger(cntEnten)}} Ente<i v-if="cntEnten > 1">n</i>,&nbsp;</span><span>{{makeLocaleInteger(cntRinder)}} Rind<i v-if="cntRinder > 1">er</i>,&nbsp;</span><span>{{makeLocaleInteger(cntSchafe)}} Schaf<i v-if="cntSchafe > 1">e</i>,&nbsp;</span><span>{{makeLocaleInteger(cntZiegen, "eine")}} Ziege<i v-if="cntZiegen > 1">n</i>&nbsp;</span>und&nbsp;<span>{{makeLocaleInteger(cntPferde)}} Pferd<i v-if="cntPferde > 1">e</i></span> allein für Essen getötet oder sind in Folge schlechter Haltebedingungen verendet.</h1>
      <h1 class="additional-info">Zusätzliche <span>{{makeLocaleInteger(cntGulle)}} Tonnen</span>&nbsp;<span>Gülle</span> und verfütterte <span>{{makeLocaleInteger(cntAntibiotika)}} Gramm</span>&nbsp;<span>Antibiotika</span> gefährden unsere Gesundheit und Umwelt.</h1>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component
export default class FactSentence extends Vue {
  @Provide()
  private pastTime = 0;
  @Provide()
  private cntHuhner = 0;
  @Provide()
  private cntSchweine = 0;
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
        (time === 1 ? "einer" : seconds) +
        " Sekunde" +
        (seconds === 1 ? "" : "n");
    }
    return pastTimeString;
  }

  public makeLocaleInteger(val: number, one: string = "ein"): string {
    const intedVal: number = this.makeInt(val);
    let returnString: string = "";

    switch (intedVal) {
      case 1:
        returnString = one;
        break;
      case 2:
        returnString = "zwei";
        break;
      case 3:
        returnString = "drei";
        break;
      /*
      case 4:
        returnString = "vier";
        break;
      case 5:
        returnString = "fünf";
        break;
      case 6:
        returnString = "sechs";
        break;
      case 7:
        returnString = "sieben";
        break;
      case 8:
        returnString = "acht";
        break;
      case 9:
        returnString = "neun";
        break;
      */
    }
    return returnString || intedVal.toLocaleString("de-DE");
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
    this.cntHuhner += this.getAmountForSecond(970600000 / 2); // 16
    this.cntSchweine += this.getAmountForSecond(57865000); /// 1
    this.cntTruthahner += this.getAmountForSecond(467000000 / 13.25);
    this.cntRinder += this.getAmountForSecond(3501000); // 0.11
    this.cntEnten += this.getAmountForSecond(36000000 / 2.5);
    this.cntSchafe += this.getAmountForSecond(1030400);
    this.cntZiegen += this.getAmountForSecond(20400);
    this.cntPferde += this.getAmountForSecond(7100);
    this.cntAntibiotika += this.getAmountForSecond(742000000);
    this.cntGulle += this.getAmountForSecond(200000000000 / 1000);
  }

  private makeInt(val: number): number {
    return Math.ceil(val);
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
    font-size: 1.6em;
    line-height: 140%;

    @include respond-to('large') {
      font-size: 1.4em;

      @include respond-to-portrait() {
          font-size: 1.5em;    
      }
    }

    @include respond-to('medium') {
      font-size: 1.3em;

      @include respond-to-portrait() {
          font-size: 1.5em;    
      }
    }

    @include respond-to('x-small') {
      font-size: 0.9em;

      @include respond-to-portrait() {
          font-size: 1em;    
      }
    }

    @include respond-to('xx-small') {
      font-size: 0.7em;

      @include respond-to-portrait() {
          font-size: 0.8em;    
      }
    }

    i {
      font-style: normal;
    }

    & span {
      display: inline-block;
      color: $white;
      transition: 500ms ease font-size;
    }

    &.additional-info {
      margin-top: 0.5em;
    }
  }
}
</style>

<template>
  <div class="fact-sentence">
      <h1>Innerhalb <span>der letzten <i v-if="pastTime > 1">{{pastTime}} Sekunden</i><i v-else>Sekunde</i></span> wurde<i v-if="pastTime > 1">n</i> in <span>Deutschland</span> mehr als <span>{{makeLocaleInteger(cntHuhner)}} Hühner,&nbsp;</span><span>{{makeLocaleInteger(cntSchweine)}} Schweine,&nbsp;</span><span>{{makeLocaleInteger(cntTruthahner)}} Truthähner,&nbsp;</span><span>{{makeLocaleInteger(cntEnten)}} Ente<i v-if="cntEnten > 1">n</i>,&nbsp;</span><span>{{makeLocaleInteger(cntRinder)}} Rind<i v-if="cntRinder > 1">er</i>,&nbsp;</span><span>{{makeLocaleInteger(cntSchafe)}} Schaf<i v-if="cntSchafe > 1">e</i>,&nbsp;</span><span>{{makeLocaleInteger(cntZiegen, "eine")}} Ziege<i v-if="cntZiegen > 1">n</i>&nbsp;</span>und&nbsp;<span>{{makeLocaleInteger(cntPferde)}} Pferd<i v-if="cntPferde > 1">e</i></span>&nbsp;allein&nbsp;<span>für Essen getötet&nbsp;</span>oder sind als Folge&nbsp;<span>der Haltebedingungen gestorben</span>.</h1>
      <h1 class="additional-info">Weitere <span>{{makeLocaleInteger(cntGulle)}} Tonnen Gülle</span> belasten die <span>Umwelt und</span>&nbsp;<span>unsere Gesundheit<span class="glued">.</span></span></h1>
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
  private cntGulle = 0;

  private mounted() {
    this.startInterval();
  }

  public makeLocaleInteger(val: number, one: string = "ein"): string {
    const intedVal: number = this.makeInt(val);
    let returnString: string = '';

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
    }
    return returnString || intedVal.toLocaleString("de-DE");
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
    this.cntHuhner += this.getAmountForSecond(970600000 / 2);
    this.cntSchweine += this.getAmountForSecond(57865000);
    this.cntRinder += this.getAmountForSecond(3501000);
    this.cntTruthahner += this.getAmountForSecond(467000000 / 13.25);
    this.cntEnten += this.getAmountForSecond(36000000 / 2.5);
    this.cntSchafe += this.getAmountForSecond(1030400);
    this.cntZiegen += this.getAmountForSecond(20400);
    this.cntPferde += this.getAmountForSecond(7100);
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
  padding-right: 25vw;

  h1 {
    @include highlight-text();
    color: rgba(255, 255, 255, 0.5);
    font-size: 2em;
    line-height: 140%;

    i {
      font-style: normal;
    }

    & span {
      display: inline-block;
      color: rgba(255, 255, 255, 1);

      .glued {
        display: inline;
        color: rgba(255, 255, 255, 0.5);
      }
    }

    &.additional-info {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }
  }
}
</style>

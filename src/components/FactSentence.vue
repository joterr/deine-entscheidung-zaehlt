<template>
  <div class="fact-sentence">
      <h1>Innerhalb der letzten <span class="time">{{pastTime}} Sekunden</span> wurden in <span>Deutschland</span> mehr als <span>{{makeLocaleInteger(cntHuhner)}} Hühner,</span>&nbsp;<span>{{makeLocaleInteger(cntSchweine)}} Schweine,</span>&nbsp;<span>{{makeLocaleInteger(cntRinder)}} Rinder,</span>&nbsp;<span>{{makeLocaleInteger(cntTruthahner)}} Truthähner,</span>&nbsp;<span>{{makeLocaleInteger(cntEnten)}} Enten,</span>&nbsp;<span>{{makeLocaleInteger(cntZiegen)}} Ziegen&nbsp;</span>und&nbsp;<span>{{makeLocaleInteger(cntPferde)}} Pferden</span>&nbsp;allein&nbsp;<span>für Essen getötet</span>&nbsp;oder sind als Folge&nbsp;<span>der Haltebedingungen gestorben</span>.</h1>
      <h1 class="additional-info">Weitere <span>{{makeLocaleInteger(cntGulle)}} Tonnen Gülle</span> belasten die <span>Umwelt und unsere Gesundheit</span>.</h1>
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
  private cntZiegen = 0;
  @Provide()
  private cntPferde = 0;
  @Provide()
  private cntGulle = 0;

  private mounted() {
    this.startInterval();
  }

  public makeLocaleInteger(val: number): string {
    return this.makeInt(val).toLocaleString("de-DE");
  }

  private startInterval() {
    this.pastTime += 1;
    this.cntUpValues();

    this.pastTime += 1;
    this.cntUpValues();
  
    setInterval(() => {
      this.pastTime += 1;
      this.cntUpValues();
    }, 1000);
  }

  private cntUpValues() {
    this.cntHuhner += 9.1255;
    this.cntSchweine += 8.531431;
    this.cntRinder += 5.531431;
    this.cntTruthahner += 3.531431;
    this.cntEnten += 2.531431;
    this.cntZiegen += 1.531431;
    this.cntPferde += 0.531431;
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
  padding-right: 15vw;

  h1 {
    @include highlight-text();
    color: rgba(255, 255, 255, 0.5);
    font-size: 2.25em;
    line-height: 140%;

    & span {
      display: inline-block;
      color: rgba(255, 255, 255, 1);
    }

    &.additional-info {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }
  }
}
</style>

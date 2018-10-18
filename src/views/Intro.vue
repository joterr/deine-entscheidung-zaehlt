<template>
  <section class="intro-page intro page">
    <div class="fact-sentence">
      <h1>In den letzten <span class="time">{{pastTime}} Sekunden</span> wurden in Deutschland<br/><span>{{getHuhner()}} Hühner,</span>&nbsp;<span>{{getSchweine()}} Schweine,</span>&nbsp;<span>{{getRinder()}} Rinder,</span>&nbsp;<span>{{makeLocaleInteger(cntTruthahner)}} Truthähner,</span><br/><span>{{makeLocaleInteger(cntEnten)}} Enten,</span>&nbsp;<span>{{makeLocaleInteger(cntZiegen)}} Ziegen</span>&nbsp;und&nbsp;<span>{{makeLocaleInteger(cntPferde)}} Pferde</span> allein für Essen getötet.</h1>
      <h1 class="additional-info">Zusätzlich belasten weitere <span>{{makeLocaleInteger(cntGulle)}} Tonnen Gülle</span> die Umwelt und unsere Gesundheit.</h1>
      <a class="show-truth">Findest Du nicht okay?</a>
    </div>
    <HelloWorld msg="TEXT"/>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Intro extends Vue {
  @Provide()
  private pastTime = 0;
  @Provide()
  private cntHuhner = 0;
  @Provide()
  private cntHuhnerEier = 0;
  @Provide()
  private cntHuhnerEierMann = 0;
  @Provide()
  private cntHuhnerKrank = 0;
  @Provide()
  private cntSchweine = 0;
  @Provide()
  private cntSchweineKrank = 0;
  @Provide()
  private cntRinder = 0;
  @Provide()
  private cntRinderMilch = 0;
  @Provide()
  private cntRinderKrank = 0;
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

  public getHuhner(): string {
    return this.makeLocaleInteger(
      this.makeInt(this.cntHuhner) +
        this.makeInt(this.cntHuhnerEier) +
        this.makeInt(this.cntHuhnerEierMann) +
        this.makeInt(this.cntHuhnerKrank)
    );
  }

  public getSchweine(): string {
    return this.makeLocaleInteger(
      this.makeInt(this.cntSchweine) + this.makeInt(this.cntSchweineKrank)
    );
  }

  public getRinder(): string {
    return this.makeLocaleInteger(
      this.makeInt(this.cntRinder) +
        this.makeInt(this.cntRinderMilch) +
        this.makeInt(this.cntRinderKrank)
    );
  }

  private startInterval() {
    setInterval(() => {
      this.pastTime += 1;
      this.cntUpValues();
    }, 1000);
  }

  private cntUpValues() {
    this.cntHuhner += 50.1255;
    this.cntHuhnerEier += 25.1255;
    this.cntHuhnerEierMann += 25.1255;
    this.cntHuhnerKrank += 0.1255;
    this.cntSchweine += 45.531431;
    this.cntSchweineKrank += 0.531431;
    this.cntRinder += 25.531431;
    this.cntRinderMilch += 5.531431;
    this.cntRinderKrank += 0.531431;
    this.cntTruthahner += 10.531431;
    this.cntEnten += 5.531431;
    this.cntZiegen += 2.531431;
    this.cntPferde += 1.531431;
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
.intro-page {
  background-color: $dark;
  padding-top: 6vh;
}

.fact-sentence {
  h1 {
    color: $white;
    font-size: xx-large;

    &.additional-info {
      margin-top: 1vh;
    }

    & span {
      display: inline-block;
      font-size: 1.4em;
      line-height: 120%;
    }
  }

  .show-truth {
    display: block;
    padding-top: 3vh;
    color: $white;
    font-size: x-large;
    text-decoration: underline;
    @include highlight-text();
  }
}
</style>

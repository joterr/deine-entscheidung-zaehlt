<template>
  <section class="intro-page" :class="{'selector-expanded': state}">
    <div class="animal-wrapper">
      <AnimalSprinkler v-if="!isDev" :activeMode="mode" />
    </div>
    <div class="splash">
      <div class="fact-wrapper">
        <FactSentence :activeMode="mode" v-on:open-truth-overlay="openTruthOverlay()" />
      </div>
      <div class="mode-selector-dd">
        <ModeSelector
          :activeMode="mode"
          v-on:is-expanded="modeSelectorIsExpanded($event)"
          v-on:selected-mode="selectedMode($event)"
        />
      </div>
    </div>
    <div class="truth-overlay" :class="{ 'opened': isVisibleTruth }">
      <div class="layout-wrapper">
        <div class="back-link" v-on:click="hideTruth">zur&uuml;ck</div>
        <div class="content">
          <div class="heading">
            <h1>Einmal entscheiden,</h1>
            <h1>jeden Tag viel bewirken.</h1>
          </div>
          <div class="explanation">
            <p
              class="highlight"
            >950 Millionen Tiere jährlich. Für Fleisch, Milch und Eier. Durch Antibiotika in engster Stallhaltung und krankhaft überzüchtet. Dennoch sterben eine Vielzahl an Tieren bereits an Verletzungen und bakteriellen Krankheiten. Bei Schweinen sogar nahezu jedes fünfte Tier. Unprofitable Jungtiere werden meist direkt getötet - darunter über 50 Millionen vergaste und geschredderte Eintagsküken.</p>
            <p>Klar avocado schlecht für's Klimo, jedoch isst man nicht so viel wie Fleisch... At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p>Klar avocado schlecht für's Klimo, jedoch isst man nicht so viel wie Fleisch... At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <h2>Probier's doch mal vegan</h2>
            <p>
              Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              <br />Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.
              <br />Einfachster Start mit 30 Tage Coach - z.B. der tägliche Newsletter
              <a
                href="https://www.vegankickstart.de/"
                target="_blanc"
              >Vegan Kickstart</a> von PETA ZWEI.
            </p>
            <ul class="citations">
              <li>
                <sup>1</sup>
                <a
                  target="_blanc"
                  href="http://www.bpb.de/gesellschaft/medien/medienpolitik/172610/medien-und-gesellschaftim-wandel"
                >Bonfadelli, Heinz: Medien und Gesellschaft im Wandel (Stand: 06.10.2014). [19.04.2016].</a>
              </li>
              <li>
                <sup>2</sup>
                <a
                  target="_blanc"
                  href="http://www.bpb.de/gesellschaft/medien/medienpolitik/172610/medien-und-gesellschaftim-wandel"
                >Mustermann, Max: Vegan-Klischee Adee (Stand: 06.10.2014). [19.04.2016].</a>
              </li>
              <li>
                <sup>3</sup>
                <a
                  target="_blanc"
                  href="http://www.bpb.de/gesellschaft/medien/medienpolitik/172610/medien-und-gesellschaftim-wandel"
                >Mustermann, Max: Vegan-Klischee Adee (Stand: 06.10.2014). [19.04.2016].</a>
              </li>
              <li>
                <sup>4</sup>
                <a
                  target="_blanc"
                  href="http://www.bpb.de/gesellschaft/medien/medienpolitik/172610/medien-und-gesellschaftim-wandel"
                >Mustermann, Max: Vegan-Klischee Adee (Stand: 06.10.2014). [19.04.2016].</a>
              </li>
              <li>
                <sup>5</sup>
                <a
                  target="_blanc"
                  href="http://www.bpb.de/gesellschaft/medien/medienpolitik/172610/medien-und-gesellschaftim-wandel"
                >Mustermann, Max: Vegan-Klischee Adee (Stand: 06.10.2014). [19.04.2016].</a>
              </li>
            </ul>
          </div>
          <div class="row always additional-info">
            <div class="col">
              <h3>Erste Schritte</h3>
              <ul class="info-list-type">
                <li>
                  <a
                    href="https://www.peta.de/veganesleben"
                    target="_blanc"
                  >Die BESTEN Tipps zum Einstieg ins vegane Leben</a> von PETA
                </li>
                <li>
                  <a
                    href="https://www.nicezutieren.de"
                    target="_blanc"
                  >#NICEZUTIEREN (30-Tage-Vegan-Guide)</a> von PETA
                </li>
                <li>
                  <a
                    href="https://www.petazwei.de/web/einkaufsguide"
                    target="_blanc"
                  >Der vegane Einkaufsguide – PETA ZWEI</a> von PETA ZWEI
                </li>
                <li>
                  <a href="https://www.happycow.net/" target="_blanc">Auflistung veganer Restaurants</a> von HappyCow
                </li>
                <li>
                  <a href="https://www.petazwei.de/vegan-leben" target="_blanc">Vegan leben</a> von PETA ZWEI
                </li>
              </ul>
            </div>
            <div class="col">
              <h3>Dokumentationen</h3>
              <ul class="info-list-type">
                <li>
                  <a
                    href="http://www.forksoverknives.com/the-film/"
                    target="_blanc"
                  >Forks over Knifes (2011)</a> über Gesundheit
                </li>
                <li>
                  <a
                    href="https://filmsfortheearth.org/de/filme/cowspiracy"
                    target="_blanc"
                  >Cowspiracy (2014)</a> über Umweltauswirkungen
                </li>
                <li>
                  <a href="https://www.dominionmovement.com/watch" target="_blanc">Dominion (2018)</a> über moderne Viehzucht
                </li>
                <li>
                  <a href="https://gamechangersmovie.com" target="_blanc">The Game Changers (2019)</a> über Hochleistungssport und vegan
                </li>
                <li>
                  <a
                    href="https://filmsfortheearth.org/de/filme/live-and-let-live"
                    target="_blanc"
                  >Live and Let Live (2013)</a> allgemein über vegan
                </li>
                <li>
                  <a
                    href="https://filmsfortheearth.org/de/filme/speciesism"
                    target="_blanc"
                  >Speciesism (2013)</a> über Nutztiere vs. Haustiere
                </li>
                <li>
                  <a href="https://vimeo.com/26194939" target="_blanc">Making the Connection (2011)</a> allgemein über vegan
                </li>
              </ul>
            </div>
            <div class="col">
              <h3>Bücher</h3>
              <ul class="info-list-type">
                <li>
                  <a href="https://nutritionfacts.org/book/" target="_blanc">HOW NOT TO DIE</a> von Michael Greger, M.D.
                </li>
                <li>
                  <a
                    href="https://www.medimops.de/produkte-C0/?fcIsSearch=1&searchparam=China+Study"
                    target="_blanc"
                  >The China Study</a> von T. Colin Campbell
                </li>
                <li>
                  <a
                    href="https://www.nikorittenau.com/vegan-klischee-ade/"
                    target="_blanc"
                  >Vegan Klischee Adé</a> von Niko Rittenau
                </li>
                <li>
                  <a
                    href="https://www.kiwi-verlag.de/buch/tiere-essen/978-3-462-04044-9/"
                    target="_blanc"
                  >Tiere Essen</a> von Jonathan Safran Foer
                </li>
                <li>
                  <a
                    href="https://www.thalia.de/shop/home/artikeldetails/ID34339239.html"
                    target="_blanc"
                  >Warum wir Hunde lieben, Schweine essen und Kühe anziehen: Karnismus – eine Einführung</a> von Melanie Joy
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span class="leaf"></span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import FactSentence from "@/components/FactSentence.vue";
import AnimalSprinkler from "@/components/AnimalSprinkler.vue";
import ModeSelector from "@/components/ModeSelector.vue";
import { ModeEnum } from "../factTypes.constant";

@Component({
  components: {
    FactSentence,
    AnimalSprinkler,
    ModeSelector
  }
})
export default class Intro extends Vue {
  @Provide()
  private isDev = process.env.NODE_ENV === "development";

  @Provide()
  private isVisibleTruth = false;

  @Provide()
  private mode: ModeEnum = ModeEnum.DE;

  @Provide()
  private state = false;

  public openTruthOverlay() {
    this.isVisibleTruth = true;
  }

  public hideTruth() {
    this.isVisibleTruth = false;
  }

  public selectedMode(mode: ModeEnum) {
    this.mode = mode;
  }

  public modeSelectorIsExpanded(state: boolean) {
    this.state = state;
  }
}
</script>

<style scoped lang="scss">
.animal-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  animation: delayShow 2s ease forwards;
}

.truth-overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  display: none;
  opacity: 0;
  background-color: $cl-accent1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  overflow-y: scroll;

  &.opened {
    display: block;
    animation: opacityZeroToOne 0.85s ease forwards;
  }

  .layout-wrapper {
    width: 30vw;
    margin: 0 auto;
    margin-bottom: 16rem;

    @include respond-to("large") {
      width: 45vw;
    }

    @include respond-to("medium") {
      width: 45vw;
    }

    @include respond-to("small") {
      width: 86vw;
    }
  }

  .back-link {
    position: fixed;
    top: 2.5em;
    left: 35vw;
    margin-left: -6em;
    font-size: small;
    @include std-text-bold();
    color: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    opacity: 0;
    animation: delayShow 500ms ease forwards 10s;
    transition: ease 300ms;

    @include respond-to("large") {
      left: 27.5vw;
    }

    @include respond-to("medium") {
      left: 27.5vw;
    }

    @include respond-to("small") {
      left: 3.25vh;
      margin-left: 0;
    }

    &:hover {
      color: rgba(255, 255, 255, 0.85);
      text-decoration: underline;
    }
  }

  .content {
    margin-top: 12vh;
    margin-bottom: 4rem;
    position: relative;

    @include respond-to("small") {
      margin-top: 16vh;
    }

    .heading {
      transform: translateY(100vh);
      animation: slideUp 0.5s ease forwards 0.65s;
      margin-bottom: 5rem;
      width: 150%;

      @include respond-to("medium") {
        width: 100%;
        margin-bottom: 3.5rem;
      }

      @include respond-to("small") {
        width: 100%;
        margin-bottom: 2.5rem;
      }

      h1 {
        margin-left: -0.1rem;
        line-height: 110%;
        color: $white;
        font-size: 7.5rem;
        @include std-text-bold-italic();

        @include respond-to("large") {
          font-size: 6.25rem;
        }

        @include respond-to("medium") {
          font-size: 5.25rem;
        }

        @include respond-to("small") {
          font-size: 3.75rem;
        }
      }
    }

    .explanation,
    .additional-info {
      margin-top: 3.75rem;
      transform: translateY(100vh);
      animation: slideUp 0.5s ease forwards 0.85s;

      p {
        margin-top: 0.5em;
        margin-bottom: 1.25em;
        color: $dark;

        strong,
        &.highlight {
          @include std-text-bold();
        }
      }
    }

    h2,
    h3 {
      @include std-text-bold-italic();
      margin-left: -0.1em;
      line-height: 120%;
      font-size: x-large;
      color: $dark;
      margin-top: 1.25em;
      margin-bottom: 0.5em;
    }

    h3 {
      margin-top: 0.5em;
      font-size: large;
    }

    ul.info-list-type {
      margin: 0.75em 0;
      padding: 0;

      li {
        font-size: small;
        color: $dark;
        @include std-text();
        list-style-type: none;
        margin: 0 0 0.75em 0;
        padding: 0;
      }
    }
  }
}

a {
  @include std-text-bold();
  color: $white;
  text-shadow: none;
  font-size: medium;

  &:hover {
    text-decoration: underline;
  }
}

span.leaf {
  display: block;
  background-image: url("../assets/leaf.png");
  background-repeat: no-repeat;
  background-position: center center;
  height: 50px;
  width: 100%;
}

div.mode-selector-dd {
  position: fixed;
  top: 50vh;
  right: 2vw;
  transform: translateY(calc(-2.2625rem / 2), 2000px);
  z-index: 99999;
  transform: translateX();
  animation: delayShowAndSliceIn 1.25s ease forwards 6s;

  @include respond-to("small") {
    position: absolute;
    top: 91vh;
    right: auto;
    left: 50vw;
    transform: translate(-50%, 2000px);
    animation: delayShowAndSliceInSmall 1.25s ease forwards 6s;
  }
}

@include respond-to("small") {
  .fact-wrapper {
    transition: opacity 600ms ease;
  }
  .mode-selector-dd {
    transition: top 600ms ease;
  }
  .selector-expanded {
    .fact-wrapper {
      opacity: 0.35;
    }
    .mode-selector-dd {
      top: 50vh;
    }
  }
}

@keyframes delayShowAndSliceIn {
  0% {
    transform: translate + (2000px);
    filter: blur(4px);
  }
  100% {
    transform: translateX(0);
    filter: blur(0);
  }
}

@keyframes delayShowAndSliceInSmall {
  0% {
    transform: translate(-50%, 2000px);
    filter: blur(4px);
  }
  100% {
    transform: translate(-50%, -50%);
    filter: blur(0);
  }
}

.citations {
  display: block;
  margin: 0.5rem 0;
  padding: 0;

  li {
    padding-right: 0.25rem;
  }

  li,
  a {
    display: inline;
    @include std-text();
    list-style-type: none;
    font-size: x-small;
    color: $dark;
  }
}

p {
  a {
    color: $dark;
  }
}

.intro-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

@keyframes justBlur {
  0% {
    filter: blur(0);
  }
  20% {
    filter: blur(0);
  }
  22% {
    filter: blur(3px);
  }
  23% {
    filter: blur(3px);
  }
  24% {
    filter: blur(0);
  }
  100% {
    filter: blur(0);
  }
}

@keyframes delayShowBlurSpecial {
  0% {
    opacity: 0;
    filter: blur(5px);
  }
  50% {
    opacity: 0;
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes delayShowBlur {
  0% {
    opacity: 0;
    filter: blur(3px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes delayShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes opacityZeroToOne {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

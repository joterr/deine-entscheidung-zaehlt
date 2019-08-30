<template>
  <section class="intro-page">
    <div class="splash">
      <div class="fact-wrapper">
        <FactSentence v-on:open-truth-overlay="openTruthOverlay()" />
      </div>
      <div class="animal-wrapper">
        <AnimalSprinkler />
      </div>
    </div>
    <div class="truth-overlay" v-bind:class="{ 'opened': isVisibleTruth }">
      <div class="layout-wrapper">
        <div class="back-link" v-on:click="hideTruth">&laquo; zur&uuml;ck</div>
        <div class="content">
          <div class="heading">
            <h1>Was Du isst</h1>
            <h1>ist deine Entscheidung!</h1>
          </div>
          <div class="explanation">
            <p
              class="highlight"
            >950 Millionen Tiere jährlich. Für Fleisch, Milch und Eier. Durch Antibiotika in engster Stallhaltung und krankhaft überzüchtet. Dennoch sterben eine Vielzahl an Tieren bereits an Verletzungen und bakteriellen Krankheiten. Bei Schweinen sogar nahezu jedes fünfte Tier. Unprofitable Jungtiere werden meist direkt getötet - darunter über 50 Millionen vergaste und geschredderte Eintagsküken.</p>
            <p>Klar avocado schlecht für's Klimo, jedoch isst man nicht so viel wie Fleisch... At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p>Klar avocado schlecht für's Klimo, jedoch isst man nicht so viel wie Fleisch... At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <h2>Probier's doch mal vegan</h2>
            <p>
              Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br/>Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.
              <br />Einfachster Start mit 30 Tage Coach - z.B. der tägliche Newsletter
              <a
                href="https://www.vegankickstart.de/"
                target="_blanc"
              >Vegan Kickstart</a> von PETA ZWEI.
            </p>
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
                    href="https://www.petazwei.de/web/einkaufsguide"
                    target="_blanc"
                  >Der vegane Einkaufsguide – PETA ZWEI</a> von PETA ZWEI
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
                  >Forks over Knifes (2011)</a>
                </li>
                <li>
                  <a
                    href="https://filmsfortheearth.org/de/filme/cowspiracy"
                    target="_blanc"
                  >Cowspiracy (2014)</a>
                </li>
                <li>
                  <a href="https://www.dominionmovement.com/watch" target="_blanc">Dominion (2018)</a>
                </li>
                <li>
                  <a
                    href="https://filmsfortheearth.org/de/filme/live-and-let-live"
                    target="_blanc"
                  >Live and Let Live (2013)</a>
                </li>
                <li>
                  <a
                    href="https://filmsfortheearth.org/de/filme/speciesism"
                    target="_blanc"
                  >Speciesism (2013)</a>
                </li>
                <li>
                  <a href="https://vimeo.com/26194939" target="_blanc">Making the Connection (2011)</a>
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
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import FactSentence from "@/components/FactSentence.vue";
import AnimalSprinkler from "@/components/AnimalSprinkler.vue";

@Component({
  components: {
    FactSentence,
    AnimalSprinkler
  }
})
export default class Intro extends Vue {
  @Provide()
  private isVisibleTruth = false;

  public openTruthOverlay() {
    this.isVisibleTruth = true;
  }

  public hideTruth() {
    this.isVisibleTruth = false;
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
  padding-top: 6vh;
  overflow: hidden;
  overflow-y: scroll;

  &.opened {
    display: block;
    animation: opacityZeroToOne 0.85s ease forwards;
  }

  .layout-wrapper {
    width: 45vw;
    margin: 0 auto;

    @include respond-to("large") {
      width: 60vw;
    }

    @include respond-to("medium") {
      width: 75vw;
    }

    @include respond-to("small") {
      width: 86vw;
    }
  }

  .back-link {
    font-size: small;
    @include std-text-bold();
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    opacity: 0;
    animation: delayShow 500ms ease forwards 2s;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }

  .content {
    margin-top: 6rem;
    margin-bottom: 12rem;

    .heading {
      transform: translateY(100vh);
      animation: slideUp 0.5s ease forwards 0.65s;

      h1 {
        margin-left: -0.1em;
        line-height: 115%;
        color: $white;
        font-size: 6.5em;
        @include std-text-bold();

        @include respond-to("medium") {
          font-size: 5em;
        }
        @include respond-to("small") {
          font-size: 3.5em;
        }
      }
    }

    .explanation,
    .additional-info {
      margin-top: 3rem;
      width: 66%;
            transform: translateY(100vh);
      animation: slideUp 0.5s ease forwards 0.85s;

      @include respond-to("large") {
        width: 70%;
      }

      @include respond-to("medium") {
        width: 80%;
      }

      p {
        margin-top: 0.5em;
        margin-bottom: 1.5em;
        color: $dark;

        strong,
        &.highlight {
          @include std-text-bold();
        }
      }
    }

    h2,
    h3 {
      margin-left: -0.1em;
      line-height: 120%;
      font-size: medium;
      color: $dark;
      margin-top: 0.5em;
    }

    h3 {
      font-size: small;
      text-transform: uppercase;
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

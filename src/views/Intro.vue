<template>
  <section class="intro-page intro page">
    <div class="scroll" v-bind:class="{ 'opened': isVisibleTruth, 'sentence-only': !firstView }">
      <div class="splash">
        <div class="initial-question">
          <h1>Deine Entscheidung zählt?</h1>
        </div>
        <div class="fact-wrapper">
          <FactSentence />
          <div class="show-truth">
            <span v-on:click="showTruth">Findest Du nicht okay?</span>
          </div>
        </div>
        <div class="animal-wrapper">
          <AnimalSprinkler />
        </div>
      </div>
      <div class="truth-overlay">
        <div class="back-link" v-on:click="hideTruth">&laquo; zur&uuml;ck</div>
        <div class="content">
          <div class="heading">
            <h1>Du entscheidest,</h1>
            <h1>was Du isst!</h1>
          </div>
          <div class="explanation">
            <p
              class="highlight"
            >950 Millionen Tiere jährlich. Für Fleisch, Milch und Eier. Durch Antibiotika in engster Stallhaltung und krankhaft überzüchtet. Dennoch sterben eine Vielzahl an Tieren bereits an Verletzungen und bakteriellen Krankheiten. Bei Schweinen sogar nahezu jedes fünfte Tier. Unprofitable Jungtiere werden meist direkt getötet - darunter über 50 Millionen vergaste und geschredderte Eintagsküken.</p>
            <p>UNTERSCHIEDE BEI VEGANER ERNÄHRUNG, Klar avocado schlecht für's Klimo, jedoch isst man nicht so viel wie Fleisch... At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <h2>Probier's doch mal vegan</h2>
            <p>
              Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.
              <br />Einfachster Start mit 30 Tage Coach - z.B. der tägliche Newsletter
              <a
                href="https://www.vegankickstart.de/"
                target="_blanc"
              >Vegan Kickstart</a> von PETA ZWEI.
            </p>
          </div>
          <div class="row additional-info">
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
            <div class="col col-2">
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

  @Provide()
  private firstView = true;

  public showTruth() {
    this.isVisibleTruth = true;
    this.firstView = false;
  }
  public hideTruth() {
    this.isVisibleTruth = false;
  }
}
</script>

<style scoped lang="scss">
.initial-question {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  opacity: 0;
  animation: delayShowBlur 4s ease 1 1s;

  h1 {
    @include highlight-text();
    color: $white;
    font-size: 1.6em;
    line-height: 140%;
  }
}

.fact-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  width: 60%;

  @include respond-to("x-large") {
    width: 75%;
  }

  @include respond-to("large") {
    width: 90%;
  }

  @include respond-to("medium") {
    width: 95%;
  }

  @include respond-to("small") {
    width: 100%;
  }

  .show-truth {
    display: block;
    margin-top: 4em;
    opacity: 0;
    filter: blur(3px);
    animation: delayShowBlur 500ms ease forwards 12s;

    @include respond-to("medium") {
      margin-top: 2em;
    }

    @include respond-to("small") {
      margin-top: 1.25em;
    }

    span {
      color: $cl-accent1;
      @include std-text-bold();
      text-decoration: none;
      font-size: large;
      transition: filter 250ms linear;
      animation: justBlur 4s linear;
      cursor: pointer;

      @include respond-to("medium") {
        font-size: medium;
      }

      @include respond-to("small") {
        font-size: small;
      }

      &:hover {
        filter: blur(1px);
      }
    }
  }
}

.sentence-only {
  .initial-question {
    display: none;
  }
}

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
  background-color: $cl-accent1;
  height: 100vh;
  padding: $page-padding;
  overflow: hidden;
  overflow-y: scroll;
  position: relative;

  @include respond-to("medium") {
    padding: $page-padding-medium;
  }

  @include respond-to("medium") {
    .content {
      padding-bottom: 20vh;
    }
  }

  .back-link {
    position: absolute;
    top: 3vh;
    font-size: small;
    @include std-text-bold();
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    opacity: 0;
    animation: delayShow 500ms ease forwards 6s;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }

  .content {
    width: 75%;

    @include respond-to("x-large") {
      width: 80%;
    }

    @include respond-to("large") {
      width: 90%;

      @include respond-to-portrait() {
        width: 95%;
      }
    }

    @include respond-to("medium") {
      width: 100%;
    }

    .heading {
      h1 {
        margin-left: -0.1em;
        line-height: 115%;
        color: $white;
        font-size: 6em;
        @include std-text-bold();
        opacity: 0;

        @include respond-to("x-large") {
          font-size: 4.75em;
        }

        @include respond-to("large") {
          font-size: 4em;
        }

        @include respond-to("medium") {
          font-size: 3.5em;
        }
      }
    }

    .explanation,
    .additional-info {
      width: 60%;
      margin-top: 3em;

      @include respond-to("x-large") {
        width: 75%;
      }

      @include respond-to("large") {
        width: 80%;

        @include respond-to-portrait() {
          width: 90%;
        }
      }

      @include respond-to("medium") {
        width: 90%;

        @include respond-to-portrait() {
          width: 100%;
        }
      }

      p {
        margin-top: 0.5em;
        margin-bottom: 1.5em;

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

.intro-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  .scroll {
    position: relative;

    .splash {
      position: relative;
      background-color: $dark;
      height: 100vh;
      padding: $page-padding;

      @include respond-to("medium") {
        padding: $page-padding-medium;
      }
    }

    .truth-overlay .content {
      .heading {
        h1 {
          transform: translateX(-100%);
        }
      }
      .explanation,
      .additional-info {
        opacity: 0;
      }
    }
    &.opened {
      animation: showTruth 800ms ease forwards;

      .splash > * {
        animation: slideFadeUp 500ms ease forwards;
      }

      .truth-overlay .content {
        .heading {
          h1:first-child {
            animation: fadeSlideIn 400ms ease forwards 1s;
          }
          h1:last-child {
            animation: fadeSlideIn 400ms ease forwards 1250ms;
          }
        }
        .explanation {
          animation: delayShow 400ms ease forwards 1.75s;
        }
        .additional-info {
          animation: delayShow 400ms ease forwards 2.5s;
        }
      }
    }
  }
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
    filter: blur(4px);
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

@keyframes slideFadeUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}

@keyframes showTruth {
  0% {
    top: 0;
  }
  100% {
    top: -100vh;
  }
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

<template>
  <section class="intro-page">
    <div class="scroll" v-bind:class="{ 'opened': isVisibleTruth }">
      <div class="splash">
        <div class="fact-wrapper">
          <FactSentence v-on:open-truth-overlay="openTruthOverlay()"/>
        </div>
        <div class="animal-wrapper">
          <AnimalSprinkler />
        </div>
      </div>
      <div class="truth-overlay">
        <div class="layout-wrapper">
          <div class="back-link" v-on:click="hideTruth">&laquo; zur&uuml;ck</div>
          <div class="content">
            <div class="left-diagon"></div>
            <div class="heading">
              <h1>Du enscheidest,</h1>
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
                    <a
                      href="https://vimeo.com/26194939"
                      target="_blanc"
                    >Making the Connection (2011)</a>
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
  background-color: $cl-accent1;
  height: 100vh;
  padding-top: 4vh;
  overflow: hidden;
  overflow-y: scroll;

  .layout-wrapper {
    width: calc(100vw / 12 * 6);
    margin-left: calc(100vw / 12 * 6);
  }

  .back-link {
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

  .left-diagon {
    float: left;
    height: 100vh;
    width: 150px;
    box-sizing: border-box;
    shape-outside: polygon(0px 0px, 0px 100vh, 200px 100vh);
    clip-path: polygon(0px 0px, 0px 100vh, 200px 100vh);
  }

  .content {
    margin-top: 6rem;
    float: none;
    clear: both;

    .heading {
      h1 {
        margin-left: -0.1em;
        line-height: 120%;
        color: $white;
        font-size: 6em;
        @include std-text-bold();
        opacity: 0;
      }
    }

    .explanation,
    .additional-info {
      margin-top: 4em;
      width: 75%;

      p {
        margin-top: 0.5em;
        margin-bottom: 1.5em;
        color: $white;

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
      color: $white;
      margin-top: 0.5em;
    }

    h3 {
      font-size: small;
      text-transform: uppercase;
      color: $dark;
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
      z-index: 9;
      height: 100vh;
      width: 100vw;
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

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
        <div class="back-link" v-on:click="hideTruth()">zur&uuml;ck</div>
        <div class="content">
          <div class="heading">
            <div class="shadowed">
              <h1>
                Vegan
                <br />essen?
              </h1>
              <h1 class="layer">
                Vegan
                <br />essen?
              </h1>
            </div>
            <h2>
              lecker,
              <br />möglich
              <br />&amp; gesund.
            </h2>
          </div>
          <div class="explanation">
            <p class="highlight">
              691 Millionen Tiere sterben in Deutschland jährlich
              <sup>1</sup>. Für Fleisch, Eier und Milch. Unabhängig, ob mit artgerechter Haltung oder Bio-Siegel. Dabei muss es nicht bleiben!
            </p>
            <p>
              Einmal entscheiden &mdash; jeden Tag viel bewirken: eine durchdachte vegane Ernährung ist nicht nur ökologischer und gesünder
              <sup>2</sup> als eine typische mischköstliche Ernährung, sondern vermeidet konsequent unnötiges Tierleid. Auch die Deutsche Gesellschaft für Ernährung (DGE) bestätigt, dass &bdquo;[...] durch eine gezielte Lebensmittelauswahl und gute Planung [es möglich ist], eine vegane Kost zusammenzustellen, bei der kein Nährstoffmangel auftritt.&ldquo;
              <sup>3</sup>
              <br />Schwer ist dies jedoch nicht. Wenige Informationen &ndash; siehe
              <i>Erste Schritte</i> und
              <i>Bücher</i> &ndash; genügen, um eine gut kombinierte Zusammenstellung aus den fünf wichtigsten Lebensmittelgruppen
              <i>(Vollkorn-)getreide</i>,
              <i>Hülsenfrüchte</i>,
              <i>Gemüse</i>,
              <i>Obst</i> und
              <i>Nüsse/Samen</i>
              <sup>4</sup> zu garantieren.
            </p>
            <p>
              Um gleich zu Beginn mit allen wichtigen Informationen versorgt zu sein, bieten sich Apps wie z.B. der
              <a
                href="https://www.veganstart.de"
                target="_blanc"
              >30 Tage Vegan Coach</a> von PETA an.
            </p>
            <p>Go vegan! ;)</p>
            <ul class="citations">
              <li>
                <sup>1</sup>
                <a
                  target="_blanc"
                  href="https://www.boell.de/sites/default/files/fleischatlas2014_vi.pdf?dimension1=division_oen"
                >Chemnitz, Benning. (2015): Fleischatlas 2014: Daten und Fakten über Tiere als Nahrungsmittel.</a>
              </li>
              <li>
                <sup>2</sup>
                <a
                  target="_blanc"
                  href="https://proveg.com/de/5-pros/gesundheit/vegan-gesund-ernaehren/"
                >Vegan gesund ernähren: Vorteile einer pflanzlichen Kost. ProVeg. [Stand: 05. März 2020, 20:16 CEST]</a>
              </li>
              <li>
                <sup>3</sup>
                <a
                  target="_blanc"
                  href="https://www.ernaehrungs-umschau.de/fileadmin/Ernaehrungs-Umschau/pdfs/pdf_2016/04_16/EU04_2016_M220-M230_korr.pdf"
                >Richter et al. (2016): Vegane Ernährung: Position der Deutschen Gesellschaft für Ernährung e. V. (DGE). Ernährungs Umschau, 92-102. [Stand: 05. März 2020, 20:16 CEST]</a>
              </li>
              <li>
                <sup>4</sup>
                <a
                  target="_blanc"
                  href="https://www.ernaehrungs-umschau.de/fileadmin/Ernaehrungs-Umschau/pdfs/pdf_2016/04_16/EU04_2016_M220-M230_korr.pdf"
                >Rittenau (2019): Vegan-Klischee ade!: Wissenschaftliche Antworten auf kritische Fragen zu veganer Ernährung. 5. Aufl. Mainz: Ventil Verlag.</a>
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
                  <a href="https://www.veganstart.de" target="_blanc">30 Tage Vegan Coach per App</a> von PETA
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
              <h3>Bücher</h3>
              <ul class="info-list-type">
                <li class="has-affiliate">
                  <a
                    href="https://www.awin1.com/cread.php?awinmid=11364&awinaffid=709629&clickref=DEZ&ued=https%3A%2F%2Fwww.medimops.de%2Fniko-rittenau-vegan-klischee-ade-das-kochbuch-kompaktes-wissen-leckere-rezepte-abwechslungsreiche-ernaehrung-mit-dem-baukastensystem-gebundene-ausgabe-M03831038856.html"
                    target="_blanc"
                  >Vegan Klischee Adé</a> von Niko Rittenau (ausführlichst über die aktuelle ernährungsphysiologische Studienlage)
                </li>
                <li class="has-affiliate">
                  <a
                    href="https://www.awin1.com/cread.php?awinmid=11364&awinaffid=709629&clickref=DEZ&ued=https%3A%2F%2Fwww.medimops.de%2Fmichael-greger-how-not-to-die-entdecken-sie-nahrungsmittel-die-ihr-leben-verlaengern-und-bewiesenermassen-krankheiten-vorbeugen-und-heilen-gebundene-ausgabe-M0394656612X.html"
                    target="_blanc"
                  >HOW NOT TO DIE</a> von Michael Greger, M.D.
                </li>
                <li class="has-affiliate">
                  <a
                    href="https://www.awin1.com/cread.php?awinmid=11364&awinaffid=709629&clickref=DEZ&ued=https%3A%2F%2Fwww.medimops.de%2Fharari-yuval-noah-eine-kurze-geschichte-der-menschheit-broschiert-M03570552691.html"
                    target="_blanc"
                  >Eine kurze Geschichte der Menschheit</a> von Yuval Noah Harari
                </li>
                <li class="has-affiliate">
                  <a
                    href="https://www.awin1.com/cread.php?awinmid=11364&awinaffid=709629&clickref=DEZ&ued=https%3A%2F%2Fwww.medimops.de%2Fmelanie-joy-warum-wir-hunde-lieben-schweine-essen-und-kuehe-anziehen-karnismus-eine-einfuehrung-broschiert-M03981462173.html"
                    target="_blanc"
                  >Warum wir Hunde lieben, Schweine essen und Kühe anziehen: Karnismus – eine Einführung</a> von Melanie Joy
                </li>
                <li class="has-affiliate">
                  <a
                    href="https://www.awin1.com/cread.php?awinmid=11364&awinaffid=709629&clickref=DEZ&ued=https%3A%2F%2Fwww.medimops.de%2Fcampbell-t-colin-the-china-study-revised-and-expanded-edition-the-most-comprehensive-study-of-nutrition-ever-conducted-and-the-startling-implications-for-diet-weight-loss-and-long-term-health-taschenbuch-M01941631568.html"
                    target="_blanc"
                  >The China Study</a> von T. Colin Campbell
                </li>
                <li class="has-affiliate">
                  <a
                    href="https://www.awin1.com/cread.php?awinmid=11364&awinaffid=709629&clickref=DEZ&ued=https%3A%2F%2Fwww.medimops.de%2Ffoer-jonathan-safran-tiere-essen-taschenbuch-M03596188792.html"
                    target="_blanc"
                  >Tiere Essen</a> von Jonathan Safran Foer
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

  public openTruthOverlay(event: MouseEvent) {
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
    animation: delayShow 500ms ease forwards 4s;
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
    margin-top: 14vh;
    margin-bottom: 4rem;
    position: relative;

    @include respond-to("small") {
      margin-top: 22vh;
    }

    .heading {
      transform: translateY(100vh);
      animation: slideUp 0.5s ease forwards 0.65s;
      margin-bottom: 3.125rem;
      width: 150%;

      .shadowed {
        position: relative;

        h1 {
          position: relative;
          margin-left: -0.1rem;
          color: #fff;
          font-size: 10rem;
          text-transform: uppercase;
          text-decoration: underline;
          @include std-text-bold-italic();
          z-index: 4;

          @include respond-to("medium") {
            font-size: 14vw;
          }

          @include respond-to("small") {
            font-size: 23vw;
          }

          &.layer {
            position: absolute;
            top: -0.3rem;
            left: 0.6rem;
            color: #158966;
            z-index: 3;
          }
        }
      }

      h2 {
        color: $white;
        margin-left: -0.1rem;
        @include std-text-bold();
        margin-top: 6.25rem;
        line-height: 100%;
        font-size: 3.25rem;
        text-transform: none;
        text-decoration: none;

        @include respond-to("medium") {
          font-size: 5.25vw;
        }

        @include respond-to("small") {
          font-size: 12vw;
        }

        @include respond-to("medium") {
          margin-top: 4.375rem;
        }
      }
    }

    .explanation,
    .additional-info {
      margin-top: 3.125rem;
      transform: translateY(100vh);
      animation: slideUp 0.5s ease forwards 0.85s;

      p {
        margin-top: 0.5em;
        margin-bottom: 1.25em;
        color: $dark;

        strong,
        &.highlight {
          font-size: large;
          @include std-text-bold();
        }

        i {
          @include std-text-bold();
        }

        a {
          text-decoration: underline;
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

        &.has-affiliate:after {
          content: "Werbung";
          opacity: 0.5;
          color: #fff;
          text-transform: uppercase;
          font-size: xx-small;
          vertical-align: baseline;
        }
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
  transform: translate(2000px, calc(-2.2625rem / 2));
  z-index: 99999;
  animation: delayShowAndSliceIn 1.25s ease forwards 5.5s;

  @include respond-to("small") {
    position: absolute;
    top: 89vh;
    right: auto;
    left: 50vw;
    transform: translate(-50%, 2000px);
    animation: delayShowAndSliceInSmall 1.25s ease forwards 5.5s;
  }
}

@include respond-to("small") {
  .fact-wrapper {
    transition: opacity 300ms ease-out;
  }
  .mode-selector-dd {
    transition: top 300ms ease-out;
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
    transform: translate(2000px, calc(-2.2625rem / 2));
    filter: blur(4px);
  }
  100% {
    transform: translate(0, calc(-2.2625rem / 2));
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

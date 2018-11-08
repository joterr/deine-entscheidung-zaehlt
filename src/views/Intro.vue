<template>
  <section class="intro-page intro page">
    <div class="scroll" v-bind:class="{ opened: isVisibleTruth }">
      <div class="splash">
          <div class="fact-wrapper">
            <FactSentence />
            <div class="show-truth"><span v-on:click="showTruth">Findest Du nicht okay?</span></div>
          </div>
          <div class="animal-wrapper">
            <AnimalSlider />
          </div>
        </div>
        <div class="truth-overlay">
          <div class="content">
              <div class="heading">
                <h1>Du entscheidest</h1>
                <h1>was auf Deinem Teller landet!</h1>
              </div>
              <div class="explanation">
                  <p>950 Millionen Tiere jährlich. Für Fleisch, Milch und Eier. Durch Antibiotika in engster Stallhaltung und krankhaft überzüchtet. Dennoch sterben eine Vielzahl an Tieren bereits an Verletzungen und bakteriellen Krankheiten. Bei Schweinen sogar nahezu jedes fünfte Tier. Unprofitable Jungtiere werden meist direkt getötet - darunter über 50 Millionen vergaste und geschredderte Eintagsküken.</p>
                  <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
              </div>
              <div class="row additional-info">
                <div class="col">
                  <h2>Vegane Starthilfen</h2>
                  <ul class="additional-info">
                    <li><a href="https://www.vegankickstart.de/">vegankickstart.de</a> von PETAZWEI</li>
                    <li><a href="https://www.vegankickstart.de/">vegankickstart.de</a> von PETAZWEI</li>
                  </ul>
                </div>
                <div class="col">
                  <h2>Bücher &amp; Dokus</h2>
                  <ul class="additional-info">
                    <li><a href="https://www.vegankickstart.de/">vegankickstart.de</a> von PETAZWEI</li>
                    <li><a href="https://www.vegankickstart.de/">vegankickstart.de</a> von PETAZWEI</li>
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
import AnimalSlider from "@/components/AnimalSlider.vue";

@Component({
  components: {
    FactSentence,
    AnimalSlider
  }
})
export default class Intro extends Vue {
  @Provide()
  private isVisibleTruth = false;

  public showTruth() {
    this.isVisibleTruth = true;
  }
}
</script>

<style scoped lang="scss">
.fact-wrapper {
  position: relative;
  z-index: 999;
  width: 60%;
  opacity: 0;
  animation: delayShow 1s ease forwards 2s;

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
    margin-top: 2.5em;
    opacity: 0;
    filter: blur(3px);
    animation: delayShowBlur 500ms ease forwards 8s;

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
      animation: justBlur 5s linear;
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

.animal-wrapper {
  position: absolute;
  bottom: 8vh;
  left: 0;
  right: 0;
  width: 100vw;
  opacity: 0;
  animation: delayShow 4s ease forwards;

  @include respond-to("medium") {
    bottom: 6vh;
  }
}

.truth-overlay {
  background-color: $cl-accent1;
  height: 100vh;
  padding: $page-padding;
  overflow: hidden;
  overflow-y: scroll;

  @include respond-to("medium") {
    padding: $page-padding-medium;
  }

  @include respond-to("medium") {
    .content {
      padding-bottom: 20vh;
    }
  }

  .content,
  .additional-info {
    width: 65%;

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
        line-height: 125%;
        color: $white;
        font-size: 5em;
        @include std-text-bold();
        opacity: 0;

        @include respond-to("x-large") {
          font-size: 3.75em;
        }

        @include respond-to("large") {
          font-size: 3.5em;
        }

        @include respond-to("medium") {
          font-size: 3em;
        }
      }
    }

    .explanation {
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
        margin-top: 1.5em;

        strong {
          @include std-text-bold();
        }
      }
    }

    h2 {
      margin-left: -0.1em;
      line-height: 120%;
      font-size: medium;
      color: $dark;
      text-transform: uppercase;
    }

    ul.additional-info {
      margin: 0.75em 0;
      padding: 0;

      li {
        font-size: medium;
        color: $dark;
        @include std-text();
        list-style-type: none;
        margin: 0 0 0.5em 0;
        padding: 0;

        a {
          @include std-text-bold();
          color: $white;
          text-shadow: none;
          font-size: medium;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
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
      animation: showTruth 800ms linear forwards;

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

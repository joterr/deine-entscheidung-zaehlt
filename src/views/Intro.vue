<template>
  <section class="intro-page intro page">
    <div class="center">
      <div class="fact-wrapper">
        <FactSentence />
        <p class="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <a class="show-truth" v-on:click="openTruth">Findest Du nicht okay?</a></p>
      </div>
      <div class="animal-wrapper">
        <AnimalSlider />
      </div>
    </div>
    <TruthOverlay v-bind:isVisible="truthOpened"/>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import FactSentence from "@/components/FactSentence.vue";
import AnimalSlider from "@/components/AnimalSlider.vue";
import TruthOverlay from "@/components/TruthOverlay.vue";

@Component({
  components: {
    FactSentence,
    AnimalSlider,
    TruthOverlay
  }
})
export default class Intro extends Vue {
  @Provide()
  private truthOpened = false;

  public openTruth() {
    this.truthOpened = true;
  }
}
</script>

<style scoped lang="scss">
.intro-page {
  background-color: $dark;

  .center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}

.fact-wrapper {
  position: relative;
  z-index: 999;
  width: 60%;
  margin: 0 auto;
  opacity: 0;
  animation: delayShow 2s ease forwards 500ms;

  .description {
    display: block;
    width: 80%;
    margin-top: 2em;
    color: $white;
    opacity: 0;
    animation: delayShow 1s ease forwards 6s;
  }

  .show-truth {
    color: $cl-accent1;
    @include std-text-bold();
    opacity: 0;
    animation: delayShow 1s ease forwards 6s;
  }
}

.animal-wrapper {
  margin-top: 4em;
  width: 100vw;
  opacity: 0;
  animation: delayShow 4s ease forwards 500ms;
}

@keyframes delayShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

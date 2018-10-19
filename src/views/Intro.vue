<template>
  <section class="intro-page intro page">
    <div class="fact-wrapper">
      <FactSentence />
      <p class="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <a class="show-truth" v-on:click="openTruth">Findest Du nicht okay?</a></p>
    </div>
    <TruthOverlay v-bind:isVisible="truthOpened"/>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import FactSentence from "@/components/FactSentence.vue";
import TruthOverlay from "@/components/TruthOverlay.vue";

@Component({
  components: {
    FactSentence,
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
  padding-top: 6vh;
}

.fact-wrapper {
  .description {
    display: block;
    width: 50%;
    padding-top: 1em;
    color: $white;
  }

  .show-truth {
    color: $cl-accent1;
    @include std-text-bold();
  }
}
</style>

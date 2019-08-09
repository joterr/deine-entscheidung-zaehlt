<template>
  <div class="animal-animation">
    <div
      v-for="a in animals"
      v-bind:key="a.id"
      class="animal"
      v-bind:class="[a.type]"
      v-bind:style="{left: a.pos.x + 'vw'}"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

interface Animal {
  id: string;
  type: string;
  pos: { x: number; y: number };
}

@Component
export default class AnimalSprinkler extends Vue {
  @Provide()
  private animals: Animal[] = [];
  private animalsCount: number = 0;

  constructor() {
    super();
  }

  private mounted() {
    this.startSprinkler();
  }

  private startSprinkler() {
    for (let i = 0; i < 20; i++) {
      this.addAnimalByType("chicken");
    }
    for (let i = 0; i < 11; i++) {
      this.addAnimalByType("fish");
    }
    for (let i = 0; i < 10; i++) {
      this.addAnimalByType("pig");
    }
    for (let i = 0; i < 3; i++) {
      this.addAnimalByType("cow");
    }
  }

  private addAnimalByType(animalType: string) {
    this.animalsCount++;
    this.animals.push({
      id: animalType + this.animalsCount,
      type: animalType,
      pos: { x: 100 * Math.random(), y: 0 }
    });
  }
}
</script>

<style scoped lang="scss">
.animal-animation {
  width: 100vw;
  height: 100vh;

  .animal {
    position: absolute;
    top: -100px;
    left: 50vw;
    height: 50px;
    width: 65px;
    background-position: center center;
    background-size: 95% auto;
    background-repeat: no-repeat;
    opacity: 0.1;
    will-change: transform, opacity;

    @for $p from 0 to 51 {
      &:nth-child(#{$p + 1}) {
        animation: down 3000ms #{$p * 100}ms infinite linear;
      }
    }

    &:nth-child(3n) {
      animation-name: down-brighter;
      animation-duration: 2800ms;
    }

    &:nth-child(6n) {
      animation-name: down;
      animation-duration: 2600ms;
    }

    @include respond-to("small") {
      @for $p from 0 to 51 {
        &:nth-child(#{$p + 1}) {
          animation: down 3500ms #{$p * 100}ms infinite linear;
        }
      }

      &:nth-child(3n) {
        animation-name: down-brighter;
        animation-duration: 3300ms;
      }

      &:nth-child(6n) {
        animation-name: down;
        animation-duration: 2800ms;
      }
    }

    &.pig {
      background-image: url("../assets/pig.svg");
      background-position: center center;
    }

    &.chicken {
      background-image: url("../assets/chicken.svg");
    }

    &.cow {
      background-image: url("../assets/cow.svg");
    }

    &.fish {
      background-image: url("../assets/fish.svg");
    }

    @include respond-to("medium") {
      top: -40px;
      height: 40px;
      width: 52px;
    }

    @include respond-to("x-small") {
      top: -40px;
      height: 40px;
      width: 52px;
    }

    @include respond-to("xx-small") {
      top: -40px;
      height: 40px;
      width: 52px;
    }
  }
}

@keyframes down {
  0% {
    opacity: 0;
  }
  10%,
  90% {
    opacity: 0.1;
  }
  100% {
    opacity: 0;
    transform: translateY(100vh);
  }
}

@keyframes down-brighter {
  0% {
    opacity: 0;
  }
  10%,
  90% {
    opacity: 0.25;
  }
  100% {
    opacity: 0;
    transform: translateY(100vh);
  }
}
</style>

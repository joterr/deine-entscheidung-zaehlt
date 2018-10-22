<template>
  <div class="animal-level">
    
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component
export default class AnimalSlider extends Vue {}
</script>

<style scoped lang="scss">
.animal {
  display: inline-block;
  height: 50px;
  background-position: center center;
  background-size: 100% auto;
  opacity: 0.1;
  margin: 0 0.75vw;

  &.ill {
    opacity: 0.2;
  }

  &.chicken {
    width: 60px;
    background-image: url("../assets/chicken.png");
  }
  &.pig {
    width: 95px;
    background-image: url("../assets/pig.png");
  }
  &.cow {
    width: 95px;
    background-image: url("../assets/cow.png");
  }
}

.animal-level {

}
</style>

<template>
  <div class="additional-details" v-if="activeType">
    <div class="close" v-on:click="$emit('close-details')">
      <span></span>
    </div>
    <div class="inner">
      <div class="content">
        <div class="left-diagon"></div>
        <h3>
          <span class="timespan">Das sind jährlich über</span>
        </h3>

        <h1 class="animate">
          <ICountUp :endVal="activeType.PER_YEAR" :options="countUpOptions" />
        </h1>
        <h2 class="animate">
          <span v-if="activeType.UNIT">{{activeType.UNIT}}&nbsp;</span>
          <span v-html="activeType.UNIT ? activeType.NAME : activeType.PLURAL"></span>
          <span class="included-types-annotation" v-if="activeType.INCLUDED_TYPES">*</span>
        </h2>
        <div class="included-types" v-if="activeType.INCLUDED_TYPES">*{{activeType.INCLUDED_TYPES}}</div>
        <div class="special-content" v-if="activeType.ID === TYPES.HUHNER.ID">SPECIAL CONTENT</div>
        <div class="special-content" v-else-if="activeType.ID === TYPES.SCHWEINE.ID">SPECIAL CONTENT</div>
        <div class="source-declaration">
          Quelle:
          <a :href="activeType.SOURCE_URL" target="_blanc">{{ activeType.SOURCE }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { FACT_TYPES_CONST } from "@/factTypes.constant";
import ICountUp from "vue-countup-v2";

@Component({
  props: ["activeType"],
  components: {
    ICountUp
  }
})
export default class AdditionalDetails extends Vue {
  @Provide()
  private TYPES = FACT_TYPES_CONST;

  @Provide()
  private countUpOptions: any = {
    useEasing: true,
    useGrouping: true,
    separator: ".",
    decimal: ","
  };

  public makeLocaleInteger(val: number): string {
    return Math.ceil(val).toLocaleString("de-DE");
  }
}
</script>

<style scoped lang="scss">
.additional-details {
  position: fixed;
  top: 50vh;
  left: 50vw;
  color: #000;
  transform: translateX(-50%) translateY(-50%);
  width: 40vw;
  transition: opacity ease 500ms;
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 1pt;
  animation: animateIn 1s ease forwards;

  @include respond-to("small") {
    padding: 4.5rem 1.5rem;
  }

  @include respond-to("medium") {
    width: 80vw;
  }

  @include respond-to("small") {
    width: 86vw;
  }

  .close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    @include std-text-bold();
    font-size: x-large;
    height: 39px;
    width: 39px;

    &:after {
      content: "";
      position: absolute;
      top: -2rem;
      left: -2rem;
      right: -2rem;
      bottom: -2rem;
      cursor: pointer;
      z-index: 9999;
    }

    span:before,
    span:after {
      content: "";
      position: absolute;
      width: 39px;
      height: 3px;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
      border-radius: 3px;
      background-color: #000;
    }
    span:before {
      animation: animateXBeforeIn 0.125s ease forwards 0.75s;
    }
    span:after {
      animation: animateXAfterIn 0.125s ease forwards 0.75s;
    }

    @keyframes animateXBeforeIn {
      0% {
        transform: translate3d(0, 0, 0) rotate(0);
      }
      100% {
        transform: translate3d(0, 17px, 0) rotate(45deg);
      }
    }

    @keyframes animateXAfterIn {
      0% {
        transform: translate3d(0, 0, 0) rotate(0);
      }
      100% {
        transform: translate3d(0, 17px, 0) rotate(-45deg);
      }
    }
  }

  .inner {
    position: relative;
    overflow: hidden;

    .animate {
      transform: translateX(100%);
      animation: delayShowAndSliceIn 1s ease forwards 0.1s;

      &:nth-child(2) {
        animation: delayShowAndSliceIn 1s ease forwards 0.15s;
      }
      &:nth-child(3) {
        animation: delayShowAndSliceIn 1s ease forwards 0.2s;
      }
    }

    & > *:not(.animate) {
      opacity: 0;
      animation: blurIn 1s ease forwards 0.5s;
    }

    h1 {
      font-size: 7rem;
      padding-bottom: 0.25rem;

      @include respond-to("medium") {
        font-size: 6rem;
      }

      @include respond-to("small") {
        font-size: 5.5rem;
        word-break: break-word;
        line-height: 100%;
        padding-top: .75rem;
        padding-bottom: .75rem;
      }
    }
    h2 {
      font-size: 3.5rem;

      @include respond-to("small") {
        font-size: 2.5rem;
      }
    }
    h3 {
      font-size: 1.75em;

      @include respond-to("small") {
        font-size: 1.5rem;
      }
    }

    .timespan {
      font-weight: 400;
    }

    .included-types {
      padding-top: 15pt;
    }

    .special-content {
      padding-top: 35pt;
    }

    .source-declaration {
      text-align: right;
      padding-top: 25pt;
      font-size: x-small;

      a {
        text-decoration: underline;
        color: #000;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  @keyframes delayShowAndSliceIn {
    0% {
      transform: translateX(1000px);
      filter: blur(4px);
    }
    100% {
      transform: translateX(0);
      filter: blur(0);
    }
  }

  @keyframes blurIn {
    0% {
      opacity: 0;
      filter: blur(4px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  @keyframes animateIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>

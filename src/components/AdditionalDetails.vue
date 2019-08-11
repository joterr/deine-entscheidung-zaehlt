<template>
  <div class="additional-details" v-if="activeType" v-on:click="$emit('close-details')">
    <div class="inner">
      <div class="close">X</div>
      <div class="content">
        <div class="left-diagon"></div>
        <h2>jedes Jahr</h2>
        <h1>{{makeLocaleInteger(activeType.PER_YEAR)}}</h1>
        <h2>
          <span v-if="activeType.UNIT">{{activeType.UNIT}}&nbsp;</span>
          <span v-html="activeType.UNIT ? activeType.NAME : activeType.PLURAL"></span><span class="included-types-annotation" v-if="activeType.INCLUDED_TYPES">*</span>
        </h2>
        <div class="included-types" v-if="activeType.INCLUDED_TYPES">*{{activeType.INCLUDED_TYPES}}</div>
        <div class="special-content" v-if="activeType.ID === TYPES.HUHNER.ID">SPECIAL CONTENT</div>
        <div class="special-content" v-else-if="activeType.ID === TYPES.SCHWEINE.ID">SPECIAL CONTENT</div>
        <div class="source-declaration">Quelle: {{ activeType.SOURCE }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { FACT_TYPES_CONST } from "@/factTypes.constant";

@Component({
  props: ["activeType"]
})
export default class AdditionalDetails extends Vue {
  @Provide()
  private TYPES = FACT_TYPES_CONST;

  public makeLocaleInteger(val: number): string {
    return Math.ceil(val).toLocaleString("de-DE");
  }
}
</script>

<style scoped lang="scss">
.additional-details {
  position: fixed;
  top: 0;
  right: 0;
  color: #fff;
  transform: translateX(-50%);
  width: 25vw;
  cursor: pointer;
  transition: opacity ease 500ms;

  &:hover {
    opacity: 0.8;
  }

  @include respond-to("medium") {
    width: 92%;
  }

  .inner {
    position: relative;

    .close {
      position: absolute;
      top: -15pt;
      right: -10pt;
      @include std-text-bold();
      font-size: x-large;

      @include respond-to("medium") {
      font-size: large;
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

    h1 {
      font-size: 8em;
      line-height: 100%;
      padding-bottom: 0.1em;
    }
    h2 {
      font-size: 3.5em;
    }
    h3 {
      font-size: 2em;
    }

    .included-types {
      padding-top: 15pt;
    }

    .special-content {
      padding-top: 35pt;
    }

    .source-declaration {
      padding-top: 25pt;
      font-size: x-small;
    }
  }
}
</style>

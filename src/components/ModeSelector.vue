<template>
  <div class="mode-selector" :class="{'isExpanded': isExpanded}">
    <ul :class="getActiveIndexClass()">
      <li v-for="mode in MODES" :key="mode.id" :class="{'active': mode.id === selectedMode}">
        <input
          type="radio"
          v-model="selectedMode"
          :value="mode.id"
          :id="mode.id"
          v-on:click="handleSelfClicked(mode.id === selectedMode, $event)"
        />
        <label :for="mode.id">{{ mode.niceName }}</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { MODES } from "@/factTypes.constant";

@Component({
  props: ["activeMode"]
})
export default class ModeSelector extends Vue {
  @Provide()
  private MODES = MODES;

  @Provide()
  private isExpanded: boolean = false;

  private mode: string = MODES[0].id;

  public set selectedMode(mode: string) {
    if (this.mode === mode) {
      this.isExpanded = true;
    }
    this.mode = mode;
    this.isExpanded = false;
    this.$emit("selected-mode", mode);
  }

  public get selectedMode(): string {
    return this.mode;
  }

  public handleSelfClicked(already: boolean, event: Event): void {
    this.isExpanded = !(this.isExpanded && already);
    if (!this.isExpanded) {
      event.stopPropagation();
    }
  }

  public getActiveIndexClass(): string {
    return `active-${this.MODES.findIndex((m: any) => m.id === this.mode)}`;
  }
}
</script>

<style scoped lang="scss">
$element-height-base: 1.75rem;
$element-padding-vertical: 0.3125rem;
$element-padding-horizontal: 0.625rem;
$element-border-radius: 0.1rem;
$element-border-width: 0.125rem;
$element-height: $element-height-base + $element-padding-vertical;
$element-height-complete: $element-height + $element-border-width * 2;

.mode-selector {
  position: relative;
  z-index: 999;
  width: 180px;
  height: calc(#{$element-height-complete});
  overflow: hidden;
  border-radius: $element-border-radius;

  ul {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-radius: $element-border-radius;
    overflow: hidden;
    border: $element-border-width solid #7ae8ae;
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);

    @for $i from 1 through 3 {
      &.active-#{$i} {
        top: calc((#{$element-height}) * -1 * #{$i});
      }
    }

    li {
      list-style-type: none;
      background-color: #7ae8ae;

      label {
        position: relative;
        z-index: 99;
        cursor: pointer;
        display: block;
        height: $element-height;
        line-height: $element-height;
        color: #aaa;
        @include std-text();
        text-transform: uppercase;
        font-size: small;
        padding: $element-padding-vertical $element-padding-horizontal;
        padding-top: 0;
        padding-right: 1.5rem;
      }

      &.active {
        label:after {
          content: "";
          position: absolute;
          right: 0.75rem;
          top: calc(#{$element-height} / 2);
          z-index: 9999;
          width: 0.4rem;
          height: 0.4rem;
          border: 0.15rem solid;
          border-color: #fff transparent transparent #fff;
          transform: translateY(-75%) rotate(-135deg);
          cursor: pointer;
        }

        label {
          border-radius: $element-border-radius;
          background-color: #1ec46c;
          color: #fff;
          @include std-text-bold-italic();
        }
      }
    }
  }

  &.isExpanded {
    overflow: visible;
    height: auto;
    box-shadow: none;

    ul {
      border: $element-border-width solid #eee;

      li {
        background-color: #eee;

        &.active label:after {
          right: 0.5rem;
          transform: translateY(-50%) rotate(-45deg);
        }
      }
    }
  }

  input {
    width: 1px;
    height: 1px;
    display: inline-block;
    position: absolute;
    opacity: 0;
  }
}
</style>

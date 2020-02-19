<template>
  <div class="mode-selector" :class="{'is-expanded': isExpanded}">
    <span class="width-maker">{{ getSelectedModeName() }}</span>
    <ul :class="getSelectedModeClass(mode.id)">
      <li
        v-for="mode in SELECTABLE_MODES"
        :key="mode.id"
        :class="{'active': mode.id === selectedMode}"
      >
        <input
          type="radio"
          v-model="selectedMode"
          :value="mode.id"
          :id="mode.id"
          v-on:click="handleSelfClicked(mode.id, $event)"
        />
        <label :for="mode.id">{{ mode.niceName }}</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import { MODES, ModeEnum, Mode } from "@/factTypes.constant";

@Component({
  props: ["activeMode"]
})
export default class ModeSelector extends Vue {
  @Prop()
  private activeMode!: ModeEnum;

  @Provide()
  private SELECTABLE_MODES: Mode[] = MODES;

  @Provide()
  private isExpanded: boolean = false;

  private mode: ModeEnum = this.activeMode || ModeEnum.DE;

  public set selectedMode(mode: ModeEnum) {
    if (this.mode === mode) {
      this.isExpanded = true;
    }
    this.mode = mode;
    this.isExpanded = false;
    this.$emit("selected-mode", mode);
  }

  public get selectedMode(): ModeEnum {
    return this.mode;
  }

  public handleSelfClicked(key: string, event: Event): void {
    this.isExpanded = !(this.isExpanded && key === ModeEnum[this.selectedMode]);
    this.$forceUpdate();
    if (!this.isExpanded) {
      event.stopPropagation();
    }
  }

  public getSelectedModeClass(): string {
    return `active-${this.SELECTABLE_MODES.findIndex(
      (m: any) => m.id === this.mode
    )}`;
  }

  public getSelectedModeName(): string {
    const mode: Mode | undefined = this.SELECTABLE_MODES.find(
      (m: any) => m.id === this.mode
    );
    return mode ? mode.niceName : "";
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

$font-size: medium;

.mode-selector {
  position: relative;
  z-index: 999;
  height: calc(#{$element-height-complete});
  overflow: hidden;
  border-radius: $element-border-radius;

  .width-maker {
    opacity: 0;
    display: inline-block;
    @include std-text-bold-italic();
    padding-left: $element-padding-horizontal;
    padding-right: calc(#{$element-padding-horizontal} * 2 + 0.4rem + 0.75rem);
    font-size: $font-size;
    text-transform: uppercase;
  }

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
    border: $element-border-width solid transparent;

    @for $i from 0 through 3 {
      &.active-#{$i} {
        top: calc((#{$element-height}) * -1 * #{$i});
      }
    }

    li {
      list-style-type: none;
      background-color: transparent;

      label {
        position: relative;
        z-index: 99;
        cursor: pointer;
        display: block;
        height: $element-height;
        line-height: $element-height;
        color: rgb(195, 195, 195);
        @include std-text();
        text-transform: uppercase;
        font-size: $font-size;
        padding: $element-padding-vertical $element-padding-horizontal;
        padding-top: 0;
        padding-right: 1.5rem;
        opacity: 0;
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
          background-color: $cl-accent1;
          color: #fff;
          @include std-text-bold-italic();
          opacity: 1;
        }
      }
    }
  }

  &.is-expanded {
    overflow: visible;
    height: auto;
    width: 200px;
    box-shadow: none;

    ul {
      border: $element-border-width solid rgba(255, 255, 255, 0.4);

      li {
        background-color: rgba(255, 255, 255, 0.4);

        label {
          opacity: 1;
        }

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

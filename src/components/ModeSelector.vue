<template>
  <div class="mode-selector" :class="{'is-expanded': isExpanded, 'inline': inline}">
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
        <label :for="mode.id">{{ inline ? mode.niceNameInline : mode.niceName }}</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import { MODES, ModeEnum, Mode } from "@/factTypes.constant";

@Component({
  props: ["activeMode", "inline"]
})
export default class ModeSelector extends Vue {
  @Prop()
  private activeMode!: ModeEnum;

  @Prop()
  private inline!: boolean;

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
    return mode ? (this.inline ? mode.niceNameInline : mode.niceName) : "";
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

$element-padding-vertical-inline: 0.125rem;
$element-height-base-inline: 1.15rem * 1.65;
$element-height-inline: $element-height-base-inline +
  $element-padding-vertical-inline;

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
    font-size: small;
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
          background-color: #1ec46c;
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
    box-shadow: none;
    width: 170px;

    ul {
      border: $element-border-width solid #eee;

      li {
        background-color: #eee;

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

  &.inline {
    height: calc(#{$element-height-base-inline});
    width: 100%;

    @for $i from 1 through 3 {
      &.active-#{$i} {
        top: calc((#{$element-height-inline}) * -1 * #{$i});
      }
    }

    .width-maker {
      @include highlight-text-bold();
      font-size: 1.15rem;
      text-transform: none;
    }

    ul {
      box-shadow: none;
      border: none;

      li.active label {
        @include highlight-text-bold();
      }

      label {
        height: calc(#{$element-height-inline});
        line-height: 1.6rem;
        font-size: 1.15rem;
        text-transform: none;
        padding: $element-padding-vertical-inline $element-padding-horizontal;
      }
    }
  }

  &.inline:not(.is-expanded) {
    ul {
      border: none;

      li.active {
        background-color: #fff;

        label {
          background: none;
          color: #000;
          @include highlight-text-bold();

          &:after {
            border-color: #000 transparent transparent #000;
          }
        }
      }
    }
  }

  &.inline.is-expanded {
    width: 175px;

    li:not(.active) {
      label {
        font-size: 1rem;
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

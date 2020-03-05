<template>
  <div
    class="mode-selector"
    :class="{'is-expanded': isExpanded, 'animate': selectedMode === veganMode}"
  >
    <div
      class="tooltip"
      v-if="!hasFirstChange"
      v-on:click="isExpanded = true"
    >Wie hoch ist Dein Anteil?</div>
    <div class="left-frills frills"></div>
    <div class="right-frills frills"></div>
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
  private veganMode: ModeEnum = ModeEnum.VEGAN;

  @Provide()
  private hasFirstChange: boolean = false;

  private expandState: boolean = false;

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

  public set isExpanded(state: boolean) {
    this.hasFirstChange = true;
    this.expandState = state;
    this.emitIsExpanded(state);
  }

  public get isExpanded(): boolean {
    return this.expandState;
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

  private emitIsExpanded(state: boolean): void {
    this.$emit("is-expanded", state);
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
$font-size-small: small;

$frill-vert-space: 1.2rem;
$frill-horizontal-offset: 1.8rem;
$frill-distance: 0.9rem;
$frill-stagger: 0.45rem;

$frill-rotation: 40deg;
$frill-height: 0.3rem;
$frill-width: 1.5rem;

$speed: 0.38s;
$timing-function: ease-out;
$delay: 0.38s;

.mode-selector {
  position: static;
  z-index: 999;
  height: calc(#{$element-height-complete});
  border-radius: $element-border-radius;
  overflow: hidden;

  &.animate {
    animation: addOverflowHidden calc(#{$speed} + #{$delay}) linear forwards;
  }

  .tooltip {
    position: absolute;
    top: -1.8rem;
    left: -5.5rem;
    z-index: 99;
    cursor: pointer;
    @include std-text-bold();
    color: $dark;
    background-color: $white;
    font-size: small;
    padding: 0.125rem;
    opacity: 0;
    animation: delayShowBlurAndHide 6s ease forwards 7s;

    &:after {
      content: "";
      position: absolute;
      top: 1rem;
      right: 2rem;
      width: 0.1rem;
      height: 1.8rem;
      transform: rotate(-30deg);
      background-color: $white;
      opacity: 0;
      animation: delayShowBlurAndHide 6.1s ease forwards 7.2s;
    }
  }

  .width-maker {
    opacity: 0;
    display: inline-block;
    @include std-text-bold-italic();
    padding-left: $element-padding-horizontal;
    padding-right: calc(#{$element-padding-horizontal} * 2 + 0.4rem + 0.75rem);
    font-size: $font-size;
    @include respond-to("small") {
      font-size: $font-size-small;
    }
    text-transform: uppercase;
  }

  ul {
    margin: 0;
    margin-top: -1rem;
    padding: 0;
    position: relative;
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
        @include respond-to("small") {
          font-size: $font-size-small;
        }
        padding: $element-padding-vertical $element-padding-horizontal;
        padding-top: 0;
        padding-right: 1.6rem;
        opacity: 0;
      }

      &.active {
        label:after {
          content: "";
          position: absolute;
          right: 0.75rem;
          top: calc(#{$element-height-complete} / 2);
          z-index: 9999;
          width: 0.45rem;
          height: 0.45rem;
          border: 0.16rem solid;
          border-color: #fff transparent transparent #fff;
          transform: translateY(-100%) rotate(-135deg);
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
    animation: none;
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
          transform: translateY(-70%) rotate(-45deg);
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

.frills,
.frills:after,
.frills:before {
  position: absolute;
  background: $cl-accent1;
  border-radius: ($frill-height/2);
  height: $frill-height;
}

.frills:after,
.frills:before {
  content: "";
  display: block;
}
.frills:before {
  bottom: $frill-vert-space;
}
.frills:after {
  top: $frill-vert-space;
}
.left-frills {
  left: calc(-1 * #{$frill-horizontal-offset});
  top: ($element-height-complete/2)- ($frill-height/2);
  .animate & {
    animation: move-left $speed $timing-function $delay,
      width-to-zero $speed $timing-function $delay;
  }

  &:before,
  &:after {
    left: $frill-stagger;
  }
  &:before {
    .animate & {
      animation: width-to-zero $speed $timing-function $delay,
        move-up $speed $timing-function $delay;
    }
  }
  &:after {
    .animate & {
      animation: width-to-zero $speed $timing-function $delay,
        move-down $speed $timing-function $delay;
    }
  }
}
.right-frills {
  right: calc(-1 * #{$frill-horizontal-offset});
  top: ($element-height-complete/2)- ($frill-height/2);
  .animate & {
    animation: move-right $speed $timing-function $delay,
      width-to-zero $speed $timing-function $delay;
  }
  &:before,
  &:after {
    right: $frill-stagger;
  }
  &:before {
    .animate & {
      animation: width-to-zero $speed $timing-function $delay,
        move-up $speed $timing-function $delay;
    }
  }
  &:after {
    .animate & {
      animation: width-to-zero $speed $timing-function $delay,
        move-down $speed $timing-function $delay;
    }
  }
}

.left-frills:before,
.right-frills:after {
  transform: rotate($frill-rotation);
}

.left-frills:after,
.right-frills:before {
  transform: rotate(-$frill-rotation);
}

@keyframes addOverflowHidden {
  0% {
    overflow: visible;
  }
  99% {
    overflow: visible;
  }
  100% {
    overflow: hidden;
  }
}

@keyframes move-left {
  0% {
    transform: none;
  }
  65% {
    transform: translateX(-1 * $frill-distance);
  }
  100% {
    transform: translateX(-1 * $frill-distance);
  }
}
@keyframes move-right {
  0% {
    transform: none;
  }
  65% {
    transform: translateX($frill-distance);
  }
  100% {
    transform: translateX($frill-distance);
  }
}
@keyframes width-to-zero {
  0% {
    width: $frill-width;
  }
  100% {
    width: $frill-height;
  }
}
@keyframes move-up {
  0% {
  }
  100% {
    bottom: $frill-vert-space * 1.55;
  }
}
@keyframes move-down {
  0% {
  }
  100% {
    top: $frill-vert-space * 1.55;
  }
}
</style>

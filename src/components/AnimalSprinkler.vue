<template>
  <div class="animal-animation">
    <canvas ref="sprinkler"></canvas>
    <img class="preload-image" ref="chicken" src="../assets/chicken.svg" />
    <img class="preload-image" ref="cow" src="../assets/cow.svg" />
    <img class="preload-image" ref="fish" src="../assets/fish.svg" />
    <img class="preload-image" ref="pig" src="../assets/pig.svg" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide, Watch } from "vue-property-decorator";
import { ModeEnum, FACT_TYPES_CONST, Types, Type } from "../factTypes.constant";

interface AnimalPos {
  type: string;
  drawed: boolean;
  pos: { x: number; y: number };
}

interface PossibleCoords {
  [key: number]: AnimalPos[];
}

interface ImageRefs {
  [type: string]: HTMLImageElement;
}

@Component({
  props: ["activeMode"]
})
export default class AnimalSprinkler extends Vue {
  @Provide()
  private activeMode!: ModeEnum;

  private types: Types = FACT_TYPES_CONST;

  private sprinklerCanvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private canvasWidth!: number;
  private canvasHeight!: number;
  private maxColumns!: number;
  private maxRows!: number;
  private recalculation: boolean = false;
  private recalcTimeout!: number;
  private intervalHolder!: number;
  private imageRef: ImageRefs = {};

  private possibleCoords: PossibleCoords = {};

  private readonly animalWidthPx: number = 34;
  private readonly animalHeightPx: number = 34;
  private readonly animalOpacity: number = 0.1;
  private animalsPerSecond: number = 38;

  private animalOrder: string[] = [
    "chicken",
    "chicken",
    "chicken",
    "chicken",
    "chicken",
    "chicken",
    "chicken",
    "chicken",
    "pig",
    "pig",
    "pig",
    "pig",
    "cow",
    "cow",
    "fish",
    "fish",
    "fish",
    "fish",
    "fish",
    "fish",
    "fish",
    "fish",
    "fish"
  ];

  constructor() {
    super();
  }

  @Watch("activeMode")
  private onActiveModeChanged(): void {
    this.animalsPerSecond = 0;

    Object.keys(this.types).forEach((key: string) => {
      const type: Type = this.types[key];
      if (type.IS_ANIMAL) {
        this.animalsPerSecond += type[this.activeMode].PER_YEAR;
      }
    });

    if (this.activeMode === ModeEnum.DE) {
      this.animalsPerSecond = this.animalsPerSecond / 365 / 24 / 60 / 60;
    }

    clearInterval(this.intervalHolder);

    if (this.animalsPerSecond > 0) {
      this.iterateAnimals();
      this.retardedRenderAnimalsAnimation();
    } else {
      this.initSprinklerCanvas();
    }

    /* tslint:disable-next-line:no-console */
    console.log(
      `AnimalSprinkler # onActiveModeChanged: ${this.activeMode}, new animalsPerSecond: ${this.animalsPerSecond}`
    );
  }

  private mounted() {
    this.renderAnimalsAnimation();
    this.drawAnimals();
    window.addEventListener("resize", this.retardedRenderAnimalsAnimation);
  }

  private beforeDestroy() {
    window.removeEventListener("resize", this.retardedRenderAnimalsAnimation);
    if (this.recalcTimeout) {
      clearInterval(this.recalcTimeout);
    }
  }

  private renderAnimalsAnimation(): void {
    this.initSprinklerCanvas();
    this.calculatePossibleAnimals();
  }

  private retardedRenderAnimalsAnimation(): void {
    if (this.recalcTimeout) {
      clearInterval(this.recalcTimeout);
    }

    this.recalcTimeout = setTimeout(() => {
      /* tslint:disable-next-line:no-console */
      console.log(`AnimalSprinkler # recalculation`);

      this.renderAnimalsAnimation();
    }, 150);
  }

  private initSprinklerCanvas(): void {
    this.sprinklerCanvas = this.$refs.sprinkler as HTMLCanvasElement;
    this.canvasWidth = this.sprinklerCanvas.width =
      (this.sprinklerCanvas.parentElement &&
        this.sprinklerCanvas.parentElement.clientWidth) ||
      0;
    this.canvasHeight = this.sprinklerCanvas.height =
      (this.sprinklerCanvas.parentElement &&
        this.sprinklerCanvas.parentElement.clientHeight) ||
      0;

    this.ctx = this.sprinklerCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;

    this.ctx.globalAlpha = this.animalOpacity;

    this.imageRef.chicken = this.$refs.chicken as HTMLImageElement;
    this.imageRef.cow = this.$refs.cow as HTMLImageElement;
    this.imageRef.fish = this.$refs.fish as HTMLImageElement;
    this.imageRef.pig = this.$refs.pig as HTMLImageElement;

    /* tslint:disable-next-line:no-console */
    console.log(
      `AnimalSprinkler # canvasWidth: ${this.canvasWidth} /// canvasHeight: ${this.canvasHeight}`
    );
  }

  private calculatePossibleAnimals(): void {
    this.possibleCoords = {};

    this.maxColumns = Math.floor(this.canvasWidth / this.animalWidthPx);
    this.maxRows = Math.floor((this.canvasHeight / this.animalHeightPx) * 1.1);

    const realAnimalWidth: number = this.canvasWidth / this.maxColumns;
    const realAnimalHeight: number = this.canvasHeight / this.maxRows;

    /* tslint:disable-next-line:no-console */
    console.log(
      `AnimalSprinkler # columns: ${this.maxColumns} /// rows: ${this.maxRows}`
    );
    /* tslint:disable-next-line:no-console */
    console.log(
      `AnimalSprinkler # realAnimalWidth: ${realAnimalWidth} /// realAnimalHeight: ${realAnimalHeight}`
    );

    let cnt = 0;

    for (let cr = 0; cr < this.maxRows; cr++) {
      const animalRow: AnimalPos[] = [];
      for (let cc = 0; cc < this.maxColumns; cc++) {
        animalRow.push({
          type: this.animalOrder[cnt],
          drawed: false,
          pos: {
            x: cc * realAnimalWidth,
            y: cr * realAnimalHeight
          }
        });
        if (cnt === this.animalOrder.length - 1) {
          this.shuffleArray(this.animalOrder);
          cnt = 0;
        } else {
          cnt++;
        }
      }
      this.possibleCoords[Object.keys(this.possibleCoords).length] = animalRow;
    }

    this.recalculation = true;
  }

  private drawAnimals(): void {
    this.imageLoaderVerification(
      [
        this.imageRef.chicken,
        this.imageRef.cow,
        this.imageRef.fish,
        this.imageRef.pig
      ],
      this.iterateAnimals
    );
  }

  private iterateAnimals(): void {
    let rowCount: number = this.maxRows - 1;
    let columnCnt: number = 0;

    this.intervalHolder = setInterval(() => {
      if (this.recalculation) {
        this.recalculation = false;
        this.resetCanvas();
        rowCount = this.maxRows - 1;
        columnCnt = 0;
      } else if (rowCount === -1) {
        return;
      }

      if (
        this.possibleCoords &&
        Object.keys(this.possibleCoords).length &&
        this.possibleCoords[rowCount] &&
        this.possibleCoords[rowCount][columnCnt]
      ) {
        const coord: AnimalPos = this.possibleCoords[rowCount][columnCnt];

        this.ctx.drawImage(
          this.imageRef[coord.type],
          coord.pos.x,
          coord.pos.y,
          this.animalWidthPx,
          this.animalHeightPx
        );
      }

      if (columnCnt === this.maxColumns - 1) {
        rowCount--;
        columnCnt = 0;
      } else {
        columnCnt++;
      }
    }, 1000 / this.animalsPerSecond);
  }

  private resetCanvas(): void {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  private shuffleArray(array: string[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  private imageLoaderVerification(
    images: HTMLImageElement[],
    callback: () => void
  ): void {
    let allLoaded = 0;
    for (const image of images) {
      image.addEventListener(
        "load",
        () => {
          allLoaded++;
          if (allLoaded === images.length) {
            callback.call(undefined);
          }
        },
        false
      );
    }
  }
}
</script>

<style scoped lang="scss">
.animal-animation {
  height: calc(100vh - 1rem);
  width: calc(100vw - 1rem);
  margin: 0.5rem;

  .preload-image {
    position: absolute;
    top: -100vh;
    z-index: -1;
    height: 100px;
    width: 100px;
    opacity: 0;
  }
}
</style>

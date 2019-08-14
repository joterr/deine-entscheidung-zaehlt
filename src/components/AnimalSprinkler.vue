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
import { Component, Provide, Vue } from "vue-property-decorator";

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

@Component
export default class AnimalSprinkler extends Vue {
  private sprinklerCanvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private canvasWidth!: number;
  private canvasHeight!: number;

  private imageRef: ImageRefs = {};

  private possibleCoords: PossibleCoords = {};

  private readonly animalWidthPx: number = 34;
  private readonly animalHeightPx: number = 34;
  private readonly animalOpacity: number = 0.07;
  private readonly animalsPerSecond: number = 34;

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
    "fish",
  ];

  constructor() {
    super();
  }

  private mounted() {
    this.renderAnimalsAnimation();
    this.drawAnimals();
    window.addEventListener("resize", this.renderAnimalsAnimation);
  }

  private beforeDestroy() {
    window.removeEventListener("resize", this.renderAnimalsAnimation);
  }

  private renderAnimalsAnimation() {
    this.initSprinklerCanvas();
    this.calculatePossibleAnimals();
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
    const columns: number = Math.floor(this.canvasWidth / this.animalWidthPx);
    const rows: number = Math.floor(this.canvasHeight / this.animalHeightPx * 1.1);

    const realAnimalWidth: number = this.canvasWidth / columns;
    const realAnimalHeight: number = this.canvasHeight / rows;

    /* tslint:disable-next-line:no-console */
    console.log(`AnimalSprinkler # columns: ${columns} /// rows: ${rows}`);
    /* tslint:disable-next-line:no-console */
    console.log(
      `AnimalSprinkler # realAnimalWidth: ${realAnimalWidth} /// realAnimalHeight: ${realAnimalHeight}`
    );

    let cnt = 0;

    for (let cr = 0; cr < rows; cr++) {
      const animalRow: AnimalPos[] = [];
      for (let cc = 0; cc < columns; cc++) {
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

  private iterateAnimals(restart: boolean = false): void {
    const rows: number = Object.keys(this.possibleCoords).length - 1;
    const columns: number = this.possibleCoords[0].length - 1;

    let rowCount: number = rows;
    let columnCnt: number = 0;

    const interval = setInterval(() => {
      const coord: AnimalPos = this.possibleCoords[rowCount][columnCnt];

      this.ctx.drawImage(
        this.imageRef[coord.type],
        coord.pos.x,
        coord.pos.y,
        this.animalWidthPx,
        this.animalHeightPx
      );

      if (columnCnt === columns) {
        rowCount--;
        columnCnt = 0;
      } else {
        columnCnt++;
      }

      if (rowCount === 0) {
        this.resetCanvas();
        rowCount = rows;
        columnCnt = 0;
      }

      /* tslint:disable-next-line:no-console */
      /* console.log(
        `AnimalSprinkler:iterateAnimals() # rowCount: ${rowCount} of ${rows} / columnCnt: ${columnCnt} of ${columns}`
      ); */
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
    height: 100px;
    width: 100px;
    opacity: 0;
  }
}
</style>

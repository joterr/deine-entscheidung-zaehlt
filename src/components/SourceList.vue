<template>
  <ul>
    <li v-for="item in sortedElements" :key="item.pub + item.date + item.desc">
      <a target="_new" :href="item.link">
        <strong>{{ item.desc }}</strong>
        ({{ item.pub }}, {{ parseDate(item.date) }})
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

interface Source {
  desc: string;
  pub: string;
  date: Date;
  link: string;
}

@Component({
  props: {
    elements: {
      type: Array,
      required: true
    }
  }
})
export default class SourceList extends Vue {
  @Provide()
  public elements!: Source[];

  private readonly monthsAbbreviation: string[] = [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ];

  get sortedElements(): Source[] {
    return this.elements.sort(
      (a: Source, b: Source) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  public parseDate(date: Date): string {
    const d: Date = new Date(date);
    return (
      (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) +
      ". " +
      this.monthsAbbreviation[d.getMonth()] +
      " " +
      d.getFullYear()
    );
  }
}
</script>

<style scoped lang="scss">
ul {
  display: block;
  padding-left: 0em;

  li {
    list-style-type: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: $dark;
    font-size: small;

    a {
      text-decoration: none !important;
      font-size: small;

      strong {
        @include std-text-bold();
      }

      &:hover {
        text-decoration: underline !important;
      }
    }
  }
}
</style>

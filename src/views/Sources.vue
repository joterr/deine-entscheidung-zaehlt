<template>
  <div class="static-page sources">
    <span class="back-link">
      <router-link to="/">&laquo; Zurück zur Wahrheit</router-link>
    </span>
    <div class="content">
      <h1>Weitere Fakten</h1>
      <p>Die Sammlung wird in unregelmäßigen Abständen aktualisiert und stellt nur eine Auswahl dar.</p>

      <h3>Umweltauswirkungen</h3>
      <ul class="sources">
        <li v-for="item in ENVIRONMENTAL_IMPACTS" v-bind:key="item.pub + item.date + item.desc">
          <a target="_new" v-bind:href="item.link">
            <strong>{{ item.desc }}</strong>
            ({{ item.pub }}, {{ item.date }})
          </a>
        </li>
      </ul>

      <h3>Verstöße / Umgang / Skandale</h3>
      <ul class="sources">
        <li
          v-for="item in VIOLATIONS_HANDLING_SCANDALS"
          v-bind:key="item.pub + item.date + item.desc"
        >
          <a target="_new" v-bind:href="item.link">
            <strong>{{ item.desc }}</strong>
            ({{ item.pub }}, {{ item.date }})
          </a>
        </li>
      </ul>

      <h3>Gesundheitsvorteile</h3>
      <ul class="sources">
        <li v-for="item in HEALTH_BENEFITS" v-bind:key="item.pub + item.date + item.desc">
          <a target="_new" v-bind:href="item.link">
            <strong>{{ item.desc }}</strong>
            ({{ item.pub }}, {{ item.date }})
          </a>
        </li>
      </ul>

      <h3>Schlachtzahlen</h3>
      <ul class="sources">
        <li v-for="item in SLAUGHTER_FIGURES" v-bind:key="item.pub + item.date + item.desc">
          <a target="_new" v-bind:href="item.link">
            <strong>{{ item.desc }}</strong>
            ({{ item.pub }}, {{ item.date }})
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import {
  ENVIRONMENTAL_IMPACTS,
  VIOLATIONS_HANDLING_SCANDALS,
  HEALTH_BENEFITS,
  SLAUGHTER_FIGURES
} from "@/facts.constant";

@Component({})
export default class Sources extends Vue {
  @Provide()
  private ENVIRONMENTAL_IMPACTS = ENVIRONMENTAL_IMPACTS;

  @Provide()
  private VIOLATIONS_HANDLING_SCANDALS = VIOLATIONS_HANDLING_SCANDALS;

  @Provide()
  private HEALTH_BENEFITS = HEALTH_BENEFITS;

  @Provide()
  private SLAUGHTER_FIGURES = SLAUGHTER_FIGURES;
}
</script>

<template>
  <div class="static-page sources">
    <span class="back-link">
      <router-link to="/">&laquo; Zurück zu den Fakten</router-link>
    </span>
    <div class="content">
      <h1>Weitere Fakten</h1>
      <p>Die Sammlung wird in unregelmäßigen Abständen aktualisiert und stellt nur eine Auswahl dar.</p>

      <div class="list">
        <h3>Verstöße / Umgang / Skandale</h3>
        <SourceList :elements="VIOLATIONS_HANDLING_SCANDALS"></SourceList>
      </div>
      <div class="list">
        <h3>Umweltauswirkungen</h3>
        <SourceList :elements="ENVIRONMENTAL_IMPACTS"></SourceList>
      </div>
      <div class="list">
        <h3>Gesundheitsvorteile</h3>
        <SourceList :elements="HEALTH_BENEFITS"></SourceList>
      </div>
      <div class="list">
        <h3>Schlachtzahlen</h3>
        <SourceList :elements="SLAUGHTER_FIGURES"></SourceList>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import SourceList from "@/components/SourceList.vue";
import {
  ENVIRONMENTAL_IMPACTS,
  VIOLATIONS_HANDLING_SCANDALS,
  HEALTH_BENEFITS,
  SLAUGHTER_FIGURES
} from "@/facts.constant";

@Component({
  components: { SourceList }
})
export default class Sources extends Vue {
  @Provide()
  private VIOLATIONS_HANDLING_SCANDALS = VIOLATIONS_HANDLING_SCANDALS;

  @Provide()
  private ENVIRONMENTAL_IMPACTS = ENVIRONMENTAL_IMPACTS;

  @Provide()
  private HEALTH_BENEFITS = HEALTH_BENEFITS;

  @Provide()
  private SLAUGHTER_FIGURES = SLAUGHTER_FIGURES;
}
</script>
<style scoped lang="scss">
.list {
  margin-top: 2.25rem;
}
</style>

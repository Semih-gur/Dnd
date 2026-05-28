<template>
  <div class="system-selector">
    <p class="selector-eyebrow">{{ $t("home.chooseGame") }}</p>
    <div class="system-grid">
      <div
        v-for="system in systems"
        :key="system.id"
        class="system-card"
        :style="{
          '--sys-accent': system.accentColor,
          '--sys-accent-rgb': system.accentRgb,
          '--sys-bg': system.cardBg,
          '--sys-border': system.cardBorder,
        }"
      >
        <div class="system-header">
          <v-icon class="system-icon">{{ system.icon }}</v-icon>
          <div class="system-meta">
            <h3 class="system-name">{{ system.name }}</h3>
            <p class="system-tagline">{{ system.tagline }}</p>
          </div>
        </div>
        <div class="edition-list">
          <div
            v-for="edition in system.editions"
            :key="edition.id"
            class="edition-chip"
            :class="{ 'chip-disabled': !edition.available }"
            @click="edition.available && goTo(edition.basePath)"
          >
            <span class="chip-label">{{ edition.label }}</span>
            <span v-if="!edition.available" class="chip-soon">Soon</span>
            <v-icon v-else class="chip-arrow">mdi-arrow-right</v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { systems } from "@/systems.js";
import router from "@/router";

export default {
  name: "SystemSelector",
  data() {
    return { systems };
  },
  methods: {
    goTo(path) {
      router.push(path);
    },
  },
};
</script>

<style scoped>
.system-selector {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 1rem;
}

.selector-eyebrow {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-faint);
  margin: 0 0 1.25rem;
}

.system-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (max-width: 640px) {
  .system-grid {
    grid-template-columns: 1fr;
  }
}

.system-card {
  background: var(--sys-bg);
  border: 1px solid var(--sys-border);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: box-shadow 0.2s ease;
}

.system-card:hover {
  box-shadow: 0 4px 20px rgba(var(--sys-accent-rgb), 0.15);
}

.system-header {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.system-icon {
  font-size: 1.75rem !important;
  color: var(--sys-accent);
  flex-shrink: 0;
}

.system-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 0.2rem;
}

.system-tagline {
  font-size: 0.75rem;
  color: var(--text-subtle);
  margin: 0;
}

.edition-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.edition-chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.875rem;
  border-radius: 8px;
  border: 1px solid var(--sys-border);
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  user-select: none;
}

.edition-chip:not(.chip-disabled):hover {
  background: rgba(var(--sys-accent-rgb), 0.12);
  border-color: var(--sys-accent);
}

.chip-disabled {
  opacity: 0.45;
  cursor: default;
}

.chip-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-body);
}

.chip-soon {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-faint);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 1px 6px;
}

.chip-arrow {
  font-size: 0.9rem !important;
  color: var(--sys-accent);
}
</style>

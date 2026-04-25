<template>
  <div class="backgrounds-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Backgrounds</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="bg-grid">
        <div
          v-for="bg in backgrounds"
          :key="bg.name"
          class="bg-card"
          @click="openDialog(bg)"
        >
          <div class="bg-card-inner">
            <span class="bg-name">{{ capitalize(bg.name) }}</span>
            <div class="bg-tags">
              <span class="bg-tag" v-if="bg.skill">{{ bg.skill }}</span>
            </div>
          </div>
          <v-icon class="bg-arrow">mdi-chevron-right</v-icon>
        </div>
      </div>
    </div>

    <!-- Popup dialog -->
    <v-dialog v-model="dialog" max-width="600">
      <div class="popup" v-if="selected">
        <div class="popup-header">
          <div>
            <span class="popup-eyebrow">Background</span>
            <h2 class="popup-title">{{ capitalize(selected.name) }}</h2>
          </div>
          <button class="popup-close" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </button>
        </div>
        <p class="popup-flavor" v-if="selected.flavor">{{ selected.flavor }}</p>
        <div class="popup-traits">
          <div class="popup-trait" v-if="selected.abilityScore">
            <span class="trait-label">Ability Scores</span>
            <span class="trait-value">{{ selected.abilityScore }}</span>
          </div>
          <div class="popup-trait" v-if="selected.feat">
            <span class="trait-label">Feat</span>
            <span class="trait-value">{{ selected.feat }}</span>
          </div>
          <div class="popup-trait" v-if="selected.skill">
            <span class="trait-label">Skill Proficiencies</span>
            <span class="trait-value">{{ selected.skill }}</span>
          </div>
          <div class="popup-trait" v-if="selected.tool">
            <span class="trait-label">Tool Proficiency</span>
            <span class="trait-value">{{ selected.tool }}</span>
          </div>
          <div class="popup-trait" v-if="selected.equipment">
            <span class="trait-label">Equipment</span>
            <span class="trait-value">{{ selected.equipment }}</span>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import backgrounds from "@/views/backgrounds.json";

export default {
  methods: {
    capitalize(str) {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    openDialog(bg) {
      this.selected = bg;
      this.dialog = true;
    },
  },
  data() {
    return {
      backgrounds,
      dialog: false,
      selected: null,
    };
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.backgrounds-page {
  min-height: 100vh;
  background: #0e0e1a;
  color: #e2e8f0;
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  width: 100%;
  height: 220px;
  background: linear-gradient(
    135deg,
    rgba(192, 132, 252, 0.15) 0%,
    rgba(14, 14, 26, 0.95) 100%
  );
  border-bottom: 1px solid rgba(192, 132, 252, 0.2);
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(192, 132, 252, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(192, 132, 252, 0.05) 0%,
      transparent 40%
    );
}
.hero-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 2rem 2.5rem;
}
.hero-content {
  max-width: 700px;
}
.hero-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #c084fc;
  margin-bottom: 0.4rem;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0 0 0.4rem;
  line-height: 1.1;
}
.hero-subtitle {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 5rem;
}

/* ── Background grid ────────────────────────────── */
.bg-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

@media (max-width: 640px) {
  .bg-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Background card ────────────────────────────── */
.bg-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #12121f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease,
    transform 0.15s ease;
  gap: 1rem;
}
.bg-card:hover {
  background: rgba(192, 132, 252, 0.08);
  border-color: rgba(192, 132, 252, 0.3);
  transform: translateX(4px);
}
.bg-card:hover .bg-name {
  color: #c084fc;
}
.bg-card:hover .bg-arrow {
  color: #c084fc;
}

.bg-card-inner {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
}

.bg-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #f1f5f9;
  transition: color 0.15s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bg-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.bg-tag {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748b;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.bg-arrow {
  font-size: 1.1rem !important;
  color: #334155;
  flex-shrink: 0;
  transition: color 0.15s ease;
}

/* ── Popup ──────────────────────────────────────── */
.popup {
  background: #12121f;
  border: 1px solid rgba(192, 132, 252, 0.2);
  border-radius: 16px;
  overflow: hidden;
}
.popup-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.popup-eyebrow {
  display: block;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #c084fc;
  margin-bottom: 0.3rem;
}
.popup-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0;
}
.popup-close {
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
}
.popup-close:hover {
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.08);
}
.popup-flavor {
  font-size: 0.88rem;
  color: #64748b;
  font-style: italic;
  line-height: 1.65;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin: 0;
}
.popup-traits {
  padding: 1rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
}
.popup-trait {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 1rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  align-items: start;
}
.popup-trait:last-child {
  border-bottom: none;
}
.trait-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #c084fc;
}
.trait-value {
  font-size: 0.88rem;
  color: #cbd5e1;
  line-height: 1.5;
}

/* ── Mobile ─────────────────────────────────────── */
@media (max-width: 640px) {
  .hero {
    height: 180px;
  }
  .hero-title {
    font-size: 1.75rem;
  }
  .hero-overlay {
    padding: 1.25rem 1.5rem;
  }
  .popup-trait {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }
}
</style>

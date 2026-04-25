<template>
  <div class="feats-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Feats</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
      <!-- Tabs -->
      <div class="tabs-wrap">
        <div class="tabs">
          <button
            class="tab"
            :class="{ active: tab === 'origin' }"
            @click="tab = 'origin'"
          >
            Origin Feats
            <span class="tab-count">{{ origin.length }}</span>
          </button>
          <button
            class="tab"
            :class="{ active: tab === 'general' }"
            @click="tab = 'general'"
          >
            General Feats
            <span class="tab-count">{{ general.length }}</span>
          </button>
          <button
            class="tab"
            :class="{ active: tab === 'fightStyle' }"
            @click="tab = 'fightStyle'"
          >
            Fighting Style
            <span class="tab-count">{{ fightStyle.length }}</span>
          </button>
          <button
            class="tab"
            :class="{ active: tab === 'epic' }"
            @click="tab = 'epic'"
          >
            Epic Boon
            <span class="tab-count">{{ epic.length }}</span>
          </button>
        </div>
      </div>

      <!-- Feat grid -->
      <div class="feat-grid">
        <div
          v-for="feat in currentFeats"
          :key="feat.name"
          class="feat-card"
          @click="openFeat(feat)"
        >
          <div class="feat-card-inner">
            <span class="feat-name">{{ capitalize(feat.name) }}</span>
            <span class="feat-preq" v-if="feat.preq">{{ feat.preq }}</span>
          </div>
          <v-icon class="feat-arrow">mdi-chevron-right</v-icon>
        </div>
      </div>
    </div>

    <!-- Popup -->
    <v-dialog v-model="dialog" max-width="640" scrollable>
      <div class="popup" v-if="selectedFeat">
        <!-- Header -->
        <div class="popup-header">
          <div>
            <span class="popup-eyebrow">{{ tabLabel }}</span>
            <h2 class="popup-title">{{ capitalize(selectedFeat.name) }}</h2>
            <span class="popup-preq" v-if="selectedFeat.preq">
              <v-icon size="12">mdi-lock-outline</v-icon>
              {{ selectedFeat.preq }}
            </span>
          </div>
          <button class="popup-close" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </button>
        </div>

        <!-- Abilities -->
        <div class="popup-abilities">
          <div
            v-for="ability in selectedFeat.abilites"
            :key="ability.aName"
            class="ability-block"
          >
            <p class="ability-text">
              <b class="ability-name" v-if="ability.aName"
                >{{ ability.aName }}
              </b>
              {{ ability.aDesc }}
            </p>
          </div>
        </div>

        <!-- Table if present -->
        <div v-if="selectedFeat.table" class="popup-table-wrap">
          <div
            v-for="(tbl, ti) in selectedFeat.table"
            :key="ti"
            class="table-wrap"
          >
            <table class="feat-table">
              <thead>
                <tr>
                  <th v-for="header in tbl.headers" :key="header">
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, ri) in tbl.rows" :key="ri">
                  <td v-for="(val, key) in row" :key="key">{{ val }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import feats from "@/views/feats.json";

export default {
  computed: {
    origin() {
      return feats.find((f) => f.typ === "origin")?.feats ?? [];
    },
    general() {
      return feats.find((f) => f.typ === "general")?.feats ?? [];
    },
    fightStyle() {
      return feats.find((f) => f.typ === "fightStyle")?.feats ?? [];
    },
    epic() {
      return feats.find((f) => f.typ === "epic")?.feats ?? [];
    },
    currentFeats() {
      return (
        {
          origin: this.origin,
          general: this.general,
          fightStyle: this.fightStyle,
          epic: this.epic,
        }[this.tab] ?? []
      );
    },
    tabLabel() {
      return (
        {
          origin: "Origin Feat",
          general: "General Feat",
          fightStyle: "Fighting Style Feat",
          epic: "Epic Boon Feat",
        }[this.tab] ?? "Feat"
      );
    },
  },

  methods: {
    capitalize(str) {
      if (!str) return "";
      return str
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
    openFeat(feat) {
      this.selectedFeat = feat;
      this.dialog = true;
    },
  },

  data() {
    return {
      tab: "origin",
      feats,
      dialog: false,
      selectedFeat: null,
    };
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.feats-page {
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
  font-size: 0.95rem;
  color: #94a3b8;
  margin: 0;
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
}

/* ── Tabs ───────────────────────────────────────── */
.tabs-wrap {
  overflow-x: auto;
  margin-bottom: 1.5rem;
  padding-bottom: 2px;
}
.tabs {
  display: flex;
  gap: 0.5rem;
  min-width: max-content;
}
.tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 8px 18px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.tab:hover {
  border-color: rgba(192, 132, 252, 0.3);
  color: #c084fc;
  background: rgba(192, 132, 252, 0.06);
}
.tab.active {
  background: rgba(192, 132, 252, 0.15);
  border-color: rgba(192, 132, 252, 0.4);
  color: #c084fc;
}
.tab-count {
  font-size: 0.65rem;
  font-weight: 700;
  background: rgba(192, 132, 252, 0.15);
  color: #c084fc;
  border-radius: 999px;
  padding: 1px 7px;
}
.tab.active .tab-count {
  background: rgba(192, 132, 252, 0.3);
}

/* ── Feat grid ──────────────────────────────────── */
.feat-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
}
@media (max-width: 600px) {
  .feat-grid {
    grid-template-columns: 1fr;
  }
}
.feat-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #12121f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease,
    transform 0.15s ease;
  gap: 0.75rem;
}
.feat-card:hover {
  background: rgba(192, 132, 252, 0.08);
  border-color: rgba(192, 132, 252, 0.3);
  transform: translateX(4px);
}
.feat-card-inner {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.feat-name {
  font-size: 0.88rem;
  font-weight: 600;
  color: #f1f5f9;
  transition: color 0.15s ease;
}
.feat-card:hover .feat-name {
  color: #c084fc;
}
.feat-preq {
  font-size: 0.65rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.feat-arrow {
  font-size: 1rem !important;
  color: #334155;
  flex-shrink: 0;
  transition: color 0.15s ease;
}
.feat-card:hover .feat-arrow {
  color: #c084fc;
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
  margin: 0 0 0.4rem;
}
.popup-preq {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.7rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.07em;
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

/* Abilities */
.popup-abilities {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.ability-block {
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.ability-block:last-child {
  border-bottom: none;
}
.ability-text {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.75;
  margin: 0;
  white-space: pre-wrap;
}
.ability-name {
  color: #e2e8f0;
  font-weight: 700;
}

/* Table */
.popup-table-wrap {
  padding: 0 1.5rem 1.5rem;
}
.table-wrap {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  overflow-x: auto;
}
.feat-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}
.feat-table thead tr {
  background: rgba(192, 132, 252, 0.1);
}
.feat-table th {
  padding: 0.6rem 1rem;
  text-align: left;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c084fc;
}
.feat-table td {
  padding: 0.55rem 1rem;
  color: #cbd5e1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.feat-table tbody tr:last-child td {
  border-bottom: none;
}
.feat-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.02);
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
}
</style>

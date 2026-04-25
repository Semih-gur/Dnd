<template>
  <div class="weapons-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Weapons</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
      <!-- Tabs -->
      <div class="tabs-wrap">
        <div class="tabs">
          <button
            v-for="category in weapons"
            :key="category.type"
            class="tab"
            :class="{ active: tab === category.type }"
            @click="tab = category.type"
          >
            {{ formatName(category.type) }}
          </button>
        </div>
      </div>

      <!-- Table -->
      <div class="table-wrap">
        <table class="weapon-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Damage</th>
              <th>Properties</th>
              <th>Mastery</th>
              <th>Weight</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="weapon in currentItems"
              :key="weapon.name"
              class="weapon-row"
            >
              <td class="weapon-name">{{ weapon.name }}</td>
              <td>
                <span class="damage-badge" v-if="weapon.damage">{{
                  weapon.damage
                }}</span>
              </td>
              <td class="properties-cell">{{ weapon.properties }}</td>
              <td>
                <span class="mastery-badge" v-if="weapon.mastery">{{
                  weapon.mastery
                }}</span>
              </td>
              <td>{{ weapon.weight }}</td>
              <td>{{ weapon.cost }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import weapons from "./weapons.json";

export default {
  data() {
    return {
      tab: weapons[0].type,
      weapons,
    };
  },

  computed: {
    currentItems() {
      return this.weapons.find((w) => w.type === this.tab)?.items ?? [];
    },
  },

  methods: {
    formatName(type) {
      return type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.weapons-page {
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
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* ── Tabs ───────────────────────────────────────── */
.tabs-wrap {
  overflow-x: auto;
  margin-bottom: 1.25rem;
  padding-bottom: 2px;
}
.tabs {
  display: flex;
  gap: 0.35rem;
  min-width: max-content;
}
.tab {
  padding: 6px 16px;
  font-size: 0.78rem;
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

/* ── Table ──────────────────────────────────────── */
.table-wrap {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  overflow-x: auto;
}
.weapon-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.weapon-table thead tr {
  background: rgba(192, 132, 252, 0.1);
}
.weapon-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c084fc;
  white-space: nowrap;
}
.weapon-row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.15s ease;
}
.weapon-row:last-child {
  border-bottom: none;
}
.weapon-row:hover {
  background: rgba(192, 132, 252, 0.05);
}
.weapon-table td {
  padding: 0.65rem 1rem;
  color: #94a3b8;
  vertical-align: middle;
}
.weapon-name {
  color: #f1f5f9 !important;
  font-weight: 500;
  white-space: nowrap;
}
.properties-cell {
  font-size: 0.8rem;
  max-width: 250px;
}

/* Damage badge */
.damage-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(251, 146, 60, 0.1);
  color: #fb923c;
  border: 1px solid rgba(251, 146, 60, 0.3);
  white-space: nowrap;
}

/* Mastery badge */
.mastery-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(192, 132, 252, 0.1);
  color: #c084fc;
  border: 1px solid rgba(192, 132, 252, 0.2);
  white-space: nowrap;
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

<template>
  <div class="armors-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t('armors.title') }}</h1>
          <p class="hero-subtitle">{{ $t('armors.subtitle') }}</p>
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
        <table class="armor-table">
          <thead>
            <tr>
              <th>{{ $t('armors.col.name') }}</th>
              <th>{{ $t('armors.col.ac') }}</th>
              <th>{{ $t('armors.col.str') }}</th>
              <th>{{ $t('armors.col.stealth') }}</th>
              <th>{{ $t('armors.col.weight') }}</th>
              <th>{{ $t('armors.col.cost') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="weapon in currentItems"
              :key="weapon.name"
              class="armor-row"
            >
              <td class="armor-name">{{ $lf(weapon, 'name') }}</td>
              <td>{{ weapon.ac }}</td>
              <td>{{ weapon.strength }}</td>
              <td>
                <span
                  class="stealth-badge"
                  :class="
                    weapon.stealth === 'Disadvantage'
                      ? 'disadvantage'
                      : 'normal'
                  "
                >
                  {{ weapon.stealth === 'Disadvantage' ? $t('armors.disadvantage') : weapon.stealth }}
                </span>
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
import weapons from "./armors.json";

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
.armors-page {
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-body);
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  width: 100%;
  height: 220px;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-rgb), 0.15) 0%,
    rgba(var(--bg-page-rgb), 0.95) 100%
  );
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.2);
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(var(--accent-rgb), 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(var(--accent-rgb), 0.05) 0%,
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
  color: var(--accent);
  margin-bottom: 0.4rem;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.4rem;
  line-height: 1.1;
}
.hero-subtitle {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0;
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 1000px;
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
  border: 1px solid var(--border-light);
  background: transparent;
  color: var(--text-subtle);
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.tab:hover {
  border-color: rgba(var(--accent-rgb), 0.3);
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.06);
}
.tab.active {
  background: rgba(var(--accent-rgb), 0.15);
  border-color: rgba(var(--accent-rgb), 0.4);
  color: var(--accent);
}

/* ── Table ──────────────────────────────────────── */
.table-wrap {
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  overflow-x: auto;
}
.armor-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.armor-table thead tr {
  background: rgba(var(--accent-rgb), 0.1);
}
.armor-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  white-space: nowrap;
}
.armor-row {
  border-bottom: 1px solid var(--border-faint);
  transition: background 0.15s ease;
}
.armor-row:last-child {
  border-bottom: none;
}
.armor-row:hover {
  background: rgba(192, 132, 252, 0.05);
}
.armor-table td {
  padding: 0.65rem 1rem;
  color: var(--text-muted);
  vertical-align: middle;
  white-space: nowrap;
}
.armor-name {
  color: var(--text-heading) !important;
  font-weight: 500;
}

/* Stealth badge */
.stealth-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
}
.stealth-badge.disadvantage {
  background: rgba(248, 113, 113, 0.1);
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.3);
}
.stealth-badge.normal {
  background: rgba(163, 230, 53, 0.1);
  color: #a3e635;
  border: 1px solid rgba(163, 230, 53, 0.3);
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

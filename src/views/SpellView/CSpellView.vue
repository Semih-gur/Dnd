<template>
  <div class="spells-class-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ className }} Spells</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
      <!-- Level tabs -->
      <div class="tabs-wrap">
        <div class="tabs">
          <button
            v-for="level in spellLevels"
            :key="level"
            class="tab"
            :class="{ active: tab === level }"
            @click="tab = level"
          >
            {{ level === "0" ? "Cantrips" : `Level ${level}` }}
          </button>
        </div>
      </div>

      <!-- Spell table -->
      <div class="table-wrap">
        <table class="spell-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>School</th>
              <th>Cast Time</th>
              <th>Range</th>
              <th>Duration</th>
              <th>Components</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="spell in getSpellsForLevel(tab)"
              :key="spell.name"
              class="spell-row"
              @click="goToSpell(spell)"
            >
              <td>
                <span class="spell-name">{{ formatName(spell.name) }}</span>
              </td>
              <td>
                <span class="school-badge">{{ spell.school }}</span>
              </td>
              <td>{{ spell.casting_time }}</td>
              <td>{{ spell.range }}</td>
              <td>{{ spell.duration }}</td>
              <td>{{ spell.components }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import allSpells from "@/views/SpellView/allSpells.json";

export default {
  data() {
    return {
      tab: "0",
      allSpells,
    };
  },

  mounted() {
    // Set tab to first available level for this class on load
    if (this.spellLevels.length) {
      this.tab = this.spellLevels[0];
    }
  },

  computed: {
    className() {
      const raw = this.$route.params.className || "";
      return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
    },
    spellLevels() {
      return this.allSpells
        .filter((levelEntry) =>
          levelEntry.spells.some((spell) =>
            spell.class.includes(this.className),
          ),
        )
        .map((levelEntry) => levelEntry.level);
    },
    totalSpells() {
      return this.spellLevels.reduce((acc, level) => {
        return acc + this.getSpellsForLevel(level).length;
      }, 0);
    },
  },

  watch: {
    className() {
      this.tab = this.spellLevels[0] ?? "0";
    },
  },

  methods: {
    getSpellsForLevel(level) {
      const levelEntry = this.allSpells.find((e) => e.level === level);
      if (!levelEntry) return [];
      return levelEntry.spells.filter((spell) =>
        spell.class.includes(this.className),
      );
    },
    formatName(name) {
      return name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    },
    goToSpell(spell) {
      router.push(
        "/wiki/spells/" + this.$route.params.className + "/" + spell.name,
      );
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.spells-class-page {
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
.spell-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.spell-table thead tr {
  background: rgba(192, 132, 252, 0.1);
}
.spell-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c084fc;
  white-space: nowrap;
}
.spell-row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.15s ease;
  cursor: pointer;
}
.spell-row:last-child {
  border-bottom: none;
}
.spell-row:hover {
  background: rgba(192, 132, 252, 0.05);
}
.spell-table td {
  padding: 0.65rem 1rem;
  color: #94a3b8;
  vertical-align: middle;
  white-space: nowrap;
}
.spell-name {
  color: #f1f5f9;
  font-weight: 500;
}
.spell-row:hover .spell-name {
  color: #c084fc;
}

.school-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(192, 132, 252, 0.1);
  color: #a78bfa;
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

<template>
  <div class="spells-class-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ className }} {{ $t('spells.titleSuffix') }}</h1>
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
            {{ level === "0" ? $t('spells.cantrips') : $t('spells.levelLabel', { n: level }) }}
          </button>
        </div>
      </div>

      <!-- Spell table -->
      <div class="table-wrap">
        <table class="spell-table">
          <thead>
            <tr>
              <th
                v-for="col in columns"
                :key="col.key"
                :class="[
                  'col-' + col.key,
                  { sortable: true, sorted: sortKey === col.key },
                ]"
                @click="setSort(col.key)"
              >
                <div class="th-inner">
                  {{ col.label }}
                  <span class="sort-icon">
                    <span v-if="sortKey === col.key">
                      {{ sortDir === "asc" ? "↑" : "↓" }}
                    </span>
                    <span v-else class="sort-idle">↕</span>
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="spell in sortedSpells"
              :key="spell.name"
              class="spell-row"
              @click="goToSpell(spell)"
            >
              <td class="col-name">
                <span class="spell-name">{{ formatName($lf(spell, 'name')) }}</span>
              </td>
              <td class="col-school">
                <span class="school-badge">{{ $lf(spell, 'school').trim() }}</span>
              </td>
              <td class="col-casting_time">
                <span class="truncate">{{ translateValue(spell.casting_time) }}</span>
              </td>
              <td class="col-range">{{ translateValue(spell.range) }}</td>
              <td class="col-duration">
                <span class="truncate">{{ translateValue(spell.duration) }}</span>
              </td>
              <td class="col-components">
                <span class="truncate">{{ $lf(spell, 'components') }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    const allSpells = this.$route.path.startsWith("/dnd/5e/")
      ? require("@/views/dnd5e/SpellView/allSpells.json")
      : require("@/views/SpellView/allSpells.json");
    return {
      tab: "0",
      allSpells,
      sortKey: "name",
      sortDir: "asc",
    };
  },

  mounted() {
    if (this.spellLevels.length) {
      this.tab = this.spellLevels[0];
    }
  },

  computed: {
    columns() {
      return [
        { key: "name",         label: this.$t('spells.col.name') },
        { key: "school",       label: this.$t('spells.col.school') },
        { key: "casting_time", label: this.$t('spells.col.castingTime') },
        { key: "range",        label: this.$t('spells.col.range') },
        { key: "duration",     label: this.$t('spells.col.duration') },
        { key: "components",   label: this.$t('spells.col.components') },
      ];
    },
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
    sortedSpells() {
      const spells = [...this.getSpellsForLevel(this.tab)];
      return spells.sort((a, b) => {
        const aVal = (a[this.sortKey] ?? "").toString().trim().toLowerCase();
        const bVal = (b[this.sortKey] ?? "").toString().trim().toLowerCase();
        if (aVal < bVal) return this.sortDir === "asc" ? -1 : 1;
        if (aVal > bVal) return this.sortDir === "asc" ? 1 : -1;
        return 0;
      });
    },
  },

  watch: {
    className() {
      this.tab = this.spellLevels[0] ?? "0";
    },
    tab() {
      // Reset sort when switching tabs
      this.sortKey = "name";
      this.sortDir = "asc";
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
      if (!name) return "";
      if (!name.includes("_")) return name.charAt(0).toUpperCase() + name.slice(1);
      return name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    },
    translateValue(val) {
      if (!val || this.$i18n.locale !== "tr") return val;
      return val
        .replace(/Bonus Action/gi, "Bonus Aksiyon")
        .replace(/\bAction\b/gi, "Aksiyon")
        .replace(/\bReaction\b/gi, "Tepki")
        .replace(/\bSelf\b/gi, "Kendisi")
        .replace(/\bTouch\b/gi, "Dokunma")
        .replace(/\bInstantaneous\b/gi, "Anlık")
        .replace(/\bConcentration\b/gi, "Konsantrasyon")
        .replace(/\bUp to\b/gi, "En fazla")
        .replace(/\buntil dispelled\b/gi, "Dağıtılana kadar")
        .replace(/\bSight\b/gi, "Görüş")
        .replace(/\bUnlimited\b/gi, "Sınırsız")
        .replace(/\b(\d+) minutes?\b/gi, "$1 dakika")
        .replace(/\b(\d+) hours?\b/gi, "$1 saat")
        .replace(/\b(\d+) rounds?\b/gi, "$1 tur")
        .replace(/\b(\d+) days?\b/gi, "$1 gün")
        .replace(/\bfeet\b/gi, "fit")
        .replace(/\bfoot\b/gi, "fit")
        .replace(/(\d)\s*ft\b/gi, "$1 fit")
        .replace(/\bft\b/gi, "fit")
        .replace(/\bmiles?\b/gi, "mil");
    },
    goToSpell(spell) {
      router.push(
        (this.$route.path.startsWith("/dnd/5e/") ? "/dnd/5e/wiki/spells/" : "/dnd/2024/wiki/spells/") + this.$route.params.className + "/" + spell.name,
      );
    },
    setSort(key) {
      if (this.sortKey === key) {
        this.sortDir = this.sortDir === "asc" ? "desc" : "asc";
      } else {
        this.sortKey = key;
        this.sortDir = "asc";
      }
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.spells-class-page {
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
  font-size: 0.85rem;
  color: var(--text-subtle);
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
.spell-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  table-layout: fixed;
}

/* Column widths */
.col-name {
  width: 18%;
}
.col-school {
  width: 13%;
}
.col-casting_time {
  width: 18%;
}
.col-range {
  width: 10%;
}
.col-duration {
  width: 18%;
}
.col-components {
  width: 23%;
}

.spell-table thead tr {
  background: rgba(var(--accent-rgb), 0.1);
}
.spell-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;
}
.spell-table th:hover {
  background: rgba(var(--accent-rgb), 0.18);
}
.spell-table th.sorted {
  background: rgba(var(--accent-rgb), 0.2);
}

.th-inner {
  display: flex;
  align-items: center;
  gap: 6px;
}
.sort-icon {
  font-size: 0.7rem;
  opacity: 0.8;
}
.sort-idle {
  opacity: 0.3;
}

.spell-row {
  border-bottom: 1px solid var(--border-faint);
  transition: background 0.15s ease;
  cursor: pointer;
}
.spell-row:last-child {
  border-bottom: none;
}
.spell-row:hover {
  background: rgba(var(--accent-rgb), 0.05);
}

.spell-table td {
  padding: 0.65rem 1rem;
  color: var(--text-muted);
  vertical-align: middle;
  overflow: hidden;
}

/* Truncate long text in cells */
.truncate {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.spell-name {
  color: var(--text-heading);
  font-weight: 500;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.spell-row:hover .spell-name {
  color: var(--accent);
}

.school-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(var(--accent-rgb), 0.1);
  color: var(--accent);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
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

  .page-content {
    padding: 1rem 0.5rem 3rem;
  }

  /* Hide least-essential columns on mobile */
  .col-range,
  .col-components {
    display: none;
  }

  .spell-table {
    table-layout: auto;
    font-size: 0.78rem;
  }

  .spell-table th,
  .spell-table td {
    padding: 0.5rem 0.6rem;
  }

  .col-name { width: 32%; }
  .col-school { width: 22%; }
  .col-casting_time { width: 26%; }
  .col-duration { width: 20%; }

  .school-badge {
    font-size: 0.62rem;
    padding: 2px 5px;
  }
}
</style>

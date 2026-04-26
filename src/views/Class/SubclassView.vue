<template>
  <div class="subclass-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ subclassName }}</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="features">
        <div
          v-for="subClass in subClass.sub"
          :key="subClass.lvl"
          class="feature-block"
        >
          <!-- Level badge -->
          <div class="level-badge-row">
            <span class="level-badge">{{ subClass.lvl }}</span>
            <div class="level-line"></div>
          </div>

          <!-- Feature card -->
          <div class="feature-card">
            <h2 class="feature-title">{{ subClass.title }}</h2>
            <span
              class="feature-body"
              style="white-space: pre-wrap"
              v-html="subClass.desc"
            ></span>

            <!-- Spell table -->
            <div v-if="subClass.spell != null" class="spell-tables">
              <div
                class="table-wrap"
                v-for="items in subClass.spell"
                :key="items.level"
              >
                <v-table>
                  <thead>
                    <th v-for="item in items" :key="item.level">
                      {{ item.element }}
                    </th>
                    <tr>
                      <th class="text-center">Level</th>
                      <th class="text-center">Prepared Spells</th>
                    </tr>
                  </thead>
                  <tbody>
                    <p></p>
                    <tr v-for="item in items" :key="item.level">
                      <td class="tableRow">{{ item.level }}</td>
                      <td class="tableRow">{{ item.spells }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import subClasses from "./subClasses.json";

export default {
  computed: {
    subClass: function () {
      for (let i = 0; i < this.class.length; i++) {
        if (this.class[i].name == this.url) {
          return this.class[i];
        }
      }
      return "nothing";
    },

    // Grabs the subclass name from the last URL segment e.g. "wild_heart" → "Wild Heart"
    subclassName() {
      return this.url
        .split("_")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    },

    // Grabs the class name from the URL segment before the subclass e.g. /wiki/classes/barbarian/wild_heart → "Barbarian"
    className() {
      const segments = this.$route.href.split("/").filter(Boolean);
      const classSegment = segments[segments.length - 2] ?? "";
      return classSegment
        .split("_")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),
      class: subClasses,
    };
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.subclass-page {
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
  margin: 0;
  line-height: 1.1;
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 5rem;
}

/* ── Feature blocks ─────────────────────────────── */
.features {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.feature-block {
  position: relative;
}

/* Level badge row */
.level-badge-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.level-badge {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.12);
  border: 1px solid rgba(var(--accent-rgb), 0.3);
  padding: 4px 14px;
  border-radius: 999px;
  white-space: nowrap;
}
.level-line {
  flex: 1;
  height: 1px;
  background: var(--border-subtle);
}

/* Feature card */
.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.2);
}
.feature-body {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.75;
}

/* ── Spell tables ───────────────────────────────── */
.spell-tables {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.table-wrap {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
}
.table-wrap :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.table-wrap :deep(thead tr) {
  background: rgba(var(--accent-rgb), 0.1);
}
.table-wrap :deep(th) {
  padding: 0.65rem 1.25rem;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
}
.table-wrap :deep(td) {
  padding: 0.55rem 1.25rem;
  text-align: center;
  color: var(--text-muted2);
  border-bottom: 1px solid var(--border-faint);
}
.table-wrap :deep(tbody tr:last-child td) {
  border-bottom: none;
}
.table-wrap :deep(tbody tr:hover) {
  background: var(--hover-bg);
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
  .feature-card {
    padding: 1rem;
  }
}
</style>

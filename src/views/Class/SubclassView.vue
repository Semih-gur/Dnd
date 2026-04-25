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
  color: #c084fc;
  background: rgba(192, 132, 252, 0.12);
  border: 1px solid rgba(192, 132, 252, 0.3);
  padding: 4px 14px;
  border-radius: 999px;
  white-space: nowrap;
}
.level-line {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
}

/* Feature card */
.feature-card {
  background: #12121f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(192, 132, 252, 0.2);
}
.feature-body {
  font-size: 0.88rem;
  color: #94a3b8;
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
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.table-wrap :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.table-wrap :deep(thead tr) {
  background: rgba(192, 132, 252, 0.1);
}
.table-wrap :deep(th) {
  padding: 0.65rem 1.25rem;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c084fc;
}
.table-wrap :deep(td) {
  padding: 0.55rem 1.25rem;
  text-align: center;
  color: #cbd5e1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.table-wrap :deep(tbody tr:last-child td) {
  border-bottom: none;
}
.table-wrap :deep(tbody tr:hover) {
  background: rgba(255, 255, 255, 0.03);
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

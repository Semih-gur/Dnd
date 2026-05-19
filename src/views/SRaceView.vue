<template>
  <div class="race-page" v-if="compRace !== 'nothing'">
    <div v-for="race in compRace.race" :key="race.name">
      <!-- Hero -->
      <div class="hero">
        <div class="hero-overlay">
          <div class="hero-content">
            <span class="hero-eyebrow">{{ $t('race.eyebrow') }}</span>
            <h1 class="hero-title">{{ $lf(race, 'name') }}</h1>
            <div class="hero-badges">
              <span class="badge">{{ race.type }}</span>
              <span class="badge">{{ race.size }}</span>
              <span class="badge badge-purple">{{ $t('race.speed', { value: race.speed }) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="page-content">
        <!-- Flavor text -->
        <div class="section">
          <h2 class="section-title">{{ $t('race.overview') }}</h2>
          <p
            class="section-text"
            style="white-space: pre-wrap"
            v-html="$lf(race, 'desc')"
          ></p>
        </div>

        <!-- Traits -->
        <div class="section">
          <h2 class="section-title">{{ $t('race.traitsTitle', { name: $lf(race, 'name') }) }}</h2>
          <div class="traits-list">
            <div
              v-for="trait in race.feats"
              :key="trait.name"
              class="trait-block"
            >
              <div class="trait-header">
                <span class="trait-name">{{ $lf(trait, 'name') }}</span>
              </div>
              <p class="trait-desc">{{ $lf(trait, 'desc') }}</p>

              <!-- Table if present -->
              <div v-if="trait.table" class="table-wrap">
                <table class="trait-table">
                  <thead>
                    <tr>
                      <th v-for="(_, key) in trait.table[0][0]" :key="key">
                        {{ key.charAt(0).toUpperCase() + key.slice(1) }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, index) in trait.table[0]" :key="index">
                      <td v-for="(val, key) in row" :key="key">{{ val }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div class="race-page" v-else>
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">{{ $t('race.eyebrow') }}</span>
          <h1 class="hero-title">{{ $t('race.notFound') }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import races from "./races.json";

export default {
  computed: {
    compRace() {
      for (let i = 0; i < this.races.length; i++) {
        if (this.races[i].name === this.url) {
          return this.races[i];
        }
      }
      return "nothing";
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),
      races,
    };
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.race-page {
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
  margin: 0 0 0.75rem;
  line-height: 1.1;
}
.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--border-light);
  color: var(--text-muted);
  border: 1px solid var(--border-strong);
}
.badge-purple {
  background: rgba(var(--accent-rgb), 0.12);
  color: var(--accent);
  border-color: rgba(var(--accent-rgb), 0.3);
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 5rem;
}

/* ── Section ────────────────────────────────────── */
.section {
  margin-bottom: 2.5rem;
}
.section-title {
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.2);
}
.section-text {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin: 0;
}

/* ── Traits ─────────────────────────────────────── */
.traits-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.trait-block {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 1.25rem;
}
.trait-header {
  margin-bottom: 0.5rem;
}
.trait-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-heading);
}
.trait-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
}

/* ── Tables ─────────────────────────────────────── */
.table-wrap {
  margin-top: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  overflow-x: auto;
}
.trait-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}
.trait-table thead tr {
  background: rgba(var(--accent-rgb), 0.1);
}
.trait-table th {
  padding: 0.6rem 1rem;
  text-align: left;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  white-space: nowrap;
}
.trait-table td {
  padding: 0.55rem 1rem;
  color: var(--text-muted2);
  border-bottom: 1px solid var(--border-faint);
  vertical-align: top;
}
.trait-table tbody tr:last-child td {
  border-bottom: none;
}
.trait-table tbody tr:hover {
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
}
</style>

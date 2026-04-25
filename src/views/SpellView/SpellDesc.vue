<template>
  <div class="spell-detail-page">
    <!-- Hero -->
    <div class="hero" v-if="spell">
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">{{ spell.school }}</span>
          <h1 class="hero-title">{{ formatName(spell.name) }}</h1>
          <div class="hero-badges">
            <span class="badge">{{ levelLabel }}</span>
            <span
              v-for="cls in spell.class"
              :key="cls"
              class="badge badge-class"
              >{{ cls }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Not found hero -->
    <div class="hero" v-else>
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Spells</span>
          <h1 class="hero-title">Spell Not Found</h1>
          <p class="hero-subtitle">
            No spell matching "{{ spellName }}" could be found.
          </p>
        </div>
      </div>
    </div>

    <!-- Spell content -->
    <div class="page-content" v-if="spell">
      <!-- Stat pills -->
      <div class="stats-row">
        <div class="stat-pill">
          <span class="stat-label">Cast Time</span>
          <span class="stat-value">{{ spell.casting_time }}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Range</span>
          <span class="stat-value">{{ spell.range }}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Duration</span>
          <span class="stat-value">{{ spell.duration }}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Components</span>
          <span class="stat-value">{{ spell.components }}</span>
        </div>
      </div>

      <!-- Effect -->
      <div class="section">
        <h2 class="section-title">Effect</h2>
        <p class="section-text" style="white-space: pre-wrap">
          {{ spell.effect }}
        </p>
      </div>

      <!-- Higher levels -->
      <div class="section" v-if="spell.upgrade">
        <h2 class="section-title">At Higher Levels</h2>
        <p class="section-text upgrade">{{ spell.upgrade }}</p>
      </div>
    </div>

    <!-- Not found content -->
    <div class="page-content" v-else>
      <div class="not-found-wrap">
        <v-icon class="not-found-icon">mdi-auto-fix</v-icon>
        <p class="not-found-title">Spell not found</p>
        <p class="not-found-sub">
          Check the spell name in the URL matches your JSON exactly.
        </p>
        <button class="not-found-btn" @click="$router.push('/wiki/spells')">
          Back to Spells
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import allSpells from "@/views/SpellView/allSpells.json";

export default {
  computed: {
    spellName() {
      return this.$route.params.spellName || "";
    },
    spell() {
      for (const levelEntry of allSpells) {
        const found = levelEntry.spells.find((s) => s.name === this.spellName);
        if (found) return found;
      }
      return null;
    },
    levelLabel() {
      for (const levelEntry of allSpells) {
        const found = levelEntry.spells.find((s) => s.name === this.spellName);
        if (found) {
          return levelEntry.level === "0"
            ? "Cantrip"
            : `Level ${levelEntry.level}`;
        }
      }
      return "";
    },
  },
  methods: {
    formatName(name) {
      if (!name) return "";
      return name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.spell-detail-page {
  min-height: 100vh;
  background: #0e0e1a;
  color: #e2e8f0;
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  width: 100%;
  height: 260px;
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
      rgba(192, 132, 252, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(192, 132, 252, 0.06) 0%,
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
  font-size: 2.8rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0 0 0.75rem;
  line-height: 1.1;
}
.hero-subtitle {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
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
  background: rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.badge-class {
  background: rgba(192, 132, 252, 0.12);
  color: #c084fc;
  border-color: rgba(192, 132, 252, 0.3);
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 760px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 5rem;
}

/* ── Stat pills ─────────────────────────────────── */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-bottom: 2rem;
}
@media (max-width: 640px) {
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
.stat-pill {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: #12121f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 0.85rem 1rem;
}
.stat-label {
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #c084fc;
}
.stat-value {
  font-size: 0.88rem;
  font-weight: 600;
  color: #e2e8f0;
  line-height: 1.4;
}

/* ── Sections ───────────────────────────────────── */
.section {
  background: #12121f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.section-title {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #c084fc;
  margin: 0 0 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(192, 132, 252, 0.15);
}
.section-text {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.8;
  margin: 0;
}
.section-text.upgrade {
  color: #a78bfa;
  font-style: italic;
}

/* ── Not found ──────────────────────────────────── */
.not-found-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  text-align: center;
  gap: 0.75rem;
}
.not-found-icon {
  font-size: 3rem !important;
  color: #334155;
  margin-bottom: 0.5rem;
}
.not-found-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0;
}
.not-found-sub {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
}
.not-found-btn {
  margin-top: 1rem;
  padding: 8px 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  border-radius: 999px;
  border: 1px solid rgba(192, 132, 252, 0.3);
  background: rgba(192, 132, 252, 0.1);
  color: #c084fc;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.not-found-btn:hover {
  background: rgba(192, 132, 252, 0.2);
  border-color: #c084fc;
}

/* ── Mobile ─────────────────────────────────────── */
@media (max-width: 640px) {
  .hero {
    height: 200px;
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-overlay {
    padding: 1.25rem 1.5rem;
  }
}
</style>

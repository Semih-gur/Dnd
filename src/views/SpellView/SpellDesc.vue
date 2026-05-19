<template>
  <div class="spell-detail-page">
    <!-- Hero -->
    <div class="hero" v-if="spell">
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">{{ $lf(spell, 'school').trim() }}</span>
          <h1 class="hero-title">{{ formatName($lf(spell, 'name')) }}</h1>
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
          <span class="stat-label">{{ $t('spells.col.castingTime') }}</span>
          <span class="stat-value">{{ translateValue(spell.casting_time) }}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">{{ $t('spells.col.range') }}</span>
          <span class="stat-value">{{ translateValue(spell.range) }}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">{{ $t('spells.col.duration') }}</span>
          <span class="stat-value">{{ translateValue(spell.duration) }}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">{{ $t('spells.col.components') }}</span>
          <span class="stat-value">{{ $lf(spell, 'components') }}</span>
        </div>
      </div>

      <!-- Effect -->
      <div class="section">
        <h2 class="section-title">{{ $t('spells.effect') }}</h2>
        <p class="section-text" style="white-space: pre-wrap">
          {{ $lf(spell, 'effect') }}
        </p>
      </div>

      <!-- Higher levels -->
      <div class="section" v-if="spell.upgrade">
        <h2 class="section-title">{{ $t('spells.atHigherLevels') }}</h2>
        <p class="section-text upgrade">{{ $lf(spell, 'upgrade') }}</p>
      </div>
    </div>

    <!-- Not found content -->
    <div class="page-content" v-else>
      <div class="not-found-wrap">
        <v-icon class="not-found-icon">mdi-auto-fix</v-icon>
        <p class="not-found-title">{{ $t('spells.notFound') }}</p>
        <p class="not-found-sub">
          Check the spell name in the URL matches your JSON exactly.
        </p>
        <button class="not-found-btn" @click="$router.push('/wiki/spells')">
          {{ $t('spells.backToSpells') }}
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
            ? this.$t('spells.cantrip')
            : this.$t('spells.levelLabel', { n: levelEntry.level });
        }
      }
      return "";
    },
  },
  methods: {
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
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.spell-detail-page {
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-body);
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  width: 100%;
  height: 260px;
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
      rgba(var(--accent-rgb), 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(var(--accent-rgb), 0.06) 0%,
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
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.75rem;
  line-height: 1.1;
}
.hero-subtitle {
  font-size: 0.9rem;
  color: var(--text-subtle);
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
  background: var(--border-light);
  color: var(--text-muted);
  border: 1px solid var(--border-strong);
}
.badge-class {
  background: rgba(var(--accent-rgb), 0.12);
  color: var(--accent);
  border-color: rgba(var(--accent-rgb), 0.3);
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
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 0.85rem 1rem;
}
.stat-label {
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
}
.stat-value {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-body);
  line-height: 1.4;
}

/* ── Sections ───────────────────────────────────── */
.section {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.section-title {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin: 0 0 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.15);
}
.section-text {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin: 0;
}
.section-text.upgrade {
  color: var(--accent);
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
  color: var(--text-faint);
  margin-bottom: 0.5rem;
}
.not-found-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0;
}
.not-found-sub {
  font-size: 0.85rem;
  color: var(--text-subtle);
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
  border: 1px solid rgba(var(--accent-rgb), 0.3);
  background: rgba(var(--accent-rgb), 0.1);
  color: var(--accent);
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.not-found-btn:hover {
  background: rgba(var(--accent-rgb), 0.2);
  border-color: var(--accent);
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

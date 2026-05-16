<template>
  <div class="spells-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t('spells.title') }}</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="spells-grid">
        <div
          v-for="cspell in classes"
          :key="cspell.id"
          class="spell-card"
          @click="goTo(cspell)"
        >
          <div class="card-image-wrap">
            <img :src="cspell.art" :alt="cspell.label" class="card-img" />
            <div class="card-gradient-overlay"></div>
          </div>
          <div class="card-body">
            <h2 class="card-title">{{ cspell.label }}</h2>
            <p class="card-desc">{{ cspell.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

const spellArts = {
  bard:     require("@/assets/classes/bard.png"),
  cleric:   require("@/assets/classes/cleric.png"),
  druid:    require("@/assets/classes/druid.png"),
  paladin:  require("@/assets/classes/paladin.png"),
  ranger:   require("@/assets/classes/ranger.png"),
  sorcerer: require("@/assets/classes/sorcerer.png"),
  warlock:  require("@/assets/classes/warlock.png"),
  wizard:   require("@/assets/classes/wizard.png"),
};

export default {
  methods: {
    goTo(item) {
      router.push("/wiki/spells/" + item.routeKey);
    },
  },
  computed: {
    classes() {
      return this.$tm("spells.spellClasses").map((c) => ({
        ...c,
        art: spellArts[c.routeKey],
      }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.spells-page {
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* ── Grid ───────────────────────────────────────── */
.spells-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
@media (max-width: 1280px) {
  .spells-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .spells-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .spells-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Card ───────────────────────────────────────── */
.spell-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
  box-shadow: 0 2px 12px var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.spell-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px var(--shadow-card-hover);
}

/* Image */
.card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: visible;
  flex-shrink: 0;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}
.spell-card:hover .card-img {
  transform: scale(1.05);
}

/* Gradient bleed */
.card-gradient-overlay {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 55%;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(var(--bg-card-rgb), 0.5) 40%,
    rgba(var(--bg-card-rgb), 0.92) 75%,
    var(--bg-card) 100%
  );
}

/* Card body */
.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0 1rem 1rem;
  margin-top: -2.5rem;
  position: relative;
  z-index: 1;
  flex: 1;
}
.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: var(--text-heading);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
}
.card-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.55;
  margin: 0;
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

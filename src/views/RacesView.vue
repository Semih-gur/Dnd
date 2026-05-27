<template>
  <div class="species-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t('species.title') }}</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
    <div class="species-grid">
      <div
        v-for="s in species"
        :key="s.id"
        class="species-card"
        @click="goTo(s)"
      >
        <div class="card-image-wrap">
          <div class="card-img-clip">
            <img :src="getImage(s.image)" :alt="s.label" class="card-img" />
          </div>
          <div class="card-gradient-overlay"></div>
        </div>
        <div class="card-body">
          <h2 class="card-title">{{ s.label }}</h2>
          <p class="card-desc">{{ s.desc }}</p>
          <div class="card-bonus">
            <span class="bonus-label">{{ $t('species.racialBonus') }}</span>
            <span class="bonus-value">{{ s.bonus }}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    goTo(item) {
      router.push("/wiki/species/" + item.routeKey);
    },
    getImage(filename) {
      if (!filename) return null;
      try {
        return require(`../assets/races/${filename}`);
      } catch {
        return null;
      }
    },
  },
  computed: {
    species() {
      return this.$tm("species.list");
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.species-page {
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
.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.1;
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.species-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

@media (max-width: 1280px) {
  .species-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .species-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .species-grid {
    grid-template-columns: 1fr;
  }
}

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

/* ── Card ───────────────────────────────────────── */
.species-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
  box-shadow: 0 2px 12px var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.species-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px var(--shadow-card-hover);
}

/* ── Image ──────────────────────────────────────── */
.card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: visible;
  flex-shrink: 0;
}

/* Clips the zoom so it doesn't spill out */
.card-img-clip {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}
.species-card:hover .card-img {
  transform: scale(1.05);
}

/* ── Gradient bleed ─────────────────────────────── */
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

/* ── Card body ──────────────────────────────────── */
.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0 1rem 1rem;
  margin-top: -3.5rem;
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
  color: var(--text-muted2);
  line-height: 1.55;
  margin: 0;
  flex: 1;
}

/* ── Bonus row ──────────────────────────────────── */
.card-bonus {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 0.6rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border-light);
}
.bonus-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-subtle);
}
.bonus-value {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
}
</style>

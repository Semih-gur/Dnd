<template>
  <div class="wiki-home">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ wikiTitle }}</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="wiki-grid">
        <div
          v-for="section in sections"
          :key="section.path"
          class="wiki-card"
          @click="goTo(section.path)"
        >
          <div class="card-image-wrap">
            <div class="card-img-clip">
              <img :src="section.art" :alt="section.label" class="card-img" />
            </div>
            <div class="card-gradient-overlay"></div>
          </div>
          <div class="card-body">
            <h2 class="card-title">{{ section.label }}</h2>
            <p class="card-desc">{{ section.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

const artMap = {
  classes: require("../assets/wikiPage/class.svg"),
  species: require("../assets/wikiPage/species.svg"),
  spells: require("../assets/wikiPage/spells.svg"),
  backgrounds: require("../assets/wikiPage/backgrounds.svg"),
  feats: require("../assets/wikiPage/feats.svg"),
  items: require("../assets/wikiPage/items.svg"),
  conditions: require("../assets/wikiPage/conditions.svg"),
};

export default {
  methods: {
    goTo(page) {
      const prefix = this.$route.path.startsWith("/dnd/5e/")
        ? "/dnd/5e/wiki/"
        : "/dnd/2024/wiki/";
      router.push(prefix + page);
    },
  },
  computed: {
    wikiTitle() {
      return this.$route.path.startsWith("/dnd/5e/")
        ? "D&D 5e Wiki"
        : this.$t("wikiHome.title");
    },
    sections() {
      return this.$tm("wikiHome.sections").map((s) => ({
        ...s,
        art: artMap[s.path],
      }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.wiki-home {
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
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* ── Grid ───────────────────────────────────────── */
.wiki-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
@media (max-width: 900px) {
  .wiki-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .wiki-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Card ───────────────────────────────────────── */
.wiki-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
  box-shadow: 0 2px 12px var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.wiki-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px var(--shadow-card-hover);
}

/* Image */
.card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: visible;
  flex-shrink: 0;
}
.card-img-clip {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}
.wiki-card:hover .card-img {
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
  margin-top: -2rem;
  position: relative;
  z-index: 1;
  flex: 1;
}
.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  color: var(--text-heading);
}
.card-desc {
  font-size: 0.8rem;
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

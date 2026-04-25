<template>
  <div class="home-page">
    <!-- Hero section -->
    <div class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <span class="hero-eyebrow">Welcome to</span>
        <h1 class="hero-title">Beholder's Tavern</h1>
        <p class="hero-subtitle">
          Your complete companion for Dungeons & Dragons 2024. Explore classes,
          species, spells, backgrounds and more — everything you need to craft
          your perfect adventure.
        </p>
      </div>
    </div>

    <!-- Feature cards -->
    <div class="features-section">
      <div class="features-grid">
        <div class="feature-card" @click="goWiki()">
          <div class="feature-card-inner">
            <v-img
              src="../assets/wiki.png"
              alt="Wiki"
              class="feature-img"
              cover
            ></v-img>
          </div>
          <div class="feature-body">
            <v-icon class="feature-icon">mdi-book-open-variant</v-icon>
            <h2 class="feature-title">Wiki</h2>
            <p class="feature-desc">
              Dive into our comprehensive wiki covering every class, species,
              spell, feat, background and item in D&D 2024.
            </p>
            <span class="feature-link"
              >Explore Wiki <v-icon size="14">mdi-arrow-right</v-icon></span
            >
          </div>
        </div>

        <div class="feature-card" @click="goChar()">
          <div class="feature-card-inner">
            <v-img
              src="../assets/cCreator.png"
              alt="Character Creator"
              class="feature-img"
              cover
            ></v-img>
          </div>
          <div class="feature-body">
            <v-icon class="feature-icon">mdi-account-plus</v-icon>
            <h2 class="feature-title">Character Creator</h2>
            <p class="feature-desc">
              Build and customise your character step by step. Choose your
              class, species, background and more with our guided creator.
            </p>
            <span class="feature-link"
              >Start Building <v-icon size="14">mdi-arrow-right</v-icon></span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Quick links -->
    <div class="quick-section">
      <h2 class="quick-title">Quick Access</h2>
      <div class="quick-grid">
        <div
          v-for="link in quickLinks"
          :key="link.label"
          class="quick-card"
          @click="$router.push(link.path)"
        >
          <v-icon class="quick-icon">{{ link.icon }}</v-icon>
          <span class="quick-label">{{ link.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    goWiki() {
      router.push("/wiki");
    },
    goChar() {
      router.push("/ccreator");
    },
  },
  data() {
    return {
      quickLinks: [
        { label: "Classes", icon: "mdi-sword-cross", path: "/wiki/classes" },
        { label: "Species", icon: "mdi-account", path: "/wiki/species" },
        { label: "Spells", icon: "mdi-auto-fix", path: "/wiki/spells" },
        {
          label: "Backgrounds",
          icon: "mdi-map-marker-radius",
          path: "/wiki/backgrounds",
        },
        {
          label: "Feats",
          icon: "mdi-star-circle-outline",
          path: "/wiki/feats",
        },
        { label: "Items", icon: "mdi-bag-personal", path: "/wiki/items" },
      ],
    };
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.home-page {
  min-height: 100vh;
  background: #0e0e1a;
  color: #e2e8f0;
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem 4rem;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      ellipse at 50% 0%,
      rgba(192, 132, 252, 0.18) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(192, 132, 252, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 60%,
      rgba(139, 92, 246, 0.06) 0%,
      transparent 40%
    );
}
.hero-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(192, 132, 252, 0.06) 1px,
    transparent 1px
  );
  background-size: 40px 40px;
}
.hero-content {
  position: relative;
  max-width: 680px;
}
.hero-eyebrow {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #c084fc;
  margin-bottom: 0.75rem;
}
.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0 0 1.25rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.hero-subtitle {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.75;
  margin: 0 0 2rem;
}

/* ── Feature cards ──────────────────────────────── */
.features-section {
  max-width: 900px;
  margin: -80px auto 0; /* pulls cards up into the hero */
  padding: 0 1.5rem 4rem;
  position: relative;
  z-index: 1; /* keeps cards above the hero background */
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 2.5rem;
  }
}

.feature-card {
  background: #12121f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  border-color: rgba(192, 132, 252, 0.2);
}

.feature-card-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* was 16/7, give images more room */
  overflow: hidden;
}
.feature-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}
.feature-card:hover .feature-img {
  transform: scale(1.05);
}
.feature-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(to bottom, transparent, #12121f);
}

.feature-body {
  padding: 1.25rem 1.5rem 1.5rem;
}
.feature-icon {
  font-size: 1.4rem !important;
  color: #c084fc;
  margin-bottom: 0.5rem;
}
.feature-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 0.5rem;
}
.feature-desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.65;
  margin: 0 0 1rem;
}
.feature-link {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c084fc;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ── Quick links ────────────────────────────────── */
.quick-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem 5rem;
}
.quick-title {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #334155;
  margin: 0 0 1rem;
}
.quick-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
}
@media (max-width: 900px) {
  .quick-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 480px) {
  .quick-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.quick-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  background: #12121f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease,
    transform 0.15s ease;
  text-align: center;
}
.quick-card:hover {
  background: rgba(192, 132, 252, 0.08);
  border-color: rgba(192, 132, 252, 0.25);
  transform: translateY(-2px);
}
.quick-icon {
  font-size: 1.4rem !important;
  color: #c084fc;
}
.quick-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #64748b;
  transition: color 0.15s ease;
}
.quick-card:hover .quick-label {
  color: #c084fc;
}
</style>

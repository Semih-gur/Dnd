<template>
  <div class="home-page">
    <!-- Feature cards -->
    <div class="features-section">
      <div class="features-grid">
        <div class="feature-card" @click="goWiki()">
          <div class="feature-card-inner">
            <v-img
              :src="require('../assets/wiki.svg')"
              alt="Wiki"
              class="feature-img"
              contain
            ></v-img>
          </div>
          <div class="feature-body">
            <v-icon class="feature-icon">mdi-book-open-variant</v-icon>
            <h2 class="feature-title">{{ $t("home.wiki.title") }}</h2>
            <p class="feature-desc">{{ $t("home.wiki.desc") }}</p>
            <span class="feature-link"
              >{{ $t("home.wiki.link") }}
              <v-icon size="14">mdi-arrow-right</v-icon></span
            >
          </div>
        </div>

        <div class="feature-card" @click="goChar()">
          <div class="feature-card-inner">
            <v-img
              :src="require('../assets/cCreator.svg')"
              alt="Character Creator"
              class="feature-img"
              contain
            ></v-img>
          </div>
          <div class="feature-body">
            <v-icon class="feature-icon">mdi-account-plus</v-icon>
            <h2 class="feature-title">{{ $t("home.creator.title") }}</h2>
            <p class="feature-desc">{{ $t("home.creator.desc") }}</p>
            <span class="feature-link"
              >{{ $t("home.creator.link") }}
              <v-icon size="14">mdi-arrow-right</v-icon></span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Quick links -->
    <div class="quick-section">
      <h2 class="quick-title">{{ $t("home.quickAccess") }}</h2>
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
      router.push("/dnd/2024/wiki");
    },
    goChar() {
      router.push("/character_creator");
    },
  },
  computed: {
    quickLinks() {
      return [
        {
          label: this.$t("nav.classes"),
          icon: "mdi-sword-cross",
          path: "/dnd/2024/wiki/classes",
        },
        {
          label: this.$t("nav.species"),
          icon: "mdi-account",
          path: "/dnd/2024/wiki/species",
        },
        {
          label: this.$t("nav.spells"),
          icon: "mdi-auto-fix",
          path: "/dnd/2024/wiki/spells",
        },
        {
          label: this.$t("nav.backgrounds"),
          icon: "mdi-map-marker-radius",
          path: "/dnd/2024/wiki/backgrounds",
        },
        {
          label: this.$t("nav.feats"),
          icon: "mdi-star-circle-outline",
          path: "/dnd/2024/wiki/feats",
        },
        {
          label: this.$t("nav.items"),
          icon: "mdi-bag-personal",
          path: "/dnd/2024/wiki/items",
        },
      ];
    },
  },
};
</script>

<style scoped>
.home-page {
  margin-top: 5%;
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-body);
}

/* ── Feature cards ──────────────────────────────── */
.features-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
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
}
.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px var(--shadow-card);
  border-color: rgba(var(--accent-rgb), 0.2);
}
.feature-card-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
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
.feature-body {
  padding: 1.25rem 1.5rem 1.5rem;
}
.feature-icon {
  font-size: 1.4rem !important;
  color: var(--accent);
  margin-bottom: 0.5rem;
}
.feature-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 0.5rem;
}
.feature-desc {
  font-size: 0.85rem;
  color: var(--text-subtle);
  line-height: 1.65;
  margin: 0 0 1rem;
}
.feature-link {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
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
  color: var(--text-faint);
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
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease,
    transform 0.15s ease;
  text-align: center;
}
.quick-card:hover {
  background: rgba(var(--accent-rgb), 0.08);
  border-color: rgba(var(--accent-rgb), 0.25);
  transform: translateY(-2px);
}
.quick-icon {
  font-size: 1.4rem !important;
  color: var(--accent);
}
.quick-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-subtle);
  transition: color 0.15s ease;
}
.quick-card:hover .quick-label {
  color: var(--accent);
}
</style>

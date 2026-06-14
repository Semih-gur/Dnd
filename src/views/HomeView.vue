<template>
  <div class="home-page">
    <!-- Hero section -->
    <div class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <span class="hero-eyebrow">{{ $t("home.welcomeTo") }}</span>
        <h1 class="hero-title">{{ $t("home.title") }}</h1>
        <p class="hero-subtitle">{{ $t("home.subtitle") }}</p>
        <p class="hero-discord">
          {{ $t("home.discordText") }}
          <a
            href="https://discord.gg/bg5cPMJe"
            target="_blank"
            class="discord-link"
          >
            <v-icon size="16">mdi-discord</v-icon> Discord
          </a>
        </p>
      </div>
    </div>

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

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-inner">
        <!-- Brand -->
        <div class="footer-brand">
          <span class="footer-logo">Beholder's Tavern</span>
          <p class="footer-tagline">{{ $t("home.footer.tagline") }}</p>
          <div class="footer-socials">
            <a
              href="https://www.patreon.com/YOUR_PAGE"
              target="_blank"
              class="social-link"
            >
              <v-icon size="20">mdi-patreon</v-icon>
            </a>
            <a
              href="https://discord.gg/bg5cPMJe"
              target="_blank"
              class="social-link"
            >
              <v-icon size="20">mdi-discord</v-icon>
            </a>
          </div>
        </div>

        <!-- Wiki links -->
        <div class="footer-col">
          <h3 class="footer-heading">{{ $t("home.footer.wiki") }}</h3>
          <ul class="footer-links">
            <li>
              <router-link to="/wiki/classes">{{
                $t("nav.classes")
              }}</router-link>
            </li>
            <li>
              <router-link to="/wiki/species">{{
                $t("nav.species")
              }}</router-link>
            </li>
            <li>
              <router-link to="/wiki/spells">{{
                $t("nav.spells")
              }}</router-link>
            </li>
            <li>
              <router-link to="/wiki/backgrounds">{{
                $t("nav.backgrounds")
              }}</router-link>
            </li>
            <li>
              <router-link to="/wiki/feats">{{ $t("nav.feats") }}</router-link>
            </li>
            <li>
              <router-link to="/wiki/items">{{ $t("nav.items") }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Support links -->
        <div class="footer-col">
          <h3 class="footer-heading">{{ $t("home.footer.support") }}</h3>
          <ul class="footer-links">
            <li>
              <a href="https://www.patreon.com/YOUR_PAGE" target="_blank"
                >Patreon</a
              >
            </li>
            <li>
              <a href="https://discord.gg/bg5cPMJe" target="_blank">{{
                $t("home.footer.joinDiscord")
              }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          {{ $t("home.footer.copyright", { year: new Date().getFullYear() }) }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    goWiki() {
      router.push(this.wikiBase);
    },
    goChar() {
      router.push("/character_creator");
    },
  },
  computed: {
    wikiBase() {
      return this.$route.path.startsWith("/dnd/5e")
        ? "/dnd/5e/wiki"
        : "/dnd/2024/wiki";
    },
    quickLinks() {
      return [
        {
          label: this.$t("nav.classes"),
          icon: "mdi-sword-cross",
          path: this.wikiBase + "/classes",
        },
        {
          label: this.$t("nav.species"),
          icon: "mdi-account",
          path: this.wikiBase + "/species",
        },
        {
          label: this.$t("nav.spells"),
          icon: "mdi-auto-fix",
          path: this.wikiBase + "/spells",
        },
        {
          label: this.$t("nav.backgrounds"),
          icon: "mdi-map-marker-radius",
          path: this.wikiBase + "/backgrounds",
        },
        {
          label: this.$t("nav.feats"),
          icon: "mdi-star-circle-outline",
          path: this.wikiBase + "/feats",
        },
        {
          label: this.$t("nav.items"),
          icon: "mdi-bag-personal",
          path: this.wikiBase + "/items",
        },
      ];
    },
  },
};
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-body);
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 7rem 2rem 4rem;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(var(--accent-rgb), 0.18) 0%, transparent 60%),
    radial-gradient(ellipse at 20% 80%, rgba(var(--accent-rgb), 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 60%, rgba(var(--accent-rgb), 0.06) 0%, transparent 40%);
}
.hero-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--bg-page);
  opacity: 0.6;
}
.hero-content {
  position: relative;
  max-width: 680px;
  z-index: 1;
}
.hero-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--accent);
  margin-bottom: 0.75rem;
}
.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.1;
  margin: 0 0 1rem;
}
.hero-subtitle {
  font-size: 1rem;
  color: var(--text-subtle);
  line-height: 1.7;
  margin: 0 0 1.5rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}
.hero-discord {
  font-size: 0.875rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.discord-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.discord-link:hover {
  text-decoration: underline;
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

/* ── Footer ─────────────────────────────────────── */
.site-footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border-subtle);
  padding: 3rem 1.5rem 1.5rem;
}
.footer-inner {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-faint);
}
.footer-logo {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.5rem;
}
.footer-tagline {
  font-size: 0.8rem;
  color: var(--text-subtle);
  margin: 0 0 1rem;
  line-height: 1.5;
}
.footer-socials {
  display: flex;
  gap: 0.75rem;
}
.social-link {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.15s ease;
}
.social-link:hover {
  color: var(--accent);
}
.footer-heading {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin: 0 0 0.75rem;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-links a {
  font-size: 0.85rem;
  color: var(--text-subtle);
  text-decoration: none;
  transition: color 0.15s ease;
}
.footer-links a:hover {
  color: var(--accent);
}
.footer-bottom {
  max-width: 900px;
  margin: 1.25rem auto 0;
  font-size: 0.75rem;
  color: var(--text-faint);
  text-align: center;
}

@media (max-width: 640px) {
  .hero {
    padding-top: 5.5rem;
  }
  .hero-title {
    font-size: 2.2rem;
  }
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

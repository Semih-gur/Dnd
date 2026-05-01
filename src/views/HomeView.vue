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

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-inner">
        <!-- Brand -->
        <div class="footer-brand">
          <span class="footer-logo">Beholder's Tavern</span>
          <p class="footer-tagline">
            Your complete D&D 2024 companion. Not affiliated with Wizards of the
            Coast.
          </p>
          <div class="footer-socials">
            <a
              href="https://www.patreon.com/YOUR_PAGE"
              target="_blank"
              class="social-link"
            >
              <v-icon size="20">mdi-patreon</v-icon>
            </a>
            <a
              href="https://discord.gg/YOUR_SERVER"
              target="_blank"
              class="social-link"
            >
              <v-icon size="20">mdi-discord</v-icon>
            </a>
          </div>
        </div>

        <!-- Wiki links -->
        <div class="footer-col">
          <h3 class="footer-heading">Wiki</h3>
          <ul class="footer-links">
            <li><router-link to="/wiki/classes">Classes</router-link></li>
            <li><router-link to="/wiki/species">Species</router-link></li>
            <li><router-link to="/wiki/spells">Spells</router-link></li>
            <li>
              <router-link to="/wiki/backgrounds">Backgrounds</router-link>
            </li>
            <li><router-link to="/wiki/feats">Feats</router-link></li>
            <li><router-link to="/wiki/items">Items</router-link></li>
          </ul>
        </div>

        <!-- Support links -->
        <div class="footer-col">
          <h3 class="footer-heading">Support</h3>
          <ul class="footer-links">
            <li>
              <a href="https://www.patreon.com/YOUR_PAGE" target="_blank"
                >Patreon</a
              >
            </li>
            <li>
              <a href="https://discord.gg/YOUR_SERVER" target="_blank"
                >Join Discord</a
              >
            </li>
          </ul>
        </div>

        <!-- Contact form -->
        <div class="footer-col footer-contact">
          <h3 class="footer-heading">Get in Touch</h3>
          <div class="contact-form">
            <input
              v-model="contact.name"
              class="contact-input"
              placeholder="Your name"
              type="text"
            />
            <input
              v-model="contact.email"
              class="contact-input"
              placeholder="Your email"
              type="email"
            />
            <textarea
              v-model="contact.message"
              class="contact-input contact-textarea"
              placeholder="Your message — bug reports, suggestions, feedback..."
              rows="3"
            ></textarea>
            <button
              class="contact-btn"
              @click="sendMessage"
              :disabled="contact.sent"
            >
              {{ contact.sent ? "✓ Message Sent!" : "Send Message" }}
            </button>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          © {{ new Date().getFullYear() }} Beholder's Tavern. Fan-made project.
          D&D content belongs to Wizards of the Coast.
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
      router.push("/wiki");
    },
    goChar() {
      router.push("/character_creator");
    },
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: "",
        sent: false,
      },
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
  background: var(--bg-page);
  color: var(--text-body);
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
      rgba(var(--accent-rgb), 0.18) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(var(--accent-rgb), 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 60%,
      rgba(var(--accent-rgb), 0.06) 0%,
      transparent 40%
    );
}
.hero-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(var(--accent-rgb), 0.06) 1px,
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
  color: var(--accent);
  margin-bottom: 0.75rem;
}
.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 1.25rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.hero-subtitle {
  font-size: 1rem;
  color: var(--text-subtle);
  line-height: 1.75;
  margin: 0 0 2rem;
}

/* ── Feature cards ──────────────────────────────── */
.features-section {
  max-width: 900px;
  margin: -80px auto 0;
  padding: 0 1.5rem 4rem;
  position: relative;
  z-index: 1;
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
.feature-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(to bottom, transparent, var(--bg-card));
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
/* ── Patreon Banner ─────────────────────────────── */
.patreon-banner {
  background: linear-gradient(
    135deg,
    rgba(249, 115, 22, 0.15) 0%,
    rgba(var(--bg-page-rgb), 0.95) 100%
  );
  border-top: 1px solid rgba(249, 115, 22, 0.3);
  border-bottom: 1px solid rgba(249, 115, 22, 0.3);
  padding: 2rem 1.5rem;
}
.patreon-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.patreon-left {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.patreon-icon {
  font-size: 2.5rem !important;
  color: #f97316;
  flex-shrink: 0;
}
.patreon-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}
.patreon-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 0;
  max-width: 500px;
}
.patreon-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: #f97316;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
}
.patreon-btn:hover {
  background: #ea6c00;
  transform: translateY(-2px);
}

/* ── Footer ─────────────────────────────────────── */
.site-footer {
  background: var(--bg-footer);
  border-top: 1px solid var(--border-subtle);
  padding-top: 3rem;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 3rem;
}
@media (max-width: 900px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}

/* Brand */
.footer-logo {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-primary);
  display: block;
  margin-bottom: 0.5rem;
}
.footer-tagline {
  font-size: 0.8rem;
  color: var(--text-faint2);
  line-height: 1.6;
  margin-bottom: 1rem;
}
.footer-socials {
  display: flex;
  gap: 0.75rem;
}
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--border-faint);
  border: 1px solid var(--border-light);
  color: var(--text-subtle);
  text-decoration: none;
  transition: all 0.15s ease;
}
.social-link:hover {
  background: rgba(var(--accent-rgb), 0.1);
  border-color: rgba(var(--accent-rgb), 0.3);
  color: var(--accent);
}

/* Columns */
.footer-heading {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 1rem;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-links a,
.footer-links .router-link-active {
  font-size: 0.875rem;
  color: var(--text-subtle);
  text-decoration: none;
  transition: color 0.15s ease;
}
.footer-links a:hover {
  color: var(--accent);
}

/* Contact form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.contact-input {
  width: 100%;
  padding: 0.6rem 0.875rem;
  background: var(--border-faint);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  color: var(--text-body);
  font-size: 0.82rem;
  outline: none;
  transition: border-color 0.15s ease;
  box-sizing: border-box;
  resize: none;
  font-family: inherit;
}
.contact-input::placeholder {
  color: var(--text-faint);
}
.contact-input:focus {
  border-color: rgba(var(--accent-rgb), 0.4);
}
.contact-textarea {
  min-height: 80px;
}
.contact-btn {
  padding: 0.6rem 1.25rem;
  background: rgba(var(--accent-rgb), 0.15);
  border: 1px solid rgba(var(--accent-rgb), 0.4);
  border-radius: 8px;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  cursor: pointer;
  transition: all 0.15s ease;
}
.contact-btn:hover:not(:disabled) {
  background: rgba(var(--accent-rgb), 0.25);
}
.contact-btn:disabled {
  color: #a3e635;
  border-color: rgba(163, 230, 53, 0.4);
  background: rgba(163, 230, 53, 0.1);
  cursor: default;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid var(--border-faint);
  padding: 1.25rem 1.5rem;
  text-align: center;
}
.footer-bottom p {
  font-size: 0.75rem;
  color: var(--text-faint);
  margin: 0;
}
</style>

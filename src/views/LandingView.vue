<template>
  <div class="landing-page">
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
            <svg style="width:16px;height:16px;display:inline-block;vertical-align:middle" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.013.043.031.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg> Discord
          </a>
        </p>
      </div>
    </div>

    <SystemSelector />

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-inner">
        <!-- Brand -->
        <div class="footer-brand">
          <span class="footer-logo">Beholder's Tavern</span>
          <p class="footer-tagline">{{ $t("home.footer.tagline") }}</p>
          <div class="footer-socials">
            <a href="https://www.patreon.com/YOUR_PAGE" target="_blank" class="social-link" title="Patreon">
              <v-icon size="20">mdi-patreon</v-icon>
            </a>
            <a href="https://discord.gg/bg5cPMJe" target="_blank" class="social-link" title="Discord">
              <svg class="discord-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.013.043.031.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Contact / Mail -->
        <div class="footer-col">
          <h3 class="footer-heading">{{ $t("home.footer.contact") }}</h3>
          <p class="footer-contact-desc">{{ $t("home.footer.contactDesc") }}</p>
          <a :href="'mailto:' + contactEmail" class="footer-mail-btn">
            <v-icon size="16">mdi-email-outline</v-icon>
            {{ contactEmail }}
          </a>
        </div>

        <!-- Support -->
        <div class="footer-col">
          <h3 class="footer-heading">{{ $t("home.footer.support") }}</h3>
          <ul class="footer-links">
            <li><a href="https://www.patreon.com/YOUR_PAGE" target="_blank">Patreon</a></li>
            <li>
              <a href="https://discord.gg/bg5cPMJe" target="_blank">
                {{ $t("home.footer.joinDiscord") }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>{{ $t("home.footer.copyright", { year: new Date().getFullYear() }) }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import SystemSelector from "@/components/SystemSelector.vue";

export default {
  name: "LandingView",
  components: { SystemSelector },
  data() {
    return {
      contactEmail: "beholderstavern@gmail.com",
    };
  },
};
</script>

<style scoped>
.landing-page {
  margin-top: 5%;
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-body);
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem 3rem;
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
  margin: 0 0 0.75rem;
}
.hero-discord {
  font-size: 0.9rem;
  color: var(--text-subtle);
  margin: 0;
}
.discord-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #5865f2;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.15s ease;
}
.discord-link:hover {
  opacity: 0.8;
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

/* ── Footer ─────────────────────────────────────── */
.site-footer {
  background: var(--bg-footer);
  border-top: 1px solid var(--border-subtle);
  padding-top: 3rem;
  margin-top: 2rem;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
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
.discord-svg {
  width: 18px;
  height: 18px;
  display: block;
}
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
.footer-links a {
  font-size: 0.875rem;
  color: var(--text-subtle);
  text-decoration: none;
  transition: color 0.15s ease;
}
.footer-links a:hover {
  color: var(--accent);
}
.footer-contact-desc {
  font-size: 0.8rem;
  color: var(--text-faint2);
  line-height: 1.6;
  margin: 0 0 0.875rem;
}
.footer-mail-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(var(--accent-rgb), 0.35);
  border-radius: 8px;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.footer-mail-btn:hover {
  background: rgba(var(--accent-rgb), 0.1);
  border-color: var(--accent);
}
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

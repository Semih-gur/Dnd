<template>
  <div class="patrons-page">
    <!-- Header -->
    <div class="patrons-header">
      <div class="header-inner">
        <span class="header-eyebrow">Beholder's Tavern</span>
        <h1 class="header-title">Hall of Patrons</h1>
        <p class="header-sub">
          These adventurers keep the tavern's fires burning. Thank you.
        </p>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="patrons-body">
      <div class="loading-wrap">
        <div class="loading-spinner"></div>
        <p class="loading-text">Summoning patrons...</p>
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="patrons-body">
      <div class="error-wrap">
        <v-icon size="32" style="color: #f87171"
          >mdi-alert-circle-outline</v-icon
        >
        <p class="error-text">
          Could not load patrons. Please try again later.
        </p>
      </div>
    </div>

    <!-- Content -->
    <div v-else class="patrons-body">
      <!-- Gold -->
      <div class="tier-section" v-if="goldPatrons.length || !hasAnyPatrons">
        <div class="tier-header gold">
          <v-icon size="20">mdi-crown</v-icon>
          <h2 class="tier-title">Gold Patrons</h2>
          <span class="tier-price">$10 / month</span>
        </div>
        <div v-if="goldPatrons.length" class="patrons-grid">
          <div
            v-for="patron in goldPatrons"
            :key="patron.name"
            class="patron-card gold"
          >
            <div class="patron-avatar gold">{{ patron.name.charAt(0) }}</div>
            <span class="patron-name">{{ patron.name }}</span>
          </div>
        </div>
        <div v-else class="empty-tier">
          <p>Be the first Gold Patron!</p>
          <a
            href="https://www.patreon.com"
            target="_blank"
            class="join-btn gold"
          >
            Join for $10/mo
          </a>
        </div>
      </div>

      <!-- Silver -->
      <div class="tier-section" v-if="silverPatrons.length || !hasAnyPatrons">
        <div class="tier-header silver">
          <v-icon size="20">mdi-shield-star</v-icon>
          <h2 class="tier-title">Silver Patrons</h2>
          <span class="tier-price">$5 / month</span>
        </div>
        <div v-if="silverPatrons.length" class="patrons-grid">
          <div
            v-for="patron in silverPatrons"
            :key="patron.name"
            class="patron-card silver"
          >
            <div class="patron-avatar silver">{{ patron.name.charAt(0) }}</div>
            <span class="patron-name">{{ patron.name }}</span>
          </div>
        </div>
        <div v-else class="empty-tier">
          <p>Be the first Silver Patron!</p>
          <a
            href="https://www.patreon.com"
            target="_blank"
            class="join-btn silver"
          >
            Join for $5/mo
          </a>
        </div>
      </div>

      <!-- Bronze -->
      <div class="tier-section" v-if="bronzePatrons.length || !hasAnyPatrons">
        <div class="tier-header bronze">
          <v-icon size="20">mdi-medal</v-icon>
          <h2 class="tier-title">Bronze Patrons</h2>
          <span class="tier-price">$3 / month</span>
        </div>
        <div v-if="bronzePatrons.length" class="patrons-grid">
          <div
            v-for="patron in bronzePatrons"
            :key="patron.name"
            class="patron-card bronze"
          >
            <div class="patron-avatar bronze">{{ patron.name.charAt(0) }}</div>
            <span class="patron-name">{{ patron.name }}</span>
          </div>
        </div>
        <div v-else class="empty-tier">
          <p>Be the first Bronze Patron!</p>
          <a
            href="https://www.patreon.com"
            target="_blank"
            class="join-btn bronze"
          >
            Join for $3/mo
          </a>
        </div>
      </div>

      <!-- No patrons at all -->
      <div v-if="!hasAnyPatrons" class="first-patron-banner">
        <v-icon size="48" style="color: #c084fc; margin-bottom: 1rem"
          >mdi-campfire</v-icon
        >
        <h2>The tavern awaits its first patrons</h2>
        <p>
          Support Beholder's Tavern on Patreon and your name will appear here.
        </p>
        <a
          href="https://www.patreon.com"
          target="_blank"
          class="join-btn gold"
          style="margin-top: 1.5rem"
        >
          Support on Patreon
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatronsView",

  data() {
    return {
      patrons: [],
      loading: true,
      error: false,
    };
  },

  computed: {
    goldPatrons() {
      return this.patrons.filter((p) => p.tier === "Gold");
    },
    silverPatrons() {
      return this.patrons.filter((p) => p.tier === "Silver");
    },
    bronzePatrons() {
      return this.patrons.filter((p) => p.tier === "Bronze");
    },
    hasAnyPatrons() {
      return this.patrons.length > 0;
    },
  },

  async mounted() {
    try {
      const res = await fetch("http://localhost:3000/api/patrons");
      if (!res.ok) throw new Error("Failed to fetch");
      this.patrons = await res.json();
    } catch (err) {
      console.error(err);
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.patrons-page {
  margin-top: 30px;
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-body);
}

.patrons-header {
  width: 100%;
  padding: 3rem 2.5rem 2rem;
  background: linear-gradient(
    to bottom,
    rgba(var(--bg-page-rgb), 0.95),
    var(--bg-page)
  );
  border-bottom: 1px solid var(--border-subtle);
  text-align: center;
}
.header-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
}
.header-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0 0 0.5rem;
}
.header-sub {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0;
}

.patrons-body {
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.loading-wrap,
.error-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  gap: 1rem;
}
.loading-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid var(--border-subtle);
  border-top-color: #c084fc;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading-text,
.error-text {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.tier-section {
  margin-bottom: 3rem;
}

.tier-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-subtle);
}
.tier-title {
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
  flex: 1;
}
.tier-price {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid;
}

/* Gold */
.tier-header.gold {
  color: #fbbf24;
}
.tier-header.gold .tier-price {
  background: rgba(251, 191, 36, 0.1);
  border-color: rgba(251, 191, 36, 0.3);
  color: #fbbf24;
}
.patron-card.gold {
  border-color: rgba(251, 191, 36, 0.3);
}
.patron-card.gold:hover {
  border-color: #fbbf24;
}
.patron-avatar.gold {
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
  border-color: rgba(251, 191, 36, 0.3);
}
.join-btn.gold {
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}
.join-btn.gold:hover {
  background: rgba(251, 191, 36, 0.25);
}

/* Silver */
.tier-header.silver {
  color: #94a3b8;
}
.tier-header.silver .tier-price {
  background: rgba(148, 163, 184, 0.1);
  border-color: rgba(148, 163, 184, 0.3);
  color: #94a3b8;
}
.patron-card.silver {
  border-color: rgba(148, 163, 184, 0.3);
}
.patron-card.silver:hover {
  border-color: #94a3b8;
}
.patron-avatar.silver {
  background: rgba(148, 163, 184, 0.15);
  color: #94a3b8;
  border-color: rgba(148, 163, 184, 0.3);
}
.join-btn.silver {
  background: rgba(148, 163, 184, 0.15);
  color: #94a3b8;
  border: 1px solid rgba(148, 163, 184, 0.3);
}
.join-btn.silver:hover {
  background: rgba(148, 163, 184, 0.25);
}

/* Bronze */
.tier-header.bronze {
  color: #c2886a;
}
.tier-header.bronze .tier-price {
  background: rgba(194, 136, 106, 0.1);
  border-color: rgba(194, 136, 106, 0.3);
  color: #c2886a;
}
.patron-card.bronze {
  border-color: rgba(194, 136, 106, 0.3);
}
.patron-card.bronze:hover {
  border-color: #c2886a;
}
.patron-avatar.bronze {
  background: rgba(194, 136, 106, 0.15);
  color: #c2886a;
  border-color: rgba(194, 136, 106, 0.3);
}
.join-btn.bronze {
  background: rgba(194, 136, 106, 0.15);
  color: #c2886a;
  border: 1px solid rgba(194, 136, 106, 0.3);
}
.join-btn.bronze:hover {
  background: rgba(194, 136, 106, 0.25);
}

.patrons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.75rem;
}
.patron-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1.25rem 1rem;
  background: var(--bg-card);
  border: 1px solid;
  border-radius: 12px;
  transition: all 0.15s ease;
}
.patron-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
}
.patron-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-heading);
  text-align: center;
}

.empty-tier {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem;
  background: var(--bg-card);
  border: 1px dashed var(--border-subtle);
  border-radius: 12px;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.join-btn {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.15s ease;
}

.first-patron-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-card);
  border: 1px solid rgba(192, 132, 252, 0.2);
  border-radius: 16px;
  margin-top: 2rem;
}
.first-patron-banner h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0 0 0.5rem;
}
.first-patron-banner p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
}

@media (max-width: 640px) {
  .header-title {
    font-size: 1.75rem;
  }
  .patrons-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
}
</style>

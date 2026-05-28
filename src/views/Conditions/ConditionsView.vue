<template>
  <div class="conditions-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t('conditions.title') }}</h1>
          <p class="hero-subtitle">{{ $t('conditions.subtitle') }}</p>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="conditions-grid">
        <div
          v-for="condition in conditions"
          :key="condition.name"
          class="condition-card"
        >
          <div class="card-header">
            <v-icon class="card-icon">{{ condition.icon }}</v-icon>
            <span class="card-name">{{ $lf(condition, 'name') }}</span>
          </div>
          <p class="card-desc">{{ $lf(condition, 'desc') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const conditions = this.$route.path.startsWith("/dnd/5e/")
      ? require("@/views/dnd5e/Conditions/conditions.json")
      : require("./conditions.json");
    return { conditions };
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.conditions-page {
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
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* ── Grid ───────────────────────────────────────── */
.conditions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* ── Card ───────────────────────────────────────── */
.condition-card {
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.1rem 1.2rem;
  background: rgba(var(--accent-rgb), 0.03);
  transition: border-color 0.15s ease, background 0.15s ease;
}
.condition-card:hover {
  border-color: rgba(var(--accent-rgb), 0.35);
  background: rgba(var(--accent-rgb), 0.07);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}
.card-icon {
  font-size: 1.1rem !important;
  color: var(--accent);
  flex-shrink: 0;
}
.card-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-heading);
}
.card-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* ── Mobile ─────────────────────────────────────── */
@media (max-width: 900px) {
  .conditions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 580px) {
  .hero {
    height: 180px;
  }
  .hero-title {
    font-size: 1.75rem;
  }
  .hero-overlay {
    padding: 1.25rem 1.5rem;
  }
  .conditions-grid {
    grid-template-columns: 1fr;
  }
}
</style>

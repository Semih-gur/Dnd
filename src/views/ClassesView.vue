<template>
  <div class="classes-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t('classes.title') }}</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
    <div class="classes-grid">
      <div
        v-for="cclass in classes"
        :key="cclass.id"
        class="class-card"
        @click="goTo(cclass)"
      >
        <div class="card-image-wrap">
          <div class="card-img-clip">
            <img :src="cclass.art" :alt="cclass.label" class="card-img" />
          </div>
          <div
            class="complexity-badge"
            :class="'complexity-' + cclass.complexity"
          >
            {{ complexityLabel(cclass.complexity) }}
          </div>
          <div class="card-gradient-overlay"></div>
        </div>

        <div class="card-body">
          <h2 class="card-title">{{ cclass.label }}</h2>
          <p class="card-desc">{{ cclass.desc }}</p>
          <div class="card-pref">
            <span class="pref-label">{{ $t('classes.primaryStat') }}</span>
            <span class="pref-value">{{ cclass.pref }}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

const classArts = {
  barbarian: require("../assets/classes/barbarian.png"),
  bard:      require("../assets/classes/bard.png"),
  cleric:    require("../assets/classes/cleric.png"),
  druid:     require("../assets/classes/druid.png"),
  fighter:   require("../assets/classes/fighter.png"),
  monk:      require("../assets/classes/monk.png"),
  paladin:   require("../assets/classes/paladin.png"),
  ranger:    require("../assets/classes/ranger.png"),
  rogue:     require("../assets/classes/rogue.png"),
  sorcerer:  require("../assets/classes/sorcerer.png"),
  warlock:   require("../assets/classes/warlock.png"),
  wizard:    require("../assets/classes/wizard.png"),
};

export default {
  methods: {
    complexityLabel(n) {
      return this.$t(`classes.complexity.${n}`);
    },
    goTo(item) {
      router.push("/wiki/classes/" + item.routeKey);
    },
  },
  computed: {
    classes() {
      return this.$tm("classes.list").map((c) => ({
        ...c,
        art: classArts[c.routeKey],
      }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.classes-page {
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

.classes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

@media (max-width: 1280px) {
  .classes-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .classes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .classes-grid {
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

/* Card */
.class-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
  box-shadow: 0 2px 12px var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.class-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px var(--shadow-card-hover);
}

/* Image section */
.card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
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

.card-img-clip {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}
.class-card:hover .card-img {
  transform: scale(1.05);
}
/* The gradient that fades the image into the card body below */
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

/* Complexity badge */
.complexity-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  backdrop-filter: blur(6px);
  z-index: 2;
}
.complexity-1 {
  background: rgba(0, 0, 0, 0.55);
  color: #a3e635;
  border: 1px solid #a3e635;
}
.complexity-2 {
  background: rgba(0, 0, 0, 0.55);
  color: #fb923c;
  border: 1px solid #fb923c;
}
.complexity-3 {
  background: rgba(0, 0, 0, 0.55);
  color: #f87171;
  border: 1px solid #f87171;
}

/* Card body — sits directly below the image, visually blended */
.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0 1rem 1rem;
  /* Negative margin pulls the body up so text overlaps into the gradient */
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
.card-pref {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 0.6rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border-light);
}
.pref-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-subtle);
}
.pref-value {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
}
</style>

<template>
  <div class="items-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Items</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="items-grid">
        <div
          v-for="item in items"
          :key="item.id"
          class="item-card"
          @click="goTo(item.label)"
        >
          <div class="card-image-wrap">
            <v-img
              src="../../assets/image.png"
              :alt="item.label"
              cover
              class="card-img"
            ></v-img>
            <div class="card-gradient-overlay"></div>
          </div>
          <div class="card-body">
            <h2 class="card-title">{{ item.label }}</h2>
            <p class="card-desc">{{ item.desc }}</p>
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
    goTo(label) {
      router.push("/wiki/items/" + label.replace(/\s+/g, "_").toLowerCase());
    },
  },
  data: () => ({
    items: [
      {
        id: 0,
        label: "Weapons",
        desc: "Swords, axes, bows and every instrument of war available to adventurers",
      },
      {
        id: 1,
        label: "Armors",
        desc: "Light, medium and heavy armor to protect you in the heat of battle",
      },
      {
        id: 2,
        label: "Potions",
        desc: "Healing draughts, elixirs and magical concoctions to aid your adventure",
      },
      {
        id: 3,
        label: "Magic Items",
        desc: "Rare and powerful items imbued with arcane energy and ancient enchantments",
      },
    ],
  }),
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.items-page {
  min-height: 100vh;
  background: #0e0e1a;
  color: #e2e8f0;
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  width: 100%;
  height: 220px;
  background: linear-gradient(
    135deg,
    rgba(192, 132, 252, 0.15) 0%,
    rgba(14, 14, 26, 0.95) 100%
  );
  border-bottom: 1px solid rgba(192, 132, 252, 0.2);
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(192, 132, 252, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(192, 132, 252, 0.05) 0%,
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
.hero-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #c084fc;
  margin-bottom: 0.4rem;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0 0 0.4rem;
  line-height: 1.1;
}
.hero-subtitle {
  font-size: 0.95rem;
  color: #94a3b8;
  margin: 0;
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* ── Grid ───────────────────────────────────────── */
.items-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
@media (max-width: 600px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Card ───────────────────────────────────────── */
.item-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #12121f;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.6);
}

/* Image */
.card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 7;
  overflow: visible;
  flex-shrink: 0;
}
.card-img {
  width: 100%;
  height: 100%;
  transition: transform 0.35s ease;
}
.item-card:hover .card-image-wrap :deep(.v-img) {
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
    rgba(18, 18, 31, 0.5) 40%,
    rgba(18, 18, 31, 0.92) 75%,
    #12121f 100%
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
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: #f1f5f9;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
}
.card-desc {
  font-size: 0.82rem;
  color: #94a3b8;
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

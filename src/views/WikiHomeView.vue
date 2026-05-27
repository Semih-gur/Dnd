<template>
  <div class="wiki-home">
    <h1 class="page-title">{{ $t('wikiHome.title') }}</h1>
    <div class="wiki-grid">
      <div
        v-for="section in sections"
        :key="section.path"
        class="wiki-card"
        @click="goTo(section.path)"
      >
        <div class="card-image-wrap">
          <img :src="section.art" :alt="section.label" class="card-img" />
          <div class="card-gradient-overlay"></div>
        </div>
        <div class="card-body">
          <h2 class="card-title">{{ section.label }}</h2>
          <p class="card-desc">{{ section.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

const artMap = {
  classes:     require("../assets/wikiPage/class.png"),
  species:     require("../assets/wikiPage/spells.png"),
  spells:      require("../assets/wikiPage/spells.png"),
  backgrounds: require("../assets/wikiPage/backgrounds.png"),
  feats:       require("../assets/wikiPage/quill.png"),
  items:       require("../assets/wikiPage/items.png"),
  conditions:  require("../assets/wikiPage/quill.png"),
};

export default {
  methods: {
    goTo(page) {
      router.push("wiki/" + page);
    },
  },
  computed: {
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
.wiki-home {
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
}

/* 3 cols on desktop, 2 on tablet, 1 on mobile */
.wiki-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  .page-title {
    font-size: 1.5rem;
  }
}

/* Card */
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
  margin-top: -2.5rem;
  position: relative;
  z-index: 1;
  flex: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: var(--text-heading);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
}
.card-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.55;
  margin: 0;
}
</style>

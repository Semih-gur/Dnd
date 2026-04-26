<template>
  <div class="species-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Species</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
    <div class="species-grid">
      <div
        v-for="s in species"
        :key="s.id"
        class="species-card"
        @click="goTo(s.label)"
      >
        <div class="card-image-wrap">
          <div class="card-img-clip">
            <img :src="getImage(s.image)" :alt="s.label" class="card-img" />
          </div>
          <div class="card-gradient-overlay"></div>
        </div>
        <div class="card-body">
          <h2 class="card-title">{{ s.label }}</h2>
          <p class="card-desc">{{ s.desc }}</p>
          <div class="card-bonus">
            <span class="bonus-label">Racial Bonus</span>
            <span class="bonus-value">{{ s.bonus }}</span>
          </div>
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
      router.push("/wiki/species/" + label.replace(/\s+/g, "_").toLowerCase());
    },
    getImage(filename) {
      if (!filename) return require("../assets/image.png");
      try {
        return require(`../assets/races/${filename}`);
      } catch {
        return require("../assets/image.png");
      }
    },
  },
  data: () => ({
    species: [
      {
        id: 0,
        label: "Aasimar",
        image: "aasimar.png",
        desc: "Blessed with a celestial heritage, Aasimar radiate inner light and wield divine power to heal allies and smite enemies with radiant energy.",
        bonus: "Healing Hands",
      },
      {
        id: 1,
        label: "Dragonborn",
        image: "dragonborn.png",
        desc: "Born of draconic lineage, Dragonborn command elemental breath weapons and draconic wings, embodying the might of ancient dragons.",
        bonus: "Breath Weapon",
      },
      {
        id: 2,
        label: "Dwarf",
        image: "dwarf.png",
        desc: "Hardy and resilient folk forged by centuries in mountain halls, Dwarves resist poison and channel tremorsense through the stone beneath their feet.",
        bonus: "Stonecunning",
      },
      {
        id: 3,
        label: "Elf",
        image: "elf.png",
        desc: "Graceful and long-lived, Elves enter a meditative trance instead of sleeping and inherit unique magical gifts from their chosen lineage.",
        bonus: "Fey Ancestry",
      },
      {
        id: 4,
        label: "Gnome",
        image: "gnome.png",
        desc: "Curious and inventive, Gnomes have an innate cleverness that grants them advantage on all Intelligence, Wisdom, and Charisma saving throws.",
        bonus: "Gnomish Cunning",
      },
      {
        id: 5,
        label: "Goliath",
        image: "goliath.png",
        desc: "Descendants of giants, Goliaths stand above other races in size and strength, able to grow Large and draw power from their giant ancestry.",
        bonus: "Giant Ancestry",
      },
      {
        id: 6,
        label: "Halfling",
        image: "halfling.png",
        desc: "Lucky and nimble, Halflings never suffer critical failures — when they roll a 1 on any d20 Test they can reroll and must use the new roll.",
        bonus: "Luck",
      },
      {
        id: 7,
        label: "Human",
        image: "human.png",
        desc: "The most adaptable of all races, Humans gain an extra Origin feat at character creation, an extra skill proficiency, and Heroic Inspiration every Long Rest.",
        bonus: "Versatile",
      },
      {
        id: 8,
        label: "Orc",
        image: "orc.png",
        desc: "Powerful and fierce, Orcs can Dash as a Bonus Action to gain Temporary Hit Points, and once per Long Rest refuse to fall below 1 Hit Point.",
        bonus: "Relentless Endurance",
      },
      {
        id: 9,
        label: "Tiefling",
        image: "tiefling.png",
        desc: "Touched by infernal bloodlines, Tieflings choose a fiendish legacy that grants unique spells and resistance to Fire damage.",
        bonus: "Fiendish Legacy",
      },
    ],
  }),
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.species-page {
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

.species-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

@media (max-width: 1280px) {
  .species-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .species-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .species-grid {
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

/* ── Card ───────────────────────────────────────── */
.species-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
  box-shadow: 0 2px 12px var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.species-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px var(--shadow-card-hover);
}

/* ── Image ──────────────────────────────────────── */
.card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: visible;
  flex-shrink: 0;
}

/* Clips the zoom so it doesn't spill out */
.card-img-clip {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}
.species-card:hover .card-img {
  transform: scale(1.05);
}

/* ── Gradient bleed ─────────────────────────────── */
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

/* ── Card body ──────────────────────────────────── */
.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0 1rem 1rem;
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

/* ── Bonus row ──────────────────────────────────── */
.card-bonus {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 0.6rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border-light);
}
.bonus-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-subtle);
}
.bonus-value {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
}
</style>

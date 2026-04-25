<template>
  <div class="species-page">
    <h1 class="page-title">Choose Your Species</h1>
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
.species-page {
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
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
  .page-title {
    font-size: 1.5rem;
  }
}

/* ── Card ───────────────────────────────────────── */
.species-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #12121f;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.species-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.6);
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
    rgba(18, 18, 31, 0.5) 40%,
    rgba(18, 18, 31, 0.92) 75%,
    #12121f 100%
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
  color: #f1f5f9;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
}
.card-desc {
  font-size: 0.82rem;
  color: #cbd5e1;
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
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.bonus-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64748b;
}
.bonus-value {
  font-size: 0.8rem;
  font-weight: 600;
  color: #c084fc;
}
</style>

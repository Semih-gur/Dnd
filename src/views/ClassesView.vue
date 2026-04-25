<template>
  <div class="classes-page">
    <h1 class="page-title">Choose Your Class</h1>
    <div class="classes-grid">
      <div
        v-for="cclass in classes"
        :key="cclass.id"
        class="class-card"
        @click="goTo(cclass.label)"
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
            <span class="pref-label">Primary Stat</span>
            <span class="pref-value">{{ cclass.pref }}</span>
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
    complexityLabel(n) {
      return ["", "Low", "Medium", "High"][n] + " Complexity";
    },
    goTo(label) {
      router.push("/wiki/classes/" + label.replace(" ", "_").toLowerCase());
    },
  },
  data: () => ({
    classes: [
      {
        id: 0,
        label: "Barbarian",
        desc: "A fierce warrior of primitive background who can enter a battle rage",
        pref: "Strength / Constitution",
        art: require("../assets/classes/barbarian.png"),
        complexity: 1,
      },
      {
        id: 1,
        label: "Bard",
        desc: "An inspiring magician whose power echoes the music of creation",
        pref: "Charisma",
        art: require("../assets/classes/bard.png"),
        complexity: 2,
      },
      {
        id: 2,
        label: "Cleric",
        desc: "A priestly champion who wields divine magic in service of a higher power",
        pref: "Wisdom",
        art: require("../assets/classes/cleric.png"),
        complexity: 2,
      },
      {
        id: 3,
        label: "Druid",
        desc: "A mage wielding the powers of nature— moonlight and plant growth, fire and lightning—and adopting animal forms",
        pref: "Wisdom",
        art: require("../assets/classes/druid.png"),
        complexity: 3,
      },
      {
        id: 4,
        label: "Fighter",
        desc: "A master of martial combat, skilled with a variety of weapons and armor",
        pref: "Strength / Dexterity",
        art: require("../assets/classes/fighter.png"),
        complexity: 1,
      },
      {
        id: 5,
        label: "Monk",
        desc: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
        pref: "Wisdom / Dexterity",
        art: require("../assets/classes/monk.png"),
        complexity: 2,
      },
      {
        id: 6,
        label: "Paladin",
        desc: "A holy warrior bound to a sacred oath, harnessing power of divine",
        pref: "Strength / Charisma",
        art: require("../assets/classes/paladin.png"),
        complexity: 1,
      },
      {
        id: 7,
        label: "Ranger",
        desc: "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
        pref: "Dexterity",
        art: require("../assets/classes/ranger.png"),
        complexity: 1,
      },
      {
        id: 8,
        label: "Rogue",
        desc: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
        pref: "Dexterity",
        art: require("../assets/classes/rogue.png"),
        complexity: 1,
      },
      {
        id: 9,
        label: "Sorcerer",
        desc: "A spell-caster who draws on inherent magic from a gift or bloodline",
        pref: "Charisma",
        art: require("../assets/classes/sorcerer.png"),
        complexity: 3,
      },
      {
        id: 10,
        label: "Warlock",
        desc: "A wielder of magic derived from a bargain with an extra-planar entity",
        pref: "Charisma",
        art: require("../assets/classes/warlock.png"),
        complexity: 3,
      },
      {
        id: 11,
        label: "Wizard",
        desc: "A scholarly magic-user capable of manipulating the structures of reality",
        pref: "Intelligence",
        art: require("../assets/classes/wizard.png"),
        complexity: 3,
      },
    ],
  }),
};
</script>

<style scoped>
.classes-page {
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
  .page-title {
    font-size: 1.5rem;
  }
}

/* Card */
.class-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #12121f;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.class-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.6);
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
  bottom: -1px; /* slightly past the image edge to seamlessly join card-body */
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
.card-pref {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 0.6rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.pref-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64748b;
}
.pref-value {
  font-size: 0.8rem;
  font-weight: 600;
  color: #c084fc;
}
</style>

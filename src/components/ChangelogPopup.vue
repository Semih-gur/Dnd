<template>
  <transition name="fade">
    <div v-if="visible" class="overlay" @click.self="dismiss">
      <div class="popup">
        <div class="popup-header">
          <div class="popup-tag">What's New</div>
          <button class="close-btn" @click="dismiss">
            <v-icon size="18">mdi-close</v-icon>
          </button>
        </div>

        <h2 class="popup-title">{{ changelog.title }}</h2>
        <p class="popup-date">{{ changelog.date }}</p>

        <ul class="popup-list">
          <li
            v-for="item in changelog.changes"
            :key="item.text"
            class="popup-item"
          >
            <span
              class="item-dot"
              :style="{ background: dotColor(item.type) }"
            ></span>
            <span class="item-text">{{ item.text }}</span>
          </li>
        </ul>

        <button class="popup-btn" @click="dismiss">Got it</button>
      </div>
    </div>
  </transition>
</template>

<script>
// Bump this version string with every update you want users to see.
// Changing it causes the popup to show again for everyone.
const CHANGELOG_VERSION = "1.0.1";

export default {
  name: "ChangelogPopup",

  data() {
    return {
      visible: false,
      changelog: {
        title: "Changelog",
        date: "May 2026",
        changes: [
          {
            type: "fix",
            text: "Aasimar image fixed.",
          },
          {
            type: "fix",
            text: "On mobile spell tables were not behaving correctly.",
          },
          { type: "fix", text: "Minor padding and margin problems on mobile." },
        ],
      },
    };
  },

  mounted() {
    const seen = localStorage.getItem("changelog_seen");
    if (seen !== CHANGELOG_VERSION) {
      this.visible = true;
    }
  },

  methods: {
    dismiss() {
      this.visible = false;
      localStorage.setItem("changelog_seen", CHANGELOG_VERSION);
    },
    dotColor(type) {
      const map = { new: "#a3e635", fix: "#38bdf8", change: "#c084fc" };
      return map[type] ?? "#c084fc";
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.popup {
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  border-radius: 16px;
  padding: 2rem;
  max-width: 440px;
  width: 100%;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  position: relative;
}

.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.popup-tag {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.1);
  border: 1px solid rgba(var(--accent-rgb), 0.25);
  padding: 3px 10px;
  border-radius: 999px;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-subtle);
  padding: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  transition: color 0.15s ease, background 0.15s ease;
}
.close-btn:hover {
  color: var(--text-body);
  background: var(--hover-bg);
}

.popup-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 0.25rem;
}

.popup-date {
  font-size: 0.8rem;
  color: var(--text-subtle);
  margin: 0 0 1.5rem;
}

.popup-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.popup-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.item-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 5px;
}

.item-text {
  font-size: 0.875rem;
  color: var(--text-body);
  line-height: 1.55;
}

.popup-btn {
  width: 100%;
  padding: 0.7rem;
  background: rgba(var(--accent-rgb), 0.15);
  border: 1px solid rgba(var(--accent-rgb), 0.4);
  border-radius: 10px;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  cursor: pointer;
  transition: background 0.15s ease;
}
.popup-btn:hover {
  background: rgba(var(--accent-rgb), 0.25);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

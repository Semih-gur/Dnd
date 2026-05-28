<template>
  <v-app>
    <v-app-bar elevation="3" class="nav-bar">
      <!-- Mobile burger + theme toggle — FAR LEFT (mobile only) -->
      <div class="mobile-nav">
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon>
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list class="mobile-dropdown">
            <v-list-item
              v-for="item in navItems"
              :key="item.path"
              @click="goTo(item.path)"
              :class="{
                'mobile-active': $route.path.startsWith('/' + item.path),
              }"
            >
              <template v-slot:prepend>
                <v-icon>{{ item.icon }}</v-icon>
              </template>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Theme toggle — next to burger on mobile only -->
        <div
          class="theme-toggle"
          @click="toggleTheme"
          :title="isDark ? $t('nav.lightMode') : $t('nav.darkMode')"
        >
          <v-icon class="nav-icon">{{
            isDark ? "mdi-weather-sunny" : "mdi-weather-night"
          }}</v-icon>
        </div>
      </div>

      <!-- Logo / Home -->
      <div class="nav-brand" @click="goTo('')">
        <v-icon class="brand-icon">mdi-dragon</v-icon>
        <span class="brand-title">D&D 5.5</span>
      </div>

      <!-- Desktop nav links -->
      <nav class="nav-links">
        <div
          v-for="item in navItems"
          :key="item.path"
          class="nav-item"
          :class="{ active: $route.path.startsWith('/' + item.path) }"
          @click="goTo(item.path)"
        >
          <v-icon class="nav-icon">{{ item.icon }}</v-icon>
          <span class="nav-label">{{ item.label }}</span>
        </div>
      </nav>

      <!-- Right side — theme toggle (desktop) + language + patreon -->
      <div class="nav-right">
        <!-- Theme toggle — desktop only -->
        <div
          class="theme-toggle desktop-theme"
          @click="toggleTheme"
          :title="isDark ? $t('nav.lightMode') : $t('nav.darkMode')"
        >
          <v-icon class="nav-icon">{{
            isDark ? "mdi-weather-sunny" : "mdi-weather-night"
          }}</v-icon>
          <span class="nav-label">{{ $t("nav.theme") }}</span>
        </div>

        <!-- Language dropdown -->
        <v-menu location="bottom end" :offset="[4, 0]">
          <template v-slot:activator="{ props }">
            <div class="lang-toggle nav-item" v-bind="props">
              <img
                :src="currentLanguage.flagUrl"
                class="lang-flag"
                :alt="currentLanguage.label"
              />
              <span class="nav-label lang-code">
                {{ currentLanguage.code.toUpperCase() }}
                <v-icon class="lang-chevron">mdi-chevron-down</v-icon>
              </span>
            </div>
          </template>
          <v-list class="lang-dropdown" density="compact">
            <v-list-item
              v-for="lang in languages"
              :key="lang.code"
              @click="setLocale(lang.code)"
              :class="{ 'lang-active': $i18n.locale === lang.code }"
            >
              <template v-slot:prepend>
                <img
                  :src="lang.flagUrl"
                  class="lang-flag-sm"
                  :alt="lang.label"
                />
              </template>
              <v-list-item-title class="lang-item-title">
                {{ lang.label }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <div
          class="nav-item"
          :class="{ active: $route.path === '/patrons' }"
          @click="goTo('patrons')"
        >
          <v-icon class="nav-icon">mdi-account-group</v-icon>
          <span class="nav-label">{{ $t("nav.patrons") }}</span>
        </div>
        <a
          href="https://www.patreon.com/YOUR_PAGE"
          target="_blank"
          class="patreon-nav-btn"
          title="Support us on Patreon"
        >
          <v-icon size="18">mdi-patreon</v-icon>
          <span class="patreon-nav-label">{{ $t("nav.supportUs") }}</span>
        </a>
      </div>

      <!-- Breadcrumb extension slot -->
      <template v-slot:extension>
        <div class="breadcrumb-inner">
          <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
            <span
              class="crumb"
              :class="{
                'crumb-active': index === breadcrumbs.length - 1,
                'crumb-only': breadcrumbs.length === 1,
              }"
              @click="index < breadcrumbs.length - 1 && goTo(crumb.path)"
            >
              <v-icon v-if="index === 0" class="crumb-home-icon"
                >mdi-home</v-icon
              >
              <span v-else>{{ crumb.label }}</span>
            </span>
            <v-icon v-if="index < breadcrumbs.length - 1" class="crumb-sep">
              mdi-chevron-right
            </v-icon>
          </template>
        </div>
      </template>
    </v-app-bar>

    <router-view></router-view>
    <ChangelogPopup />
  </v-app>
</template>

<script>
import router from "@/router";
import ChangelogPopup from "@/components/ChangelogPopup.vue";
import { dnd2024Nav } from "@/systems.js";

export default {
  name: "App",
  components: { ChangelogPopup },
  data() {
    return {
      isDark: true,
      languages: [
        {
          code: "en",
          label: "English",
          flagUrl: "https://flagcdn.com/w40/gb.png",
        },
        {
          code: "tr",
          label: "Türkçe",
          flagUrl: "https://flagcdn.com/w40/tr.png",
        },
      ],
    };
  },

  mounted() {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      this.isDark = false;
      document.documentElement.setAttribute("data-theme", "light");
      this.$vuetify.theme.global.name = "light";
    }
  },

  watch: {
    $route() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  computed: {
    navItems() {
      if (this.$route.path.startsWith("/dnd/2024")) {
        return dnd2024Nav.map((item) => ({
          path: item.path,
          icon: item.icon,
          label: this.$t(item.labelKey),
        }));
      }
      return [];
    },
    currentLanguage() {
      return (
        this.languages.find((l) => l.code === this.$i18n.locale) ||
        this.languages[0]
      );
    },
    breadcrumbs() {
      const SKIP = new Set(["dnd", "wod"]);
      const LABELS = {
        "2024": "D&D 2024",
        "5e": "D&D 5e",
        "vtm": "Vampire: the Masquerade",
        "werewolf": "Werewolf: the Apocalypse",
        "mage": "Mage: the Ascension",
      };
      const segments = this.$route.path.split("/").filter(Boolean);
      const crumbs = [{ label: "Home", path: "" }];
      segments.reduce((acc, segment) => {
        const path = acc ? `${acc}/${segment}` : segment;
        if (!SKIP.has(segment)) {
          const label = LABELS[segment] || segment
            .split("_")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
          crumbs.push({ label, path });
        }
        return path;
      }, "");
      return crumbs;
    },
  },

  methods: {
    goTo(page) {
      router.push("/" + page);
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.removeAttribute("data-theme");
        this.$vuetify.theme.global.name = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        this.$vuetify.theme.global.name = "light";
        localStorage.setItem("theme", "light");
      }
    },
    setLocale(code) {
      this.$i18n.locale = code;
      localStorage.setItem("locale", code);
    },
  },
};
</script>

<style scoped>
/* ── Bar layout ─────────────────────────────────── */
.nav-bar :deep(.v-toolbar__content) {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 0.25rem;
}

/* ── Brand ──────────────────────────────────────── */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
  padding-right: 1.5rem;
  border-right: 1px solid var(--nav-border);
  user-select: none;
}
.brand-icon {
  font-size: 1.6rem !important;
  color: #c084fc;
}
.brand-title {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
  color: var(--nav-text-active);
}

/* ── Desktop nav ────────────────────────────────── */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: 1rem;
  flex: 1;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  position: relative;
  color: var(--nav-text);
  user-select: none;
}
.nav-item:hover {
  background: var(--hover-bg);
  color: var(--nav-text-active);
}
.nav-item.active {
  color: #c084fc;
  background: rgba(192, 132, 252, 0.1);
}
.nav-item.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 20%;
  right: 20%;
  height: 2px;
  background: #c084fc;
  border-radius: 2px;
}
.nav-icon {
  font-size: 1.15rem !important;
}
.nav-label {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  white-space: nowrap;
}

/* ── Right side group ───────────────────────────── */
.nav-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-left: auto;
}

/* ── Theme toggle ───────────────────────────────── */
.theme-toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--nav-text);
  transition: background 0.15s ease, color 0.15s ease;
  user-select: none;
}
.theme-toggle:hover {
  background: var(--hover-bg);
  color: var(--nav-text-active);
}

/* Desktop theme shows, mobile theme hides */
.desktop-theme {
  display: flex;
}

/* Language toggle */
.lang-toggle {
  min-width: 52px;
}
.lang-flag {
  width: 22px;
  height: auto;
  border-radius: 2px;
  display: block;
}
.lang-code {
  display: flex;
  align-items: center;
  gap: 2px;
}
.lang-chevron {
  font-size: 0.7rem !important;
  opacity: 0.7;
}

/* Language dropdown list */
.lang-dropdown {
  min-width: 140px;
  background: #1e1e2e !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px !important;
}
.lang-flag-sm {
  width: 20px;
  height: auto;
  border-radius: 2px;
  margin-right: 8px;
  display: block;
}
.lang-item-title {
  font-size: 0.85rem !important;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
}
.lang-active .lang-item-title {
  color: #c084fc !important;
}
.lang-active {
  background: rgba(192, 132, 252, 0.1) !important;
}

/* ── Patreon nav button ─────────────────────────── */
.patreon-nav-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  background: #f97316;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.15s ease, transform 0.15s ease;
}
.patreon-nav-btn:hover {
  background: #ea6c00;
  transform: translateY(-1px);
}

/* ── Mobile nav ─────────────────────────────────── */
.mobile-nav {
  display: none;
  align-items: center;
  flex-shrink: 0;
  gap: 0.25rem;
}

@media (max-width: 700px) {
  /* Show mobile nav */
  .mobile-nav {
    display: flex;
  }
  /* Hide desktop nav links */
  .nav-links {
    display: none;
  }
  /* Hide desktop theme toggle */
  .desktop-theme {
    display: none;
  }
  /* Center brand */
  .brand-title {
    display: none;
  }
  .nav-brand {
    border-right: none;
    padding-right: 0;
    flex: 1;
    justify-content: center;
  }
  /* Mobile theme — icon only */
  .mobile-nav .theme-toggle {
    padding: 6px 8px;
  }
  /* Patreon — icon only */
  .patreon-nav-label {
    display: none;
  }
  .patreon-nav-btn {
    padding: 0.4rem 0.6rem;
  }
}

/* ── Mobile dropdown ────────────────────────────── */
.mobile-dropdown {
  min-width: 180px;
}
.mobile-active {
  color: #c084fc !important;
}

/* ── Breadcrumb ─────────────────────────────────── */
.nav-bar :deep(.v-toolbar__extension) {
  padding: 0 1.5rem;
  height: 36px !important;
  border-top: 1px solid var(--breadcrumb-ext-border);
  background: var(--breadcrumb-ext-bg);
}
.breadcrumb-inner {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  width: 100%;
}
.crumb {
  margin-left: 1%;
  display: flex;
  align-items: center;
  font-size: 0.78rem;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;
  transition: color 0.15s ease, background 0.15s ease;
  user-select: none;
  letter-spacing: 0.02em;
}
.crumb:hover {
  color: #c084fc;
  background: rgba(192, 132, 252, 0.08);
}
.crumb-active {
  color: var(--nav-text-active);
  cursor: default;
  font-weight: 600;
}
.crumb-active:hover {
  background: transparent;
  color: var(--nav-text-active);
}
.crumb-only {
  cursor: default;
  color: var(--nav-text-active);
}
.crumb-only:hover {
  background: transparent;
  color: var(--nav-text-active);
}
.crumb-home-icon {
  font-size: 0.95rem !important;
  color: inherit;
}
.crumb-sep {
  font-size: 0.9rem !important;
  color: var(--breadcrumb-sep);
}
</style>

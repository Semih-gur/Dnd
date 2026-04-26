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
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <v-icon class="nav-icon">{{
            isDark ? "mdi-weather-sunny" : "mdi-weather-night"
          }}</v-icon>
        </div>
      </div>

      <!-- Logo / Home -->
      <div class="nav-brand" @click="goTo('')">
        <v-icon class="brand-icon">mdi-dragon</v-icon>
        <span class="brand-title">D&D 2024</span>
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

      <!-- Right side — theme toggle (desktop) + patreon -->
      <div class="nav-right">
        <!-- Theme toggle — desktop only -->
        <div
          class="theme-toggle desktop-theme"
          @click="toggleTheme"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <v-icon class="nav-icon">{{
            isDark ? "mdi-weather-sunny" : "mdi-weather-night"
          }}</v-icon>
          <span class="nav-label">Theme</span>
        </div>

        <a
          href="https://www.patreon.com/YOUR_PAGE"
          target="_blank"
          class="patreon-nav-btn"
          title="Support us on Patreon"
        >
          <v-icon size="18">mdi-patreon</v-icon>
          <span class="patreon-nav-label">Support Us</span>
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
  </v-app>
</template>

<script>
import router from "@/router";

export default {
  name: "App",
  data() {
    return {
      isDark: true,
      navItems: [
        { path: "wiki/species", icon: "mdi-account", label: "Species" },
        { path: "wiki/classes", icon: "mdi-sword-cross", label: "Classes" },
        { path: "wiki/spells", icon: "mdi-auto-fix", label: "Spells" },
        {
          path: "wiki/backgrounds",
          icon: "mdi-map-marker-radius",
          label: "Backgrounds",
        },
        { path: "wiki/feats", icon: "mdi-star-circle-outline", label: "Feats" },
        { path: "wiki/items", icon: "mdi-bag-personal", label: "Items" },
      ],
    };
  },

  mounted() {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      this.isDark = false;
      document.documentElement.setAttribute("data-theme", "light");
    }
  },

  watch: {
    $route() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  computed: {
    breadcrumbs() {
      const segments = this.$route.path.split("/").filter(Boolean);
      const crumbs = [{ label: "Home", path: "" }];
      segments.reduce((acc, segment) => {
        const path = acc ? `${acc}/${segment}` : segment;
        const label = segment
          .split("_")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");
        crumbs.push({ label, path });
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
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
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
  border-right: 1px solid rgba(255, 255, 255, 0.12);
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
  color: #f1f5f9;
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
  color: rgba(255, 255, 255, 0.6);
  user-select: none;
}
.nav-item:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #f1f5f9;
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
  color: rgba(255, 255, 255, 0.6);
  transition: background 0.15s ease, color 0.15s ease;
  user-select: none;
}
.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #f1f5f9;
}

/* Desktop theme shows, mobile theme hides */
.desktop-theme {
  display: flex;
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
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
}
.breadcrumb-inner {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  width: 100%;
}
.crumb {
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
  color: #f1f5f9;
  cursor: default;
  font-weight: 600;
}
.crumb-active:hover {
  background: transparent;
  color: #f1f5f9;
}
.crumb-only {
  cursor: default;
  color: #f1f5f9;
}
.crumb-only:hover {
  background: transparent;
  color: #f1f5f9;
}
.crumb-home-icon {
  font-size: 0.95rem !important;
  color: inherit;
}
.crumb-sep {
  font-size: 0.9rem !important;
  color: rgba(255, 255, 255, 0.2);
}
</style>

<template>
  <v-app>
    <v-app-bar elevation="3" class="nav-bar">
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

      <!-- Mobile burger -->
      <v-menu offset-y class="mobile-menu">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon class="mobile-burger">
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
          <a
            href="https://www.patreon.com/YOUR_PAGE"
            target="_blank"
            class="patreon-float"
            title="Support us on Patreon"
            ><v-icon size="20">mdi-patreon</v-icon>
            <span class="patreon-float-label">Support Us</span></a
          >
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
  },
};
</script>

<style scoped>
/* ── Bar layout ─────────────────────────────────── */
.nav-bar :deep(.v-toolbar__content) {
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
}

/* ── Brand ──────────────────────────────────────── */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
  padding-right: 2rem;
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
  margin-left: 1.5rem;
  flex: 1;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  position: relative;
  color: rgba(255, 255, 255, 0.6);
  user-select: none;
}
.nav-item:hover {
  background: rgba(255, 255, 255, 0.08);
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

/* ── Mobile burger ──────────────────────────────── */
.mobile-burger {
  display: none !important;
  margin-left: auto;
}

@media (max-width: 700px) {
  .nav-links {
    display: none;
  }
  .mobile-burger {
    display: flex !important;
  }
  .brand-title {
    display: none;
  }
  .nav-brand {
    border-right: none;
    padding-right: 0;
  }
}

/* ── Mobile dropdown ────────────────────────────── */
.mobile-dropdown {
  min-width: 180px;
}
.mobile-active {
  color: #c084fc !important;
}

/* ── Breadcrumb extension slot ──────────────────── */
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
  color: rgba(255, 255, 255, 0.45);
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
/* ── Patreon Float ──────────────────────────────── */
.patreon-float {
  position: fixed;
  bottom: 1.75rem;
  right: 1.75rem;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem 0.65rem 0.9rem;
  background: #f97316;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(249, 115, 22, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease;
  overflow: hidden;
  white-space: nowrap;
}

/* On hover expand slightly and lift */
.patreon-float:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(249, 115, 22, 0.55);
}

/* Pulse ring animation */
.patreon-float::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 2px solid rgba(249, 115, 22, 0.6);
  animation: patreon-pulse 2s ease-out infinite;
}

@keyframes patreon-pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  70% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Mobile — shrink to icon only */
@media (max-width: 640px) {
  .patreon-float-label {
    display: none;
  }
  .patreon-float {
    padding: 0.75rem;
  }
}
</style>

<template>
  <div class="magic-items-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t('magicItems.title') }}</h1>
        </div>
      </div>
    </div>

    <div class="page-content">
      <!-- Rarity tabs -->
      <div class="tabs-wrap">
        <div class="tabs">
          <button
            v-for="category in items"
            :key="category.type"
            class="tab"
            :class="{ active: tab === category.type }"
            @click="tab = category.type"
          >
            <span
              class="tab-dot"
              :class="'dot-' + category.type.replace(' ', '-')"
            ></span>
            {{ formatType(category.type) }}
            <span class="tab-count">{{ category.items.length }}</span>
          </button>
        </div>
      </div>

      <!-- Search -->
      <div class="search-wrap">
        <input
          v-model="search"
          class="search-input"
          :placeholder="$t('magicItems.searchPlaceholder')"
          type="text"
        />
        <span class="search-icon">⌕</span>
      </div>

      <!-- Table -->
      <div class="table-wrap">
        <table class="items-table">
          <thead>
            <tr>
              <th
                v-for="col in tableColumns"
                :key="col.key"
                :class="{ sorted: sortKey === col.key }"
                @click="setSort(col.key)"
              >
                <div class="th-inner">
                  {{ col.label }}
                  <span class="sort-icon">
                    <span v-if="sortKey === col.key">{{
                      sortDir === "asc" ? "↑" : "↓"
                    }}</span>
                    <span v-else class="sort-idle">↕</span>
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in filteredItems"
              :key="item.name"
              class="item-row"
              @click="openItem(item)"
            >
              <td class="item-name">{{ $lf(item, 'name') }}</td>
              <td>
                <span class="type-badge">{{ $lf(item, 'type') }}</span>
              </td>
              <td>
                <span
                  class="attune-badge"
                  :class="item.attuned !== '-' ? 'yes' : 'no'"
                >
                  {{ item.attuned !== "-" ? item.attuned : $t('magicItems.noAttunement') }}
                </span>
              </td>
              <td class="price-cell">{{ item.price }}</td>
            </tr>
            <tr v-if="filteredItems.length === 0">
              <td colspan="4" class="empty-row">
                {{ $t('magicItems.noItems', { q: search }) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Item detail popup -->
    <v-dialog v-model="dialog" max-width="560">
      <div class="popup" v-if="selectedItem">
        <div class="popup-header">
          <div>
            <span class="popup-eyebrow">{{ formatType(tab) }} {{ $t('magicItems.popupEyebrow') }}</span>
            <h2 class="popup-title">{{ $lf(selectedItem, 'name') }}</h2>
            <div class="popup-meta">
              <span class="type-badge">{{ $lf(selectedItem, 'type') }}</span>
              <span
                class="attune-badge"
                :class="selectedItem.attuned !== '-' ? 'yes' : 'no'"
              >
                {{
                  selectedItem.attuned !== "-"
                    ? $t('magicItems.requiresAttunement') +
                      (selectedItem.attuned !== "Yes"
                        ? " (" + selectedItem.attuned + ")"
                        : "")
                    : $t('magicItems.noAttunement')
                }}
              </span>
            </div>
          </div>
          <button class="popup-close" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </button>
        </div>

        <div class="popup-price">
          <span class="price-label">{{ $t('magicItems.estimatedValue') }}</span>
          <span class="price-value">{{ selectedItem.price }}</span>
        </div>

        <div class="popup-desc">
          <h3 class="popup-desc-title">{{ $t('magicItems.description') }}</h3>
          <p class="popup-desc-text">{{ $lf(selectedItem, 'description') }}</p>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    const magicItems = this.$route.path.startsWith("/dnd/5e/")
      ? require("@/views/dnd5e/Items/magicItems.json")
      : require("./magicItems.json");
    return {
      items: magicItems,
      tab: magicItems[0].type,
      search: "",
      sortKey: "name",
      sortDir: "asc",
      dialog: false,
      selectedItem: null,
      columns: [],
    };
  },

  computed: {
    tableColumns() {
      return [
        { key: "name",    label: this.$t('magicItems.col.name') },
        { key: "type",    label: this.$t('magicItems.col.type') },
        { key: "attuned", label: this.$t('magicItems.col.attunement') },
        { key: "price",   label: this.$t('magicItems.col.price') },
      ];
    },
    currentItems() {
      return this.items.find((c) => c.type === this.tab)?.items ?? [];
    },
    filteredItems() {
      const q = this.search.toLowerCase();
      const list = q
        ? this.currentItems.filter(
            (i) =>
              i.name.toLowerCase().includes(q) ||
              i.type.toLowerCase().includes(q) ||
              i.description.toLowerCase().includes(q),
          )
        : this.currentItems;

      return [...list].sort((a, b) => {
        const aVal = (a[this.sortKey] ?? "").toString().toLowerCase();
        const bVal = (b[this.sortKey] ?? "").toString().toLowerCase();
        if (aVal < bVal) return this.sortDir === "asc" ? -1 : 1;
        if (aVal > bVal) return this.sortDir === "asc" ? 1 : -1;
        return 0;
      });
    },
    totalItems() {
      return this.items.reduce((acc, c) => acc + c.items.length, 0);
    },
  },

  watch: {
    tab() {
      this.search = "";
      this.sortKey = "name";
      this.sortDir = "asc";
    },
  },

  methods: {
    formatType(type) {
      const key = "magicItems.rarity." + type.replace(" ", "_");
      const tr = this.$t(key);
      if (tr !== key) return tr;
      return type.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    },
    setSort(key) {
      if (this.sortKey === key) {
        this.sortDir = this.sortDir === "asc" ? "desc" : "asc";
      } else {
        this.sortKey = key;
        this.sortDir = "asc";
      }
    },
    openItem(item) {
      this.selectedItem = item;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.magic-items-page {
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
.hero-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
  margin-bottom: 0.4rem;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.4rem;
  line-height: 1.1;
}
.hero-subtitle {
  font-size: 0.85rem;
  color: var(--text-subtle);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* ── Tabs ───────────────────────────────────────── */
.tabs-wrap {
  overflow-x: auto;
  margin-bottom: 1.25rem;
  padding-bottom: 2px;
}
.tabs {
  display: flex;
  gap: 0.35rem;
  min-width: max-content;
}
.tab {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 6px 14px;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  border-radius: 999px;
  border: 1px solid var(--border-light);
  background: transparent;
  color: var(--text-subtle);
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.tab:hover {
  border-color: rgba(var(--accent-rgb), 0.3);
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.06);
}
.tab.active {
  background: rgba(var(--accent-rgb), 0.15);
  border-color: rgba(var(--accent-rgb), 0.4);
  color: var(--accent);
}
.tab-count {
  font-size: 0.65rem;
  background: rgba(var(--accent-rgb), 0.15);
  color: var(--accent);
  border-radius: 999px;
  padding: 1px 6px;
}

/* Rarity dots */
.tab-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.dot-common {
  background: #94a3b8;
}
.dot-uncommon {
  background: #a3e635;
}
.dot-rare {
  background: #60a5fa;
}
.dot-very-rare {
  background: #c084fc;
}
.dot-legendary {
  background: #fb923c;
}
.dot-artifact {
  background: #f87171;
}

/* ── Search ─────────────────────────────────────── */
.search-wrap {
  position: relative;
  margin-bottom: 1rem;
}
.search-input {
  width: 100%;
  padding: 0.6rem 1rem 0.6rem 2.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 10px;
  color: var(--text-body);
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.15s ease;
  box-sizing: border-box;
}
.search-input::placeholder {
  color: var(--text-faint2);
}
.search-input:focus {
  border-color: rgba(var(--accent-rgb), 0.4);
}
.search-icon {
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-faint2);
  font-size: 1rem;
  pointer-events: none;
}

/* ── Table ──────────────────────────────────────── */
.table-wrap {
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  overflow-x: auto;
}
.items-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  table-layout: fixed;
}
.items-table thead tr {
  background: rgba(var(--accent-rgb), 0.1);
}
.items-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;
}
.items-table th:hover {
  background: rgba(var(--accent-rgb), 0.18);
}
.items-table th.sorted {
  background: rgba(var(--accent-rgb), 0.2);
}

/* Column widths */
.items-table th:nth-child(1) {
  width: 35%;
}
.items-table th:nth-child(2) {
  width: 30%;
}
.items-table th:nth-child(3) {
  width: 20%;
}
.items-table th:nth-child(4) {
  width: 15%;
}

.th-inner {
  display: flex;
  align-items: center;
  gap: 6px;
}
.sort-icon {
  font-size: 0.7rem;
  opacity: 0.8;
}
.sort-idle {
  opacity: 0.3;
}

.item-row {
  border-bottom: 1px solid var(--border-faint);
  transition: background 0.15s ease;
  cursor: pointer;
}
.item-row:last-child {
  border-bottom: none;
}
.item-row:hover {
  background: rgba(192, 132, 252, 0.05);
}
.items-table td {
  padding: 0.65rem 1rem;
  color: var(--text-muted);
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-name {
  color: var(--text-heading) !important;
  font-weight: 500;
}
.item-row:hover .item-name {
  color: var(--accent) !important;
}

.price-cell {
  font-family: monospace;
  font-size: 0.8rem;
}

.type-badge {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
}

.attune-badge {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
}
.attune-badge.yes {
  background: rgba(163, 230, 53, 0.1);
  color: #a3e635;
  border: 1px solid rgba(163, 230, 53, 0.2);
}
.attune-badge.no {
  background: rgba(100, 116, 139, 0.1);
  color: var(--text-subtle);
  border: 1px solid rgba(100, 116, 139, 0.2);
}

.empty-row {
  text-align: center;
  color: #475569 !important;
  padding: 2rem !important;
  font-style: italic;
}

/* ── Popup ──────────────────────────────────────── */
.popup {
  background: var(--bg-card);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  border-radius: 16px;
  overflow: hidden;
}
.popup-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid var(--border-subtle);
}
.popup-eyebrow {
  display: block;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
  margin-bottom: 0.3rem;
}
.popup-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.6rem;
}
.popup-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.popup-close {
  background: transparent;
  border: none;
  color: var(--text-subtle);
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
}
.popup-close:hover {
  color: var(--text-heading);
  background: rgba(255, 255, 255, 0.08);
}
.popup-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--border-subtle);
  background: var(--hover-bg);
}
.price-label {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-subtle);
}
.price-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: #fb923c;
  font-family: monospace;
}
.popup-desc {
  padding: 1.25rem 1.5rem 1.5rem;
}
.popup-desc-title {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin: 0 0 0.6rem;
}
.popup-desc-text {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.75;
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

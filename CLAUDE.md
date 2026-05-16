# Beholder's Tavern — D&D 2024 Reference App

## Stack
- Vue 3 (Options API), Vuetify 3, vue-i18n@9 (`legacy: true`)
- Run dev server: `npm run serve` (NOT `npm run build`)

## Internationalization Pattern

### Static UI strings
Use `$t('key')` — translations live in `src/locales/tr.json` and `en.json`.

### Dynamic JSON content (names, descriptions, etc.)
Use `$lf(obj, 'fieldName')` — a custom global helper registered in `main.js`.
- Returns `obj.fieldName_tr` when locale is `'tr'`, else `obj.fieldName`
- Falls back to English if no `_tr` field exists

Turkish translations are added as sibling `_tr` fields directly in the JSON files:
```json
{ "name": "Barbarian", "name_tr": "Barbar" }
```

### Language toggle
Stored in `localStorage` key `"locale"`. Values: `"en"` or `"tr"`.

---

## Translation Status

### Fully translated
- `src/locales/tr.json` — all static UI strings
- `src/views/races.json` — race trait `name_tr` fields added
- `src/views/SRaceView.vue` — uses `$lf(trait, 'name')`
- `src/views/backgrounds.json` — all 15 backgrounds: `name_tr`, `flavor_tr`, `abilityScore_tr`, `feat_tr`, `skill_tr`, `tool_tr`, `equipment_tr`
- `src/views/BackgroundsView.vue` — fully uses `$lf()`
- `src/views/feats.json` — all feat `name_tr` and ability `aName_tr` fields added
- `src/views/FeatsView.vue` — uses `$lf()` for feat names and ability names; `$lf(ability, 'aDesc')` for descriptions
- All 12 class JSON files (`barbarian.json` … `wizard.json`) — `title_tr`, `feature_tr`, `value_tr`, `subclassPrefix_tr` added
- All 12 class Vue views (`BarbarianView.vue` … `WizardView.vue`) — fully use `$lf()`

### Partially translated
- `src/views/feats.json` — `aDesc_tr` fields NOT yet added to ability descriptions (pending)
- `src/views/races.json` — race `desc` long descriptions still in English
- Race feat/trait `desc` short descriptions still in English

### Not started
- `src/views/SpellView/` — spell names, school, effect, upgrade
- `src/views/Items/` — weapons, armors, potions, magic items

---

## Key Files

| File | Purpose |
|------|---------|
| `src/locales/tr.json` | Static UI string translations |
| `src/views/feats.json` | All feats (origin, general, fightStyle, epic) |
| `src/views/backgrounds.json` | All 15 backgrounds |
| `src/views/races.json` | All races and their traits |
| `src/views/Class/*.json` | Per-class data (12 files) |

## feats.json Structure
```json
[
  {
    "typ": "origin",
    "feats": [
      {
        "name": "alert",
        "name_tr": "teyakkuz",
        "abilites": [
          {
            "aName": "Initiative Proficiency.",
            "aName_tr": "Girişim Uzmanlığı.",
            "aDesc": "When you roll Initiative...",
            "aDesc_tr": "Girişim attığınızda..."
          }
        ]
      }
    ]
  }
]
```

## Class JSON Structure
```json
{
  "name": "Barbarian",
  "name_tr": "Barbar",
  "coreTraits": [
    { "label": "Primary Ability", "label_tr": "Birincil Nitelik", "value": "Strength", "value_tr": "Güç" }
  ],
  "levels": [
    { "level": 1, "feature": "Rage, Unarmored Defense", "feature_tr": "Öfke, Zırhsız Savunma" }
  ],
  "levelPanels": [
    { "features": [{ "title": "Rage", "title_tr": "Öfke", "body": "<p>...</p>", "body_tr": "<p>...</p>" }] }
  ]
}
```

## Important Rules
- NEVER run `npm run build` — always use `npm run serve`
- Do NOT use Bash heredocs for content with single quotes — use the Write tool instead
- The `$lf()` helper gracefully falls back to English, so partial translations are safe

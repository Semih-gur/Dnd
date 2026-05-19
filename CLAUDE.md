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
- `src/views/races.json` — all 10 races: `desc_tr`, feat `name_tr`, feat `desc_tr` fully added
- `src/views/SRaceView.vue` — uses `$lf(race, 'desc')` and `$lf(trait, 'name')` and `$lf(trait, 'desc')`
- `src/views/backgrounds.json` — all 15 backgrounds: `name_tr`, `flavor_tr`, `abilityScore_tr`, `feat_tr`, `skill_tr`, `tool_tr`, `equipment_tr`
- `src/views/BackgroundsView.vue` — fully uses `$lf()`
- `src/views/feats.json` — all feat `name_tr`, `aName_tr`, and `aDesc_tr` fields added
- `src/views/FeatsView.vue` — uses `$lf()` for feat names, ability names, and ability descriptions
- All 12 class JSON files (`barbarian.json` … `wizard.json`) — `title_tr`, `feature_tr`, `value_tr`, `subclassPrefix_tr` added
- All 12 class Vue views (`BarbarianView.vue` … `WizardView.vue`) — fully use `$lf()`

### Fully translated (continued)
- `src/views/Items/weapons.json` — all 38 weapons: `name_tr`, `properties_tr`, `mastery_tr`
- `src/views/Items/armors.json` — all 14 armors: `name_tr`
- `src/views/Items/potions.json` — all 32 potions: `name_tr`, `effect_tr`
- `src/views/Items/magicItems.json` — all 210 magic items: `type_tr`, `description_tr`, `name_tr`
- `src/views/Items/WeaponsView.vue` — fully uses `$lf()` and `$t()`
- `src/views/Items/ArmorsView.vue` — fully uses `$lf()` and `$t()`
- `src/views/Items/PotionsView.vue` — fully uses `$lf()` and `$t()`
- `src/views/Items/MagicItems.vue` — fully uses `$lf()` and `$t()`
- `src/views/SpellView/allSpells.json` (level "0") — all 32 cantrips: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`
- `src/views/SpellView/CSpellView.vue` — fully uses `$lf()` and `$t()` (tab labels, column headers, name, school)
- `src/views/SpellView/SpellDesc.vue` — fully uses `$lf()` and `$t()` (name, school, effect, upgrade, stat labels)

### Fully translated (continued)
- `src/views/SpellView/allSpells.json` level 1 — all 63 spells: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`, `components_tr` where needed
- `src/views/SpellView/allSpells.json` level 2 — all 68 spells: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`, `components_tr` where needed
- `src/views/SpellView/allSpells.json` level 3 — all 61 spells: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`, `components_tr` where needed
- `src/views/SpellView/allSpells.json` level 4 — all 45 spells: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`, `components_tr` where needed
- `src/views/SpellView/allSpells.json` level 5 — all 54 spells: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`, `components_tr` where needed
- `src/views/SpellView/allSpells.json` level 6 — all 40 spells: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`, `components_tr` where needed
- `src/views/SpellView/allSpells.json` level 7 — all 22 spells: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`, `components_tr` where needed
- `src/views/SpellView/allSpells.json` level 8 — all 21 spells: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`, `components_tr` where needed
- `src/views/SpellView/allSpells.json` level 9 — all 20 spells: `name_tr`, `school_tr`, `effect_tr`, `upgrade_tr`, `components_tr` where needed

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
            "aName_tr": "İnisiyatif Uzmanlığı.",
            "aDesc": "When you roll Initiative...",
            "aDesc_tr": "İnisiyatif attığınızda..."
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

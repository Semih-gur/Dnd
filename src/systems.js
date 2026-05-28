export const systems = [
  {
    id: "dnd",
    name: "Dungeons & Dragons",
    icon: "mdi-dice-d20",
    tagline: "The world's greatest roleplaying game",
    accentColor: "#c084fc",
    accentRgb: "192, 132, 252",
    cardBg: "rgba(192, 132, 252, 0.07)",
    cardBorder: "rgba(192, 132, 252, 0.25)",
    editions: [
      {
        id: "2024",
        label: "5.5e (2024)",
        available: true,
        basePath: "/dnd/2024",
      },
      {
        id: "5e",
        label: "5e (2014)",
        available: true,
        basePath: "/dnd/5e",
      },
    ],
  },
  {
    id: "wod",
    name: "World of Darkness",
    icon: "mdi-coffin",
    tagline: "Modern gothic horror roleplaying",
    accentColor: "#ef4444",
    accentRgb: "239, 68, 68",
    cardBg: "rgba(239, 68, 68, 0.07)",
    cardBorder: "rgba(239, 68, 68, 0.25)",
    editions: [
      {
        id: "vtm",
        label: "Vampire: the Masquerade",
        available: false,
        basePath: "/wod/vtm",
      },
      {
        id: "werewolf",
        label: "Werewolf: the Apocalypse",
        available: false,
        basePath: "/wod/werewolf",
      },
      {
        id: "mage",
        label: "Mage: the Ascension",
        available: false,
        basePath: "/wod/mage",
      },
    ],
  },
];

export const dnd5eNav = [
  {
    path: "dnd/5e/wiki/species",
    icon: "mdi-account",
    labelKey: "nav.species",
  },
  {
    path: "dnd/5e/wiki/classes",
    icon: "mdi-sword-cross",
    labelKey: "nav.classes",
  },
  {
    path: "dnd/5e/wiki/spells",
    icon: "mdi-auto-fix",
    labelKey: "nav.spells",
  },
  {
    path: "dnd/5e/wiki/backgrounds",
    icon: "mdi-map-marker-radius",
    labelKey: "nav.backgrounds",
  },
  {
    path: "dnd/5e/wiki/feats",
    icon: "mdi-star-circle-outline",
    labelKey: "nav.feats",
  },
  {
    path: "dnd/5e/wiki/items",
    icon: "mdi-bag-personal",
    labelKey: "nav.items",
  },
  {
    path: "dnd/5e/wiki/conditions",
    icon: "mdi-alert-circle-outline",
    labelKey: "nav.conditions",
  },
];

export const dnd2024Nav = [
  {
    path: "dnd/2024/wiki/species",
    icon: "mdi-account",
    labelKey: "nav.species",
  },
  {
    path: "dnd/2024/wiki/classes",
    icon: "mdi-sword-cross",
    labelKey: "nav.classes",
  },
  {
    path: "dnd/2024/wiki/spells",
    icon: "mdi-auto-fix",
    labelKey: "nav.spells",
  },
  {
    path: "dnd/2024/wiki/backgrounds",
    icon: "mdi-map-marker-radius",
    labelKey: "nav.backgrounds",
  },
  {
    path: "dnd/2024/wiki/feats",
    icon: "mdi-star-circle-outline",
    labelKey: "nav.feats",
  },
  {
    path: "dnd/2024/wiki/items",
    icon: "mdi-bag-personal",
    labelKey: "nav.items",
  },
  {
    path: "dnd/2024/wiki/conditions",
    icon: "mdi-alert-circle-outline",
    labelKey: "nav.conditions",
  },
];

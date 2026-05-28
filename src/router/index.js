import { createRouter, createWebHistory } from "vue-router";
import WikiHomeView from "../views/WikiHomeView.vue";
import LandingView from "@/views/LandingView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import RacesView from "@/views/RacesView.vue";
import ClassesView from "@/views/ClassesView.vue";
import BarbarianView from "@/views/Class/BarbarianView.vue";
import BardView from "@/views/Class/BardView.vue";
import ClericView from "@/views/Class/ClericView.vue";
import SubclassView from "@/views/Class/SubclassView.vue";
import SRaceView from "@/views/SRaceView.vue";
import SpellsView from "@/views/SpellView/SpellView.vue";
import CspellView from "@/views/SpellView/CSpellView.vue";
import BackgroundsView from "@/views/BackgroundsView.vue";
import BackgrView from "@/views/BackgrView.vue";
import FeatsView from "@/views/FeatsView.vue";
import DruidView from "@/views/Class/DruidView.vue";
import FighterView from "@/views/Class/FighterView.vue";
import MonkView from "@/views/Class/MonkView.vue";
import PaladinView from "@/views/Class/PaladinView.vue";
import RangerView from "@/views/Class/RangerView.vue";
import RogueView from "@/views/Class/RogueView.vue";
import SorcererView from "@/views/Class/SorcererView.vue";
import WarlockView from "@/views/Class/WarlockView.vue";
import WizardView from "@/views/Class/WizardView.vue";
import ItemsView from "@/views/Items/ItemsView.vue";
import WeaponsView from "@/views/Items/WeaponsView.vue";
import ArmorsView from "@/views/Items/ArmorsView.vue";
import PotionsView from "@/views/Items/PotionsView.vue";
import SpellDesc from "@/views/SpellView/SpellDesc.vue";
import MagicItems from "@/views/Items/MagicItems.vue";
import CharacterCreatorView from "@/views/CharacterCreator/CharacterCreatorView.vue";
import PatronsView from "@/views/PatronsView.vue";
import ConditionsView from "@/views/Conditions/ConditionsView.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingView,
  },
  {
    path: "/dnd/2024",
    name: "home",
    component: HomeViewVue,
  },
  {
    path: "/patrons",
    name: "Patrons",
    component: PatronsView,
  },
  {
    path: "/character_creator",
    name: "CharacterCreator",
    component: CharacterCreatorView,
  },

  // ── D&D 2024 ─────────────────────────────────────
  {
    path: "/dnd/2024/wiki",
    name: "Wiki",
    component: WikiHomeView,
  },
  {
    path: "/dnd/2024/wiki/species",
    name: "Species",
    component: RacesView,
  },
  {
    path: "/dnd/2024/wiki/species/:label",
    name: "SRace",
    component: SRaceView,
  },
  {
    path: "/dnd/2024/wiki/classes",
    name: "Classes",
    component: ClassesView,
  },
  {
    path: "/dnd/2024/wiki/classes/barbarian",
    name: "Barbarian",
    component: BarbarianView,
  },
  {
    path: "/dnd/2024/wiki/classes/bard",
    name: "Bard",
    component: BardView,
  },
  {
    path: "/dnd/2024/wiki/classes/cleric",
    name: "Cleric",
    component: ClericView,
  },
  {
    path: "/dnd/2024/wiki/classes/druid",
    name: "Druid",
    component: DruidView,
  },
  {
    path: "/dnd/2024/wiki/classes/fighter",
    name: "Fighter",
    component: FighterView,
  },
  {
    path: "/dnd/2024/wiki/classes/monk",
    name: "Monk",
    component: MonkView,
  },
  {
    path: "/dnd/2024/wiki/classes/paladin",
    name: "Paladin",
    component: PaladinView,
  },
  {
    path: "/dnd/2024/wiki/classes/ranger",
    name: "Ranger",
    component: RangerView,
  },
  {
    path: "/dnd/2024/wiki/classes/rogue",
    name: "Rogue",
    component: RogueView,
  },
  {
    path: "/dnd/2024/wiki/classes/sorcerer",
    name: "Sorcerer",
    component: SorcererView,
  },
  {
    path: "/dnd/2024/wiki/classes/warlock",
    name: "Warlock",
    component: WarlockView,
  },
  {
    path: "/dnd/2024/wiki/classes/wizard",
    name: "Wizard",
    component: WizardView,
  },
  {
    path: "/dnd/2024/wiki/classes/:class/:subclass",
    name: "Subclass",
    component: SubclassView,
  },
  {
    path: "/dnd/2024/wiki/spells",
    name: "Spells",
    component: SpellsView,
  },
  {
    path: "/dnd/2024/wiki/spells/:className",
    name: "cSpells",
    component: CspellView,
  },
  {
    path: "/dnd/2024/wiki/spells/:className/:spellName",
    name: "Spell",
    component: SpellDesc,
  },
  {
    path: "/dnd/2024/wiki/backgrounds",
    name: "backgrounds",
    component: BackgroundsView,
  },
  {
    path: "/dnd/2024/wiki/backgrounds/:background",
    name: "Background",
    component: BackgrView,
  },
  {
    path: "/dnd/2024/wiki/feats",
    name: "Feats",
    component: FeatsView,
  },
  {
    path: "/dnd/2024/wiki/items",
    name: "Items",
    component: ItemsView,
  },
  {
    path: "/dnd/2024/wiki/items/weapons",
    name: "Weapons",
    component: WeaponsView,
  },
  {
    path: "/dnd/2024/wiki/items/armors",
    name: "Armors",
    component: ArmorsView,
  },
  {
    path: "/dnd/2024/wiki/items/potions",
    name: "Potions",
    component: PotionsView,
  },
  {
    path: "/dnd/2024/wiki/items/magic_items",
    name: "Magic Items",
    component: MagicItems,
  },
  {
    path: "/dnd/2024/wiki/conditions",
    name: "Conditions",
    component: ConditionsView,
  },

  // ── D&D 5e ───────────────────────────────────────
  {
    path: "/dnd/5e",
    component: HomeViewVue,
  },
  {
    path: "/dnd/5e/wiki",
    component: WikiHomeView,
  },
  {
    path: "/dnd/5e/wiki/species",
    component: RacesView,
  },
  {
    path: "/dnd/5e/wiki/species/:label",
    component: SRaceView,
  },
  {
    path: "/dnd/5e/wiki/classes",
    component: ClassesView,
  },
  {
    path: "/dnd/5e/wiki/classes/barbarian",
    component: BarbarianView,
  },
  {
    path: "/dnd/5e/wiki/classes/bard",
    component: BardView,
  },
  {
    path: "/dnd/5e/wiki/classes/cleric",
    component: ClericView,
  },
  {
    path: "/dnd/5e/wiki/classes/druid",
    component: DruidView,
  },
  {
    path: "/dnd/5e/wiki/classes/fighter",
    component: FighterView,
  },
  {
    path: "/dnd/5e/wiki/classes/monk",
    component: MonkView,
  },
  {
    path: "/dnd/5e/wiki/classes/paladin",
    component: PaladinView,
  },
  {
    path: "/dnd/5e/wiki/classes/ranger",
    component: RangerView,
  },
  {
    path: "/dnd/5e/wiki/classes/rogue",
    component: RogueView,
  },
  {
    path: "/dnd/5e/wiki/classes/sorcerer",
    component: SorcererView,
  },
  {
    path: "/dnd/5e/wiki/classes/warlock",
    component: WarlockView,
  },
  {
    path: "/dnd/5e/wiki/classes/wizard",
    component: WizardView,
  },
  {
    path: "/dnd/5e/wiki/classes/:class/:subclass",
    component: SubclassView,
  },
  {
    path: "/dnd/5e/wiki/spells",
    component: SpellsView,
  },
  {
    path: "/dnd/5e/wiki/spells/:className",
    component: CspellView,
  },
  {
    path: "/dnd/5e/wiki/spells/:className/:spellName",
    component: SpellDesc,
  },
  {
    path: "/dnd/5e/wiki/backgrounds",
    component: BackgroundsView,
  },
  {
    path: "/dnd/5e/wiki/backgrounds/:background",
    component: BackgrView,
  },
  {
    path: "/dnd/5e/wiki/feats",
    component: FeatsView,
  },
  {
    path: "/dnd/5e/wiki/items",
    component: ItemsView,
  },
  {
    path: "/dnd/5e/wiki/items/weapons",
    component: WeaponsView,
  },
  {
    path: "/dnd/5e/wiki/items/armors",
    component: ArmorsView,
  },
  {
    path: "/dnd/5e/wiki/items/potions",
    component: PotionsView,
  },
  {
    path: "/dnd/5e/wiki/items/magic_items",
    component: MagicItems,
  },
  {
    path: "/dnd/5e/wiki/conditions",
    component: ConditionsView,
  },

  // ── Legacy redirects ──────────────────────────────
  { path: "/wiki", redirect: "/dnd/2024/wiki" },
  { path: "/wiki/:pathMatch(.*)*", redirect: (to) => "/dnd/2024/wiki/" + to.params.pathMatch },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

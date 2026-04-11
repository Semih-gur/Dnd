import { createRouter, createWebHistory } from "vue-router";
import WikiHomeView from "../views/WikiHomeView.vue";
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
import FeatDetailView from "@/views/FeatDetailView.vue";
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

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
  },
  {
    path: "/wiki",
    name: "Wiki",
    component: WikiHomeView,
  },
  {
    path: "/wiki/species",
    name: "Species",
    component: RacesView,
  },
  {
    path: "/wiki/species/:label",
    name: "SRace",
    component: SRaceView,
  },

  {
    path: "/wiki/classes",
    name: "Classes",
    component: ClassesView,
  },
  {
    path: "/wiki/spells",
    name: "Spells",
    component: SpellsView,
  },

  {
    path: "/wiki/spells/::className",
    name: "cSpells",
    component: CspellView,
  },
  {
    path: "/wiki/backgrounds/",
    name: "backgrounds",
    component: BackgroundsView,
  },

  {
    path: "/wiki/classes/barbarian",
    name: "Barbarian",
    component: BarbarianView,
  },

  {
    path: "/wiki/classes/bard",
    name: "Bard",
    component: BardView,
  },

  {
    path: "/wiki/classes/cleric",
    name: "Cleric",
    component: ClericView,
  },
  {
    path: "/wiki/classes/druid",
    name: "Druid",
    component: DruidView,
  },
  {
    path: "/wiki/classes/fighter",
    name: "Fighter",
    component: FighterView,
  },
  {
    path: "/wiki/classes/monk",
    name: "Monk",
    component: MonkView,
  },
  {
    path: "/wiki/classes/paladin",
    name: "Paladin",
    component: PaladinView,
  },
  {
    path: "/wiki/classes/ranger",
    name: "Ranger",
    component: RangerView,
  },
  {
    path: "/wiki/classes/rogue",
    name: "Rogue",
    component: RogueView,
  },
  {
    path: "/wiki/classes/sorcerer",
    name: "Sorcerer",
    component: SorcererView,
  },
  {
    path: "/wiki/classes/warlock",
    name: "Warlock",
    component: WarlockView,
  },
  {
    path: "/wiki/classes/wizard",
    name: "Wizard",
    component: WizardView,
  },
  {
    path: "/wiki/classes/:class/:subclass",
    name: "Subclass",
    component: SubclassView,
  },
  {
    path: "/wiki/backgrounds/:background",
    name: "Background",
    component: BackgrView,
  },
  {
    path: "/wiki/feats/",
    name: "Feats",
    component: FeatsView,
  },
  {
    path: "/wiki/feats/:feat",
    name: "Feat",
    component: FeatDetailView,
  },
  {
    path: "/wiki/items",
    name: "Feat",
    component: ItemsView,
  },
  {
    path: "/wiki/items/weapons",
    name: "Weapons",
    component: WeaponsView,
  },
  {
    path: "/wiki/items/armors",
    name: "Armors",
    component: ArmorsView,
  },
  {
    path: "/wiki/items/potions",
    name: "Potions",
    component: PotionsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

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
    path: "/wiki/races",
    name: "Races",
    component: RacesView,
  },
  {
    path: "/wiki/races/:label",
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
    path: "/wiki/spells/:label",
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
    path: "/wiki/classes/:class/:subclass",
    name: "Subclass",
    component: SubclassView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

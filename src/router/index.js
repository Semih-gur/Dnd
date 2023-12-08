import { createRouter, createWebHistory } from "vue-router";
import WikiHomeView from "../views/WikiHomeView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import RacesView from "@/views/RacesView.vue";
import ClassesView from "@/views/ClassesView.vue";
import BarbarianView from "@/views/Class/BarbarianView.vue";
import SubclassView from "@/views/Class/SubclassView.vue";
import SRaceView from "@/views/SRaceView.vue";
import SpellsView from "@/views/SpellView/SpellView.vue";
import CspellView from "@/views/SpellView/CSpellView.vue";

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
    path: "/wiki/classes/barbarian",
    name: "Barbarian",
    component: BarbarianView,
  },

  {
    path: "/wiki/classes/barbarian/:subclass",
    name: "Subclass",
    component: SubclassView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import WikiHomeView from "../views/WikiHomeView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import RacesView from "@/views/RacesView.vue";
import ClassesView from "@/views/ClassesView.vue";
import BarbarianView from "@/views/Class/BarbarianView.vue";
import SubclassView from "@/views/Class/SubclassView.vue";

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
    path: "/wiki/classes",
    name: "Classes",
    component: ClassesView,
  },
  {
    path: "/wiki/classes/barbarian",
    name: "Barbarian",
    component: BarbarianView,
  },
  {
    path: "/wiki/classes/barbarian/ancestral_guardian",
    name: "Ancestral Guardian",
    component: SubclassView,
  },
  {
    path: "/wiki/classes/barbarian/battlerager",
    name: "Battlerager",
    component: SubclassView,
  },
  {
    path: "/wiki/classes/barbarian/beast",
    name: "Beast",
    component: SubclassView,
  },
  {
    path: "/wiki/classes/barbarian/berserker",
    name: "Berserker",
    component: SubclassView,
  },
  {
    path: "/wiki/classes/barbarian/giant",
    name: "Giant",
    component: SubclassView,
  },
  {
    path: "/wiki/classes/barbarian/storm_herald",
    name: "Storm",
    component: SubclassView,
  },
  {
    path: "/wiki/classes/barbarian/totem_warrior",
    name: "Totem",
    component: SubclassView,
  },
  {
    path: "/wiki/classes/barbarian/wild_magic",
    name: "Wild",
    component: SubclassView,
  },
  {
    path: "/wiki/classes/barbarian/zealot",
    name: "Zealot",
    component: SubclassView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

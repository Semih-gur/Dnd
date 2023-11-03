import { createRouter, createWebHistory } from "vue-router";
import WikiHomeView from "../views/WikiHomeView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import RacesView from "@/views/RacesView.vue";
import ClassesView from "@/views/ClassesView.vue"
import BarbarianView from "@/views/Class/BarbarianView.vue"

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
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

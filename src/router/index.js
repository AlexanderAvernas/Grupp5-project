import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/booking",
      name: "booking",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/ThanksForOrdering",
      name: "ThanksForOrdering",
      component: () => import("../views/ThanksView.vue"),
    },
  ],
});

export default router;

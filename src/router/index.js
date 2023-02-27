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
<<<<<<< HEAD
      path: "/ThanksForOrdering",
      name: "ThanksForOrdering",
      component: () => import("../views/ThanksView.vue"),
=======
      path: "/Quiz",
      name: "Quiz",
      component: QuizView,
>>>>>>> 2ae71953e2c0afbf4abcfcf2d5f8f1d0c0e76b40
    },
  ],
});

export default router;

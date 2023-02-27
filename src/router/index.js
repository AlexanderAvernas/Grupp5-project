import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizView from "../views/QuizView.vue";
import ThankYou from "../views/ThankYou.vue";

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
      path: "/Quiz",
      name: "Quiz",
      component: QuizView,
    },
    {
      path: "/thank",
      name: "thank",
      component: ThankYou,
    },
  ],
});

export default router;

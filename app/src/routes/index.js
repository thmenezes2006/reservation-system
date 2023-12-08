import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  routes: [
    {
      path: "*",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "HomePage",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/pagina2",
      name: "pag",
      component: () => import("../views/TesteRoute.vue"),
    },
  ],
});

export default router;

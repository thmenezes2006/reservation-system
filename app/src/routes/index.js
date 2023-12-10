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
      redirect: "/login",
    },
    {
      path: "/login",
      name: "BpLogin",
      component: () => import("../views/BpLogin.vue"),
    },
    {
      path: "/cadastro",
      name: "Cadastro",
      component: () => import("../views/RegisterUser.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/HomePage.vue"),
    },
  ],
});
export default router;

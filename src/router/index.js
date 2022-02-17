/*
 * @Author: yangyuzhi
 * @Date: 2021-10-08 14:17:19
 * @LastEditTime: 2022-02-16 16:49:52
 * @LastEditors: yangyuzhi
 * @Descripttion:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

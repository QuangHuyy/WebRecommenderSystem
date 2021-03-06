import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import DetailView from "../views/DetailView.vue";
import CategoryView from "../views/CategoryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search=:query?",
    name: "search",
    component: SearchView,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: DetailView,
  },
  {
    path: "/category/:categoryName",
    name: "categoryName",
    component: CategoryView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

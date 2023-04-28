import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProductPage from "../pages/ProductPage.vue";

// import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/product",
      name: "product",
      component: ()=>import("@/pages/ProductPage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/pages/ContactPage.vue"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("@/pages/EventsPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/pages/404.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;

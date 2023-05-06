import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProductPage from "../pages/ProductPage.vue";
const abcd = "NaturalDisasters";
const solutionsRoutes = [
  {
    path: "/solutions/natural-disasters",
    name: "solutions-natural-disasters",
    component: () => import(`@/pages/solutions/${abcd}.vue`),
    props: {
      routeName: "natural-disasters",
    },
  },
];
const contactusRoutes = [
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/pages/ContactPage.vue"),
  },
  {
    path: "/contact2",
    name: "contact2",
    component: () => import("@/pages/ContactPage.vue"),
  },
  {
    path: "/contact3",
    name: "contact3",
    component: () => import("@/pages/ContactPage.vue"),
  },
  {
    path: "/contact4",
    name: "contact4",
    component: () => import("@/pages/ContactPage.vue"),
  },
  {
    path: "/contact5",
    name: "contact5",
    component: () => import("@/pages/ContactPage.vue"),
  },
  {
    path: "/contact6",
    name: "contact6",
    component: () => import("@/pages/ContactPage.vue"),
  },
];
const thankyouRoutes = [
  {
    path: "/thankyou",
    name: "thankyou",
    component: () => import("@/pages/ThankyouPage.vue"),
  },
];

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
      component: () => import("@/pages/ProductPage.vue"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("@/pages/EventsPage.vue"),
    },

    ...thankyouRoutes,
    ...contactusRoutes,
    ...solutionsRoutes,
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

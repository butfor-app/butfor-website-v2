import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
const contactusRoutes = [
  {
    path: "/book_demo",
    name: "book_demo",
    component: () => import("@/pages/HubspotPage.vue"),
    props: {
      title: "Book Demo",
      formId: "862017ff-a811-4986-96c8-38133bb2a8a1",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/pages/HubspotPage.vue"),
  },
  {
    path: "/contact2",
    name: "contact2",
    component: () => import("@/pages/HubspotPage.vue"),
  },
  {
    path: "/contact3",
    name: "contact3",
    component: () => import("@/pages/HubspotPage.vue"),
  },
  {
    path: "/contact4",
    name: "contact4",
    component: () => import("@/pages/HubspotPage.vue"),
  },
  {
    path: "/contact5",
    name: "contact5",
    component: () => import("@/pages/HubspotPage.vue"),
  },
  {
    path: "/contact6",
    name: "contact6",
    component: () => import("@/pages/HubspotPage.vue"),
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
      path: "/solutions/:solutionKey",
      name: "solutions",
      component: () => import("@/pages/solutions/index.vue"),
    },
    {
      path: "/claims-101",
      name: "claims101",
      component: () => import("@/pages/Claims101Page.vue"),
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("@/pages/Articles/ArticlesPage.vue"),
    },
    {
      path: "/article/:article_id",
      name: "article",
      component: () => import("@/pages/Articles/ArticlePage.vue"),
    },
    {
      path: "/integrations/",
      name: "integrations",
      component: () => import("@/pages/IntegrationsPage.vue"),
    },
    {
      path: "/hubspot",
      name: "hubspot",
      component: () => import("@/pages/HubspotPage.vue"),
    },
    {
      path: "/webinars",
      name: "webinars",
      component: () => import("@/pages/WebinarsPage.vue"),
    },
    {
      path: "/webinars/:webinar_id",
      name: "webinarInfo",
      component: () => import("@/pages/WebinarInfoPage.vue"),
    },
    {
      path: "/case-studies",
      name: "casestudies",
      component: () => import("@/pages/CaseStudiesPage.vue"),
    },
    {
      path: "/api",
      name: "api",
      component: () => import("@/pages/ApiPage.vue"),
    },
    {
      path: "/terms-and-conditions",
      name: "TermsAndConditionsPage",
      component: () => import("@/pages/TermsAndConditionsPage.vue"),
    },
    {
      path: "/subscription",
      name: "subscription",
      component: () => import("@/pages/SubscriptionPage.vue"),
    },
    {
      path: "/policy-analyzer",
      name: "policy-analyzer",
      component: () => import("@/pages/PolicyAnalyzerPage.vue"),
    },
    {
      path: "/cost-saving-estimator",
      name: "cost-estimator",
      component: () => import("@/pages/CostEstimatorPage.vue"),
    },
    ...thankyouRoutes,
    ...contactusRoutes,
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

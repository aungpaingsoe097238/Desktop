import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

/**
 * Routes
 */
import Desktop from "./pages/Desktop.vue";
import Login from "./pages/Login.vue";
import DashboardAbout from "./pages/dashboard/about/list.vue";
import DashboardPortfolio from "./pages/dashboard/portfolio/list.vue";
import DashboardSkill from "./pages/dashboard/skill/list.vue";
import DashboardDetail from "./pages/dashboard/portfolio/detail.vue";

const routes = [
  { path: "/", component: Desktop },
  { path: "/login", component: Login },
  {
    path: "/dashboard-about",
    component: DashboardAbout,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard-portfolio",
    component: DashboardPortfolio,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard-detail",
    component: DashboardDetail,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard-skill",
    component: DashboardSkill,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Define a middleware function
const authMiddleware = (to, from, next) => {
  // Retrieve the access token from localStorage
  const accessToken = localStorage.getItem("token");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (accessToken) {
      // Continue to the requested route
      next();
    } else {
      // Redirect to the login page if no access token
      next("/login");
    }
  } else {
    next(); // Continue for other routes
  }
};

// Add the middleware to specific routes
router.beforeEach((to, from, next) => {
  authMiddleware(to, from, next);
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");

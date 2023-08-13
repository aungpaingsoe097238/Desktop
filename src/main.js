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
  { path: "/dashboard-about", component: DashboardAbout },
  { path: "/dashboard-portfolio", component: DashboardPortfolio },
  { path: "/dashboard-detail", component: DashboardDetail },
  { path: "/dashboard-skill", component: DashboardSkill },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");

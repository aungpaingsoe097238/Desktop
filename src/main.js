import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

/**
 * Routes 
 */
import Desktop from './pages/Desktop.vue'

const routes = [
    { path: '/', component: Desktop }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
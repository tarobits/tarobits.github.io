import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/projects',
        component: Projects
    }
  ]
});
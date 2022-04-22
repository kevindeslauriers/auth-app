import Login from "@/components/Login.vue";
import Dashboard from "@/components/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login, name: 'Login' },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    localStorage.getItem("username") == null &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

export default router

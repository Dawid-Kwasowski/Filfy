import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Subscription from "@/views/Subscription.vue";
import Points from "@/views/Points.vue";

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/subscribe',
    component: Subscription,
    name: 'Subscription',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

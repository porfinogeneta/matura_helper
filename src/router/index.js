import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/components/About";
import ChoosePhysicsModule from "@/components/ChoosePhysicsModule";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/fizyka',
    name: 'ChoosePhysicsModule',
    component: ChoosePhysicsModule
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

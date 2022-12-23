// install router: npm add vue-router
import { createRouter, createWebHistory } from "vue-router";
import HomePage from './views/HomePage.vue'
import Pokedex from './views/Pokedex.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomePage
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: Pokedex
  },
  {
    path: '/pokedex/:id',
    name: 'pokedexId',
    component: Pokedex
  }
]


const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;
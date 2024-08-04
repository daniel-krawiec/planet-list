import { createRouter, createMemoryHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PlanetList from '../views/PlanetList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/list',
    name: 'PlanetList',
    component: PlanetList,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
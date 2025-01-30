import { createRouter, createWebHistory } from 'vue-router';
import PrincipalQuipux from '../Views/PrincipalQuipux.vue';

const Empresas = () => import('../Views/Empresas.vue'); 

const routes = [
  {
    path: '/',
    name: 'PrincipalQuipux',
    component: PrincipalQuipux,
  },
  {
    path: '/empresas',
    name: 'Empresas',
    component: Empresas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


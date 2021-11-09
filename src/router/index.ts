import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Orgs from '@/views/Orgs.vue';
import Projects from '@/components/Projects.vue';

const routes: Array<RouteRecordRaw> = [
  {
    component: Home,
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
  },
  {
    component: Orgs,
    path: '/orgs',
    name: 'Organizations',
    meta: { title: 'Organizations' },
  },
  {
    component: Projects,
    path: '/orgs/:id',
    name: 'Projects',
    meta: { title: 'Organization' },
  },
  {
    component: About,
    path: '/about',
    name: 'About',
    meta: { title: 'About' },
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const baseTitle = '';
  document.title = `${to.meta.title} ${baseTitle}`;
});

export default router;

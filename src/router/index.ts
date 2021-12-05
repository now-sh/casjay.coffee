import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';
import Orgs from '@/views/Orgs.vue';
import Projects from '@/views/Projects.vue';
import Resume from '@/views/Resume.vue';
import Domains from '@/views/Domains.vue';
import NotFound from '@/views/404.vue';

const routes: Array<RouteRecordRaw> = [
  {
    component: Home,
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
  },
  {
    component: Domains,
    path: '/Domains',
    name: 'Domains',
    meta: { title: 'Domains' },
  },
  {
    component: Contact,
    path: '/Contact',
    name: 'Contact',
    meta: { title: 'Contact' },
  },
  {
    component: Orgs,
    path: '/Projects',
    name: 'Projects',
    meta: { title: 'Projects' },
  },
  {
    component: Projects,
    path: '/Projects/:id',
    name: 'Project',
    meta: { title: 'Project' },
    props: true,
  },
  {
    component: About,
    path: '/about',
    name: 'About',
    meta: { title: 'About' },
  },
  {
    component: Resume,
    path: '/Resume',
    name: 'Resume',
    meta: { title: 'Resume' },
  },
  { component: NotFound, path: '/error/404' },
  {
    path: '/:catchAll(.*)',
    redirect: '/error/404',
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const baseTitle = 'Coffee! |';
  document.title = `${baseTitle} ${to.meta.title}`;
});

export default router;

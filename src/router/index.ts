import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';
import Orgs from '@/views/Orgs.vue';
import Projects from '@/views/Projects.vue';
import Resume from '@/views/Resume.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/404', component: Home },

  {
    component: Home,
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
  },
  {
    component: Contact,
    path: '/Contact',
    name: 'Contact',
    meta: { title: 'Contact' },
  },
  {
    component: Orgs,
    path: '/orgs',
    name: 'Organizations',
    meta: { title: 'Organizations' },
  },
  {
    component: Projects,
    path: '/project/:id',
    name: 'Projects',
    meta: { title: 'Projects' },
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

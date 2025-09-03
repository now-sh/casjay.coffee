import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

// Lazy load all routes except Home for better initial load performance
const Home = () => import('@/views/Home.vue');
const Contact = () => import('@/views/Contact.vue');
const About = () => import('@/views/About.vue');
const Orgs = () => import('@/views/Orgs.vue');
const Projects = () => import('@/views/Projects.vue');
const Resume = () => import('@/views/Resume.vue');
const Domains = () => import('@/views/Domains.vue');
const NotFound = () => import('@/views/404.vue');

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
  {
    component: NotFound,
    path: '/error/404',
    meta: { title: '404 Not Found' },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/error/404',
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const baseTitle = 'Coffee! |';
  const pageTitle = (to.meta.title as string) || 'Page';
  document.title = `${baseTitle} ${pageTitle}`;
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';
import Intro from './views/Intro.vue';

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro,
    },
    {
      path: '/quellen',
      name: 'sources ',
      component: () => import('./views/Sources.vue'),
    },
    {
      path: '/datenschutz',
      name: 'privacy',
      component: () => import('./views/Privacy.vue'),
    },
    {
      path: '/impressum',
      name: 'imprint',
      component: () => import('./views/Imprint.vue'),
    },
  ],
});

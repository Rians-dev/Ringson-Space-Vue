import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Meta from 'vue-meta'

Vue.use(Router);
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: () =>
        import('./views/Contact.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () =>
        import('./views/Resume.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () =>
        import('./views/Services.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () =>
        import( /* webpackChunkName: 'about' */ './views/Projects/Projects.vue')
    },
    {
      path: '/projects/Mobile Applications',
      name: 'mobileAppsProjects',
      component: () =>
        import( /* webpackChunkName: 'about' */ './views/Projects/Mobile.vue')
    },
    {
      path: '/projects/Data Analytics',
      name: 'dataAnalyticsProjects',
      component: () =>
        import( /* webpackChunkName: 'about' */ './views/Projects/ComingSoon.vue')
    },
    {
      path: '/projects/web Applications',
      name: 'webAppsProjects',
      component: () =>
        import( /* webpackChunkName: 'about' */ './views/Projects/Web.vue')
    },
    {
      path: '/projects/IT Consultant',
      name: 'consaultantProjects',
      component: () =>
        import( /* webpackChunkName: 'about' */ './views/Projects/Consultant.vue')
    },
    {
      path: '*',
      name: 'Error',
      component: () =>
        import( /* webpackChunkName: 'about' */ './views/Error.vue')
         }
  ]
})

import type { RouterConfig } from '@nuxt/schema';

export default {
  routes: (_routes) => {
    return [
      {
        name: 'home',
        path: '/',
        component: () => import('~/pages/index.vue'),
      },
      {
        name: 'about',
        path: '/ich',
        component: () => import('~/pages/static/about.vue'),
      },
      {
        name: 'imprint',
        path: '/impressum',
        component: () => import('~/pages/static/imprint.vue'),
      },
      {
        name: 'privacy',
        path: '/datenschutz',
        component: () => import('~/pages/static/privacy.vue'),
      },
      {
        name: 'login',
        path: '/login',
        component: () => import('~/pages/auth/login.vue'),
      },
      {
        name: 'games',
        path: '/spieltipps',
        component: () => import('~/pages/games/games.vue'),
      },
      {
        name: 'game',
        path: '/spieltipps/:slug',
        component: () => import('~/pages/games/game.vue'),
      },
      {
        name: 'game.edit',
        path: '/spieltipps/edit/:slug',
        middleware: ['authenticated'],
        component: () => import('~/pages/games/edit.vue'),
      },
      {
        name: 'game.add',
        path: '/spieltipps/add',
        middleware: ['authenticated'],
        component: () => import('~/pages/games/edit.vue'),
      },
      {
        name: 'profile',
        path: '/profil',
        middleware: ['authenticated'],
        component: () => import('~/pages/auth/profile.vue'),
      },
    ];
  },
} satisfies RouterConfig;

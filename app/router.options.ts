import type { RouterConfig } from '@nuxt/schema';

export default {
  routes: (_routes) => {
    return [
      {
        name: 'home',
        path: '/',
        component: () => import('~/pages/home/home.vue'),
      },
      {
        name: 'about',
        path: '/ich',
        component: () => import('~/pages/about/about.vue'),
      },
      {
        name: 'imprint',
        path: '/impressum',
        component: () => import('~/pages/imprint/imprint.vue'),
      },
      {
        name: 'privacy',
        path: '/datenschutz',
        component: () => import('~/pages/privacy/privacy.vue'),
      },
      {
        name: 'login',
        path: '/login',
        component: () => import('~/pages/auth/login/login.vue'),
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
      // Routes need auth
      {
        name: 'game.add',
        path: '/spieltipps/add',
        meta: {
          middleware: ['authenticated'],
          roles: ['admin'],
        },
        component: () => import('~/pages/games/edit.vue'),
      },
      {
        name: 'game.edit',
        path: '/spieltipps/edit/:slug',
        meta: {
          middleware: ['authenticated'],
          roles: ['admin'],
        },
        component: () => import('~/pages/games/edit.vue'),
      },
      {
        name: 'games.admin',
        path: '/spieltipps/admin',
        meta: {
          middleware: ['authenticated'],
          roles: ['admin'],
        },
        component: () => import('~/pages/games/admin.vue'),
      },
      {
        name: 'profile',
        path: '/profil',
        meta: {
          middleware: ['authenticated'],
          roles: ['admin', 'user'],
        },
        component: () => import('~/pages/auth/profile/profile.vue'),
      },
    ];
  },
} satisfies RouterConfig;

import { createRouter, createWebHistory } from 'vue-router'

const TheAuth = () => import('../views/TheAuth.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: TheAuth,
    },
    {
      path: '/',
      redirect: '/profile',
    },
    // ПРОФИЛЬ
    {
      path: '/profile',
      name: 'Profile',
      redirect: '/profile/personal-data',
      component: () => import('../views/TheProfile.vue'),
      children: [
        {
          path: 'personal-data',
          component: () => import('../views/PersonalData.vue'),
        },
        {
          path: 'marketins-stats',
          component: () => import('../views/MarketinsStats.vue'),
        },
      ],
    },
  ]
})

export default router

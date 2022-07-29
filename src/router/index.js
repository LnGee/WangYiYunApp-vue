import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/recd',
    name: 'recd',
    component: () => import('../views/Day-Recommend.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/To-Search.vue')
  },
  {
    path: '/',
    name: 'homes',
    component: () => import('../views/home.vue')
  },
  {
    path: '/records',
    name: 'records',
    component: () => import('../views/record-detail.vue')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import('../views/rangking-list.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/music-order.vue')
  },
  {
    path: '/orderDetail',
    name: 'order-detail',
    component: () => import('../views/music-order-detail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

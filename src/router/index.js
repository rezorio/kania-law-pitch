import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Kania Law Office — Concept Redesign' } },
    {
      path: '/pitch',
      name: 'pitch',
      component: () => import('../views/PitchView.vue'),
      meta: { title: 'Before & After — Kania Law Pitch' },
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('../views/PracticeHubView.vue'),
      meta: { title: 'Fields of Practice — Kania Law Office' },
    },
    {
      path: '/practice/:slug',
      name: 'practice-detail',
      component: () => import('../views/PracticeDetailView.vue'),
      meta: { title: 'Practice — Kania Law Office' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About the Firm — Kania Law Office' },
    },
    {
      path: '/attorneys',
      name: 'attorneys',
      component: () => import('../views/AttorneysView.vue'),
      meta: { title: 'Our Attorneys — Kania Law Office' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Ask a Lawyer — Kania Law Office' },
    },
  ],
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router

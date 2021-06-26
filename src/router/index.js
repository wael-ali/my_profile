import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Skills from '../views/Skills.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Backend from '../components/skills/Backend.vue'
import Frontend from '../components/skills/Frontend.vue'
import Other from '../components/skills/Other.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    children: [
      {
        path: 'backend',
        component: Backend
      },
      {
        path: 'frontend',
        component: Frontend
      },
      {
        path: 'other',
        component: Other
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: '404',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      { path:'', component: () => import('../components/GridCard.vue') },
      { path:'blog', component: () => import('../components/Blog.vue') },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    children:[
      {path:'', component: () => import('../components/CGV.vue')}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

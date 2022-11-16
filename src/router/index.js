import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlantasView from '../views/PlantasView.vue'
import InformationView from '../views/InformationView'
import CalendarView from '../views/CalendarView'
import FavoriteView from '../views/FavoriteView'
import EnvironmentView from '../views/EnvironmentView.vue'
import LoginView from '../views/LoginView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/plantas',
    name: 'plantas',
    component: PlantasView
  }
  ,
  {
    path: '/information/:codigo',
    name: 'information',
    component: InformationView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView
  }
  ,
  {
    path: '/favorite',
    name: 'favorite',
    component: FavoriteView
  },
  {
    path: '/environment',
    name: '/environment',
    component: EnvironmentView
  },
  {
    path: '/loginProfessor',
    name: '/loginProfessor',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

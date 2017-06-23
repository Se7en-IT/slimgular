import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../component/login/login.vue'
import Auth from '../component/auth/auth.vue'
import Home from '../component/auth/home/home.vue'
import auth from '../service/auth.js'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/auth',
    component: Auth,
    meta: {auth: true},
    children: [{
      path: 'home',
      component: Home
    }]
  }]
})
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) { return record.meta.auth }) && !auth.getUser()) {
    next(false)
  } else {
    next()
  }
})
export default router

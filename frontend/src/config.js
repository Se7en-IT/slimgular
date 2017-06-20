import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = process.env.URL_API

var router = new VueRouter({
  routes: [{
    path: '/',
    component: Vue.component('login')
  }, {
    path: '/auth',
    component: Vue.component('auth'),
    children: [{
      path: 'home',
      component: Vue.component('home')
    }]
  }]
})

new Vue({
  router: router
}).$mount('#app')

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'
import './css/custom.css'
// JS
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueAuth from './plugin/auth.js'
import routes from './routes'

Vue.use(VueAuth)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = process.env.URL_API

new Vue({
  router: new VueRouter(routes)
}).$mount('#app')

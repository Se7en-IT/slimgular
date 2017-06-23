import Vue from 'vue'
import VueResource from 'vue-resource'
import auth from '../service/auth.js'

Vue.use(VueResource)
Vue.http.options.root = process.env.URL_API
Vue.http.interceptors.push(function (request, next) {
  var token = auth.getToken()
  if (token) {
    request.headers.set(process.env.TOKEN_NAME, token)
  }
  next()
})

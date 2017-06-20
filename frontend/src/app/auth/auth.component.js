import Vue from 'vue'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

Vue.component('auth', {
  'template': require('./auth.html'),
  'data': function () {
    return {
      user: {}
    }
  },
  beforeRouteEnter: function (to, from, next) {
    var token = Cookies.get('token')
    if (token) {
      next(function (vm) {
        vm.user = jwtDecode(token)
      })
    } else {
      next(false)
    }
  },
  'methods': {
    logout: function () {
      var vm = this
      Vue.http.get('logout').then(function () {
        vm.$router.push('/')
      })
    }
  }
})

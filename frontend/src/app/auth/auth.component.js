import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export default {
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
      this.$http.get('logout').then(function () {
        this.$router.push('/')
      })
    }
  }
}

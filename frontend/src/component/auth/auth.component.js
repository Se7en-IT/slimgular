import Vue from 'vue'

export default {
  'template': require('./auth.html'),
  'data': function () {
    return {
      user: {}
    }
  },
  beforeRouteEnter: function (to, from, next) {
    var token = Vue.$auth.getUser()
    if (token) {
      next(function (vm) {
        vm.user = token
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

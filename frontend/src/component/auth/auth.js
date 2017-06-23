import auth from '../../service/auth.js'

export default {
  'data': function () {
    return {
      user: auth.getUser()
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

import auth from '../../service/auth.js'

export default {
  'data': function () {
    return {
      errore: '',
      data: {}
    }
  },
  'methods': {
    invia: function () {
      this.$http.post('login', this.data).then(function (result) {
        auth.setToken(result.body.token)
        this.$router.push('auth/home')
      }, function (result) {
        this.errore = result.data.data
      })
    }
  }
}

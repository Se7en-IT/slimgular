export default {
  'template': require('./login.html'),
  'data': function () {
    return {
      errore: '',
      data: {}
    }
  },
  'methods': {
    invia: function () {
      this.$http.post('login', this.data).then(function () {
        this.$router.push('auth/home')
      }, function (result) {
        this.errore = result.data.data
      })
    }
  }
}

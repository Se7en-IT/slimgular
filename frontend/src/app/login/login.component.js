import Vue from 'vue'
Vue.component('login', {
  'template': require('./login.html'),
  'data': function () {
    return {
      errore: '',
      data: {}
    }
  },
  'methods': {
    invia: function () {
      var vm = this
      Vue.http.post('login', this.data).then(function () {
        vm.$router.push('auth/home')
      }, function (result) {
        vm.errore = result.data.data
      })
    }
  }
})

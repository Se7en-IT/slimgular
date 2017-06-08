var angular = require('angular')
angular.module('app')
  .component('login', {
    'template': require('./login.html'),
    'controller': ['BackendService', '$state', function (BackendService, $state) {
      var $ctrl = this
      this.invia = function () {
        BackendService.post('login', this.data).then(function () {
          $state.go('auth.home')
        }, function (result) {
          $ctrl.errore = result.data.data
        })
      }
    }]
  })

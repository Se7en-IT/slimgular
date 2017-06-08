var angular = require('angular')
angular.module('app')
  .component('auth', {
    'template': require('./auth.html'),
    'bindings': {
      'user': '<'
    },
    'controller': ['BackendService', '$state',
      function (BackendService, $state) {
        this.logout = function () {
          BackendService.get('logout').then(function () {
            $state.go('login')
          })
        }
      }]
  })

var angular = require('angular')
angular.module('app')
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('auth', {
      abstract: true,
      url: '/auth',
      resolve: {
        user: ['AuthService', '$state',
          function (AuthService, $state) {
            return AuthService.getUser().then(function (result) {
              return result
            }, function () {
              $state.go('login')
            })
          }
        ]
      },
      template: '<auth user="$resolve.user"><auth>'
    })
}])

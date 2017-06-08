var angular = require('angular')
angular.module('app')
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
}])

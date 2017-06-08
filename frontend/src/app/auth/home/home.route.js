var angular = require('angular')
angular.module('app')
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('auth.home', {
      url: '/home',
      template: '<home></home>'
    })
}])

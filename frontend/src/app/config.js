var angular = require('angular')
require('../../node_modules/angular-i18n/angular-locale_it-it.js')
require('ng-table')
require('ng-file-upload')
require('angular-ui-validate')
angular.module('app', [
  require('angular-ui-bootstrap'),
  require('angular-ui-router'),
  require('angular-block-ui'),
  require('angular-cookies'),
  'ui.validate',
  'ngFileUpload',
  'ngTable'
])
  .config(['BackendServiceProvider', '$urlRouterProvider',
    function (BackendServiceProvider, $urlRouterProvider) {
      BackendServiceProvider.urlApi = 'backend/index.php/'
      $urlRouterProvider.otherwise('/login')
    }])

var angular = require('angular')
var jwtDecode = require('jwt-decode')
angular.module('app')
  .factory('AuthService', ['$cookies', '$q', function ($cookies, $q) {
    var service = {}
    service.getUser = function () {
      var defer = $q.defer()
      var token = $cookies.get('token')
      if (token) {
        defer.resolve(jwtDecode(token))
      } else {
        defer.reject()
      }
      return defer.promise
    }
    return service
  }])

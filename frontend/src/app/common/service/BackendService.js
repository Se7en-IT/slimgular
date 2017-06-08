var angular = require('angular')
angular.module('app')
  .provider('BackendService', function () {
    var BackendServiceProvider = this

    BackendServiceProvider.urlApi = ''

    this.$get = ['$http', '$window', 'Upload', function ($http, $window, Upload) {
      var BackendService = {}

      BackendService.get = function (url, id) {
        var params = {
          id: (id !== null && id !== undefined) ? id : '',
          t: new Date().getTime()
        }
        return $http.get(BackendServiceProvider.urlApi + url, {
          params: params
        })
      }

      BackendService.post = function (url, data, extra) {
        return $http.post(BackendServiceProvider.urlApi + url, data)
      }

      BackendService.delete = function (url) {
        return $http.delete(BackendServiceProvider.urlApi + url)
      }

      BackendService.put = function (url, data, extra) {
        return $http.put(BackendServiceProvider.urlApi + url, data)
      }
      BackendService.upload = function (url, data, file) {
        return Upload.upload({
          url: BackendServiceProvider.urlApi + url,
          data: {
            data: data,
            file: file
          }
        })
      }
      BackendService.file = function (url, data) {
        var form = angular.element('<form/>')
        var hidden = angular.element("<input type='hidden' name='data'/>")
        form.attr({
          'action': BackendServiceProvider.urlApi + url,
          'method': 'POST'
        })
        hidden.val(JSON.stringify(data))
        form.append(hidden)
        angular.element($window.document).find('body').append(form)
        form.submit()
        form.remove()
      }
      return BackendService
    }]
  })

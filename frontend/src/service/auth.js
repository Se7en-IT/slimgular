import store2 from 'store2'
import jwtDecode from 'jwt-decode'

const service = {}
service.getUser = function () {
  var token = service.getToken()
  return token ? jwtDecode(token) : token
}
service.removeToken = function () {
  return store2.session.remove('token')
}
service.getToken = function () {
  return store2.session.get('token')
}
service.setToken = function (token) {
  store2.session.set('token', token)
}
export default service

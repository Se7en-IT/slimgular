import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const service = {}
service.getUser = function () {
  var token = Cookies.get('token')
  if (token) {
    token = jwtDecode(token)
  } else {
    token = ''
  }
  return token
}

export default function (Vue) {
  Vue.$auth = Vue.prototype.$auth = service
}

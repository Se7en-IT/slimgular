import Login from './component/login/login.component.js'
import Auth from './component/auth/auth.component.js'
import Home from './component/auth/home/home.component.js'

export default {
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/auth',
    component: Auth,
    children: [{
      path: 'home',
      component: Home
    }]
  }]
}

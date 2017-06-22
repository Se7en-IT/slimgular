import Login from './app/login/login.component.js'
import Auth from './app/auth/auth.component.js'
import Home from './app/auth/home/home.component.js'

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

import Vue from 'vue'
import './resource/http.js'
import router from './resource/router.js'
import App from './component/app.vue'

new Vue({
  router: router,
  render: function (createElement) {
    return createElement(App)
  }
}).$mount('#app')

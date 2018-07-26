import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.devtools = true

// require egg

require('./assets/images/fuck_b1@ck_Sh0ve1.jpg')

const app = new Vue({
  router,
  ...App
}).$mount('#app')

export { app }

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, faLinkedin, faXingSquare, faGitSquare } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faIdCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/css/index.css'

library.add(faHome, faUser, faIdCard, faEnvelope, faFontAwesome, faLinkedin, faXingSquare, faGitSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

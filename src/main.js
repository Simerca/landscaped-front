import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Unicon from 'vue-unicons'
import { 
  uniLayerGroupMonochrome,
   uniCarWash,
   uniApple,
   uniAndroid,
   uniGithub
   } from 'vue-unicons/src/icons'

Unicon.add([
  uniLayerGroupMonochrome,
   uniCarWash,
   uniApple,
   uniAndroid,
   uniGithub
  ])
Vue.use(Unicon)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

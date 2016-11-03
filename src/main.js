import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui'
import store from './store'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

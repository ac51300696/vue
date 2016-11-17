import Vue from 'vue';
import App from './app';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});


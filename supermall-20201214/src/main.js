import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.css'
import './network/home'

//-----  全局引入 mint-ui start---------------------------
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//-----  全局引入 mint-ui end ---------------------------


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>'
})

// require('./assets/css/base.css')





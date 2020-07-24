import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import 'animate.css';
import {TweenLite} from 'gsap';


window.TweenLite = TweenLite;
window.$ = window.jQuery = require('jquery')

Vue.prototype.$store =store;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

}).$mount('#app')

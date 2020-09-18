import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import 'animate.css';
import {TweenLite} from 'gsap';
import axios from './network/index'
import ElementUI from 'element-ui';
import  'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios
Vue.use(ElementUI);
window.TweenLite = TweenLite;
window.$ = window.jQuery = require('jquery')


Vue.prototype.$store =store;
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,

}).$mount('#app')

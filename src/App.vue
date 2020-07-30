<template>
  <div id="app">
    <loading/>
      <router-view/>
    <sign-in/>
  </div>
</template>

<script>

import 'assets/js/common_scripts_min';
import 'assets/js/functions';

import 'assets/js/map';
import 'assets/js/infobox';
import {WOW} from 'wowjs';

import SignIn from "./components/bussniess/SignIn";
import Loading from "./components/common/Loading";


export default {
  name: 'App',
  components: {
    Loading,
    SignIn
  },
  created() {
    let detectBack = {

      initialize: function() {
        //监听 hashchange 事件
        window.addEventListener('hashchange', function() {

          //为当前导航页附加一个 tag
          this.history.replaceState('hasHash', '', '');

        }, false);

        window.addEventListener('popstate', function(e) {

          if (e.state) {
            //侦测是用户触发的后退操作, dosomething
            //这里刷新当前 url
            if(this.location.pathname === '/tours')
            this.location.reload();
          }
        }, false);
      }
    }
    detectBack.initialize();
  },
  mounted() {
    this.$nextTick(() => {
      new WOW().init()
    })
  }
}
</script>

<style>
</style>

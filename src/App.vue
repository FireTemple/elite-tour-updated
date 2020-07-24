<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'assets/js/common_scripts_min';
import 'assets/js/functions';

import 'assets/js/map';
import 'assets/js/infobox';
import {WOW} from 'wowjs';

export default {
  name: 'App',
  components: {

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

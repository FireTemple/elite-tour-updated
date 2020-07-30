<template>
  <li class="submenu">
    <a href="javascript:void(0);" class="show-submenu" @click="goUrl">{{this.info.name}}</a>
  </li>
</template>

<script>
  export default {
    name: "Tag",
    props: {
      info: {
        type: Object,
        default() {
          return {
            name: 'tag',
            routeUrl: '/'
          }
        }
      }
    },
    methods: {
      goUrl() {
        this.$router.push(this.info.routeUrl);
        if (this.info.routeUrl === '/tours') {
          window.location.reload();
        }
      }
    }
  }
</script>

<style scoped>

</style>

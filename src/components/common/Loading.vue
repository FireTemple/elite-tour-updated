<template>
  <div id="preloader">
    <div class="sk-spinner sk-spinner-wave">
      <div class="sk-rect1"></div>
      <div class="sk-rect2"></div>
      <div class="sk-rect3"></div>
      <div class="sk-rect4"></div>
      <div class="sk-rect5"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Loading",
      mounted() {
        $(window).load(function () { // makes sure the whole site is loaded
          $('#status').fadeOut(); // will first fade out the loading animation
          $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
          $('body').delay(350).css({
            'overflow': 'visible'
          });
          $(window).scroll();
        })
      }
    }
</script>

<style scoped>

</style>

<template>
  <div class="sp-slide">
    <img alt="Image" class="sp-image"
         :src="imgUrl.defaultSource"
         :data-src="imgUrl.dataSource"
         :data-small="imgUrl.smallSource"
         :data-medium="imgUrl.mediumSource"
         :data-large="imgUrl.largeSource"
         :data-retina="imgUrl.retinaSource">
  </div>
</template>

<script>
  export default {
    name: "SliderProItem",
    props: {
      imgUrl: {
        type: Object,
        default() {
          return {
            defaultSource: 'css/images/blank.gif',
            dataSource: 'img/slider_single_tour/1_medium.jpg',
            smallSource: 'img/slider_single_tour/1_small.jpg',
            mediumSource: 'img/slider_single_tour/1_medium.jpg',
            largeSource:'img/slider_single_tour/1_large.jpg',
            retinaSource:'img/slider_single_tour/1_large.jpg'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

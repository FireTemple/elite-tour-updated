<template>
  <div class="owl-carousel owl-theme carousel-thumbs-2 magnific-gallery">
    <CarouselItemInRoom v-for="item in UrlList" :url="item" :key="item"/>
  </div>
</template>

<script>
  import CarouselItemInRoom from "./CarouselItemInRoom";

  export default {
    name: "CarouseInRoom",
    components: {
      CarouselItemInRoom,
    },
    props: {
      UrlList: {
        type: Array,
        default() {
          return [
            'img/carousel/1.jpg',
            'img/carousel/2.jpg',
            'img/carousel/3.jpg',
            'img/carousel/4.jpg',
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>

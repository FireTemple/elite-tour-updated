<template>
  <div id="Img_carousel" class="slider-pro">
    <div class="sp-slides">
        <slider-pro-item/>
        <slider-pro-item/>
        <slider-pro-item/>
        <slider-pro-item/>
        <slider-pro-item/>
        <slider-pro-item/>
        <slider-pro-item/>
        <slider-pro-item/>
        <slider-pro-item/>
    </div>
    <div class="sp-thumbnails">
      <img v-for="items in thumnailsUrl" alt="Image" class="sp-thumbnail" :src="items">
    </div>
  </div>

</template>

<script>
  import SliderProItem from "./SliderProItem";

  export default {
    name: "SliderPro",
    components: {
      SliderProItem
    },
    props:{
      thumnailsUrl:{
        type: Array,
        default(){
          return [
            'img/slider_single_tour/1_medium.jpg',
            'img/slider_single_tour/2_medium.jpg',
            'img/slider_single_tour/3_medium.jpg',
            'img/slider_single_tour/4_medium.jpg',
            'img/slider_single_tour/5_medium.jpg',
            'img/slider_single_tour/6_medium.jpg',
            'img/slider_single_tour/7_medium.jpg',
            'img/slider_single_tour/8_medium.jpg',
            'img/slider_single_tour/9_medium.jpg'
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>

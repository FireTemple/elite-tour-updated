<template>
  <div class="item">
    <a :href="url" data-effect="mfp-zoom-in"><img :src="url" alt="Image"></a>
  </div>
</template>

<script>
  export default {
    name: "CarouselItemInRoom",
    props: {
      url:{
        type: String,
        default(){
          return 'img/carousel/1.jpg'
        }
      }
    }
  }
</script>

<style scoped>

</style>

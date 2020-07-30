<template>
  <section  data-parallax="scroll" :data-image-src="imgUrl" data-natural-width="1400" data-natural-height="470">
    <div class="parallax-content-1">
      <div class="animated fadeInDown">
        <h1>{{this.title}}</h1>
        <p>{{this.content}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  import '@/assets/js/common_scripts_min';

  export default {
      name: "BigScreen",
      props:{
          title: {
            type: String,
            default() {
              return 'Zoom Ride Tours';
            }
          },
        content: {
            type: String,
          default() {
            return "Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.";
          }
        },
        imgUrl: {
          type:String,
          default() {
              return 'img/home_bg_1.jpg';
          }
        }
      },
    mounted() {
      $('[data-parallax="scroll"]').parallax();
    }
  }
</script>

<style scoped>

</style>

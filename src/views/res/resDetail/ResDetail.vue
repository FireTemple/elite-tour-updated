<template>
<div class="res-detail">
  <nar-bar/>
  <big-screen-bot/>
  <main>
    <position/>
    <detail-main type="res"/>
  </main>
</div>
</template>

<script>
  import NarBar from "@/components/common/nav/NarBar";
  import BigScreenBot from "@/components/common/bigScreen/BigScreenBot";
  import Position from "../../../components/common/position/Position";
  import DetailMain from "../../../components/common/itemDetail/DetailMain";
  import MyFooter from "../../../components/common/footer/MyFooter";
    export default {
        name: "ResDetail",
      components: {
        BigScreenBot,
        NarBar,
        Position,
        DetailMain,
        MyFooter
      }, beforeCreate() {
        let itemId = this.$store.state.currentTourId;
        if (itemId === null) {
          console.log("NONONONONONONO!");
        }
      },
      created() {
        let itemId = this.$store.state.currentResId;
        console.log(itemId);
      },
      mounted() {
        $(document).ready(function ($) {
          $('#Img_carousel').sliderPro({
            width: 960,
            height: 500,
            fade: true,
            arrows: true,
            buttons: false,
            fullScreen: false,
            smallSize: 500,
            startSlide: 0,
            mediumSize: 1000,
            largeSize: 3000,
            thumbnailArrows: true,
            autoplay: false
          });
        });
      }
    }
</script>

<style scoped>

</style>

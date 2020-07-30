<template>
  <div class="tour-detail">
    <nar-bar/>
    <big-screen-bot :title="name" :address="address" :price="price" />
    <main>
      <position/>
      <detail-main :type="type" :des="des"  :schedule="schedule" :opening="opening" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 l-main :type="type"  />
    </main>
    <my-footer/>
  </div>
</template>

<script>
  import NarBar from "@/components/common/nav/NarBar";
  import BigScreenBot from "@/components/common/bigScreen/BigScreenBot";
  import Position from "../../../components/common/position/Position";
  import DetailMain from "../../../components/common/itemDetail/DetailMain";
  import MyFooter from "../../../components/common/footer/MyFooter";

  import 'slider-pro';

  export default {
    name: "TourDetail",
    components: {
      BigScreenBot,
      NarBar,
      Position,
      DetailMain,
      MyFooter
    },
    data(){
      return {
        type:'tour',
        // 给大屏幕用
        name:'',
        address:'',
        price:'',
        des:{},
        schedule:{},
        opening:{}
      }
    },
    beforeCreate() {
      let itemId = this.$store.state.currentTourId;
      if (itemId === null) {
        console.log("NONONONONONONO!");
      }
    },
    created() {
      let itemId = this.$store.state.currentTourId;
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

    },
  }
</script>

<style scoped>

</style>

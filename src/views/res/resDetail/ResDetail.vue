<template>
  <div class="res-detail">
    <nar-bar/>
    <big-screen-bot/>
    <main>
      <position/>
      <detail-main
        :has-parking="res.hasParking"
        :allow-pet="res.allowPet"
        :no-smoking="res.noSmoking"
        :has-accessibility="res.hasAccessibility"
        :details="res.details"
        :menu-des="res.menuDes"
        :opening-time="openingTime"
        type="res"/>
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
    data() {
      return {
        res: {},
        menus: [],
        openingTime: [],
      }
    },
    components: {
      BigScreenBot,
      NarBar,
      Position,
      DetailMain,
      MyFooter
    },
    beforeCreate() {
      let itemId = this.$store.state.currentResId;
      if (itemId === null) {
        console.log("NONONONONONONO!");
        this.$router.go(-1)
      }
    },
    created() {
      let itemId = this.$store.state.currentResId;
      this.getRes(itemId);
      this.getOpeningTime(itemId);
      this.getMenu(itemId);
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
    methods: {
      getRes(itemId) {
        this.$axios({
          method: 'get',
          url: '/api/res/' + itemId
        }).then(res => {
            this.res = res.data;
          console.log(this.res);
        })
      },
      getOpeningTime(itemId){
        this.$axios({
          method:'get',
          url:'/api/opening-time/' + itemId
        }).then(res => {
          this.openingTime = res.data
        }).catch(error => {
          console.log(error)
        })
      },
      getMenu(itemId){
        this.$axios({
          method: 'get',
          url:'/api/menu/' + itemId
        }).then(res => {
          this.menus = res.data
        }).catch(error => {
          console.log(error)
        })
      },
    }
  }
</script>

<style scoped>

</style>

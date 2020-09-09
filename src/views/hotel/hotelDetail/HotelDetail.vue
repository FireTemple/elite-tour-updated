<template>
  <div class="hotel-detail">
    <nar-bar/>
    <big-screen-bot :hotelAddress="hotel.address" :title="hotel.name" :price="hotel.cPrice" type="hotel"/>
    <main>
      <position/>
      <detail-main
        type="hotel"
        :rooms="rooms"
        :facilities-des="hotel.facilitiesDes"
        :facilities="facilities"
        :name="hotel.name"
        :details="hotel.details"
      />
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

  export default {
    name: "HotelDetail",
    components: {
      BigScreenBot,
      NarBar,
      Position,
      DetailMain,
      MyFooter
    },
    data(){
      return {
        facilities:[],
        hotel:{},
        rooms:[]
      }
    },
    beforeCreate() {
      let itemId = this.$store.state.currentHotelId;
      if (itemId === null) {
        console.log("NONONONONONONO!");
        this.$router.go(-1)
      }
    },
    created() {
      this.getData();
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
      getData() {
        let itemId = this.$store.state.currentHotelId;
        this.$axios({
          method: 'get',
          url: '/api/hotel/' + itemId
        }).then(res => {
          this.hotel = res.data
        }).catch(error => {
          console.log(error);
        })

        // facilities
        this.$axios({
          method:'get',
          url: '/api/facilities/' + itemId
        }).then(res => {
          this.facilities = res.data
        }).catch(error => {
          console.log(error)
        })

        // rooms
        this.$axios({
          method: 'get',
          url: '/api/rooms/' + itemId
        }).then(res => {
          this.rooms = res.data;
        }).catch(error => {
          console.log(error);
        })
      },
    }
  }
</script>

<style scoped>

</style>

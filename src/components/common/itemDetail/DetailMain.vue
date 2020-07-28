<template>
  <div class="container margin_60">
    <div class="row">
      <div class="col-lg-8" id="single_tour_desc">
        <!-- need seal -->
        <div id="single_tour_feat">
          <ul v-show="isTour">
            <li><i class="icon_set_1_icon-4"></i>Museum</li>
            <li><i class="icon_set_1_icon-83"></i>3 Hours</li>
            <li><i class="icon_set_1_icon-13"></i>Accessibiliy</li>
            <li><i class="icon_set_1_icon-82"></i>144 Likes</li>
            <li><i class="icon_set_1_icon-22"></i>Pet allowed</li>
            <li><i class="icon_set_1_icon-97"></i>Audio guide</li>
            <li><i class="icon_set_1_icon-29"></i>Tour guide</li>
          </ul>
          <ul v-show="isHotel">
            <li><i class="icon_set_3_restaurant-1"></i>Pizza /Italian</li>
            <li><i class="icon_set_1_icon-13"></i>Accessibiliy</li>
            <li><i class="icon_set_1_icon-82"></i>144 Likes</li>
            <li><i class="icon_set_1_icon-22"></i>Pet allowed</li>
            <li><i class="icon_set_1_icon-27"></i>Parking</li>
            <li><i class="icon_set_1_icon-47"></i>No smoking area</li>
          </ul>
          <ul v-show="isRes">
            <li><i class="icon_set_3_restaurant-1"></i>Pizza /Italian</li>
            <li><i class="icon_set_1_icon-13"></i>Accessibiliy</li>
            <li><i class="icon_set_1_icon-82"></i>144 Likes</li>
            <li><i class="icon_set_1_icon-22"></i>Pet allowed</li>
            <li><i class="icon_set_1_icon-27"></i>Parking</li>
            <li><i class="icon_set_1_icon-47"></i>No smoking area</li>
          </ul>
        </div>
        <SliderPro/>
        <hr>
        <DetailDes>
          <des1 slot="desDetail" :type="type"/>
          <schedule slot="schedule" v-if="isTour" />
          <room-type slot="rooms" v-else-if="isHotel" />
          <opening-time slot="opening" v-else/>
        </DetailDes>
      </div>
      <!--End  single_tour_desc-->
      <aside class="col-lg-4">
        <booking :type="type" />
        <helps/>
      </aside>

    </div>
    <!--End row -->
  </div>
</template>

<script>
  import '../../../assets/js/common_scripts_min'
  import '../../../assets/js/jquery.sliderPro';
  import Des1 from "../../bussniess/detailSection/Des1";
  import SliderPro from "../slider-pro/SliderPro";
  import DetailDes from "./DetailDes";
  import Helps from "../listMain/Helps";
  import Booking from "./Booking";
  import Schedule from "../../bussniess/detailSection/Schedule";
  import RoomType from "../../bussniess/detailSection/RoomType";
  import OpeningTime from "../../bussniess/detailSection/OpeningTime";
  export default {
    name: "DetailMain",
    components: {
      SliderPro,
      DetailDes,
      Helps,
      Booking,
      Des1,
      Schedule,
      RoomType,
      OpeningTime
    },
    created() {
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

      $('input.date-pick').datepicker('setDate', 'today');
      $('input.time-pick').timepicker({
        minuteStep: 15,
        showInpunts: false
      })
    },
    props: {
      type: {
        type: String,
        default(){
          return 'tour';
        }
      }
    },
    computed: {
      isTour(){
        return this.type === 'tour';
      },
      isHotel(){
        return this.type === 'hotel';
      },
      isRes(){
        return this.type === 'res';
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="container margin_60">
    <div class="row">
      <div class="col-lg-8" id="single_tour_desc">
        <!-- need seal -->
        <div id="single_tour_feat">
          <ul v-show="isTour">
<!--            <li><i class="icon_set_1_icon-4"></i>Museum</li>-->
            <li><i class="icon_set_1_icon-83"></i>{{duration}} Hours</li>
            <li v-show="hasAccessibility"><i class="icon_set_1_icon-13" ></i>Accessibility</li>
<!--            <li><i class="icon_set_1_icon-82"></i>144 Likes</li>-->
            <li v-show="petAllowed"><i class="icon_set_1_icon-22"></i>Pet allowed</li>
            <li v-show="audioGuide"><i class="icon_set_1_icon-97"></i>Audio guide</li>
            <li v-show="tourGuide"><i class="icon_set_1_icon-29"></i>Tour guide</li>
          </ul>
          <ul v-show="isHotel">
            <li v-show="hasTV === '1'"><i class="icon_set_2_icon-116"></i>Plasma TV</li>
            <li v-show="hasWifi === '1'"><i class="icon_set_1_icon-86"></i>Free Wifi</li>
            <li v-show="hasPool === '1'"><i class="icon_set_2_icon-110"></i>Pool</li>
            <li v-show="hasBreakfast === '1'"><i class="icon_set_1_icon-59"></i>Breakfast</li>
            <li v-show="allowPet === '1'"><i class="icon_set_1_icon-22"></i>Pet allowed</li>
            <li v-show="hasAccessibility === '1'"><i class="icon_set_1_icon-13"></i>Accessibility</li>
            <li v-show="hasParking === '1'"><i class="icon_set_1_icon-27"></i>Parking</li>
          </ul>
          <ul v-show="isRes">
            <li v-show="hasAccessibility"><i class="icon_set_1_icon-13"></i>Accessibiliy</li>
            <li v-show="allowPet === '1'"><i class="icon_set_1_icon-22"></i>Pet allowed</li>
            <li v-show="hasParking === '1'"><i class="icon_set_1_icon-27"></i>Parking</li>
            <li v-show="noSmoking === '1'"><i class="icon_set_1_icon-47"></i>No smoking area</li>
          </ul>
        </div>

        <SliderPro/>
        <hr>
        <DetailDes>
          <des1 slot="desDetail"
                :type="type"
                :name="name"
                :details="details"
                :include-des="includeDes"
                :include-item="includeItems"
                :facilities="facilities"
                :facilities-des="facilitiesDes"
                :menu-des="menuDes"
          />
          <schedule slot="schedule" v-if="isTour" />
          <room-type slot="rooms" v-else-if="isHotel" :room-list="rooms"/>
          <opening-time v-for="item in openingTime" :key="item.id" :data="item" slot="opening" v-else/>
        </DetailDes>

      </div>
      <!--End  single_tour_desc-->
      <aside class="col-lg-4">
        <booking :type="type" :price="price" :item-id="itemId" :name="name"/>
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
      },
      duration:{
        type:String,
        default(){
          return ''
        }
      },
      accessibility:{
        type:String,
        default(){
          return '2';
        }
      },
      isAllowedPet:{
        type:String,
        default(){
          return '2';
        }
      },
      hasTourGuide:{
        type:String,
        default(){
          return '2';
        }
      },
      hasAudioGuide:{
        type:String,
        default(){
          return '2';
        }
      },

      hasTV:{
        type:String,
        default(){
          return '2';
        }
      },
      hasWifi:{
        type:String,
        default(){
          return '2';
        }
      },
      hasPool:{
        type:String,
        default(){
          return '2';
        }
      },
      hasBreakfast:{
        type:String,
        default(){
          return '2';
        }
      },
      allowPet:{
        type:String,
        default(){
          return '2';
        }
      },
      hasAccessibility:{
        type:String,
        default(){
          return '2';
        }
      },
      hasParking:{
        type:String,
        default(){
          return '2';
        }
      },
      noSmoking:{
        type:String,
        default(){
          return '2';
        }
      },


     // basic info
      itemId:{
        type: String,
        default(){
          return '';
        }
      },
      name:{
        type:String,
        default(){
          return '';
        }
      },
      details:{
        type:String,
        default(){
          return '';
        }
      },
      // for tours
      includeDes:{
        type:String,
        default(){
          return '';
        }
      },
      includeItems:[],
      // for hotel
      facilities:[],
      facilitiesDes:'',
      rooms:[],
      // for restaurant
      openingTime:[],
      menuDes:'',
      price:'',
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
      },
      hasAccessibility(){
        return this.accessibility === '1';
      },
      petAllowed(){
        return this.isAllowedPet === '1';
      },
      audioGuide(){
        return this.hasAudioGuide === '1';
      },
      tourGuide(){
        return this.hasTourGuide === '1';
      }
    }
  }
</script>

<style scoped>

</style>

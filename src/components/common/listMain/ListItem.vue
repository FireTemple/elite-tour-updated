<template>
  <div class="strip_all_tour_list wow fadeIn" data-wow-delay="0.1s">
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <div class="ribbon_3" :class="findType" ><span>{{textType}}</span>
        </div>
<!--        <div class="wishlist">-->
<!--          <a class="tooltip_flip tooltip-effect-1" href="javascript:void(0);">+<span class="tooltip-content-flip"><span-->
<!--            class="tooltip-back">Add to wishlist</span></span></a>-->
<!--        </div>-->
        <div class="img_list">
          <a href="javascript:void(0);"><img src="../../../assets/img/tour_box_1.jpg" alt="Image">
<!--            <div class="short_info" v-show="isTour">-->
<!--              <i class="icon_set_1_icon-4"></i>-->
<!--              Museums-->
<!--            </div>-->
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="tour_list_desc">
          <div class="rating"><i class="icon-smile voted"></i><i class="icon-smile  voted"></i><i
            class="icon-smile  voted"></i><i class="icon-smile  voted"></i><i class="icon-smile"></i><small>(75)</small>
          </div>
          <h3><strong>{{info.name}}</strong> {{this.type}}</h3>
          <p>{{info.description}}</p>

          <!-- item info here -->
          <item-info :city="info.countryArea" :country="info.country" :duration="info.duration" :maximum-hour="info.maxDuration" v-show="type === 'tour'"/>
          <HotelItemInfo v-show="isHotel" :has-fitness="info.hasFitness" :has-pool="info.hasPool" :has-restaurant="info.hasRestaurant" :has-t-v="info.hasTV" :has-wifi="info.hasWifi" />
          <res-item-info
            v-show="isRes"
            :has-disabled="info.hasDisabled"
            :has-parking="info.hasParking"
            :has-transport="info.hasTransport"
            :no-smoking="info.noSomking"
            :disabled-des="info.disabledDes"
            :no-smoking-des="info.noSmokingDes"
            :parking-des="info.parkingDes"
            :transport-des="info.transportDes"
          />
        </div>
      </div>
      <div class="col-lg-2 col-md-2">
        <div class="price_list">
          <div><sup>$</sup>{{info.cPrice}}*<span
            class="normal_price_list">${{info.pPrice}}</span><small>*Per person</small>
            <p><a href="javascript:void(0);" class="btn_1" @click="detail(info.id,type)">Details</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemInfo from "./ItemInfo";
  import HotelItemInfo from "./HotelItemInfo";
  import ResItemInfo from "./ResItemInfo";

  export default {
    name: "ListItem",
    components: {
      ItemInfo,
      HotelItemInfo,
      ResItemInfo
    },
    props: {
      type:{
        type:String,
        default(){
          return ''
        }
      },
      info:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      detail(id,type){
        if (type === 'tour'){
          this.$store.commit('changeCurrentTourId',{
            id: id
          });
          this.$router.push('/tourDetail');
        } else if (type === 'hotel'){
          this.$store.commit('changeCurrentHotelId',{
            id: id
          });
          this.$router.push('/hotelsDetail');
        } else{
          this.$store.commit('changeCurrentResId',{
            id: id
          });
          this.$router.push('/resDetail');
        }

      },

    },
    computed:{
      isTour(){
        return this.type === 'tour';
      },
      isHotel(){
        return this.type === 'hotel';
      },
      isRes(){
        return this.type === 'res';
      },
      findType(){
        if (this.info.type === '1'){
          return 'normal';
        }else if (this.info.type === '2'){
          return '';
        } else return 'popular';
      },
      textType(){
        if (this.info.type === '1'){
          return 'normal';
        }else if (this.info.type === '2'){
          return 'top rate';
        } else return 'popular';
      }
    },
    data(){
      return {

      }
    },
    created() {

    }
  }
</script>

<style scoped>

</style>

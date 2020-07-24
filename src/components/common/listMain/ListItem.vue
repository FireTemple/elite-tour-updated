<template>
  <div class="strip_all_tour_list wow fadeIn" data-wow-delay="0.1s">
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <div class="ribbon_3" :class="{popular: this.isPopular}" ><span>{{itemInfo.type}}</span>
        </div>
        <div class="wishlist">
          <a class="tooltip_flip tooltip-effect-1" href="javascript:void(0);">+<span class="tooltip-content-flip"><span
            class="tooltip-back">Add to wishlist</span></span></a>
        </div>
        <div class="img_list">
          <a href="javascript:void(0);"><img :src="itemInfo.imgUrl" alt="Image">
            <div class="short_info" v-show="isTour">
              <i class="icon_set_1_icon-4"></i>
              Museums
            </div>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="tour_list_desc">
          <div class="rating"><i class="icon-smile voted"></i><i class="icon-smile  voted"></i><i
            class="icon-smile  voted"></i><i class="icon-smile  voted"></i><i class="icon-smile"></i><small>(75)</small>
          </div>
          <h3><strong>{{itemInfo.title}}</strong>{{this.type}}</h3>
          <p>{{itemInfo.dec}}</p>
          <!-- item info here -->
          <item-info v-show="isTour" />
          <HotelItemInfo v-show="isHotel"/>
        </div>
      </div>
      <div class="col-lg-2 col-md-2">
        <div class="price_list">
          <div><sup>$</sup>{{itemInfo.currentPrice}}*<span
            class="normal_price_list">${{itemInfo.pastPrice}}</span><small>*Per person</small>
            <p><a href="javascript:void(0);" class="btn_1" @click="detail(itemInfo.id,type)">Details</a>
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
  export default {
    name: "ListItem",
    components: {
      ItemInfo,
      HotelItemInfo
    },
    props: {
      type:{
        type: String,
        default(){
          return 'tour'
        }
      },
      itemInfo: {
        type: Object,
        default(){
          return {
            id:'123456',
            type: 'popular',
            imgUrl: 'img/tour_box_1.jpg',
            title: 'Arch Triomphe',
            dec: 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            currentPrice: '39',
            pastPrice: '99',
          }
        }
      },

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


        // window.location.reload();
      }
    },
    computed:{
      isTour(){
        return this.type === 'tour';
      },
      isHotel(){
        return this.type === 'hotel';
      },
      isPopular(){
        return this.itemInfo.type === 'popular';
      }
    }
  }
</script>

<style scoped>

</style>

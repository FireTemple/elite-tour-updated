<template>
  <ul class="add_info">
    <li v-show="hasWifi === '1'">
      <a  href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Free Wifi"><i class="icon_set_1_icon-86"></i></a>
    </li>
    <li v-show="hasTV === '1'">
      <a   href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Plasma TV with cable channels"><i class="icon_set_2_icon-116"></i></a>
    </li>
    <li v-show="hasPool === '1'">
      <a  href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Swimming pool"><i class="icon_set_2_icon-110"></i></a>
    </li>
    <li v-show="hasFitness === '1'">
      <a  href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Fitness Center"><i class="icon_set_2_icon-117"></i></a>
    </li>
    <li v-show="hasRestaurant === '1'">
      <a  href="javascript:void(0);" class="tooltip-1" data-placement="top" title="Restaurant"><i class="icon_set_1_icon-58"></i></a>
    </li>
  </ul>
</template>

<script>
  import '../../../assets/js/infobox'
    export default {
        name: "HotelItemInfo",
        props:{
          hasWifi:{
            type: String,
            default(){
              return '2'
            }
          },
          hasTV:{
            type: String,
            default(){
              return '2'
            }
          },
          hasPool:{
            type: String,
            default(){
              return '2'
            }
          },
          hasFitness:{
            type: String,
            default(){
              return '2'
            }
          },
          hasRestaurant:{
            type: String,
            default(){
              return '2'
            }
          },
        }
    }
</script>

<style scoped>

</style>

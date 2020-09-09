<template>
  <ul class="add_info">
    <li v-show="hasDisabled === '1'">
      <div class="tooltip_styled tooltip-effect-4" >
        <span class="tooltip-item"><i class="icon_set_1_icon-13"></i></span>
        <div class="tooltip-content">
          <h4 >Disabled</h4>{{disabledDes}}
          <br>
        </div>
      </div>
    </li>
    <li v-show="noSmoking === '1'">
      <div class="tooltip_styled tooltip-effect-4" >
        <span class="tooltip-item"><i class="icon_set_1_icon-47"></i></span>
        <div class="tooltip-content">
          <h4 >No smoking area</h4>{{noSmokingDes}}
          <br>
        </div>
      </div>
    </li>
    <li v-show="hasParking === '1'">
      <div class="tooltip_styled tooltip-effect-4" >
        <span class="tooltip-item"><i class="icon_set_1_icon-27"></i></span>
        <div class="tooltip-content">
          <h4 >Parking</h4>{{parkingDes}}
          <br>
        </div>
      </div>
    </li>
    <li v-show="hasTransport === '1'">
      <div class="tooltip_styled tooltip-effect-4" >
        <span class="tooltip-item"><i class="icon_set_1_icon-25"></i></span>
        <div class="tooltip-content">
          <h4 >Transport</h4>{{transportDes}}
          <br>
        </div>
      </div>
    </li>
  </ul>

</template>

<script>
  import '../../../assets/js/infobox'
    export default {
        name: "HotelItemInfo",
        props:{
          hasDisabled:{
            type: String,
            default(){
              return '2';
            }
          },
          hasTransport:{
            type: String,
            default(){
              return '2';
            }
          },
          hasParking:{
            type: String,
            default(){
              return '2';
            }
          },
          noSmoking:{
            type: String,
            default(){
              return '2';
            }
          },
          transportDes:{
            type: String,
            default(){
              return '';
            }
          },
          noSmokingDes:{
            type: String,
            default(){
              return '';
            }
          },
          parkingDes:{
            type: String,
            default(){
              return '';
            }
          },
          disabledDes:{
            type: String,
            default(){
              return '';
            }
          },
        }
    }
</script>

<style scoped>

</style>

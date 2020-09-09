<template>
  <div>
    <h4>{{roomInfo.type}}</h4>
    <p>{{roomInfo.des}}</p>

    <div class="row">
      <div class="col-md-6">
        <ul class="list_icons">
          <li v-show="roomInfo.hasWifi"><i class="icon_set_1_icon-86"></i>Free wifi</li>
          <li v-show="roomInfo.hasTV"><i class="icon_set_2_icon-116"></i>Tv</li>
          <li v-show="roomInfo.hasSafetyBox"><i class="icon_set_2_icon-106"></i>Safety box</li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="list_ok">
          <li v-show="roomInfo.hasWifi">{{roomInfo.wifiDes}}</li>
          <li v-show="roomInfo.hasTV">{{roomInfo.tvDes}}</li>
          <li v-show="roomInfo.hasSafetyBox">{{roomInfo.safteyBoxDes}}</li>
        </ul>
      </div>
    </div>
    <!-- End row  -->
    <CarouseInRoom/>
  </div>

</template>

<script>
  import CarouseInRoom from "../../common/carousel/room/CarouseInRoom";
  export default {
    name: "SingleRoom",
    components: {
      CarouseInRoom
    },
    props: {
      roomInfo: {
        type: Object,
        default(){
          return {
            roomType: 'Single Room',
            des:'Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an\n    mel iudico constituto efficiendi.',
            props: {
              wifi: 'Free wifi',
              TV:'Plasma Tv',
              sb:'Safety box',
              wordInfo: [
                'Lorem ipsum dolor sit amet',
                'No scripta electram necessitatibus sit',
                'Quidam percipitur instructior an eum'
              ],
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

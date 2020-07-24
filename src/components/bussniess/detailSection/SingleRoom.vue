<template>
  <div>
    <h4>{{roomInfo.roomType}}</h4>
    <p>{{roomInfo.des}}</p>

    <div class="row">
      <div class="col-md-6">
        <ul class="list_icons">
          <li><i class="icon_set_1_icon-86"></i>{{roomInfo.props.wifi}}</li>
          <li><i class="icon_set_2_icon-116"></i>{{roomInfo.props.TV}}</li>
          <li><i class="icon_set_2_icon-106"></i> {{roomInfo.props.sb}}</li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="list_ok">
          <li v-for="item in roomInfo.props.wordInfo">{{item}}</li>
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

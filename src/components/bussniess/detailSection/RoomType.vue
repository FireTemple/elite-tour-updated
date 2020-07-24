<template>
  <div class="row">
    <div class="col-lg-3">
      <h3>Rooms Types</h3>
    </div>
    <div class="col-lg-9">
      <single-room v-for="item in roomList" :room-info="item" :key="item.key"/>
    </div>
    <!-- End col-md-9  -->
  </div>

</template>

<script>
  import SingleRoom from "./SingleRoom";

  export default {
    name: "RoomType",
    components: {
      SingleRoom
    },
    props: {
      roomList: {
        type: Array,
        default() {
          return [
            {
              key:'1',
              roomType: 'Single Room',
              des: 'Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, anmel iudico constituto efficiendi.',
              props: {
                wifi: 'Free wifi',
                TV: 'Plasma Tv',
                sb: 'Safety box',
                wordInfo: [
                  'Lorem ipsum dolor sit amet',
                  'No scripta electram necessitatibus sit',
                  'Quidam percipitur instructior an eum'
                ]
              }
            },
            {
              key:'2',
              roomType: 'Double Room',
              des: 'Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, anmel iudico constituto efficiendi.',
              props: {
                wifi: 'Free wifi',
                TV: 'Plasma Tv',
                sb: 'Safety box',
                wordInfo: [
                  'Lorem ipsum dolor sit amet',
                  'No scripta electram necessitatibus sit',
                  'Quidam percipitur instructior an eum'
                ]
              }
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>

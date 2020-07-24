<template>
  <div class="hotels-list">
    <nar-bar/>
    <big-screen title="Zoom Ride Hotels"/>
    <position/>
    <HotelListMain/>
    <my-footer/>
  </div>
</template>

<script>
  import NarBar from "../../../components/common/nav/NarBar";
  import MyFooter from "../../../components/common/footer/MyFooter";
  import BigScreen from "../../../components/common/bigScreen/BigScreen";
  import Position from "../../../components/common/position/Position";
  import HotelListMain from "./HotelListMain";

  export default {
    name: "Hotels",
    components: {
      NarBar,
      MyFooter,
      BigScreen,
      Position,
      HotelListMain,
    },
    mounted() {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-grey',
        radioClass: 'iradio_square-grey'
      });
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/bootstrap.min.css";
  @import "../../../assets/css/style.css";
  @import "../../../assets/css/vendors.unminified.css";
  @import "../../../assets/css/custom.css";
</style>

<template>
  <div class="hotels-list">
    <nar-bar/>
    <big-screen title="Zoom Ride Hotels"/>
    <position/>
    <my-footer/>
  </div>
</template>

<script>
  import NarBar from "../../../components/common/nav/NarBar";
  import MyFooter from "../../../components/common/footer/MyFooter";
  import BigScreen from "../../../components/common/bigScreen/BigScreen";
  import Position from "../../../components/common/position/Position";

  export default {
    name: "Hotels",
    components: {
      NarBar,
      MyFooter,
      BigScreen,
      Position
    }
  }
</script>

<style scoped>

</style>

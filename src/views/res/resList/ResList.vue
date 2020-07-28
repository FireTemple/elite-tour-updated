<template>
<div class="res-list">
  <nar-bar/>
  <big-screen title="Michigan RESTAURANTS" content="Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula."/>
  <position/>
  <res-list-main/>
  <my-footer/>
</div>
</template>

<script>
  import MyFooter from "../../../components/common/footer/MyFooter";
  import NarBar from "../../../components/common/nav/NarBar";
  import Position from "../../../components/common/position/Position";
  import BigScreen from "../../../components/common/bigScreen/BigScreen";
  import ResListMain from "./ResListMain";
    export default {
        name: "ResList",
      components: {
        NarBar,
        MyFooter,
        BigScreen,
        Position,
        ResListMain
      }
    }
</script>

<style scoped>

</style>

<template>
  <div class="faq">
    <nar-bar/>
    <big-screen title="FREQUENTLY QUESTIONS" content="Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
"/>
    <position/>
    <faq-main/>
    <my-footer/>
  </div>
</template>

<script>
  import NarBar from "../../components/common/nav/NarBar";
  import MyFooter from "../../components/common/footer/MyFooter";
  import Helps from "../../components/common/listMain/Helps";
  import BigScreen from "../../components/common/bigScreen/BigScreen";
  import Position from "../../components/common/position/Position";
  import FaqMain from "./FaqMain";
  export default {
    name: "Faq",
    components: {
      NarBar,
      MyFooter,
      Helps,
      Position,
      BigScreen,
      FaqMain
    }
  }
</script>

<style scoped>

</style>

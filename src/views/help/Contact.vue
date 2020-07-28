<template>
  <div class="contact">
    <nar-bar/>
    <big-screen title="FREQUENTLY QUESTIONS" content="Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
"/>
    <contact-main/>
    <position/>
    <my-footer/>
  </div>
</template>

<script>

  import NarBar from "../../components/common/nav/NarBar";
  import BigScreen from "../../components/common/bigScreen/BigScreen";
  import Position from "../../components/common/position/Position";
  import MyFooter from "../../components/common/footer/MyFooter";
  import ContactMain from "./ContactMain";


  export default {
    name: "Contact",
    components: {
      NarBar,
      BigScreen,
      Position,
      MyFooter,
      ContactMain
    }
  }
</script>

<style scoped>

</style>

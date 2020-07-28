<template>
  <div class="tours">
    <nar-bar/>
    <carousel/>
    <TopTours/>
    <popular/>
    <video-ad/>
    <good-reasons/>
    <my-footer/>
  </div>
</template>

<script>
  import NarBar from "../../components/common/nav/NarBar";
  import Carousel from "../../components/common/carousel/Carousel";
  import TopTours from "./tours/TopTours";
  import Popular from "./tours/Popular";
  import VideoAd from "./tours/VideoAd";
  import GoodReasons from "./tours/GoodReasons";
  import MyFooter from "../../components/common/footer/MyFooter";

  import '../../assets/js/tabs';

  export default {

    name: "Tours",
    components: {
      NarBar,
      Carousel,
      TopTours,
      Popular,
      VideoAd,
      GoodReasons,
      MyFooter
    },
    mounted() {
      new CBPFWTabs(document.getElementById('tabs'));
    }
  }
</script>

<style scoped>
  @import "../../assets/css/bootstrap.min.css";
  @import "../../assets/css/style.css";
  @import "../../assets/css/vendors.unminified.css";
  @import "../../assets/css/custom.css";
  @import "../../assets/rs-plugin/css/settings.css";
  @import "../../assets/css/extralayers.css";

</style>

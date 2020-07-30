<template>
  <div class="tour-detail">
    <nar-bar/>
    <big-screen-bot :title="name" :address="address" :price="price" />
    <main>
      <position/>
      <detail-main :type="type" :des="des"  :schedule="schedule" :opening="opening" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 l-main :type="type"  />
    </main>
    <my-footer/>
  </div>
</template>

<script>
  import NarBar from "@/components/common/nav/NarBar";
  import BigScreenBot from "@/components/common/bigScreen/BigScreenBot";
  import Position from "../../../components/common/position/Position";
  import DetailMain from "../../../components/common/itemDetail/DetailMain";
  import MyFooter from "../../../components/common/footer/MyFooter";

  import 'slider-pro';

  export default {
    name: "TourDetail",
    components: {
      BigScreenBot,
      NarBar,
      Position,
      DetailMain,
      MyFooter
    },
    data(){
      return {
        type:'tour',
        // 给大屏幕用
        name:'ARC DE TRIOMPHE',
        address:'Champ de Mars, 5 Avenue Anatole, 75007 Paris.',
        price:'52',
        des:{
          title: 'Paris in love',
          titleDes: 'Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit  constituam, an mel iudico constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens in pro. Mea liber ridens inermis ei, mei legendos vulputate an, labitur tibique te qui.',
          includeDes:' Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxitconstituam, an mel iudico constituto efficiendi.',
          includeItem1: [
            'Lorem ipsum dolor sit amet',
            'No scripta electram necessasdasdsdsditatibus sit',
            'Quidam percipitur instructior an eum',
            't est saepe munere teros',
            'No scripta electram necessitatibus sit',
            'Quidam percipitur instructior an eum',
          ]
        },
        schedule:{
          schedule: [
            {
              id:'1',
              duration: '1st March to 31st October',
              detail: [
                '10.00 - 17.30',
                '10.00 - 17.30',
                '10.00 - 17.30',
                '10.00 - 17.30',
                'Closed',
                '10.00 - 17.30',
                '10.00 - 17.30',
                '17.00'
              ],
            },
            {
              id:'2',
              duration: '1st November to 28th February',
              detail: [
                '10.00 - 17.30',
                '10.00 - 17.30',
                '10.00 - 17.30',
                '10.00 - 17.30',
                'Closed',
                '10.00 - 17.30',
                '10.00 - 17.30',
                '17.00'
              ]
            }
          ],
        },
        opening:{
          title:'1st March to 31st October',
          schedule:[
            '10.00 - 17.30',
            '09.00 - 17.30',
            '09.00 - 17.30',
            'Closed',
            '09.00 - 17.30',
            '09.00 - 17.30',
            '10.00 - 17.30'
          ]}
      }
    },
    beforeCreate() {
      let itemId = this.$store.state.currentTourId;
      if (itemId === null) {
        console.log("NONONONONONONO!");
      }
    },
    created() {
      let itemId = this.$store.state.currentTourId;
      console.log(itemId);
    },
    mounted() {
      $(document).ready(function ($) {
        $('#Img_carousel').sliderPro({
          width: 960,
          height: 500,
          fade: true,
          arrows: true,
          buttons: false,
          fullScreen: false,
          smallSize: 500,
          startSlide: 0,
          mediumSize: 1000,
          largeSize: 3000,
          thumbnailArrows: true,
          autoplay: false
        });
      });

    },
  }
</script>

<style scoped>

</style>

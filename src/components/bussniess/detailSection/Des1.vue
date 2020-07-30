<template>
  <div class="col-lg-9">
    <h4 v-show="isTour">{{data.title}}</h4>
    <p>{{data.titleDes}}</p>
    <h4>What's include</h4>
    <p>
     {{data.includeDes}}
    </p>
    <div class="row">
      <div class="col-md-12">
        <ul class="list_ok">
          <li v-for="item in data.includeItem1">{{item}}</li>
        </ul>
      </div>
    </div>
    <!-- End row  -->
  </div>
</template>

<script>
  export default {
    name: "Des1",
    props: {
      type: {
        type:String,
        default() {
          return 'tour';
        }
      },
      data: {
        type: Object,
        default() {
          return {
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
          }
        }
      }
    },
    computed: {
      isTour(){
        return this.type === 'tour';
      },
      isHotel(){
        return this.type === 'hotel';
      }
    }
  }
</script>

<style scoped>

</style>

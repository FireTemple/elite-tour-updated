<template>
  <div class="col-lg-9">
    <h4 v-show="isTour">{{name}}</h4>
    <p>{{details}}</p>
    <h4 v-show="isTour">What's include</h4>
    <h4 v-show="isHotel">Hotel facilities</h4>
    <h4 v-show="isRes">Menu and dishes</h4>
    <p v-show="isTour">
     {{includeDes}}
    </p>
    <p v-show="isHotel">
      {{facilitiesDes}}
    </p>

    <p v-show="isRes">
      {{menuDes}}
    </p>

    <div class="row">
      <div class="col-md-12">
        <ul class="list_ok">
          <li v-show="isTour" v-for="item in includeItem">{{item.content}}</li>
          <li v-show="isHotel" v-for="item in facilities">{{item.des}}</li>
          <li v-show="isRes" v-for="item in menus">{{item.des}}</li>
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
        },
      },
      //real data
      name:{
        type:String,
        default(){
          return 'No Data'
        }
      },
      details:{
        type:String,
        default(){
          return 'No Data'
        }
      },
      includeDes:{
        type:String,
        default(){
          return 'No Data'
        }
      },
      includeItem:{
        type:Array,
        default(){
          return []
        }
      },
      // hotel
      facilitiesDes:{
        type:String,
        default(){
          return 'No Data'
        }
      },
      facilities:{
        type:Array,
        default(){
          return []
        }
      },
      rooms:{
        type:Array,
        default(){
          return []
        }
      },
      // restaurant
      menuDes:{
        type: String,
        default(){
          return '';
        }
      },
      menus:{
        type: Array,
        default(){
          return [];
        }
      }

    },
    computed: {
      isTour(){
        return this.type === 'tour';
      },
      isHotel(){
        return this.type === 'hotel';
      },
      isRes(){
        return this.type === 'res';
      }
    }
  }
</script>

<style scoped>

</style>

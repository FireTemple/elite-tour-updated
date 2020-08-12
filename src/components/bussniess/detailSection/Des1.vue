<template>
  <div class="col-lg-9">
    <h4 v-show="isTour">{{name}}</h4>
    <p>{{details}}</p>
    <h4>What's include</h4>
    <p>
     {{includeDes}}
    </p>
    <div class="row">
      <div class="col-md-12">
        <ul class="list_ok">
          <li v-for="item in includeItem">{{item.content}}</li>
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

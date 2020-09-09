<template>
  <div class="container margin_60">
    <div class="row">
      <aside class="col-lg-3">
        <p>
          <a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
        </p>
        <div class="box_style_cat">
          <ul id="cat_nav">
            <li @click="clearFilter"><a href="javascript:void(0);" id="active"><i class="icon_set_1_icon-51"></i>All tours<span>({{tourListTemp.length}})</span></a>
            </li>
            <li @click="filterRules('country','USA')"><a href="javascript:void(0);"><i class="icon_set_1_icon-3" ></i>USA<span></span></a>
            </li>
            <li @click="filterRules('country','India')"><a href="javascript:void(0);"><i class="icon_set_1_icon-4" ></i>India<span></span></a>
            </li>
            <li @click="filterRules('type','2')"><a href="javascript:void(0);"><i class="icon_set_1_icon-44"></i>Top Rate<span></span></a>
            </li>
            <li @click="filterRules('type','3')"><a href="javascript:void(0);"><i class="icon_set_1_icon-37"></i>Popular<span></span></a>
            </li>
          </ul>
        </div>
        <p>
          <a class="btn_map"  href="javascript:void(0);" @click="clearFilter" >clear filter</a>
        </p>
        <!--End filters col-->
        <helps/>
      </aside>
      <!--End aside -->
      <div class="col-lg-9">
        <list-item v-for="(item, index) in tourList" :key="item.id" :info="item" type="tour"/>
        <hr>
        <!-- end pagination-->
      </div>
      <!-- End col lg 9 -->
    </div>
    <!-- End row -->
  </div>
</template>

<script>
  import ListItem from "../../../components/common/listMain/ListItem";
  import Helps from "../../../components/common/listMain/Helps";
  export default {
    name: "TourListMain",
    components:{
      ListItem,
      Helps
    },
    created() {
      this.getTourList();
    },
    methods:{

      /**
       * query data methods
       */

      getTourList(){
        this.$axios({
          method: 'get',
          url: '/api/acTours'
        }).then(res => {
          this.tourList = res.data;
          this.tourListTemp = res.data;
          console.log(res.data);
        }).catch(error => {
          console.log(error)
        })
      },

      /**
       * filter methods
       */
      filterRules(attr, value){
        this.tourList = this.tourListTemp;
          if (attr === 'type'){
            this.tourList = this.tourList.filter(item => {
              return item.type === value;
            })
          } else if (attr === 'country'){
            this.tourList = this.tourList.filter(item => {
              return item.country === value;
            })
          }
      },
      clearFilter(){
        this.tourList = this.tourListTemp;
      }
    },
    data(){
      return {
        tourList:[],
        tourListTemp:[],
      }
    },
  }
</script>

<style scoped>

</style>

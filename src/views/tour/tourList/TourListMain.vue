<template>
  <div class="container margin_60">
    <div class="row">
      <aside class="col-lg-3">
        <p>
          <a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
        </p>
        <div class="box_style_cat">
          <ul id="cat_nav">
            <li><a href="#" id="active"><i class="icon_set_1_icon-51"></i>All tours <span>(141)</span></a>
            </li>
            <li><a href="#"><i class="icon_set_1_icon-3"></i>City sightseeing <span>(20)</span></a>
            </li>
            <li><a href="#"><i class="icon_set_1_icon-4"></i>Museum tours <span>(16)</span></a>
            </li>
            <li><a href="#"><i class="icon_set_1_icon-44"></i>Historic Buildings <span>(12)</span></a>
            </li>
            <li><a href="#"><i class="icon_set_1_icon-37"></i>Walking tours <span>(11)</span></a>
            </li>
            <li><a href="#"><i class="icon_set_1_icon-14"></i>Eat & Drink <span>(20)</span></a>
            </li>
            <li><a href="#"><i class="icon_set_1_icon-43"></i>Churces <span>(08)</span></a>
            </li>
            <li><a href="#"><i class="icon_set_1_icon-28"></i>Skyline tours <span>(11)</span></a>
            </li>
          </ul>
        </div>

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
      getTourList(){
        this.$axios({
          method: 'get',
          url: '/api/acTours'
        }).then(res => {
          this.tourList = res.data;
          console.log(res);
        }).catch(error => {
          console.log(error)
        })
      }
    },
    data(){
      return {
        tourList:[]
      }
    }
  }
</script>

<style scoped>

</style>

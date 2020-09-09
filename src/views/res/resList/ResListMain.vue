<template>
  <div class="container margin_60">
    <div class="row">
      <aside class="col-lg-3">
        <!--        <p>-->
        <!--          <a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>-->
        <!--        </p>-->
        <div class="box_style_cat">
          <ul id="cat_nav">
            <li><a href="javascript:void(0);" id="active"><i class="icon_set_3_restaurant-10"></i>All restaurants</a>
            </li>
            <li><a href="javascript:void(0);"><i class="icon_set_3_restaurant-1"></i>Pizza / Italian </a>
            </li>
            <li><a href="javascript:void(0);"><i class="icon_set_3_restaurant-2"></i>Fast Food </a>
            </li>
            <li><a href="javascript:void(0);"><i class="icon_set_3_restaurant-3"></i>Japanese </a>
            </li>
            <li><a href="javascript:void(0);"><i class="icon_set_3_restaurant-4"></i>Chinese </a>
            </li>
            <li><a href="javascript:void(0);"><i class="icon_set_3_restaurant-5"></i>International </a>
            </li>
            <li><a href="javascript:void(0);"><i class="icon_set_3_restaurant-8"></i>Coffee bar </a>
            </li>
            <li><a href="javascript:void(0);"><i class="icon_set_3_restaurant-7"></i>Fish </a>
            </li>
          </ul>
        </div>

        <!--End filters col-->
        <helps/>
      </aside>
      <!--End aside -->
      <div class="col-lg-9">
        <list-item v-for="item in resList" type="res" :info="item" :key="item.id"/>
        <hr>
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item active"><span class="page-link">1<span class="sr-only">(current)</span></span>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
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
    name: "ResListMain",
    components: {
      ListItem,
      Helps
    },
    data(){
      return {
        resList:[],
        resListTemp:[],
      }
    },
    methods:{
      getResList(){
        this.$axios({
          method:'get',
          url:'/api/ress'
        }).then(res => {
          this.resList = res.data;
          this.resListTemp = res.data;
          console.log(this.resList);
        }).catch(error => {
          console.log(error);
        })
      }
    },
    created() {
      this.getResList();
    }
  }
</script>

<style scoped>

</style>

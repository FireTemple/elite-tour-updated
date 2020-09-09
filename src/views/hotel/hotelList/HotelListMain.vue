<template>
  <div class="container margin_60">

    <div class="row">
      <aside class="col-lg-3">
        <p>
          <a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
        </p>
        <div id="filters_col">
          <a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt"><i class="icon_set_1_icon-65"></i>Filters</a>
          <div class="collapse show" id="collapseFilters">


            <div class="box_style_cat">
              <ul id="cat_nav">
                <li  @click="clearFilter"><a href="javascript:void(0);" id="active"><i class="icon_set_1_icon-51"></i>All Hotels<span></span></a>
                </li>
                <li @click="filterRules('type','2')"><a href="javascript:void(0);"><i class="icon_set_1_icon-44"></i>Top Rate<span></span></a>
                </li>
                <li @click="filterRules('type','3')"><a href="javascript:void(0);"><i class="icon_set_1_icon-37"></i>Popular<span></span></a>
                </li>
              </ul>
            </div>

          </div>
          <!--End collapse -->
        </div>
        <p>
          <a class="btn_map"  href="javascript:void(0);">clear filter</a>
        </p>
        <!--End filters col-->
        <helps/>
      </aside>
      <!--End aside -->

      <div class="col-lg-9">
        <list-item v-for="item in hotelList" type="hotel" :info="item" :key="item.id"/>
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
      <!-- End col lg-9 -->
    </div>
    <!-- End row -->
  </div>

</template>

<script>
  import Helps from "../../../components/common/listMain/Helps";
  import ListItem from "../../../components/common/listMain/ListItem";
    export default {
        name: "HotelListMain",
      components:{
        Helps,
        ListItem
      },
      // mock data
      data(){
          return {
            hotelList:[],
            hotelListTemp:[],
            itemInfo:{
              id:'1d23sds456',
              type: 'popular',
              imgUrl: 'img/hotel_5.jpg',
              title: 'MARIOsd wkfio',
              dec: 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modust.....',
              currentPrice: '39',
              pastPrice: '929',
            }
          }
      },
      methods:{
        /**
         *  get hotel data
         */

        getData(){
          this.$axios({
            method: 'get',
            url: '/api/hotels'
          }).then(res => {
            this.hotelList = res.data;
            this.hotelListTemp = res.data;
            console.log(res);
          })
        },
        /**
         * filter methods
         */
        filterRules(attr, value){
          this.hotelList = this.hotelListTemp;
          if (attr === 'type'){
            this.hotelList = this.hotelList.filter(item => {
              return item.type === value;
            })
          }
        },
        clearFilter(){
          this.hotelList = this.hotelListTemp;
        }
      },
      created() {
          this.getData();
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/bootstrap.min.css";
  @import "../../../assets/css/style.css";
  @import "../../../assets/css/vendors.unminified.css";
  @import "../../../assets/css/custom.css";
</style>

<template>
  <div class="container margin_60">

    <div class="row">
      <aside class="col-lg-3">

        <div id="filters_col">
          <a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt"><i class="icon_set_1_icon-65"></i>Filters</a>
          <div class="collapse show" id="collapseFilters">
            <div class="filter_type">
              <h6>Price</h6>
              <input type="text" id="range" name="range" value="">
            </div>
            <div class="filter_type">
              <h6>Star Category</h6>
              <ul>
                <li>
                  <label>
                    <input type="checkbox"><span class="rating">
											<i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i>
											</span>(15)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox"><span class="rating">
											<i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81"></i>
											</span>(45)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox"><span class="rating">
											<i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81"></i><i class="icon_set_1_icon-81"></i>
											</span>(35)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox"><span class="rating">
											<i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81"></i><i class="icon_set_1_icon-81"></i><i class="icon_set_1_icon-81"></i>
											</span>(25)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox"><span class="rating">
											<i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81"></i><i class="icon_set_1_icon-81"></i><i class="icon_set_1_icon-81"></i><i class="icon_set_1_icon-81"></i>
											</span>(15)
                  </label>
                </li>
              </ul>
            </div>
            <div class="filter_type">
              <h6>Review Score</h6>
              <ul>
                <li>
                  <label>
                    <input type="checkbox">Superb: 9+ (77)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Very good: 8+ (552)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Good: 7+ (909)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Pleasant: 6+ (1196)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">No rating (198)
                  </label>
                </li>
              </ul>
            </div>
            <div class="filter_type">
              <h6>Facility</h6>
              <ul>
                <li>
                  <label>
                    <input type="checkbox">Pet allowed
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Wifi
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Spa
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Restaurant
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Pool
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Parking
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Fitness center
                  </label>
                </li>
              </ul>
            </div>
            <div class="filter_type">
              <h6>District</h6>
              <ul>
                <li>
                  <label>
                    <input type="checkbox">Paris Centre
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">La Defance
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">La Marais
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox">Latin Quarter
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <!--End collapse -->
        </div>
        <!--End filters col-->
        <helps/>
      </aside>
      <!--End aside -->

      <div class="col-lg-9">
        <list-item type="hotel" :item-info="itemInfo"  />
        <list-item type="hotel" :item-info="itemInfo"  />
        <list-item type="hotel" :item-info="itemInfo"  />
        <list-item type="hotel" :item-info="itemInfo"  />

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
      }
    }
</script>

<style scoped>

</style>

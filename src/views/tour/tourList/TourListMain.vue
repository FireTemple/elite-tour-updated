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
        <list-item/>
        <list-item/>
        <list-item/>
        <hr>
<!--        <nav aria-label="Page navigation">-->
<!--          <ul class="pagination justify-content-center">-->
<!--            <li class="page-item">-->
<!--              <a class="page-link" href="#" aria-label="Previous">-->
<!--                <span aria-hidden="true">&laquo;</span>-->
<!--                <span class="sr-only">Previous</span>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li class="page-item active"><span class="page-link">1<span class="sr-only">(current)</span></span>-->
<!--            </li>-->
<!--            <li class="page-item"><a class="page-link" href="#">2</a></li>-->
<!--            <li class="page-item"><a class="page-link" href="#">3</a></li>-->
<!--            <li class="page-item">-->
<!--              <a class="page-link" href="#" aria-label="Next">-->
<!--                <span aria-hidden="true">&raquo;</span>-->
<!--                <span class="sr-only">Next</span>-->
<!--              </a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </nav>-->
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
    }
  }
</script>

<style scoped>

</style>

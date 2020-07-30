<template>
  <div>
    <div class="row">
      <div class="col-lg-3">
        <h3>Description</h3>
      </div>
      <!-- insert description detail -->
      <slot name="desDetail"></slot>
    </div>
    <hr>
      <slot name="schedule"/>
      <slot name="rooms"/>
      <slot name="opening"/>
    <hr>
<!--    <div class="row">-->
<!--      <div class="col-lg-3">-->
<!--        <h3>Reviews</h3>-->
<!--        <a href="#" class="btn_1 add_bottom_30" data-toggle="modal" data-target="#myReview">Leave a review</a>-->
<!--      </div>-->
<!--      <div class="col-lg-9">-->
<!--        <div id="general_rating">{{data.reviewOverall.count}} Reviews-->
<!--          <div class="rating">-->
<!--            <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i-->
<!--            class="icon-smile"></i><i class="icon-smile"></i>-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; End general_rating &ndash;&gt;-->
<!--        <OverAllReview/>-->
<!--        &lt;!&ndash; End row &ndash;&gt;-->
<!--        <hr>-->
<!--        &lt;!&ndash; review &ndash;&gt;-->
<!--        <detail-review/>-->
<!--        <detail-review/>-->
<!--        <detail-review/>-->
<!--      </div>-->
<!--    </div>-->
  </div>

</template>

<script>
  import DetailReview from "./DetailReview";
  import OverAllReview from "./OverAllReview";
  export default {
    name: "DetailDes",
    components:{
      DetailReview,
      OverAllReview
    },
    props: {
      data: {
        type: Object,
        default() {
          return {
            schedule:[
              {
                duration:'1st March to 31st October',
                detail:[
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
                duration:'1st November to 28th February',
                detail:[
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
            ]
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

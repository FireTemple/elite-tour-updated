<template>
  <div>
    <div class="row">
      <div class="col-lg-3">
        <h3>Description</h3>
      </div>
      <div class="col-lg-9">
        <h4>Paris in love</h4>
        <p>
          Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit
          constituam, an mel iudico constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens in pro. Mea liber
          ridens inermis ei, mei legendos vulputate an, labitur tibique te qui.
        </p>
        <h4>What's include</h4>
        <p>
          Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit
          constituam, an mel iudico constituto efficiendi.
        </p>
        <div class="row">
          <div class="col-md-6">
            <ul class="list_ok">
              <li>Lorem ipsum dolor sit amet</li>
              <li>No scripta electram necessitatibus sit</li>
              <li>Quidam percipitur instructior an eum</li>
              <li>Ut est saepe munere ceteros</li>
              <li>No scripta electram necessitatibus sit</li>
              <li>Quidam percipitur instructior an eum</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list_ok">
              <li>Lorem ipsum dolor sit amet</li>
              <li>No scripta electram necessitatibus sit</li>
              <li>Quidam percipitur instructior an eum</li>
              <li>No scripta electram necessitatibus sit</li>
            </ul>
          </div>
        </div>
        <!-- End row  -->
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-3">
        <h3>Schedule</h3>
      </div>
      <div class="col-lg-9">

        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
            <tr>
              <th colspan="2">
                1st March to 31st October
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                Monday
              </td>
              <td>
                10.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Tuesday
              </td>
              <td>
                09.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Wednesday
              </td>
              <td>
                09.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Thursday
              </td>
              <td>
                Closed
              </td>
            </tr>
            <tr>
              <td>
                Friday
              </td>
              <td>
                09.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Saturday
              </td>
              <td>
                09.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Sunday
              </td>
              <td>
                10.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                <strong><em>Last Admission</em></strong>
              </td>
              <td>
                <strong>17.00</strong>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
            <tr>
              <th colspan="2">
                1st November to 28th February
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                Monday
              </td>
              <td>
                10.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Tuesday
              </td>
              <td>
                09.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Wednesday
              </td>
              <td>
                09.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Thursday
              </td>
              <td>
                <span class="label label-danger">Closed</span>
              </td>
            </tr>
            <tr>
              <td>
                Friday
              </td>
              <td>
                09.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Saturday
              </td>
              <td>
                09.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                Sunday
              </td>
              <td>
                10.00 - 17.30
              </td>
            </tr>
            <tr>
              <td>
                <strong><em>Last Admission</em></strong>
              </td>
              <td>
                <strong>17.00</strong>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-3">
        <h3>Reviews </h3>
        <a href="#" class="btn_1 add_bottom_30" data-toggle="modal" data-target="#myReview">Leave a review</a>
      </div>
      <div class="col-lg-9">
        <div id="general_rating">{{data.reviewOverall.count}} Reviews
          <div class="rating">
            <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i
            class="icon-smile"></i><i class="icon-smile"></i>
          </div>
        </div>
        <!-- End general_rating -->
        <OverAllReview/>
        <!-- End row -->
        <hr>
        <!-- review -->
        <detail-review/>
        <detail-review/>
        <detail-review/>
      </div>
    </div>
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
            title: 'Paris in love',
            titleDes: 'Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit\n        constituam, an mel iudico constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens in pro. Mea liber\n        ridens inermis ei, mei legendos vulputate an, labitur tibique te qui.',
            include:'What\'s include',
            includeDes:' Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit\n        constituam, an mel iudico constituto efficiendi.',
            includeItem:[
              'Lorem ipsum dolor sit amet',
              'No scripta electram necessitatibus sit',
              'Quidam percipitur instructior an eum',
              't est saepe munere ceteros',
              'No scripta electram necessitatibus sit',
              'Quidam percipitur instructior an eum',
              'Lorem ipsum dolor sit amet',
              'No scripta electram necessitatibus sit',
              'Quidam percipitur instructior an eum',
              'No scripta electram necessitatibus sit'
            ],
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
            ],
            reviewOverall:{
              count:'3',
              type:'tours'
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

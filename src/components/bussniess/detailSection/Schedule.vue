<template>
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

</template>

<script>
  export default {
    name: "Schedule",
    props: {
      data: {
        type: Object,
        default() {
          return {
            schedule: [
              {
                duration: '1st March to 31st October',
                detail: [
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
                duration: '1st November to 28th February',
                detail: [
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
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

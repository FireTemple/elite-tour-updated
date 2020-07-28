<template>
  <div class="row">
    <div class="col-lg-3">
      <h3>Opening time</h3>
    </div>
    <div class="col-lg-9">
      <div class=" table-responsive">
        <table class="table table-striped">
          <thead>
          <tr>
            <th colspan="2">
              {{this.data.title}}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              Monday
            </td>
            <td>
              {{this.data.schedule[0]}}
            </td>
          </tr>
          <tr>
            <td>
              Tuesday
            </td>
            <td>
              {{this.data.schedule[1]}}

            </td>
          </tr>
          <tr>
            <td>
              Wednesday
            </td>
            <td>
              {{this.data.schedule[2]}}

            </td>
          </tr>
          <tr>
            <td>
              Thursday
            </td>
            <td>
              {{this.data.schedule[3]}}
            </td>
          </tr>
          <tr>
            <td>
              Friday
            </td>
            <td>
              {{this.data.schedule[4]}}
            </td>
          </tr>
          <tr>
            <td>
              Saturday
            </td>
            <td>
              {{this.data.schedule[5]}}
            </td>
          </tr>
          <tr>
            <td>
              Sunday
            </td>
            <td>
              {{this.data.schedule[6]}}
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
    name: "OpeningTime",
    props: {
      data: {
        type: Object,
        default(){
          return {
            title:'1st March to 31st October',
            schedule:[
              '10.00 - 17.30',
              '09.00 - 17.30',
              '09.00 - 17.30',
              'Closed',
              '09.00 - 17.30',
              '09.00 - 17.30',
              '10.00 - 17.30'
            ]
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

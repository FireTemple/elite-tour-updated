<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
      <tr>
        <th colspan="2">
          {{schedule.duration}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          Monday
        </td>
        <td>
          {{schedule.detail[0]}}
        </td>
      </tr>
      <tr>
        <td>
          Tuesday
        </td>
        <td>
          {{schedule.detail[1]}}
        </td>
      </tr>
      <tr>
        <td>
          Wednesday
        </td>
        <td>
          {{schedule.detail[2]}}
        </td>
      </tr>
      <tr>
        <td>
          Thursday
        </td>
        <td>
          {{schedule.detail[3]}}
        </td>
      </tr>
      <tr>
        <td>
          Friday
        </td>
        <td>
          {{schedule.detail[4]}}
        </td>
      </tr>
      <tr>
        <td>
          Saturday
        </td>
        <td>
          {{schedule.detail[5]}}
        </td>
      </tr>
      <tr>
        <td>
          Sunday
        </td>
        <td>
          {{schedule.detail[6]}}
        </td>
      </tr>
      <tr>
        <td>
          <strong><em>Last Admission</em></strong>
        </td>
        <td>
          <strong>{{schedule.detail[7]}}</strong>
        </td>
      </tr>
      </tbody>
    </table>
  </div>



</template>

<script>
  export default {
    name: "ScheduleTable",
    props: {
      schedule: {
        type: Object,
        default() {
          return {
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
              ]
          }
        }
      }
    }

  }
</script>

<style scoped>

</style>

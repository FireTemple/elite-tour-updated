<template>
  <div class="row">
    <div class="col-lg-3">
      <h3>Schedule</h3>
    </div>
    <div class="col-lg-9">
      <ScheduleTable v-for="item in data.schedule" :key="item.id" :schedule="item" />
    </div>
  </div>

</template>

<script>
  import ScheduleTable from "./ScheduleTable";
  export default {
    name: "Schedule",
    components: {
      ScheduleTable
    },
    props: {
      data: {
        type: Object,
        default() {
          return {
            schedule: [
              {
                key:'1',
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
                key:'2',
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

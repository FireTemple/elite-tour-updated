<template>
  <div class="row">
    <div class="col-lg-3">
      <h3>Schedule</h3>
    </div>
    <div class="col-lg-9">
      <ul>
        <li>Duration: {{duration}}</li>
        <li>Maximum hours: {{maximumHour}}</li>
      </ul>
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
      duration:{
        type:String,
        default(){
          return '1'
        }
      },
      maximumHour:{
        type:String,
        default(){
          return '3'
        }
      },
    }
  }
</script>

<style scoped>

</style>

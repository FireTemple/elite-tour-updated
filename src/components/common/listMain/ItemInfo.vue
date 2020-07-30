<template>
  <ul class="add_info">
    <li>
      <div class="tooltip_styled tooltip-effect-4">
        <span class="tooltip-item"><i class="icon_set_1_icon-83"></i></span>
        <div class="tooltip-content">
          <h4>Schedule</h4>
          <strong>Monday</strong> {{detail.schedule[0]}}
          <br>
          <strong>Monday to Friday</strong> {{detail.schedule[1]}}
          <br>
          <strong>Monday to Friday</strong> {{detail.schedule[2]}}
          <br>
          <strong>Monday to Friday</strong> {{detail.schedule[3]}}
          <br>
          <strong>Monday to Friday</strong> {{detail.schedule[4]}}
          <br>
          <strong>Saturday</strong> {{detail.schedule[5]}}
          <br>
          <strong>Sunday</strong> <span class="label label-danger">{{detail.schedule[6]}}</span>
        </div>
      </div>
    </li>
    <li>
      <div class="tooltip_styled tooltip-effect-4">
        <span class="tooltip-item"><i class="icon_set_1_icon-41"></i></span>
        <div class="tooltip-content">
          <h4>Address</h4> {{detail.address}}
          <br>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
      name: "ItemInfo",
      props: {
          detail:{
            type:Object,
            default(){
              return {
                schedule:[
                  '09.00 AM - 5.30 PM',
                  '09.00 AM - 5.30 PM',
                  '09.00 AM - 5.30 PM',
                  '09.00 AM - 5.30 PM',
                  '09.00 AM - 5.30 PM',
                  '09.00 AM - 5.30 PM',
                  'Closed'
                ],
                address:'Musée du Louvre, 75058 Paris - France',
              }
            }
          },
      }
    }
</script>

<style scoped>

</style>

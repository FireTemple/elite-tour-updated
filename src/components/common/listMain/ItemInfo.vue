<template>
  <ul class="add_info">
    <li>
      <div class="tooltip_styled tooltip-effect-4">
        <span class="tooltip-item"><i class="icon_set_1_icon-83"></i></span>
        <div class="tooltip-content">
          <h4>Schedule</h4>
          <strong>Monday to Friday</strong> {{detail.schedule.mtf}}
          <br>
          <strong>Saturday</strong> {{detail.schedule.sat}}
          <br>
          <strong>Sunday</strong> <span class="label label-danger">{{detail.schedule.sun}}</span>
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
    <li>
      <div class="tooltip_styled tooltip-effect-4">
        <span class="tooltip-item"><i class="icon_set_1_icon-97"></i></span>
        <div class="tooltip-content">
          <h4>Languages</h4> {{detail.language}}
        </div>
      </div>
    </li>
    <li>
      <div class="tooltip_styled tooltip-effect-4">
        <span class="tooltip-item"><i class="icon_set_1_icon-27"></i></span>
        <div class="tooltip-content">
          <h4>Parking</h4> {{detail.parking.first}}
          <br> {{detail.parking.second}}
          <br> {{detail.parking.third}}
          <br>
        </div>
      </div>
    </li>
    <li v-show="detail.hasTransport">
      <div class="tooltip_styled tooltip-effect-4">
        <span class="tooltip-item"><i class="icon_set_1_icon-25"></i></span>
        <div class="tooltip-content">
          <h4>Transport</h4>
          <strong>Metro: </strong>{{detail.transport.metro}}
          <br>
          <strong>Bus:</strong> {{detail.transport.bus}}
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
                hasTransport: true,
                schedule:{
                  mtf:'09.00 AM - 5.30 PM',
                  sat:'09.00 AM - 5.30 PM',
                  sun:'Closed'
                },
                address:'Musée du Louvre, 75058 Paris - France',
                languages: 'English - French - Chinese - Russian - Italian',
                parking:{
                  first:'1-3 Rue Elisée Reclus',
                  second:'76 Rue du Général Leclerc',
                  third: '8 Rue Caillaux 94923'
                },
                transport:{
                  metro:'Musée du Louvre station (line 1)',
                  bus:'21, 24, 27, 39, 48, 68, 69, 72, 81, 95'
                }
              }
            }
          }
      }
    }
</script>

<style scoped>

</style>

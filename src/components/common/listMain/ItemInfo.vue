<template>
  <ul class="add_info">
    <li>
      <div class="tooltip_styled tooltip-effect-4">
        <span class="tooltip-item"><i class="icon_set_1_icon-83"></i></span>
        <div class="tooltip-content">
          <h4>Duration</h4>
          <strong>Normal duration: </strong>{{duration}}
          <br>
          <strong>Maximum duration: </strong> {{maximumHour}}
          <br>
        </div>
      </div>
    </li>
    <li>
      <div class="tooltip_styled tooltip-effect-4">
        <span class="tooltip-item"><i class="icon_set_1_icon-41"></i></span>
        <div class="tooltip-content">
          <h4>Address</h4> {{city}},{{country}}
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
          country:{
            type:String,
            default(){
              return 'USA'
            }
          },
          city:{
            type:String,
            default(){
              return 'Detroit'
            }
          }
      }
    }
</script>

<style scoped>

</style>

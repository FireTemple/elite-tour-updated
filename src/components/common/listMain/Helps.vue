<template>
  <div class="box_style_2">
    <i class="icon_set_1_icon-57"></i>
    <h4>Need <span>Help?</span></h4>
    <a :href="phoneUrlCp" class="phone">{{info.phone}}</a>
    <small>{{info.workingTime}}</small>
  </div>
</template>

<script>
    export default {
        name: "Helps",
      props:{
          info:{
            type: Object,
            default(){
              return {
                phone:'+123-456-789',
                workingTime:'Monday to Friday 9.00am - 7.30pm',
                phoneURl:'004542344599'
              };
            }
          }
      },
      computed:{
          phoneUrlCp(){
            return 'tel://' + this.phoneURl;
          }
      }
    }
</script>

<style scoped>

</style>

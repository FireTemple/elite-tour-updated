<template>
  <div class="review_strip_single">
    <img :src="reviewInfo.headShotUrl" alt="Image" class="rounded-circle">
    <small> - {{reviewInfo.date}} -</small>
    <h4>{{reviewInfo.username}}</h4>
    <p>
      "{{reviewInfo.review}}"
    </p>
    <div class="rating">
      <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i
      class="icon-smile"></i><i class="icon-smile"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailReview",
      props:{
          reviewInfo:{
            type: Object,
            default(){
              return {
                headShotUrl:'img/avatar1.jpg',
                date:'10 March 2015',
                username:'Jhon Doe',
                review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed\n      sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
              }
            }
          }
      }
    }
</script>

<style scoped>

</style>

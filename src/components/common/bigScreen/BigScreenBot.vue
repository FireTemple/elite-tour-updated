<template>
  <section class="parallax-window" data-parallax="scroll" :data-image-src="imgUrl" data-natural-width="1400" data-natural-height="470">
    <div class="parallax-content-2">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>Arc de Triomphe</h1>
            <span>Champ de Mars, 5 Avenue Anatole, 75007 Paris.</span>
            <span class="rating"><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><small>(75)</small></span>
          </div>
          <div class="col-md-4">
            <div id="price_single_main">
              from/per person <span><sup>$</sup>52</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "BigScreenBot",
        props:{
          imgUrl:{
            type:String,
            default(){
              return 'img/single_tour_bg_1.jpg';
            }
          }

        }
    }
</script>

<style scoped>

</style>

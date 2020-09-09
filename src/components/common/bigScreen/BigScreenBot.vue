<template>
  <section class="parallax-window" data-parallax="scroll" :data-image-src="imgUrl" data-natural-width="1400" data-natural-height="470">
    <div class="parallax-content-2">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>{{this.title}}</h1>
            <span>{{this.address}}</span>
<!--            <span class="rating"><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><small>(75)</small></span>-->
          </div>
          <div class="col-md-4">
            <div id="price_single_main">
              from/per {{priceType}} <span><sup>$</sup>{{this.price}}</span>
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
          },
          title: {
            type: String,
            default(){
              return 'ARC DE TRIOMPHE'
            }
          },
          country: {
            type: String,
            default(){
              return 'Champ de Mars, 5 Avenue Anatole, 75007 Paris.';
            }
          },
          city:{
            type:String,
            default(){
              return ''
            }
          },
          price:{
            type:String,
            default(){
              return '52';
            }
          },
          hotelAddress:{
            type:String,
            default(){
              return '';
            }
          },

          type:{
            type: String,
            default(){
              return 'tour';
            }
          }
        },
      mounted() {
        $('.parallax-window').parallax({zIndex:1});
      },
      computed:{
          address(){
            if (this.hotelAddress === ''){
              return this.city + ' , ' + this.country;
            } else{
              return this.hotelAddress;
            }
          },
          priceType(){
            if (this.type === 'tour'){
              return 'person'
            }else if (this.type === 'hotel'){
              return 'day'
            }else
              return 'person on average';
          }
      }
    }
</script>

<style scoped>

</style>

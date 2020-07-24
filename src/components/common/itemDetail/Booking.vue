<template>
  <div class="box_style_1 expose">
    <h3 class="inner">- Booking -</h3>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label><i class="icon-calendar-7"></i>Select a date</label>
          <input class="date-pick form-control" data-date-format="M d, D" type="text" value="12:00 AM">
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label><i class=" icon-clock"></i> Time</label>
          <input class="time-pick form-control" value="12:00 AM" type="text">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label>Adults</label>
          <div class="numbers-row">
            <input type="text" v-model.number="adultsNumber" id="adults" class="qty2 form-control" name="quantity" >
            <div class="inc button_inc" @click="incrementAdults">+</div>
            <div class="dec button_inc" @click="decrementAdults">-</div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label>Children</label>
          <div class="numbers-row">
            <input type="text" v-model.number="kidsNumber" id="children" class="qty2 form-control" name="quantity">
            <div class="inc button_inc" @click="incrementKids">+</div><div class="dec button_inc" @click="decrementKids">-</div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <table class="table table_summary">
      <tbody v-show="isTour">
      <tr>
        <td>
          Adults
        </td>
        <td class="text-right">
          {{adultsNumber}}
        </td>
      </tr>
      <tr>
        <td>
          Children
        </td>
        <td class="text-right">
          {{kidsNumber}}
        </td>
      </tr>
      <tr>
        <td>
          Total amount
        </td>
        <td class="text-right">
          {{adultsNumber}} x ${{price.adultPrice}} + {{kidsNumber}} x ${{price.kidsPrice}}
        </td>
      </tr>
      <tr class="total">
        <td>
          Total cost
        </td>
        <td class="text-right">
          {{total}}
        </td>
      </tr>
      </tbody>
      <tbody v-show="isHotel">
      <tr class="total">
        <td>
          Total cost
        </td>
        <td class="text-right">
          {{price.adultPrice}}
        </td>
      </tr>
      </tbody>
    </table>
    <a class="btn_full" href="javascript:void(0);" style="color: #f6961d">Book now</a>
    <a class="btn_full_outline" href="javascript:void(0);"><i class=" icon-heart"></i> Add to whislist</a>
  </div>
</template>

<script>
  export default {
    name: "Booking",
    props:{
      type:{
        type:String,
        default() {
          return 'tour';
        }
      },
      price:{
        type: Object,
        default(){
          return {
            adultPrice:'50',
            kidsPrice:'30'
          }
        }
      }
    },
    mounted() {
      $('input.date-pick').datepicker('setDate', 'today');
      $('input.time-pick').timepicker({
        minuteStep: 15,
        showInpunts: false,
      });

    },
    data() {
      return {
        adultsNumber: 1,
        kidsNumber: 0,
      }
    },
    methods: {
      incrementAdults(){
        this.adultsNumber ++;
      },
      decrementAdults(){
        if (this.adultsNumber === 0) return;
        this.adultsNumber = this.adultsNumber - 1;
      },
      incrementKids(){
        this.kidsNumber = this.kidsNumber + 1;
      },
      decrementKids(){
        if (this.kidsNumber === 0) return;
        this.kidsNumber = this.kidsNumber - 1;
      },
    },
    computed:{
      total(){
        return this.adultsNumber * this.price.adultPrice + this.kidsNumber * this.price.kidsPrice;
      },
      isTour(){
        return this.type === 'tour';
      },
      isHotel(){
        return this.type === 'hotel';
      },
    }
  }
</script>

<style scoped>

</style>

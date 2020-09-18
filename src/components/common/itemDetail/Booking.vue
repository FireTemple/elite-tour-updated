<template>
  <div class="box_style_1 expose">
    <h3 class="inner">- Booking -</h3>
    <div class="booking" v-show="result === '1'">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label><i class="icon-calendar-7"></i>Select a date</label>
            <input  class="date-pick form-control" data-date-format="M d yy, D" type="text" value="12:00 AM">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label><i class=" icon-clock"></i> Time</label>
            <input  class="time-pick form-control" value="12:00 AM" type="text">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Adults</label>
            <div class="numbers-row">
              <input v-model="adultsNumber" type="text" id="adults" class="qty2 form-control" name="quantity">
              <div class="inc button_inc" @click="incrementAdults">+</div>
              <div class="dec button_inc" @click="decrementAdults">-</div>
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
            Total amount
          </td>
          <td class="text-right">
            {{adultsNumber}} x ${{price}}
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
            {{price}}
          </td>
        </tr>
        </tbody>
      </table>
      <h6>Contact Info</h6>
      <el-input  v-model="email"  placeholder="e-mail" type="email" ></el-input>
      <el-input  v-model="phone" placeholder="phone" ></el-input>

      <a class="btn_full" href="javascript:void(0);" style="color: #f6961d" @click="booking">Book now</a>
<!--      <a class="btn_full_outline" href="javascript:void(0);"><i class=" icon-heart"></i> Add to whislist</a>-->
    </div>

    <div class="result success" v-show="result === '2'">
      <h5>Order submitted!</h5>
      <h4>you will contact you soon!</h4>
    </div>
    <div class="result error" v-show="result === '3'">
      <h5>System error!</h5>
      <h4>pleases try later.</h4>
      <el-button type="warning">back</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Booking",
    props: {
      type: {
        type: String,
        default() {
          return 'tour';
        }
      },
      price: {
        type: String,
        default() {
          return '';
        }
      },
      itemId: {
        type: String,
        default() {
          return '';
        }
      },
      name: {
        type: String,
        default() {
          return '';
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
        bookingDate: '',
        bookingTime: '',
        bookingPrice: this.total,
        email: '',
        phone: '',

        result:'1',
      }
    },
    methods: {
      incrementAdults() {
        this.adultsNumber++;
      },
      decrementAdults() {
        if (this.adultsNumber === 0) return;
        this.adultsNumber = this.adultsNumber - 1;
      },
      getDate() {
        this.bookingDate = $('input.date-pick').val();
        this.bookingTime = $('input.time-pick').val();
      },
      async booking() {
        this.getDate();
        await this.$axios({
          url: '/api/booking',
          method: 'post',
          data: {
            bookingDate: this.bookingTime,
            bookingTime: this.bookingTime,
            price: this.total,
            itemId: this.itemId,
            email: this.email,
            phone: this.phone,
            name: this.name,
            type: this.TypeToInt,
            status: '1'
          }
        }).then(res => {
          if (res.code === 0) {
            this.result = '2';
          } else {
            this.result = '3';
          }
        }).catch(error => {
          this.result = '3';
        })
      }
    },
    computed: {
      total() {
        return this.adultsNumber * this.price;
      },
      isTour() {
        return this.type === 'tour';
      },
      isHotel() {
        return this.type === 'hotel';
      },
      isRes() {
        return this.type === 'res';
      },
      TypeToInt() {
        if (this.type === 'tour') {
          return '1'
        } else if (this.type === 'hotel') {
          return '2'
        } else return '3';
      }
    }
  }
</script>

<style scoped>
  h6 {
    text-align: center;
    color: #f6961d;
  }

  .success h4 {
    text-align: center;
    color: #f6961d;
  }

  .success h5 {
    text-align: center;
    color: #8abf23;
  }
  .error h4{
    text-align: center;
    color: #f6961d;
  }
  .error h5{
    text-align: center;
    color: #bf2120;
  }
</style>

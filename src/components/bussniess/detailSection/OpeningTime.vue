<template>
  <div class="row">
    <div class="col-lg-3">
      <h3>Opening time</h3>
    </div>
    <div class="col-lg-9">
      <div class=" table-responsive">
        <table class="table table-striped">
          <thead>
          <tr>
            <th colspan="2">
              {{this.data.title}}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              Monday
            </td>
            <td>
              {{this.data.mo}}
            </td>
          </tr>
          <tr>
            <td>
              Tuesday
            </td>
            <td>
              {{this.data.tu}}

            </td>
          </tr>
          <tr>
            <td>
              Wednesday
            </td>
            <td>
              {{this.data.we}}

            </td>
          </tr>
          <tr>
            <td>
              Thursday
            </td>
            <td>
              {{this.data.th}}
            </td>
          </tr>
          <tr>
            <td>
              Friday
            </td>
            <td>
              {{this.data.fri}}
            </td>
          </tr>
          <tr>
            <td>
              Saturday
            </td>
            <td>
              {{this.data.sa}}
            </td>
          </tr>
          <tr>
            <td>
              Sunday
            </td>
            <td>
              {{this.data.su}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "OpeningTime",
    props: {
      data: {
        type: Object,
        default(){
          return {
            title:'1st March to 31st October',
            mo: '',
            tu: '',
            we: '',
            th: '',
            fri: '',
            sa: '',
            su: '',
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

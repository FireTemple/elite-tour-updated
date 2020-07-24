<template>
  <div class="row" id="rating_summary">
    <div class="col-md-6">
      <ul>
        <li>{{reviewProps[0]}}
          <div class="rating">
            <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i
            class="icon-smile"></i><i class="icon-smile"></i>
          </div>
        </li>
        <li>{{reviewProps[1]}}
          <div class="rating">
            <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i
            class="icon-smile voted"></i><i class="icon-smile"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <ul>
        <li>{{reviewProps[2]}}
          <div class="rating">
            <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i
            class="icon-smile"></i><i class="icon-smile"></i>
          </div>
        </li>
        <li>{{reviewProps[3]}}
          <div class="rating">
            <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i
            class="icon-smile voted"></i><i class="icon-smile voted"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OverAllReview",
    props: {
      reviewProps: {
        type: Array,
        default() {
          return [
            'Position',
            'Price',
            'Tourist guide',
            'Quality'
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="container margin_60">
    <div class="row">
      <div class="col-md-8">
        <div class="form_title">
          <h3><strong><i class="icon-pencil"></i></strong>Fill the form below</h3>
          <p>
            Mussum ipsum cacilds, vidis litro abertis.
          </p>
        </div>
        <div class="step">

          <div id="message-contact"></div>
          <form method="post" action="assets/contact.php" id="contactform">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-control" id="name_contact" name="name_contact" placeholder="Enter Name">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-control" id="lastname_contact" name="lastname_contact" placeholder="Enter Last Name">
                </div>
              </div>
            </div>
            <!-- End row -->
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" id="email_contact" name="email_contact" class="form-control" placeholder="Enter Email">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Phone</label>
                  <input type="text" id="phone_contact" name="phone_contact" class="form-control" placeholder="Enter Phone number">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label>Message</label>
                  <textarea rows="5" id="message_contact" name="message_contact" class="form-control" placeholder="Write your message" style="height:200px;"></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <label>Human verification</label>
                <input type="text" id="verify_contact" class=" form-control add_bottom_30" placeholder="Are you human? 3 + 1 =">
                <input type="submit" value="Submit" class="btn_1" id="submit-contact">
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- End col-md-8 -->

      <div class="col-md-4">
        <div class="box_style_1">
          <span class="tape"></span>
          <h4>Address <span><i class="icon-pin pull-right"></i></span></h4>
          <p>
            Place Charles de Gaulle, 75008 Paris
          </p>
          <hr>
          <h4>Help center <span><i class="icon-help pull-right"></i></span></h4>
          <p>
            Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie.
          </p>
          <ul id="contact-info">
            <li>+ 61 (2) 8093 3400 / + 61 (2) 8093 3402</li>
            <li><a href="#">info@domain.com</a>
            </li>
          </ul>
        </div>
        <helps/>
      </div>
      <!-- End col-md-4 -->
    </div>
  </div>
</template>

<script>
  import Helps from "../../components/common/listMain/Helps";
    export default {
        name: "ContactMain",
      components: {
        Helps
      }
    }
</script>

<style scoped>

</style>

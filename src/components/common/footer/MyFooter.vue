<template>
  <footer class="revealed" >
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <h3>Need help?</h3>
          <a href="tel://1883034880" id="phone">+1 888 303 4880</a>
          <a href="mailto:support@myzoomride.com" id="email_footer">support@myzoomride.com</a>
          <p><img src="img/payments.png" width="231" height="30" alt="Image" data-retina="true" class="img-fluid"></p>
        </div>
        <div class="col-lg-2 col-md-3 ml-md-auto">
          <h3>About</h3>
          <ul>
            <li><a href="#">About us</a>
            </li>
            <li><a href="#">FAQ</a>
            </li>
<!--            <li><a href="#">Blog</a>-->
<!--            </li>-->
            <li><a href="#">Contacts</a>
            </li>
<!--            <li><a href="#">Login</a>-->
<!--            </li>-->
<!--            <li><a href="#">Register</a>-->
<!--            </li>-->
            <li><a href="#">Terms and condition</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-4" id="newsletter">
          <h3>Newsletter</h3>
          <p>Join our newsletter to keep be informed about offers and news.</p>
          <div id="message-newsletter_2"></div>
          <form method="post" action="assets/newsletter.php" name="newsletter_2" id="newsletter_2">
            <div class="form-group">
              <input name="email_newsletter_2" id="email_newsletter_2" type="email" value="" placeholder="Your mail" class="form-control">
            </div>
            <input type="submit" value="Subscribe" class="btn_1" id="submit-newsletter_2">
          </form>
        </div>
        <div class="col-lg-2 ml-lg-auto">
          <h3>Settings</h3>
          <div class="styled-select">
            <select name="lang" id="lang">
              <option value="English" selected>English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="Russian">Russian</option>
            </select>
          </div>
          <div class="styled-select">
            <select name="currency" id="currency">
              <option value="USD" selected>USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="RUB">RUB</option>
            </select>
          </div>
        </div>
      </div>
      <!-- End row -->
      <div class="row">
        <div class="col-lg-12">
          <div id="social_footer">
            <ul>
              <li><a href="https://www.facebook.com/my.zoomride/"><i class="icon-facebook"></i></a>
              </li>
              <li><a href="https://www.instagram.com/myzoomrides/"><i class="icon-instagram"></i></a>
              </li>
            </ul>
            <p>© 2020 Zoom Ride,Inc.</p>
          </div>
        </div>
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </footer>
</template>

<script>
    export default {
        name: "MyFooter",
      mounted() {
      }
    }
</script>

<style scoped>

</style>

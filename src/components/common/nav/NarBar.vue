<template>
  <header>
    <div id="top_line">
      <div class="container">
        <div class="row">
          <div class="col-6"><i class="icon-phone"></i><strong>+1-888-303-4880</strong></div>
          <div class="col-6">
            <ul id="top_links">
              <li><a href="#" id="access_link">Sign in</a></li>
              <li><a href="javascript:void(0);" id="wishlist_link">Wishlist</a></li>
            </ul>
          </div>
        </div><!-- End row -->
      </div><!-- End container-->
    </div><!-- End top line-->
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div id="logo_home">
            <h1><a href="javascript:void(0);" title="City tours travel template">Zoom Ride</a></h1>
          </div>
        </div>
        <nav class="col-9">
          <a class="cmn-toggle-switch cmn-toggle-switch__htx open_close"
             href="javascript:void(0);"><span>Menu mobile</span></a>
          <div class="main-menu">
            <div id="header_menu">
              <img src="img/logo-1124x278.png" width="160" height="34" alt="City tours" data-retina="true">
            </div>
            <a href="#" class="open_close" id="close_in"><i class="icon_set_1_icon-77"></i></a>
            <ul>
             <Tag v-for="item in navList" :info="item" :key="item.name"/>
              <li class="submenu">
                <a href="javascript:void(0);" class="show-submenu">helps <i class="icon-down-open-mini"></i></a>
                <ul>
                  <li><a href="javascript:void(0);" @click="goTo('faq')">FAQ</a></li>
                  <li><a href="javascript:void(0);" @click="goTo('contact')">Contact Us</a></li>
                </ul>
              </li>
            </ul>
          </div><!-- End main-menu -->
          <ul id="top_tools">
            <li>
              <a href="javascript:void(0);" class="search-overlay-menu-btn"><i class="icon_search"></i></a>
            </li>
            <li>
              <div class="dropdown dropdown-cart">
                <a href="#" data-toggle="dropdown" class="cart_bt"><i
                  class="icon_bag_alt"></i><strong>3</strong></a>
                <ul class="dropdown-menu" id="cart_items">
                  <li>
                    <div class="image"><img src="img/thumb_cart_1.jpg" alt="image"></div>
                    <strong><a href="#">Louvre museum</a>1x $36.00 </strong>
                    <a href="#" class="action"><i class="icon-trash"></i></a>
                  </li>
                  <li>
                    <div class="image"><img src="img/thumb_cart_2.jpg" alt="image"></div>
                    <strong><a href="#">Versailles tour</a>2x $36.00 </strong>
                    <a href="#" class="action"><i class="icon-trash"></i></a>
                  </li>
                  <li>
                    <div class="image"><img src="img/thumb_cart_3.jpg" alt="image"></div>
                    <strong><a href="#">Versailles tour</a>1x $36.00 </strong>
                    <a href="#" class="action"><i class="icon-trash"></i></a>
                  </li>
                  <li>
                    <div>Total: <span>$120.00</span></div>
                    <a href="#sign-in-dialog" class="button_drop">Go to cart</a>
                    <a href="javascript:void(0);" class="button_drop outline">Check out</a>
                  </li>
                </ul>
              </div><!-- End dropdown-cart-->
            </li>
          </ul>
        </nav>
      </div>
    </div><!-- container -->

    <!-- sign in -->
    <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
      <div class="small-dialog-header">
        <h3>Sign In</h3>
      </div>
      <form>
        <div class="sign-in-wrapper">
          <a href="javascript:void(0);" class="social_bt facebook">Login with Facebook</a>
          <a href="#0" class="social_bt google">Login with Google</a>
          <div class="divider"><span>Or</span></div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" name="email" id="email">
            <i class="icon_mail_alt"></i>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password" id="password" value="">
            <i class="icon_lock_alt"></i>
          </div>
          <div class="clearfix add_bottom_15">
            <div class="checkboxes float-left">
              <input id="remember-me" type="checkbox" name="check">
              <label for="remember-me">Remember Me</label>
            </div>
            <div class="float-right"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
          </div>
          <div class="text-center"><input type="submit" value="Log In" class="btn_login"></div>
          <div class="text-center">
            Don’t have an account? <a href="javascript:void(0);">Sign up</a>
          </div>
          <div id="forgot_pw">
            <div class="form-group">
              <label>Please confirm login email below</label>
              <input type="email" class="form-control" name="email_forgot" id="email_forgot">
              <i class="icon_mail_alt"></i>
            </div>
            <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
            <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"></div>
          </div>
        </div>
      </form>
      <!--form -->
    </div>

  </header><!-- End Header -->
</template>

<script>
  import Tag from "./Tag";


  import '../../../assets/js/common_scripts';
  import '../../../assets/js/functions';
  export default {
    name: "NarBar",
    components:{
      Tag
    },
    data() {
      return {
        navList: [
          {name: 'Home',routeUrl: '/tours'},
          {name: 'Tours',routeUrl: '/tours'},
          {name: 'Hotels',routeUrl: '/hotelsList'},
          {name: 'Restaurants',routeUrl: '/resList'},
        ]
      }
    },
    mounted() {
      // fixed navbar when scroll down
      $(window).scroll(function () {
        'use strict';
        if ($(this).scrollTop() > 1) {
          $('header').addClass("sticky");
        } else {
          $('header').removeClass("sticky");
        }
      });

      // change menu style when use small size screen
      $('a.open_close').on("click", function () {
        $('.main-menu').toggleClass('show');
        $('.layer').toggleClass('layer-is-visible');
      });
      $('a.show-submenu').on("click", function () {
        $(this).next().toggleClass("show_normal");
      });
      $('a.show-submenu-mega').on("click", function () {
        $(this).next().toggleClass("show_mega");
      });
      if ($(window).width() <= 480) {
        $('a.open_close').on("click", function () {
          $('.cmn-toggle-switch').removeClass('active')
        });
      };

      $('#access_link').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });

    },
    methods:{
      goTo(destination){
        this.$router.push('/' + destination);
      }
    }
  }
</script>

<style scoped>

</style>

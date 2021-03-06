import VueRouter from 'vue-router'
import Vue from 'vue'
import Tours from "../views/tour/Tours";
import TourList from "../views/tour/tourList/TourList";
import TourDetail from "../views/tour/tourDetail/TourDetail";
import HotelList from "../views/hotel/hotelList/HotelList";
import HotelDetail from "../views/hotel/hotelDetail/HotelDetail";
import ResList from "../views/res/resList/ResList";
import ResDetail from "../views/res/resDetail/ResDetail";
import Faq from "../views/help/Faq";
import Contact from "../views/help/Contact";
// 必须通过vue.use 安装插件
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/tours'
  },
  {
    path: '/tours',
    component: Tours
  },
  {
    path: '/toursList',
    component: TourList
  },
  {
    path: '/tourDetail',
    component: TourDetail
  },
  {
    path: '/hotelsList',
    component: HotelList
  },
  {
    path: '/hotelsDetail',
    component: HotelDetail
  },
  {
    path: '/resList',
    component: ResList
  },
  {
    path: '/resDetail',
    component: ResDetail
  },
  {
    path: '/faq',
    component: Faq
  },
  {
    path: '/contact',
    component: Contact
  }

]

let router = new VueRouter({
  routes,
  mode:'history'
});


router.beforeEach((to, from, next) => {
  next();
  console.log(document.getElementsByTagName("head"));
})

router.afterEach((to, from) => {
  window.scrollTo(0,0);
})

export default router;

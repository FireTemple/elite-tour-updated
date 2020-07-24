import VueRouter from 'vue-router'
import Vue from 'vue'
import Tours from "../views/tour/Tours";
import TourList from "../views/tour/tourList/TourList";
import TourDetail from "../views/tour/tourDetail/TourDetail";
import HotelList from "../views/hotel/hotelList/HotelList";
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

]

let router = new VueRouter({
  routes,
  mode:'history'
});

router.beforeEach((to, from, next) => {
  // `to` and `from` are both route objects
  next();
})

router.afterEach((to, from) => {
  window.scrollTo(0,0);
})

export default router;

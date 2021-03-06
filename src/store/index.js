import Vue from 'vue';
import Vuex from 'vuex';

// 1. 安装
Vue.use(Vuex);
// 2. 创建对象
let store = new Vuex.Store({
  state: {
    currentTourId: null,
    currentHotelId: null,
    currentResId: null,
    wishlist:{

    }

  },
  mutations: {
    changeCurrentTourId(state,payload){
      console.log(payload)
      state.currentTourId = payload.id;
    },
    changeCurrentHotelId(state,payload){
      console.log(payload)
      state.currentHotelId = payload.id;
    },
    changeCurrentResId(state,payload){
      console.log(payload)
      state.currentResId = payload.id;
    }
  }
});

// 3. 导出
export default store

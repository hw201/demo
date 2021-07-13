import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// // import { loginreq, req } from './axiosFun';

// // // 登录接口 
// // export const login = (params) => { return loginreq("post", "/api/login", params) };

// const store = new Vuex.store({
//   state: {},
//   mutations: {},
//   actions: {},
//   getter: {},
//   module: {}
// })


// export default store


export default new Vuex.Store({
  state: {
    user: false
  },
  mutations: {
    // 登录
    login(state, user) {
      state.user = user;
      localStorage.setItem("userInfo", user);
    },
    // 退出
    logout(state, user) {
      state.user = "";
      localStorage.setItem("userInfo", "");
    }
  }
})
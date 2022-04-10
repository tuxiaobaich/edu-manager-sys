import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用于在登录成功后保存到用户信息
    user: JSON.parse(window.localStorage.getItem('user') || null)
  },
  mutations: {
    // 存储用户数据
    setUser (state, payload) {
      state.user = payload
      // 将 payload 数据添加到本地存储中
      window.localStorage.setItem('user', JSON.stringify(payload))
    }
  },
  actions: {
  },
  modules: {
  }
})

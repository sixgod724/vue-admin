import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state 存放状态
// mutations state成员操作
// getters 加工state成员给外界
// actions 异步操作
// modules 模块化状态管理

const state = {
  count: 0,
  isCollapse: false,
}

const mutations = {
  isCollapseState(state){
    state.isCollapse = !state.isCollapse
  }
}


export default new Vuex.Store({
  state,
  mutations
})

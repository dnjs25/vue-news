import Vue from 'vue'
import Vuex from 'vuex'

// store 모듈화
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // news: [],
    // jobs: [],
    // ask: [],
    user: {},
    // props 전달 시 Object형태이므로 [] -> {} 변경
    item: {},
    list: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations,
  actions,
});
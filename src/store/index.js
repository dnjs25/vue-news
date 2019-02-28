import Vue from 'vue'
import Vuex from 'vuex'

// store 모듈화
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  },
  mutations,
  actions,
});
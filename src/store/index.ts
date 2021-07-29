import { createStore } from 'vuex'
import actions from './actions'
import ActionTypes from './actionTypes'
import mutations from './mutations'
import state from './state'

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  }
})

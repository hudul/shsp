import { createStore, StoreOptions } from 'vuex'

export default createStore({
  state: {
    freeTrialInfo: {
      busType: 0,
      show: false,
      centerName: '',
      contactName: '',
      phone: ''
    }
  },
  mutations: {
    setFreeTrialInfo (state, playload) {
      state.freeTrialInfo = {
        ...state.freeTrialInfo,
        busType: playload.busType,
        show: playload.show
      }
    }
  },
  actions: {

  },
  modules: {
  }
})

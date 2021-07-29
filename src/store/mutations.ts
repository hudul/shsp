import state from './state'

export default {
  setFreeTrialInfo (state:any, playload:any) {
    state.freeTrialInfo = {
      ...state.freeTrialInfo,
      busType: playload.busType,
      show: playload.show
    }
  }
}
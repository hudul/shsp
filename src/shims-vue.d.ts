/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module '@vue/runtime-core' {
//   import { ComponentCustomProperties } from 'vue'
//   import { Store } from 'vuex'

//   // declare your own store states
//   interface State {
//     freeTrialInfo:{
//       busType: number,
//       show: boolean,
//       centerName: string,
//       contactName: string,
//       phone: string
//     }
//   }

//   // provide typings for `this.$store`
//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
// }
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

  import { ComponentCustomProperties } from 'vue'
  import { Store } from 'vuex'
  declare module '@vue/runtime-core' {
    // 声明自己的 store state
    interface State {
      count: number
    }
  
    interface ComponentCustomProperties {
      $store: Store<State>
    }
  }
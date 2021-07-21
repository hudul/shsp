<template>
   <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutBox from '@/components/LayoutBox.vue'

export default defineComponent({
  name: 'App',
  component: {
    LayoutBox
  }
})
</script>

<style lang="scss">
  #app{
    width: 100%;
    max-width: 1440px;
    min-width: 1024px;
    margin: 0 auto;
  }
</style>

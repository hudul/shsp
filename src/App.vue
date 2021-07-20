<template>
  <div class="pageBox">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'

export default Vue.extend({
  name: 'App',
  comments: {
    Header
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

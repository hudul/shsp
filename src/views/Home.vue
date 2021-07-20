<template>
  <div class="home">
    <BannerHome />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BannerHome from '@/components/BannerHome.vue'

export default defineComponent({
  name: 'Home',
  components: {
    BannerHome
  }
})
</script>

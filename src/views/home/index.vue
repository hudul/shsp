<template>
  <div class="mainBox">
    <banner />
    <Title myTitle="我们的服务" />
    <Service />
    <Title myTitle="我们的优势" />
    <Superiority />
    <Title myTitle="我们的客户" />
    <Customer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from './banner.vue'
import Service from './service.vue'
import Title from './title.vue'
import Superiority from './superiority.vue'
import Customer from './customer.vue'

export default defineComponent({
  setup () {
    return {}
  },
  components: {
    Banner,
    Title,
    Service,
    Superiority,
    Customer
  }
})
</script>

<style lang="scss" scoped>

</style>

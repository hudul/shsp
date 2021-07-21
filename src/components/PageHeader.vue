<template>
  <div class="myHeader">
    <mHeader />
    <pcHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mHeader from '@/components/mHeader.vue'
import pcHeader from '@/components/pcHeader.vue'
export default defineComponent({
  name: 'PageHeader',
  components: {
    mHeader,
    pcHeader
  }
})
</script>

<style lang="scss" scoped>
  .myHeader{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1000;
  }
  @media only screen and (max-width: 1200px){
    .header-pc{
      .menu{
          width: 600px;
        }
    }
  }
</style>

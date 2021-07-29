<template>
<div class="view-width pageNav">
  <span>解决方案 / 区域方案获客系统</span>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageNav',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .pageNav{
    padding: 36px 0 30px 20px;
    span{
      color: #666;
      font-weight: lighter;
    }
  }
  @media only screen and (max-width: 1024px){
    .pageNav{
      display: none;
    }
  }
</style>

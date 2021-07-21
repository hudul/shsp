<template>
  <div class="footer-pc view-width">
    <span>版权所有:上海铄普信息技术有限公司 | 地址:中国（上海）自由贸易试验区达尔文路88号1幢304室 | 沪ICP备16006991号-5  </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .footer-pc{
    background-image: linear-gradient(180deg, #fff 1%, #eee 100%);
    height: 100px;
    text-align: center;
    @include flex-row(center,center);
    span{
      color: #999;
      font-size: $font-size-12;

    }
  }
</style>

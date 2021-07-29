<template>
<div class="mainBox">
  <PageNav />
  <div class="productBox view-width">
    <div class="left">
      <div class="chanpinImg"><img src="@/assets/image/chanpin-tuitui.jpg" alt=""></div>
      <Description />
    </div>
    <Try />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageNav from './pageNav.vue'
import Description from './description.vue'
import Try from './try.vue'

export default defineComponent({
  name: 'Product',
  setup () {
    return {}
  },
  components: {
    PageNav,
    Description,
    Try
  }
})
</script>

<style lang="scss" scoped>
.productBox{
  @include flex-row(space-between,flex-start);
  .left{
    @include flex-row();
  }
  .chanpinImg{
    width: 400px;
    height: 520px;
    overflow: hidden;
    margin-right: 50px;
    img{
      width: 100%;
      height: auto;
    }
  }
}
@media only screen and (max-width: 1024px){
  .productBox{
    display: block;
    .left{
      display: block;
    }
    .chanpinImg{
      width: 100%;
      height: 6.25rem;
      margin-right: 0;
      margin-bottom: 1.25rem;
    }
  }
}
</style>

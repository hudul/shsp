<template>
  <div class="right">
    <h3>399元<span>/月起</span></h3>
    <button class="button btnSize3 btnStyle2 js_FreeTrial" @click="dialogInfo.setShow(true,IDialogBusType[4])">申请试用</button>
    <p>按需订购，快速启用。按年订购价格更优。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { IDialogBusType } from '@/common.d.ts'

export default defineComponent({
  name: 'Try',
  setup () {
    const dialogInfo = inject('dialogInfo')
    return {
      dialogInfo
    }
  }
})
</script>

<style lang="scss" scoped>
.right{
  h3{
    font-size: $font-size-36;
    margin-bottom: 20px;
    text-align: center;
    span{
      font-size: $font-size-24;
    }
  }
  button{
    margin-bottom: 20px;
  }
  p{
    font-size: $font-size-14;
    color: #666;
    width: 180px;
    margin-left: 15px;
  }
}
@media only screen and (max-width: 1024px){
  .right{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1.25rem 0;
    z-index: 100;
    @include flex-row(space-around,center);
    background-image: linear-gradient(180deg, #3172B5 1%, #1F5798 100%);
    h3{
      font-size: 1.5rem;
      font-family: pfBold;
      margin-bottom: 0;
      color: #fff;
      span{
        font-size: 0.875rem;
      }
    }
    button{
      margin-bottom: 0;
      width: 11.25rem;
      height: 2.5rem;
      line-height: 2.5rem;
      font-size: 1.0rem;
      background-image: linear-gradient(180deg, #00B2FF 0%, $color2 100%)
    }
    p{
      display: none;
    }
  }
}
</style>

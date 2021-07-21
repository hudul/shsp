<template>
  <div class="bannerBox view-width">
    <img src="@/assets/image/home-banner.jpg">
    <div class="content">
      <h1 class="xingkai">区域获客 <span>|</span> 精准营销 <span>|</span> 运营管理</h1>
      <p>培训行业信息化服务提供商</p>
      <button class="btnStyle1 btnSize2 js_FreeTrial">申请试用</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Banner'
})
</script>

<style lang="scss" scoped>
  .bannerBox{
    position: relative;
    height: 520px;
    overflow: hidden;
    @include flex-row(center,center);
    img{
      width: 100%;
      height: auto;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
      min-width: 1440px;
    }
    .content{
      z-index: 1;
      color: #fff;
      text-align: center;
      h1{
        font-size: $font-size-60;
        margin-bottom: 20px;
        font-family: kaitijian;
        span{
          font-size: $font-size-18;
          font-weight: lighter;
        }
      }
      p{
        font-size: $font-size-36;
        font-family: pfExtraLight;
      }
      button{
        display: none;
      }
    }
  }
  @media only screen and (max-width: 1024px){
    .bannerBox{
      height: 15.0rem;
      img{
        min-width: 64.625rem;
      }
      .content{
        max-height: 100%;
        h1{
          font-size: 1.5rem;
          margin-bottom: 0.625rem;
          span{
            font-size: 0.75rem;
          }
        }
        p{
          font-size: 1.0rem;
          font-family: pfLight;
        }
        button{
          margin-top: 3.125rem;
          display: inline-block;
        }
      }
    }
  }
</style>

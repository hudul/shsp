<template>
  <header class="header-m">
    <div class="haederBar">
      <div class="menuShowBtn js_menuShowBtn">
        <img src="/assets/icon/menu-m.png"/>
      </div>
      <div class="title">上海铄普信息技术有限公司</div>
    </div>
    <div class="headerMenuBox">
      <div class="close js_menu_close"><img src="/assets/icon/close.png"/></div>
      <ul class="headMenuOne">
        <li><a href="/">首页 》</a></li>
        <li class="tsjc">
          <div class="title">解决方案</div>
          <div class="menuLast">
            <a href="/solution-qyhk.html">区域获客系统 ></a>
            <a href="/solution-jzyx.html">精准营销引擎 ></a>
            <a href="/solution-yygl.html">运营管理系统 ></a>
          </div>
        </li>
        <li><a href="/product.html">产品 》</a></li>
        <li><a href="/aboutUs.html">关于我们 》</a></li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'mHeader',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .header-m{
    position: relative;
    .haederBar{
      height: $mobile-header-height;
      padding: 0.625rem;//10px
      box-sizing: border-box;
      position: relative;
      z-index: 100;
      border-bottom: 1px solid #eee;
      background-color: #fff;
      .menuShowBtn{
        width: 2.0rem;//24px
        height: 2.0rem;//24px
        text-align: center;
        img{
          width: 100%;//17px
          height: 100%;//14px
          display: block;
        }
      }
      .title{
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 11;
        height: 2.0rem;
        line-height: 2.0rem;
        text-align: center;
        font-size: 1.125rem;
        width: 70%;
      }
    }
    .headerMenuBox{
      display: none;
      width: 100%;
      min-width: 375px;
      background-image: linear-gradient(180deg, #4392CA 0%, #20599A 100%);
      position: relative;
      z-index: 10;
      .close{
        width: 1.875rem;//30px
        height: 1.875rem;
        position: absolute;
        right: 0.625rem;//20px
        top: 0.625rem;//10px
        padding: 0.4375rem;//7px
        box-sizing: border-box;
        img{
          width: 1.0rem;//16px
          height: 1.0rem;
        }
      }
    }
    .headMenuOne{
      padding: 5rem 3.125rem 5rem 3.125rem;
      box-sizing: border-box;
      li{
        color: #fff;
        font-size: $font-size-m18;
        margin-bottom: 1.875rem;
        a{
          display: block;
          color: #fff;
        }
        &:last-of-type{
          border-bottom: none;
        }

      }
      .tsjc{
        display: block;
      }
      .menuLast{
        margin-top: 0.625rem;
        @include flex-row(flex-start,center);
        flex-wrap: wrap;
        a{
          font-size: $font-size-m14;
          width: 50%;
          display: inline-block;
          margin-bottom: 0.625rem;
          font-family: pfLight;
          color: #ccc;
        }
      }

    }
  }
</style>

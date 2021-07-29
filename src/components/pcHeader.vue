<template>
  <header class="header-pc view-width">
    <div class="logo"><img src="@/assets/image/logo@3x.png"></div>
    <ul class="menu">
      <li class="select"><router-link to="/">首页</router-link></li>
      <li @mouseenter="handelSolutionMenuShow(true)" @mouseleave="handelSolutionMenuShow(false)">
        <span>解决方案</span>
        <div class="menuTwo" v-show="solutionMenuShow">
          <router-link to="/solution-qyhk">区域获客系统</router-link>
          <router-link to="/solution-jzyx">精准营销引擎</router-link>
          <router-link to="/solution-yygl">运营管理系统</router-link>
        </div>
      </li>
      <li><router-link to="/product">产品</router-link></li>
      <li><router-link to="/about">关于我们</router-link></li>
    </ul>
    <div class="right"><button class="btnSize1 button btnStyle3" @click="dialogInfo.setShow(true)">免费试用</button></div>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, inject } from 'vue'

interface ISolutionMenu{
  solutionMenuShow: boolean,
  handelSolutionMenuShow(show:boolean):void
}

export default defineComponent({
  name: 'pcHeader',
  setup () {
    const solutionMenu = reactive<ISolutionMenu>({
      solutionMenuShow: false,
      handelSolutionMenuShow (show) {
        solutionMenu.solutionMenuShow = show
      }
    })
    const dialogInfo = inject('dialogInfo')
    return {
      ...toRefs(solutionMenu),
      dialogInfo
    }
  }
})
</script>

<style lang="scss" scoped>
  .header-pc{
    height: $header-height;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    @include flex-row(flex-start,center);
    position: relative;
    .logo{
      height: 100%;
      width: auto;
      @include flex-row(center,center);
      img{
        height: 58px;
        width: auto;
      }
    }
    .menu{
      @include flex-row(space-between,center);
      width: 700px;
      height: 100%;
      li{
        @include flex-row(center,center);
        width: 200px;
        height: 100%;
        font-size: $font-size-18;
        text-align: center;
        position: relative;
        a{
          display: block;
          position: relative;
          color: #666;
        }
        & > a:hover{
          color: #1F5798
        }
        span{
          cursor: pointer;
          &:hover{
            color: #1F5798
          }
        }
      }
      .select:before{
        content: '';
        display: block;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 10px;
        width: 76px;
        height: 2px;
        background-color: #1F5798;
      }
      .select{
        a,span{
          color: #1F5798
        }
      }
      .menuTwo{
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 80px;
        width: 100%;
        padding: 30px 10px;
        box-sizing: border-box;
        text-align: center;
        background-image: linear-gradient(180deg, #4290C9 0%, #1F5798 100%);
        a{
          color: #fff;
          font-size: $font-size-14;
          margin-bottom: 10px;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
    .right{
      position: absolute;
      margin: auto;
      height: 100%;
      top: 0;
      bottom: 0;
      right: 10px;
      height: 100%;
      @include flex-row(center,center);
      button{
        width: 160px;
        height: 50px;
        border-radius: 25px;
        text-align: center;
        border:1px solid #007AFF;
        color: #007AFF;
        line-height: 48px;
        box-sizing: border-box;
        background-color: #fff;
      }
    }
  }
</style>

<template>
  <div class="description">
    <div class="productName">
      <img src="@/assets/image/tuilogo.png" class="logo" />
      <h3>推推</h3>
      <p>区域获客产品</p>
    </div>
    <dl>
      <dt><img src="@/assets/icon/yun-icon.png"></dt>
      <dd><h4>Leads获取</h4><p>基于“阿里云”生态平台，可支持多场景、多渠道Leads获取方式。</p></dd>
    </dl>
    <dl>
      <dt><img src="@/assets/icon/scgz-icon.png"></dt>
      <dd><h4>市场跟踪</h4><p>打造专属“小程序”，并能进行转介绍、分享跟踪。</p></dd>
    </dl>
    <dl>
      <dt><img src="@/assets/icon/sjfx-icon.png"></dt>
      <dd><h4>数据分析</h4><p>特有大数据分析算法，为Leads进行智能排序，分类和贴标</p></dd>
    </dl>
    <dl>
      <dt><img src="@/assets/icon/hkej-icon.png"></dt>
      <dd><h4>更多黑科技</h4><p>转介绍，分享更简单</p></dd>
    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Description',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.description{
  dl{
    @include flex-row(flex-start,center);
    margin-bottom: 30px;
  }
  dt{
    width: 48px;
    height: 48px;
    margin-right: 40px;
    img{
      width: 48px;
      height: 48px;
    }
  }
  dd{
    width: 210px;
    h4{
      font-weight: normal;
      margin-bottom: 5px;
    }
    p{
      font-size: $font-size-14;
      color: #999;
      line-height: 20px;
    }
  }
}
.productName{
  position: relative;
  padding: 10px 30px;
  padding-left: 120px;
  border: 1px solid #1F5798;
  box-sizing: border-box;
  margin-bottom: 50px;
  img{
    width: 63px;
    height: 47px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30px;
    margin: auto;
  }
  h3{
    color: #1F5798;
    font-size: $font-size-24;
  }
  p{
    color: 18px;
    color: #666;
  }
}
@media only screen and (max-width: 1024px){
  .productName{
    padding: 1.5625rem 1.875rem;
    padding-left: 7.5rem;
    margin-bottom: 1.5625rem;
    img{
      height: 2.25rem;
      width: auto;
      left: 1.875rem;
    }
    h3{
      font-size: 1.125rem;
      margin-bottom: 0.3125rem;
    }
    p{
      font-size: 0.875rem;
    }
  }
  .description{
    margin:auto;
    dl{
      margin-bottom: 1.25rem;

    }
    dt{
      width: 2.25rem;
      height: 2.25rem;
      margin-right: 1.875rem;
      overflow: hidden;
      img{
        width: 2.25rem;
        height: 2.25rem;
      }
    }
    dd{
      width: calc(100% - 4.375rem);
      h4{

        margin-bottom: 0.3125rem;
        font-size: 1.0rem;
      }
      p{
        font-size: 0.75rem;
        line-height: 1.125rem;
      }
    }
  }
}
</style>

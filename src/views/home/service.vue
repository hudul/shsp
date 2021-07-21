<template>
  <div class="serverBox view-width">
    <ul>
      <li>
        <img src="@/assets/icon/quyuhk@3x.png" alt="区域获客">
        <h3>区域获客</h3>
        <p>销售线索统一收集，确保数据准确、安全。并可对接小程序、公众号，通过精准营销引擎形成多次转化。有效解决传统培训机构地推中，信息不精准、用户粘性差、转化率低的等问题。</p>
        <a href="product.html" class="button btnSize2 btnStyle2">推推™区域获客产品</a><br/>
        <span>标准化产品，满足日常需求</span>
        <a href="/solution-qyhk.html" class="button btnSize2 btnStyle2">区域获客系统</a><br/>
        <span>独立部署，支持个性化定制</span>
      </li>
      <li>
        <img src="@/assets/icon/jinzhunyx@3x.png" alt="精准营销">
        <h3>精准营销</h3>
        <p>社交媒体用户，自动跟踪用户行为，在恰当时点做出个性化互动。提升用户对品牌、服务的认同，培育商机。不但有助于提升销售跟进的成功率，也有助于口碑传播。</p>
        <a href="/solution-jzyx.html" class="button btnSize2 btnStyle2">精准营销引擎</a><br/>
        <span>独立部署，支持个性化定制</span>
      </li>
      <li>
        <img src="@/assets/icon/yunyinzx@3x.png" alt="运营管理">
        <h3>运营管理</h3>
        <p>为培训机构日常运营量身定制的数字化管理系统。从招生、教务、财务、家校服务、人事、进销存管理等方面， 解决培训学校办学管理难题，帮助培训机构实现数字化升级。</p>
        <a href="/solution-yygl.html" class="button btnSize2 btnStyle2">运营管理系统</a><br/>
        <span>独立部署，支持个性化定制</span>
      </li>
    </ul>
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
  .serverBox{
    ul{
      @include flex-row(space-between,flex-start);
    }
    li{
      width: 400px;
      max-width: 32%;
      min-height: 645px;
      padding: 60px 50px 30px 50px;
      box-sizing: border-box;
      background: #FFFFFF;
      text-align: center;
      border: 10px solid;
      border-image: -webkit-linear-gradient( #00B2FF, #007AFF) 30 30;
      border-image: -moz-linear-gradient( #00B2FF, #007AFF) 30 30;
      border-image: linear-gradient( #00B2FF, #007AFF) 30 30;
      img{
        width: 64px;
        height: 64px;
        margin-bottom: 38px;
      }
      h3{
        font-size: $font-size-24;
        line-height: 33px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      p{
        font-size: $font-size-16;
        color: #666;
        text-align: left;
        line-height: 28px;
        margin-bottom: 30px;
      }
      a{
        margin-top: 20px;
        margin-bottom: 5px;
      }
      span{
        font-size: $font-size-14;
        color: #999;
        font-weight: lighter;
      }
    }
  }
  @media only screen and (max-width: 1024px){
    .serverBox{
      margin-bottom: 3.125rem;
      ul{
        display: block;
      }
      li{
        width: 100%;
        max-width: inherit;
        min-height: inherit;
        padding: 1.25rem 1.875rem 1.875rem 1.875rem;
        border: 0.625rem solid #007AFF;
        margin-bottom: 0.625rem;
        img{
          width: 4.0rem;
          height: 4.0rem;
          margin-bottom: 1.25rem;
        }
        h3{
          font-size: 1.125rem;
          line-height: 1.5rem;
          margin-bottom: 0.625rem;
        }
        p{
          font-size: 0.75rem;
          color: #666;
          text-align: left;
          line-height: 1.5rem;
          margin-bottom: 0.625rem;
        }
        a{
          margin-top: 0.625rem;
          margin-bottom: 0.3125rem;
        }
        span{
          font-size: 0.75rem;
        }
      }
    }
  }
</style>

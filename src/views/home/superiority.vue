<template>
  <div class="superiority view-width">
    <ul>
      <li>
        <img src="@/assets/icon/hangyezj.png" alt="行业专精">
        <h3>行业专精</h3>
        <p>多年来与全国头部连锁早教机构深度合作，行业经验丰富，沉淀形成了切实有效的解决方案。</p>
      </li>
      <li>
        <img src="@/assets/icon/tuanduics.png" alt="团队成熟">
        <h3>团队成熟</h3>
        <p>拥有专门的产品、项目及运维团队，经验丰富、管理科学，能为客户提供全程服务。</p>
      </li>
      <li>
        <img src="@/assets/icon/shujuaq.png" alt="数据安全">
        <h3>数据安全</h3>
        <p>坚持使用行业标准技术及头部供应商，配合自有的人工技术、运维保障，确保客户数据安全。</p>
      </li>
      <li>
        <img src="@/assets/icon/yixueyy.png" alt="易学易用">
        <h3>易学易用</h3>
        <p>专门设计系统的使用流程及操作方式，并持续迭代，打造“易学易用”的用户体验。</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Ssuperiority',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .superiority{
    ul{
      @include flex-row(space-between,flex-start);
    }
    li{
      text-align: center;
      width: 250px;
      img{
        width: 64px;
        height: 64px;
        margin-bottom: 30px;
      }
      h3{
        font-size: $font-size-24;
        line-height: 33px;
        margin-bottom: 20px;
      }
      p{
        font-size: $font-size-16;
        line-height: 28px;
        text-align: left;
      }
    }
  }
  @media only screen and (max-width: 1024px){
    .superiority{
      margin-bottom: 3.75rem;
      ul{
        display: block;
      }
      li{
        width: 100%;
        max-width: 18.75rem;
        margin: 1.25rem auto;
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
          font-size: 1.0rem;
          line-height: 1.75rem;
        }
      }
    }
  }
</style>

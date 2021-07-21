<template>
  <div class="customer view-width">
    <ul>
      <li>
        <div class="img"><img src="@/assets/image/jbb-logo.png" alt=""></div>
        <p>金宝贝</p>
      </li>
      <li>
        <div class="img"><img src="@/assets/image/anli-logo.png" alt=""></div>
        <p>昂立教育</p>
      </li>
      <li>
        <div class="img"><img src="@/assets/image/xiantong-logo.png" alt=""></div>
        <p>仙童</p>
      </li>
      <li>
        <div class="img"><img src="@/assets/image/ruibo-logo.png" alt=""></div>
        <p>锐跿</p>
      </li>
      <li>
        <div class="img"><img src="@/assets/image/xiehe-logo.png" alt=""></div>
        <p>协和</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Customer',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .customer{
    margin-bottom: 100px;
    ul{
      @include flex-row(space-between,center);
    }
    li{
      max-width: 18%;
      width: 243px;
      text-align: center;
      .img{
        width: 100%;
        height: 100px;
        border:1px solid #eee;
        @include flex-row(center,center);
        margin-bottom: 30px;
        box-sizing: border-box;
      }
      img{
        height: 36px;
        width: auto;
      }
      p{
        font-size: $font-size-24;
        color: #666;
      }
    }
  }
  @media only screen and (max-width: 1024px){
    .customer{
      margin-bottom: 3.125rem;
      ul{
        flex-wrap: wrap;
        margin-top: 1.25rem;
      }
      li{
        max-width: 150px;
        width: 45%;
        margin-bottom: 1.25rem;
        .img{
          height: 3.125rem;
          margin-bottom: 0.625rem;
        }
        img{
          height: 1.25rem;
        }
        p{
          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }
</style>

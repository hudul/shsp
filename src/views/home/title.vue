<template>
    <div class="bigTitle view-width">{{myTitle}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Title',
  props: {
    myTitle: {
      type: String,
      default: '标题',
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .bigTitle{
    width: 100%;
    height: 60px;
    font-size: $font-size-36;
    font-family: pfBold;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 100px;
    position: relative;
    padding-bottom: 10px;
    &:after{
      content: '';
      display: block;
      width: 120px;
      height: 3px;
      background-color: #333;
      position: absolute;
      margin:auto;
      left:0;
      right: 0;
      bottom: 0;
    }
  }
  @media only screen and (max-width: 1024px){
    .bigTitle{
      height: 1.875rem;
      font-size: 1.125rem;
      margin-bottom: 0.625rem;
      margin-top: 1.875rem;
      position: relative;
      padding-bottom: 0.3125rem;
      &:after{
        width: 3.125rem;
        height: 1px;
      }
    }
  }
</style>

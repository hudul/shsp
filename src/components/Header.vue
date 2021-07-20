<template>
  <header>
    <div class="headerLogo">
      <img src="" />
    </div>
    <ul class="mainMenu">
      <li><router-link to="/">首页</router-link></li>
      <li>
        <span>解决方案</span>
        <div>
          <router-link to="/solutionQyhkxt">区域获客系统</router-link>
          <router-link to="/solutionJzyxyq">精准营销引擎</router-link>
          <router-link to="/solutionYyglxt">运营管理系统</router-link>
        </div>
      </li>
      <li><router-link to="/product">产品</router-link></li>
      <li><router-link to="/about">关于我们</router-link></li>
    </ul>
    <button>免费试用</button>
  </header>
</template>

<style lang="scss" scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center
  }
</style>

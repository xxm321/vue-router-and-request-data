<template>
  <div id="app">
    <div class='link'>
        <router-link to='/'>首页</router-link>
        <router-link to='/news'>新闻列表</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      title:'首页的内容'
    }
  }
}
</script>

<style lang="less" scoped>
  #app{
    .link{
      display: flex;
      a{
        height:4rem;
        width:100%;
        display: block;
        background-color:#000;
        color:#fff;
        font-size:16px;
        text-align:center;
        line-height:4rem;
      }
    }
    
  }
</style>


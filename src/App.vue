<template>
  <div id="app">
  <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from '@/components/commom/tabbar/MainTabBar'
export default {
  name: 'APP',
  data () {
    return {}
  },
  components: {
    MainTabBar
  }
}
</script>
<style  lang="scss">
//@import "assets/css/base.css";
#app{
  display: flex;
  flex-direction: column;
  height: 100%;
  .box{
    flex: 1;
    height: 100%;
    overflow: auto;
  }
}
</style>

<template>
  <div id="app">
  <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from '@/components/tabbar/MainTabBar'
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
<style scoped lang="scss">
@import "./assets/css/base.css";
</style>

<template>
<div class="box"  :style="`margin-top: ${offsetH}px`">
<!--  头部-->
    <nav-bar class="nav-home">
      <template v-slot:center>
        <div ref="navwidth">aaa</div>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3"  :pull-up-load="true"  @scroll="ContentScroll" @pullingUp="loadMore">
<!--    轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
        <van-image
          :src="item.image"
          fit="fill"
        />
        </a>
      </van-swipe-item>
    </van-swipe>
<!--    推荐-->
    <div class="recommend">
    <div class="recommend-item" v-for="item in recommends"  :key="item.acm">
      <a :href="item.link" >
        <img :src="item.image" alt="" class="recommend-img">
      </a>
      <div>{{item.title}}</div>
    </div>
    </div>
<!--本周流行-->
    <div class="fashion">
      <a href="#">
        <img src="../../assets/img/home/recommend_bg.jpg" alt="">
      </a>
    </div>
<!--    商品列表-->
    <TabControl @itemClick="itemClick" id="tabcontrol" :titles="['流行','新款','精选']"/>
    <goods-list :goods="GetGoods"></goods-list>
    </scroll>
<!--  回到顶部图标-->
  <back-top @click.native="topclick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Image as VanImage } from 'vant'
import NavBar from '@/components/commom/navbar/NavBar'
import TabControl from '@/components/commom/TabControl/TabControl'
import GoodsList from '@/components/commom/goods/GoodsList'
import Scroll from '@/components/commom/scroll/Scroll'
import BackTop from '@/components/commom/backtop/BackTop'
import { getHomeMultidata, getHomeGoods } from '@/network/home'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(VanImage)

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data () {
    return {
      banners: [],
      recommends: [],
      name: 'aaa',
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      offsetH: 0,
      isShowBackTop: false
    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed: {
    GetGoods () {
      return this.goods[this.currentType].list
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 获取定义ref属性 和 元素高度
      this.offsetH = this.$refs.navwidth.offsetHeight
      console.log(this.$refs.navwidth.offsetHeight)
    })
  },
  methods: {
    itemClick (index) {
      switch (index) {
        case 0 :
          this.currentType = 'pop'
          break
        case 1 :
          this.currentType = 'new'
          break
        case 2 :
          this.currentType = 'sell'
          break
      }
    },
    topclick () {
      this.$refs.scroll.scrollTotop(0, 0, 500)
    },
    width () {
      var a = document.querySelector('.nav-home')
      console.log(a)
    },
    ContentScroll (position) {
      this.isShowBackTop = (-position.y) > 1000
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    },
    // 网络请求的方法
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        // console.log(this.recommends)
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // console.log(res)
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: calc(100% - 0.52rem);
  overflow: hidden;
}
 .nav-home {
   background-color:#ff8198;
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   z-index: 1;
 ;
 }
 .my-swipe .van-swipe-item {
 height: auto;
 }
 .recommend {
   text-align: center;
   display: flex;
   width: 100%;
   font-size: 0.12rem;
   padding: 0.10rem  0  0.2rem;
   border-bottom: 0.08rem  solid #eee ;
   .recommend-item {
     flex:1;
   }
   .recommend-item .recommend-img{
     width: 0.7rem;
     height: 0.7rem;
     margin-bottom:0.08rem;
   }
 }
 .fashion img {
   width: 100%;
 }
.tab-control {
  position: static;
  top: 0.05rem;
}
</style>

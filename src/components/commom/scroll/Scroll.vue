<template>
 <div class="warp">
   <div class="content">
     <slot></slot>
   </div>
 </div>
</template>

<script>
import BSscroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // 创建BSscroll对象
    this.scroll = new BSscroll(document.querySelector('.warp'), {
      observeDOM: true,
      click: true,
      scrollY: true,
      pullDownRefresh: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 监听滚动条位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    // 监听上拉事件，下拉加载更多
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTotop (x, y, time) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
</style>

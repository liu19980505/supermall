<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive">
    <slot  name="item-icon"></slot>
  </div>
  <div v-else>
    <slot name="item-icon-active"></slot>
  </div>

  <div  :style="activeStyle">
    <slot name="item-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabBatItem',
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : { }
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped lang="scss">
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
  margin-top: 3px;
  img{
    width:24px;
    height: 24px;
  }
}
</style>

<template>
<div class="tab-control" >
  <div v-for="(item,index) in titles" :key="index" class="control-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
  <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style  lang="scss" scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  .control-item {
    flex: 1;
    .control-item span {
      border-bottom: 1px solid red;
    }
  }
  .active {
    color:#ff5777;
  }
  .active span {
    border-bottom: 0.03px solid #ff8198;
    padding: 0.08rem;
  }
}
</style>

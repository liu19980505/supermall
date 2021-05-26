<template>
  <div id="tab-bar">
<slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  flex: 1;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.2);
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    background-color: #f6f6f6;
  }
}

</style>

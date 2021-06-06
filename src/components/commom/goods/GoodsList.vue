<template>
  <div id="goods">
  <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item">
    <div v-for="(ite,index) in item" :key="index">
    </div>
  </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from '@/components/commom/goods/GoodsListItem'
export default {
  name: 'goodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style >
#goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

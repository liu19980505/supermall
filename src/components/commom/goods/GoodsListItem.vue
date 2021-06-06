<template>
  <div class="goods-item">
    <img :src="goodsitem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsitem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.warp {
  display: flex;
  flex-wrap: wrap;
}
.goods-item {
  width: 47%;
  padding-bottom: 0.4rem;
  position: relative;
  margin-top: 0.05rem;
}
.goods-info {
  font-size: 0.12rem;
  position: absolute;
  bottom: 0.05rem;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 0.05rem;
  }
.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.03rem;
    color: red;
  }
.goods-info .price {
  color:#ff8198;
  margin-right: 0.2rem;
}
.goods-info .cfav {
  position: relative;
}
.goods-info .cfav::before {
  content: '';
  position: absolute;
  left: -0.15rem;
  top: 0px;
  width: 0.14rem;
  height: 0.14rem;
  background: url("../../../assets/img/common/collect.svg") 0 /0.15rem 0.14rem;
}

</style>

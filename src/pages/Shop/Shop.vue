<template>
    <div>
      <ShopHeader></ShopHeader>
      <div class="tab">
        <div class="tab-item">
          <router-link to="/shop/goods" replace>点餐</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shop/comments" replace>评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shop/info" replace>商家</router-link>
        </div>
      </div>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
  import {mapActions,mapState} from 'vuex'

  import ShopComments from './ShopComments/ShopComments'
  import ShopGoods from './ShopGoods/ShopGoods'
  import ShopInfo from './ShopInfo/ShopInfo'
  import ShopHeader from '../../components/ShopHeader/ShopHeader'

  export default {
    components:{
      ShopComments,
      ShopGoods,
      ShopInfo,
      ShopHeader
    },
    methods:{
      ...mapActions(['getShopInfo'])
    },
    //请求数据
    mounted(){
      this.getShopInfo();
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>

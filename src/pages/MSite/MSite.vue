<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">

      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo.id?'/userinfo':'/login'">
        <span class="header_login_text" v-if="!userInfo.id">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>

      </router-link>
    </HeaderTop>

    <!--首页导航-->
    <nav class="msite_nav">
      <div v-if="categoryArr.length>0" class="swiper-container">
        <!--类型分类-->
        <div class="swiper-wrapper">
          <!--  一共有2片区域  -->
          <div class="swiper-slide" v-for="(cs,index) in categoryArr" :key="index">
            <a v-for="(c,index2) in cs" :key="index2" href="javascript:" class="link_to_food">
              <div class="food_container">
                <img :src="imgBaseUrl + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"
  import {mapState,mapActions} from 'vuex'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    data(){
      return{
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      }
    },
    mounted(){
      //获取食物分类列表
      this.getCategorys();
      //获取商家列表
      this.getShops();
    },
    watch:{
      categorys(value){
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    },
    methods:{
      ...mapActions(['getCategorys','getShops'])
    },
    computed:{
      ...mapState(['address','categorys','userInfo']),
      //计算类型数组
      categoryArr(){
        const max = 8;
        const arr = [];
        const {categorys} = this;

        let smallArr = [];
        categorys.forEach((c, index) => {
          if(smallArr.length===0) {
            arr.push(smallArr)
          }
          smallArr.push(c)
          if(smallArr.length===max) {
            smallArr = []
          }
        })
        return arr;
      }
    },
    components:{
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #3190E8
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>

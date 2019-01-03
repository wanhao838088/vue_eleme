<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import {mapActions}  from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {
      FooterGuide:FooterGuide
    },
    methods:{
      ...mapActions(['getAddress','guessAddress','reqUserInfo'])
    },
    created () {
      //猜测位置
      this.guessAddress();
      this.reqUserInfo();
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
  width:100%
  height: 100%
  background-color #f5f5f5

</style>

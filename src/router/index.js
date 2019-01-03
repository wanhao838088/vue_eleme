import Vue from 'vue'
import Router from 'vue-router'

import MSite from '../pages/MSite/MSite'
import Profile from '../pages/Profile/Profile'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
//商品系列
import Shop from '../pages/Shop/Shop'
import ShopComments from '../pages/Shop/ShopComments/ShopComments'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children:[
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '/shop/comments',
          component: ShopComments
        },
        {
          path: '/',
          redirect: '/shop/goods'
        }
      ]
    },
  ]
})

/*
vuex 的 mutations 模块
*/
import Vue from 'vue'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  GUESS_ADDRESS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_COMMENTS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  INCREMENT_FOOD,
  DECREMENT_FOOD,
  CLEAR_CART
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  //接收商家列表
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  //猜地址
  [GUESS_ADDRESS] (state, {location}) {
    state.latitude = location.latitude
    state.longitude = location.longitude
  },
  //接收用户信息
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  //重置用户信息
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO] (state, {info}) {
    console.log(info)
    state.info = info
  },

  [RECEIVE_COMMENTS] (state, {comments}) {
    state.comments = comments
  },

  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },

  /**
   * 增加
   * @param state
   * @param comments
   */
  [INCREMENT_FOOD] (state, {food}) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      //增加一项
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },

  /**
   * 减少
   * @param state
   * @param goods
   */
  [DECREMENT_FOOD] (state, {food}) {
    if (food.count) {
      food.count--
      //如果数量为0 从购物车里面移除
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  /**
   * 清空购物车
   * @param state
   */
  [CLEAR_CART] (state) {
    //把数量清零
    state.cartFoods.forEach(food=>food.count=0);
    state.cartFoods = [];
  },
}

/*
vuex 的 mutations 模块
*/
import  Vue from 'vue'

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
  DECREMENT_FOOD
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  //接收商家列表
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  //猜地址
  [GUESS_ADDRESS](state, {location}) {
    state.latitude = location.latitude;
    state.longitude = location.longitude;
  },
  //接收用户信息
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  //重置用户信息
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO](state, {info}) {
    console.log(info)
    state.info = info
  },

  [RECEIVE_COMMENTS](state, {comments}) {
    state.comments = comments
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

  /**
   * 增加
   * @param state
   * @param comments
   */
  [INCREMENT_FOOD](state, {food}) {
    if(!food.count){
      Vue.set(food,'count',1);
    }else{
      food.count++;
    }
  },

  /**
   * 减少
   * @param state
   * @param goods
   */
  [DECREMENT_FOOD](state, {food}) {
    if(food.count){
      food.count--;
    }
  },
}

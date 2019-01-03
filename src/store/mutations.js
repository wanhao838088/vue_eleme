/*
vuex 的 mutations 模块
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  GUESS_ADDRESS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
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
  }

}

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  guessAddress,
  reqUserInfo,
  reqShopGoods,
  reqShopInfo,
  reqShopComments
}
from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  GUESS_ADDRESS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_COMMENTS,
  RECEIVE_GOODS,
  RECEIVE_INFO
}
from './mutation-types'

export default {
  // 异步获取地址
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash);
    commit(RECEIVE_ADDRESS, {address: result})
  },

  // 异步获取分类列表
  async getCategorys({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqFoodCategorys(geohash)
    commit(RECEIVE_CATEGORYS, {categorys: result})
  },

  // 异步获取商家列表
  async getShops({commit, state}) {
    let {latitude, longitude,offset} = state
    latitude = '34.77117';
    longitude = '113.66714';
    let data = {
      latitude:latitude+'',
      longitude:longitude+'',
      offset,
      limit: '20',
      'extras[]': 'activities',
      keyword: '',
      restaurant_category_id:'',
      'restaurant_category_ids[]': '',
      order_by:'',
      'delivery_mode[]': '' + ''
    };

    const result = await reqShops(data)
    commit(RECEIVE_SHOPS, {shops: result})
  },
  //猜地址
  async guessAddress({commit, state}) {
    let result = await guessAddress();
    commit(GUESS_ADDRESS, {location: result});
    const geohash = state.latitude + ',' + state.longitude
    result = await reqAddress(geohash);
    commit(RECEIVE_ADDRESS, {address: result})
  },
  //接受用户信息
  receiveUserInfo({commit, state},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo});
  },
  /**
   * 获取用户信息
   * @returns {Promise<void>}
   */
  async reqUserInfo({commit, state}){
    let result = await reqUserInfo();
    let userInfo = result.data;
    if (userInfo){
      commit(RECEIVE_USER_INFO,{userInfo});
    } else {
      userInfo = {};
      commit(RECEIVE_USER_INFO,{userInfo});
    }
  },
  /**
   * 退出登录
   * @param commit
   * @param state
   * @returns {Promise<void>}
   */
  async reqLogout({commit, state}) {
    commit(RESET_USER_INFO)
  },

  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo();
    console.log(result);
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取商家评价列表
  async getShopComments({commit}) {
    const result = await reqShopComments()
    if (result.code === 0) {
      const comments = result.data
      commit(RECEIVE_COMMENTS, {comments})
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },
}


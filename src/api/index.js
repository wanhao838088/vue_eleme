/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

const BASE_URL = 'http://cangdu.org:8001'
//自有项目api
const MY_URL = 'http://localhost:8081';

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(BASE_URL+`/v2/pois/${geohash}`)

//获取当前城市
export const guessAddress = () => ajax(BASE_URL+`/v1/cities?type=guess`)


// 2、获取食品分类列表
export const reqFoodCategorys = (geohash) => ajax(BASE_URL+'/v2/index_entry',{
  geohash,
  group_type: '1',
  'flags[]': 'F'
})

// 3、根据经纬度获取商铺列表
export const reqShops = (data) => ajax(BASE_URL+'/shopping/restaurants', data)

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})
// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(MY_URL+'/userController/loginByName', {name, pwd, captcha})
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(MY_URL+'/smsController/sendSms', {phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(MY_URL+'/userController/loginByPhone', {phone, code})
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(MY_URL+'/userController/reqUserInfo')

// 10、用户登出
export const reqLogout = () => ajax(MY_URL+'/userController/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')



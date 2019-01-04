import Mock from 'mockjs'

import data from  './data.json'

// Mock.mock('/goods',{code:0,data:data.goods});
// Mock.mock('/comments',{code:0,data:data.ratings});
// Mock.mock('/info',{code:0,data:data.info});
// 返回goods的接口
Mock.mock('/goods', {code:0, data: data.goods})
// 返回ratings的接口
Mock.mock('/comments', {code:0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code:0, data: data.info})

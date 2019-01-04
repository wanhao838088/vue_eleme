import Mock from 'mockjs'

import data from  './data.json'

Mock.mock('/goods',{code:0,data:data.goods});
Mock.mock('/comments',{code:0,data:data.ratings});
Mock.mock('/info',{code:0,data:data.info});

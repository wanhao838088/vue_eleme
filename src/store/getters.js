export default {
  /**
   * 购物车里面食物数量
   * @param state
   */
  cartCount(state){
    return state.cartFoods.reduce( (total,food)=> total+ food.count,0);
  },
  /**
   * 购物车里面食物总价
   * @param state
   */
  cartPrice(state){
    return state.cartFoods.reduce( (total,food)=> total + food.count*food.price,0);
  }


}

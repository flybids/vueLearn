export default {
    //下一题 datat是传入的参数
    addNum({commit},data){
      //commit提交到mutation
      commit('REMEMBER_ANS',data) 
      if(state.itemNum<state.answer.length)
       commit('ADD_ITEM',1)
    },
    //初始化
    initData({commit}){
      commit('INIT_DATA')
    },
}
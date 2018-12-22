const ADD_ITEM = 'ADD_ITEM'
const REMEMBER_ANS ='REMEMBER_ANS'
const REMEMBER_TIME = 'REMEMBER_TIME'
const INIT_DATA = 'INIT_DATA'

export default {
    //下一题
    [ADD_ITEM](state,data){
      state.itemNum+=data
    },
    //记住答案
    [REMEMBER_ANS](state,data){
        state.answer.push(data)
    },
    //做题时间
    [REMEMBER_TIME](state){
        state.timer = setInterval(() => {
            state.allTime++
        }, 1000);
    },

    //初始化数据
    [INIT_DATA](state){
        state.itemNum =1
        state.answer=[]
        state.allTime=0
    },
}

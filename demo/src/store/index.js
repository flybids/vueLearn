import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutation'
import action from './action'

Vue.use(Vuex)

const state = {
  level: '第一周', //活动周数
  itemNum: 1, //第几题
  allTime: 0, //总用时
  timer: '', //定时器
  cores: [2, 3, 4, 5],
  answer:[], //{'topic_id':'','answer_id':''}
  itemDetail: [{
      'topic_id': 11,
      'topic_name': '你觉得自己是个比较懒吗？',
      'active_start_time': '',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '不懒',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '偶尔会懒一下',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '懒',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '非常懒',
          'answer_val': 5
        }
      ]
    },
    {
      'topic_id': 12,
      'topic_name': '用下面的一种动物代表自己的性格',
      'active_start_time': '',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '小狗',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '兔子',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '猫咪',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '小鸟',
          'answer_val': 5
        }
      ]
    },
    {
      'topic_id': 13,
      'topic_name': '',
      'active_start_time': '吃过晚饭后，你一般会选择做',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '看书',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '散步',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '追剧',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '玩手机',
          'answer_val': 5
        }
      ]
    },
    {
      'topic_id': 14,
      'topic_name': '',
      'active_start_time': '送你一栋别墅，你会希望是在哪里？',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '湖边',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '森林 ',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '大城市',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '景点',
          'answer_val': 5
        }
      ]
    },
    {
      'topic_id': 15,
      'topic_name': '曾经喜欢的东西，你会怎样处理？',
      'active_start_time': '',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '专门收在一个盒子里',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '送给小朋友',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '扔掉',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '忘记放哪里了',
          'answer_val': 5
        }
      ]
    },
    {
      'topic_id': 16,
      'topic_name': '你能看透身边人的心思吗',
      'active_start_time': '',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '别人不说看不出来',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '可以从话中听出来',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '表情中能够感受到',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '只需要一个眼神',
          'answer_val': 5
        }
      ]
    },
    {
      'topic_id': 17,
      'topic_name': '情侣之间如果没有什么感觉了，你会怎么办？',
      'active_start_time': '',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '离开',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '继续维持着',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '迷茫',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '重新寻找属于自己的爱情',
          'answer_val': 5
        }
      ]
    },
    {
      'topic_id': 18,
      'topic_name': '你会不喜欢和哪种人做朋友？',
      'active_start_time': '',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '邋遢',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '不太聪明的人',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '心思很重的人',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '懒散懈怠的人',
          'answer_val': 5
        }
      ]
    },
    {
      'topic_id': 19,
      'topic_name': '假如用十年的寿命换回过去或穿越未来的十天时间，你会怎么分配？',
      'active_start_time': '',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '回到过去',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '穿越未来',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '过去的就过去了，未知的正在经历',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '各去五天',
          'answer_val': 5
        }
      ]
    },
    {
      'topic_id': 20,
      'topic_name': '你对自己的哪里不满意？',
      'active_start_time': '',
      'active_end_time': '',
      'topic_all_val': '',
      'topic_now_val': '',
      'topic_answer': [{
          'answer_id': 11,
          'answer_name': '外貌',
          'answer_val': 2
        },
        {
          'answer_id': 12,
          'answer_name': '身高',
          'answer_val': 3
        },
        {
          'answer_id': 13,
          'answer_name': '品位 ',
          'answer_val': 4
        },
        {
          'answer_id': 14,
          'answer_name': '性别',
          'answer_val': 5
        }
      ]
    },
  ]

}

export default new Vuex.Store({
    state,
    mutation,
    action
})
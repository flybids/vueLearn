<template>
  <section>
      <header class="top_tips">
          <span class="num_tip" v-if="fatherComponent == 'home'">第一周</span>
          <span class="num_tip" v-if="fatherComponent =='item'">题目</span>
      </header>
  </section>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'itemcontainer',
    props:['fatherComponent'],

    data(){
        return {
            itemId: null, //题目ID
			choosedNum: null, //选中答案索引
			choosedId:null //选中答案id
        }
    },
    computed:mapState(
        [
        'itemNum', //第几题
  		'level', //第几周
  		'itemDetail', //题目详情
  		'timer', //计时器
        ]
    ),
    methods:{
        ...mapActions([
            'initData',
  			'addNum',
          ]),
          
          
    },
    created(){
        //初始化信息
		if(this.fatherComponent == 'home') {
			this.initData();
			console.log(this.initData)
			document.body.style.backgroundImage = 'url(../../static/imgs/1-1.jpg)';
		}
    }
}
</script>
<style lang="less">
  .top_tips{
		position: absolute;
		height: 7.35rem;
		width: 3.25rem;
		top: -1.3rem;
		right: 1.6rem;
		 background: url('../../static/imgs/WechatIMG2.png') no-repeat;
		background-size: 100% 100%;
		z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			width: 2.5rem;
			font-size: 0.6rem;
			font-family: '黑体';
			font-weight: 600;
			color: #a57c50;
			text-align: center;
		}
    }
    .item_container_style{
		height: 11.625rem;
		width: 13.15rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 4.1rem;
		left: 1rem;
	}	
	.home_logo{
		background-image: url(../../static/imgs/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.item_back{
		background-image: url(../../static/imgs/2-1.png);
		background-size: 100% 100%;
	}
	.button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
	}
	.start{
        background-image: url(../../static/imgs/1-4.png);
    }
    .next_item{
    	background-image: url(../../static/imgs/2-2.png);
    }
    .submit_item{
    	background-image: url(../../static/imgs/3-1.png);
    }
    .item_list_container{
    	position: absolute;
    	height: 7.0rem;
    	width: 8.0rem;
    	top: 2.4rem;
    	left: 3rem;
		-webkit-font-smoothing: antialiased;
    }
	.item_title{
		font-size: 0.65rem;
		color: #fff;
		line-height: 0.7rem;
	}
	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.6rem;
			color: #fff;
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
		} 
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>


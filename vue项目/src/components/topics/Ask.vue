<template>
  <div class="ask">
    <!-- 栏目列表 -->
		<topic-list :items="items"></topic-list>
  </div>
</template>

<script>
// 引入 栏目列表的组件
import TopicList from "@/components/topics/TopicList";

// 引入获取栏目数据的模块
import { getItemList } from "@/getdata/getTopic.js";

export default {
	name: "Ask",
	
	// 数据
	data (){
		return{
			// 栏目列表数据
			items:[]
		}
	},

	// 加载组件
	components:{
		// 栏目列表
		TopicList
	},

	// 钩子函数
  mounted: function () {
    // 查询 招聘 的数据列表
		getItemList({tab:'ask'}).then((data)=>{
      this.items = data.data.data;
		})
	}	


};
</script>

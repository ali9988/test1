<template>
  <div class="dev">
    <!-- 栏目列表 -->
		<topic-list :items="items"></topic-list>
  </div>
</template>

<script>
// 引入获取栏目数据的模块
import { getItemList } from "@/getdata/getTopic.js";
// 引入 栏目列表的组件
import TopicList from "@/components/topics/TopicList";
export default {
  name: "Dev",
  data() {
    return {
			// 栏目列表
			items:[],
    };
  },
	// 加载组件
	components:{
		// 栏目列表
		TopicList
	},
	// 钩子函数
  mounted: function () {
		getItemList({tab:'dev'}).then((data)=>{
			this.items = data.data.data
		})
	}
};
</script>

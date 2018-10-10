<template>
  <div class="share"> 
    <!-- 栏目列表 -->
    <topic-list :items="items"></topic-list>
     <!-- 滑动组件模板 -->
    <infinite-loading @infinite="infiniteHandler" class="woload" v-if="items.length"></infinite-loading>

  </div>
</template>

<script>
  //引入滑动组件
import InfiniteLoading from 'vue-infinite-loading';
// 引入获取栏目数据的模块
import { getItemList } from "@/getdata/getTopic.js"
// 引入 栏目列表的组件
import TopicList from "@/components/topics/TopicList";

export default {
  name: "Share",
  data() {
    return {
      // 栏目列表
      items:[],
    };
  },
  
  // 加载组件
  components:{
    // 栏目列表
    TopicList,
    //滑动组件
    InfiniteLoading,
  },
   //方法
   methods: {
    infiniteHandler($state) {
      setTimeout(() => {
       
        //请求下一页的数据
    getItemList({limit:20,page:++this.page}).then((data)=>{

       //把下一页的数据追加到 items数组里
     this.items=this.items.concat(data.data.data);

      //重新调用函数
        $state.loaded();
    })


        
      }, 1000);

    }
  },


  // 钩子函数
  mounted: function () {
    getItemList({tab:'share'}).then((data)=>{
      this.items = data.data.data
    })
  } 
    
  
};
</script>


<template>
  <div class="show">
      <h1>{{title}}</h1>
     <div class="author">作者
        <span>:{{author}}</span>
     </div>
     <div class="content">
       <div v-html="content"></div>
     </div>
  </div>
</template>

<script>
// 引入获取栏目数据的模块
import { getArticleData } from "@/getdata/getTopic.js";



export default {
  name: 'Show',
  data () {
    return {
     title:'',
     author:'',
     content:''
    }
  },
  //钩子函数
  mounted:function(){
    // console.log(this.$route.params.id)
    getArticleData(this.$route.params.id).then((data)=>{
      console.log(data);
      this.title=data.data.data.title;
      this.author=data.data.data.author.loginname;
      this.content=data.data.data.content;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 // 引入 公共的 样式
  @import '../../assets/sass/base.scss';
  .show{
    margin-top:rem(100px);
    h1{
      color:#111;
      font-family:'宋体';
      font-size:rem(50px);
      text-align:center;
    }
    .author{
      font-size:rem(30px);
      text-align:center;
      line-height:rem(50px);
      color:#333;
      span{color:#f0f;};
    }
    .content{
      width:90%;
      margin:rem(10px) auto;
      img{
        
      }
    }
    .mardown-text p img{
      width:rem(100px);
    }
  }
</style>

<template>
  <div class="gzh">
    <h1>公众号</h1>
    <img src="../../static/images/gzh.jpg">
  </div>
</template>

<script>
export default {
  name: 'Gzh',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="scss">
 /*// 样式初始化引入样式表重置 公共的*/
  @import '../assets/sass/base.scss';
  .gzh{
  	h1{
  		text-align:center;
  		font-size:rem(50px);
  		line-height: rem(100px);
  		color:pink;
  	}
  	img{
  		width:80%;
  		display:block;
  		margin:rem(10px) auto;
  	}
  }
</style>

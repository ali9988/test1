<template>
  <div class="me">
    <h1>关于我们</h1>
    <h2>轮播图</h2>
    <div class="play">
	    	<!-- Swiper -->
    	    <div class="swiper-container">
      	        <div class="swiper-wrapper">
      	            <div class="swiper-slide"><img src="../../static/images/4.jpg"></div>
      	            <div class="swiper-slide"><img src="../../static/images/5.jpg"></div>
      	            <div class="swiper-slide"><img src="../../static/images/6.jpg"></div>
      	            <div class="swiper-slide"><img src="../../static/images/7.jpg"></div>
      	            <div class="swiper-slide"><img src="../../static/images/8.jpg"></div>
      	           
      	        </div>
    	        <!-- Add Pagination -->
	              <div class="swiper-pagination"></div>
          </div>
	   </div>
     <h2>字体图标</h2>
     <div class="ico">
        <span class="iconfont icon-zitigui"></span>
        <span class="iconfont icon-qiyeyuanquwuye"></span>
     </div>
  </div>
</template>

<script>
  // 第一种
// import "../../static/css/swiper.min.css";
// import swiper from "../../static/js/swiper.min.js";
// 第二种
// import Swiper from "swiper";
// import "swiper/dist/css/swiper.min.css";
export default {
  name: 'Me',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 // 钩子函数
  mounted: function () {
    //自己写的js代码 都写在钩子函数里面
    //调用 swiper 滑动插件的代码
		 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:true
    });
	}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 //引入样式表重置
  @import '../assets/sass/base.scss';
  /*@import '../../static/css/swiper.min.css';*/

  .me{
  	h1{
  		text-align:center;
  		color:#0ff;
  		line-height:rem(200px);
  	}
    h2{
      text-align:center;
      color:#f0f;
      line-height:rem(100px);
    }
  }
 .play{
 	width:rem(750px);
 	margin:0 auto;
 	.swiper-container{
 		img{
 			width:rem(750px);
 		}
 	}
 }
 .ico{
    span{
      font-size:rem(200px);
    }
 }
</style>

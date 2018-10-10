<template>
  <div class="loading">
    <h1>首页</h1>
    <img class="img" :src="require('../../../static/images/da.gif')">
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 // 引入 公共的 样式
  @import '../../assets/sass/base.scss';
.loading{
  .img{
    width:rem(750px);
    display:block;
    margin-top:rem(50px);
  }
}
  
</style>

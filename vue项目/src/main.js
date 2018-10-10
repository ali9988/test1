import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


	//引入懒加载模块 
import VueLazyload from 'vue-lazyload';
//配置
	Vue.use(VueLazyload, {
	  preLoad: 1.3,
	  //图片请求失败 用图片替换
	  error:require('../static/images/mo.jpg'),
	  //正在请求用此图片替换
	  loading:require('../static/images/load.gif'),
	  attempt: 1
	})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 引入 vue 框架
import Vue from 'vue'
// 引入路由模块
import Router from 'vue-router'

// 引入 首页组件
import Index from '@/components/Index'
// 引入入 公众的 组件
import Gzh from '@/components/Gzh'
// 引入入 我的 组件
import Me from '@/components/Me'

// 分别 引入 主题 分类的组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Dev from '@/components/topics/Dev'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job'

//写loading效果测试
// import Loading from '@/components/public/Loading'

//文章详情页
import Show from '@/components/topics/Show'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/',
          component:All
        },
        {
          path:'good',
          component:Good
        },
        {
          path:'dev',
          component:Dev
        },
        {
          path:'share',
          component:Share
        },
        {
          path:'ask',
          component:Ask
        },
        {
          path:'job',
          component:Job
        },
         //文章详情页
         {
          path:'show/:id',
          component:Show
        } 
      ]
    },
    {
      path: '/gzh',
      name: 'Gzh',
      component: Gzh
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    //loading路由
    // {
    //   path:'/loading',
    //   component:Loading
    // },
    // 路由跳转
    {
      path:'/*',
      redirect: '/index'
    }
    
  ]
})

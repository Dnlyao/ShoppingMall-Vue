import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Detail from '@/components/pages/Detail/index'
import cassification from '@/components/pages/Cassification/index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta: {                      //加一个自定义obj
        requireAuth: true      //这个参数 true 代表需要登录才能进入A
      }

    },
    {
      path: '/class',
      name: 'class',
      component: cassification,
      meta: {
        requireAuth: true
      }
    },
  ],

})


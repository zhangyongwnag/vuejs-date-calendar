import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:'Home'
      }
    },
    {
      path:'/Home',
      name:'Home',
      component:Home,
    }
  ]
})

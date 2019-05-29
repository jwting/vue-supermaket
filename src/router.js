import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcatContainer from './components/tabbar/ShopcatContainer.vue'
import SerachContainer from './components/tabbar/SerachContainer.vue'

const router = new VueRouter({
    routes: [
      {path:'/',redirect:'/home'},
      {path:'/home',component:HomeContainer},
      {path:'/member',component:MemberContainer},
      {path:'/shopcar',component:ShopcatContainer},
      {path:'/search',component:SerachContainer}
    ],
    linkActiveClass:'mui-active'
  
  })

  export default router
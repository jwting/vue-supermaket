import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcatContainer from './components/tabbar/ShopcatContainer.vue'
import SerachContainer from './components/tabbar/SerachContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'


const router = new VueRouter({
    routes: [
      {path:'/',redirect:'/home'},
      {path:'/home',component:HomeContainer},
      {path:'/member',component:MemberContainer},
      {path:'/shopcar',component:ShopcatContainer},
      {path:'/search',component:SerachContainer},
      {path:'/home/newslist',component:NewsList},
      {path:'/home/newsinfo/:id',component:NewsInfo},
      {path:'/home/photolist',component:PhotoList}
    ],
    linkActiveClass:'mui-active'
  
  })

  export default router
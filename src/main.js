// 入口文件
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

import moment from 'moment'

//定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD  HH:mm:ss"){
 return moment(dataStr).format(pattern)
})

// 1.1导入  VueResource
import VueResource from 'vue-resource'
// 1.2安装   VueResource
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';

// 按需导入mint-UI中的组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(MintUI)

// 导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 1.3导入自己的  router.js路由模块
import router from './router.js'

// 导入APP根组件
import app from './App.vue'


new Vue({
  el: "#app",
  render: c => c(app),
  router  //1.4挂载路由对象到 VM 实例中
})

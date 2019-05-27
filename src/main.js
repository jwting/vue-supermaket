// 入口文件
import Vue from 'vue'

// 按需导入mint-UI中的组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/icons-extra.css'

Vue.use(MintUI)

// 导入mui样式
import './lib/mui/css/mui.min.css'
// 导入APP根组件
import app from './App.vue'


new Vue({
  el: "#app",
  render: c => c(app)
})

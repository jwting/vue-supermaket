##制作首页App组件

1.完成header区域，使用的是mint-UI中的header组件
2.制作底部的tabbar区域，使用的是mui的tabbar.html
    +在制作购物车小图标的时候，操作会相对多一些
    +先把扩展图标的CSS样式拷贝到项目中
    +拷贝扩展字体库的ttf文件到项目中
    +为购物车小图标 添加样式

3.要在中间区域放置一个 router-view来展示路由匹配到的组件

##改造tabbar 为 router-link

##设置路由高亮
    linKActiveClass : 'mui-active'

##点击tabbar中的路由链接，展示对应的路由组件

##制作首页轮播图布局
  1.引入mint-UI

  2.在home中插入

  ##加载首页轮播图数据
  1.获取数据，使用vue-resource

##新闻资讯页面制作
1.绘制界面，使用MUI中的media-list.html
2.使用 vue-resource 获取数据
3.渲染真实数据

##实现新闻资讯列表  点击跳转到新闻详情
1.把列表中的每一项改造为  router-link  同时在跳转的时候应该提供唯一的id标识符
2.创建新闻详情的组件页面  NewsInfo.vue
3.在路由模块中将新闻详情的路由地址和组件页面对应起来

##实现新闻详情的页面布局和数据渲染

##单独封装一个comment.vue组件
1.先创建一个单独的comment.vue组件模板
2.再需要使用comment 组件的页面中，先手动导入comment组件
    import comment from './comment.vue'
3.在父组件中，使用 components  属性，将刚才导入的  comment  组件  注册为自己的子组件
4.将注册子组件时候的，注册名称 ，以标签形式  在页面中引用即可

##获取所有的评论数据  显示到页面中
getConments

##实现点击加载更多评论的功能
1.为加载更多按钮绑定点击事件，在事件中请求 下一页数据
2.点击加载更多，让 pageindex++   然后重新调用  this.getComments()  方法重新获取最新一页的数据
3.为了防止新数据 覆盖 老数据的情况，我们在点击加载更多的时候， 每获取到新数据，就应该让老数据调用数组的concat方法，拼接上新数组

##发表评论功能的实现
1.把文本框做成双向数据绑定
2.为发表按钮做一个绑定事件
3.校验评论内容是否为空，如果为空，则提示用户评论内容不能为空
4.通过 vue-resource发送一个请求，把评论内容提交给服务器
5.当发表评论完成以后，在客户端手动拼接处一个最新的评论对象，然后调用数组的  UNshift方法，把最新的评论追加到  data中的comments 中的开头，这样，就能完美实现刷新评论列表的需求

##改造图片分析 按钮为  路由的链接并显示对应的组件页面

##绘制图片列表  组件页面结构并美化样式
1.制作顶部的滚动条
2.制作底部的图片列表

### vue中使用mui中的滑动组件时报错
ncaught TypeError: ‘caller’, ‘callee’, and ‘arguments’ properties may not be accessed on strict mode functions or the arguments objects for calls to them
--------------------- 
##出现这个报错是因为mui中的tab-top-webview-main 滑动组件中的js，使用了非严格模式的语法，然而在webpack打包中默认使用了严格模式去打包

###解决方法：
###1.一号坑：取消掉webpack默认的严格模式打包：
下载：npm install babel-plugin-transform-remove-strict-mode
在bablerc文件中 添加  "plugins": ["transform-remove-strict-mode"]
###2.二号坑 在mounted钩子函数中初始化，因为这个组件需要获取DOM元素，而mounted是在页面挂载完成后执行的生命周期函数，所以在此时执行初始化的时机是比较合适的
import mui from '../lib/mui/dist/js/mui.min.js';
	export default {
		mounted() {
			mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		}
	}
###3.四号坑 到此为止虽然可以使用了，但是还有一个问题，在谷歌浏览器中会报警告，因为谷歌自己弄了一个什么东西我也不太清楚，反正冲突了(也不是很严重，不解决也不会怎么样，如果强迫症的话还是解决掉吧)，解决方案是给全局加上一个样式：
* {
		touch-action: pan-y;
	}

##获取所有分类，并渲染分裂列表
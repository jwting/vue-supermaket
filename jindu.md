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

##实现点击加载更多评论的功能
1.为加载更多按钮绑定点击事件，在事件中请求一下
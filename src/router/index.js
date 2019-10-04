import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers.js'

Vue.use(Router)

const router=new Router({
	routes,
	mode:"history",  //注释为了在服务器上 能够跳转
	base:"/wei/"
})

/* 权限控制*/
export default router

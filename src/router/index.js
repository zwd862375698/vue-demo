/*
 * @Author: zhang_weidie
 * @LastEditors: zhang_weidie
 * @Date: 2021-05-14 10:30:39
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
	history:createWebHashHistory(),
	routes:[
		{
			path:'/',
			redirect:'/home'
		},
		{
			path:'/home',
			component:() => import('../views/Home.vue')
		},
	]
})

router.beforeEach((to,from,next) => {
	next();
})

export default router;

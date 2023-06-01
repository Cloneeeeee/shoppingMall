import { createRouter, createWebHistory } from 'vue-router'

// import Test from '../views/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue'),
    },{
		path:'/home',
		name:'home',
		component:() => import('../views/home.vue'),
		children:[
			{
			  path: '',
			  name: '首页',
			  component: () => import('../views/test.vue')
			},{
				path:'yy1',
				name:'应用1',
				component:() => import('../views/test2.vue')
			},{
				path:'yy2',
				name:'应用2',
				component:() => import('../views/test3.vue')
			},{
				path:'yy3',
				name:'应用3',
				component: () => import('../views/test4.vue'),
			}
		]
	}
  ]
})

export default router

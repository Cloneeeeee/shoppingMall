<script setup>
	import {
		onMounted,
		ref,
		getCurrentInstance,
		watch
	} from 'vue';
	import {
		RouterLink,
		RouterView,
		useRoute,
		useRouter
	} from 'vue-router'
	import requests from './axios/axios.js';
	import Cookie from 'js-cookie'
	let route = useRoute()
	let router = useRouter()
	// function click(){
	// 	requests.get('/').then(res=>{
	// 		console.log(res)
	// 	})
	// }
	// let checked = ref(true)
	// let that = getCurrentInstance().proxy
import order from './components/order.vue';

	// let days = 3
	// let expires = new Date(new Date() * 1 + days * 24 * 60 * 60 * 1000);

	// function click(){
	// 	// console.log(checked.value)
	// 	if(checked.value){
	// 		console.log('记住我')
	// 		Cookie.set('userName','admin',{expires:expires})
	// 	}else{
	// 		console.log('删除用户信息')
	// 		Cookie.remove('userName')
	// 	}
	// }
</script>

<template>
	<RouterView />
	<!-- <button @click="click">点我</button> -->
	<!-- <input type="checkbox" name="" id="" :checked ='checked' v-model="checked"><br>
  <button @click="click">登录</button> -->
</template>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
	}
</style>
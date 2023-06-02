<template>
	<div class="box">
		<div class="silde">
			<div class="head">
				<el-avatar :src="src" :size="36" class="headlogo"/>
				<span class="headtit" :class="{headtit2:isClose}">{{tit}}</span>
			</div>
			<el-menu
			  :default-active="active"
			  class="el-menu-vertical-demo"
			  :collapse="isCollapse"
			  :unique-opened="isunique"
			  @select="itemClick"
			  router
			>
			  <el-menu-item index="/home">
			    <el-icon><location /></el-icon>
			    <span>首页</span>
			  </el-menu-item>
			  <el-sub-menu index="商品">
			    <template #title>
					<el-icon><icon-menu /></el-icon>
					<span>商品</span>
				</template>
				<el-menu-item-group>
				  <el-menu-item index="/home/yy1">商品数据</el-menu-item>
				  <el-menu-item index="/home/yy2">应用二</el-menu-item>
				  <el-menu-item index="/home/yy3">应用三</el-menu-item>
				</el-menu-item-group>
			  </el-sub-menu>
			  <el-menu-item index="3">
			    <el-icon><document /></el-icon>
			    <template #title>详细</template>
			  </el-menu-item>
			  <el-menu-item index="4">
			    <el-icon><setting /></el-icon>
			    <template #title>设置</template>
			  </el-menu-item>
			</el-menu>
		</div>
		
		<div class="right">
			<div class="rigHead">
				<!-- <button @click="click">点我</button> -->
				<div class="headleft">
					<div class="open" @click="click" :class="{close:isClose}">
						<DArrowRight />
					</div>
					<div class="mianbao">
						<el-breadcrumb>
							<el-breadcrumb-item :to="item.path" v-for="(item,index) in arr" :key="index" @click="tiaozhuan(item.path)">{{item.name}}</el-breadcrumb-item>
						</el-breadcrumb>
					</div>
				</div>
				<div class="headright">
					<div class="admin">
						<div class="fullscr" :class="{fullscr2:isfull}" @click="SetFullScreen"></div>
						<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
						<span class="adm">管理员</span>
						<div class="exit" title="退出登录">
							<SwitchButton title="退出登录" @click="exits"/>
						</div>
					</div>
				</div>
			</div>
			
			<div class="rigNav"></div>
			
			<div class="show">
				<div class="showBody">
					<RouterView/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref,reactive,watch,onMounted } from 'vue'
import { Document,Menu as IconMenu,Location,Setting } from '@element-plus/icons-vue'
import { RouterLink, RouterView,useRoute,useRouter } from 'vue-router'
import screenfull from 'screenfull'

let src = ref('https://avatars.githubusercontent.com/u/93767616?v=4&size=64')
const isCollapse = ref(true)
const isClose = ref(true)
const isunique = ref(true)
const tit = ref('商城管理系统')

let route = useRoute()
let router = useRouter()

let active = ref('/home')

let isfull = ref(false)


var arr = reactive([])

function click(){
	isCollapse.value = !isCollapse.value
	isClose.value = !isClose.value
}
const itemClick = (index, indexPath) => {
  // console.log(index, indexPath)
  // console.log(arry)
  // console.log(route.matched.slice(-1)[0])
}
onMounted(()=>{
	 let path = location.pathname
	 active.value = path
})
const SetFullScreen = () => {
    //screenfull.isEnabled  此方法返回布尔值，判断当前能不能进入全屏
    if (!screenfull.isEnabled) {
        return false
		
    }
    //screenfull.toggle 此方法是执行全屏化操作。如果已是全屏状态，则退出全屏
    screenfull.toggle()
	isfull.value = !isfull.value
	console.log(isfull.value)
}
function exits(){
	router.replace('/')
}
const { currentRoute } = useRouter();
const breadcrumbItems = ref([]);
watch(
	() => currentRoute.value,
	(route) => {
		arr.length=0
		const list = route.matched.filter((item) => item.name !== "index");
		// console.log(list)
		breadcrumbItems.value = list.map((item) => {
			return item.meta.title;
		});
		// console.log(list)
		list.forEach(item=>{
			let obj = reactive({})
			obj.name = item.name
			obj.path = item.path
			arr.push(obj)
		})
		console.log(arr)
	}, {
		immediate: true
	}
);
function tiaozhuan(data){
	active.value = data
	console.log(active.value)
}

</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
}
.el-menu-vertical-demo{
	height: calc(100% - 66px);
	border: none;
}
.el-menu-vertical-demo li{
	/* background: pink; */
}
.box{
	width: 100%;
	height: 100vh;
	display: flex;
	background: rgb(239,241,244);
}
.silde{
	width: auto;
	height: 100%;
	background: #fff;
}
.head{
	box-sizing: border-box;
	width: 100%;
	height: 66px;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	cursor: default;
}
.headlogo{
	/* display: none; */
	position: absolute;
	left: 13px;
}
.headtit{
	margin-left: 10px;
	opacity: 1;
	position: absolute;
	left: 55px;
	transition: all 2.5s ease;
	font-weight: bold;
}
.headtit2{
	opacity: 0;
	transition: all .1s ease;
	position: absolute;
	font-weight: bold;
}
.right{
	width: 100%;
	
}
.rigHead{
	width: 100%;
	height: 66px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	background: #fff;
	border-bottom: 1px solid #f4f4f4;
	justify-content: space-between;
}
.headleft{
	display: flex;
	align-items: center;
}
.headright{
	margin-right: 25px;
}
.fullscr{
	width: 25px;
	height: 25px;
	background: url('../assets/big.svg') no-repeat 0 0/100%;
	margin-right: 15px;
	cursor: pointer;
}
.fullscr2{
	background: url('../assets/small.svg') no-repeat 0 0/100%;
}
.admin{
	display: flex;
	align-items: center;
}
.adm{
	font-size: 14px;
	color: #606266;
	margin-left: 10px;
}
.rigNav{
	width: 100%;
	height: 40px;
	background: #fff;
}
.open{
	width: 20px;
	height: 20px;
	margin-left: 30px;
	cursor: pointer;
	transition: all .1s ease;
	transform: rotate(-180deg);
}
.close{
	transition: all .1s ease;
	transform: rotate(0deg);
}
.mianbao{
	margin-left: 30px;
}
.show{
	width: 100%;
	height: calc(100% - 66px - 40px);
	display: flex;
	justify-content: center;
	align-items: center;
}
.showBody{
	width: 97%;
	height: 94%;
	overflow: auto;
	background: #fff;
}
.exit{
	width: 15px;
	height: 15px;
	margin-left: 15px;
	cursor: pointer;
}
</style>

<script setup>
	import {
		RouterLink,
		RouterView
	} from 'vue-router'
	// import HelloWorld from './components/HelloWorld.vue'
	import requests from '../axios/axios.js';

	// function click(){
	// 	requests.get('/').then(res=>{
	// 		console.log(res)
	// 	})
	// }
	import {onMounted} from 'vue'
	import * as echarts from 'echarts';

	// 基于准备好的dom，初始化echarts实例
	// 数据可视化表2
	onMounted(() => {
		var chartDom = document.getElementById('d1');
		var myChart = echarts.init(chartDom);
		var option;

		option = {
			color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},

			toolbox: {
				feature: {
					saveAsImage: {}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				// data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			}],
			yAxis: [{
				// type: 'value'
			}],
			series: [{
				name: 'Line 1',
				type: 'line',
				stack: 'Total',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgb(128, 255, 165)'
						},
						{
							offset: 1,
							color: 'rgb(1, 191, 236)'
						}
					])
				},
				emphasis: {
					focus: 'series'
				},
				data: [140, 232, 101, 264, 90, 340, 250]
			}]
		};

		option && myChart.setOption(option);
	})
	// 数据可视化表三
	onMounted(() => {
		var chartDom = document.getElementById('d2');
		var myChart = echarts.init(chartDom);
		var option;

		option = {
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar'
			}]
		};

		option && myChart.setOption(option);
	})
	// 数据可视化视图四
	onMounted(() => {

		var chartDom = document.getElementById('d3');
		var myChart = echarts.init(chartDom);
		var option;

		option = {
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'value',

				data: []
			},
			yAxis: {
				type: 'category',
				data: []
			},
			series: [{
					name: '2011',
					type: 'bar',
					data: []
				},
				
				{
					name: '2012',
					type: 'bar',
					data: [19325]
				}
			]
		};

		option && myChart.setOption(option);
	})
	onMounted(() =>{
		var chartDom = document.getElementById('b1');
		var myChart = echarts.init(chartDom);
		var option;
		
		option = {
		  
		  tooltip: {
		    trigger: 'axis'
		  },
		  legend: {
		    data: ['ip', 'visit']
		  },
		  grid: {
		    left: '3%',
		    right: '4%',
		    bottom: '3%',
		    containLabel: true
		  },
		  toolbox: {
		    feature: {
		      saveAsImage: {}
		    }
		  },
		  xAxis: {
		    type: 'category',
		    boundaryGap: false,
		    data: ['5-26', '5-27', '5-28', '5-29', '5-30', '5-31', '6-1']
		  },
		  yAxis: {
		    type: 'value'
		  },
		  series: [
		    {
		      name: 'Email',
		      type: 'line',
		      stack: 'Total',
		      data: [120, 132, 101, 134, 90, 230, 210]
		    },
		    {
		      name: 'Union Ads',
		      type: 'line',
		      stack: 'Total',
		      data: [220, 182, 191, 234, 290, 330, 310]
		    }
		  ]
		};
		
		option && myChart.setOption(option);

	})
</script>

<template>
  <div class="box">
  	<div class="nav">
  		<p>首页</p>
  	</div>
  	<div class="row">
  		<li>
  			<div>
  				<p>总销售额</p>
  				<img src="../../static/感叹号中.png" alt="">
  			</div>
  			<p>￥126.560</p>
  			<p>周同比 <span id="1">12%</span></p>
  			<p>日同比 <span id="1">11%</span></p>
  			<p>日均销售额￥234,56</p>
  		</li>
  		<li>
  			<div>
  				<p>订单量</p>
  				<img src="../../static/感叹号中.png" alt="">
  			</div>
  			<div class="box1">
  				<div id="d1"></div>
  			</div>
  			<p>日订单量 1,234</p>
  		</li>
  		<li>
  			<div>
  				<p>支付笔数</p>
  				<img src="../../static/感叹号中.png" alt="">
  			</div>
  			<div class="box2">
  				<div id="d2"></div>
  			</div>
  			<p>转化率60%</p>
  		</li>
  		<li>
  			<div>
  				<p>运营活动效果</p>
  				<img src="../../static/感叹号中.png" alt="">
  			</div>
  			<div class="box3">
  				<div id="d3"></div>
  			</div>
  			<p>同周比 12%</p>
  		</li>
  	</div>
  	<div class="main">
  		<div class="main-nav">
  			<div class="left">
  				<RouterLink to="/shitu">
  					<p>销售额</p>
  				</RouterLink>
  				<RouterLink to="/shitu1">
  					<p>销售趋势</p>
  				</RouterLink>
  			</div>
  			<div class="right">
  				<li>今日</li>
  				<li>本周</li>
  				<li>本月</li>
  				<li>本年</li>
  				<input type="text" value="开始时间 ~ 结束时间">
  			</div>
  			
  
  		</div>
		<div class="p1">
			<RouterView></RouterView>
		</div>
  	</div>
  	<div class="footer">
  		<div class="footer-nav">
  			<p>最近一周访问量统计</p>
  		</div>
  		<div class="footer-main">
  			<ul>
  				<li>
  					<p>今日ip</p>
  					<p>52
  					<img src="../../static/定向.png" alt="">
  					</p>
  				</li>
  				<li>
  					<p>今日访问</p>
  					<p>76
  					<img src="../../static/用户.png" alt="">
  					</p>
  				</li>
  				<li>
  					<p>访问总量</p>
  					<p>614564
  					<img src="../../static/上升.png" alt="">
  					</p>
  				</li>
  			</ul>
  			<div id="b1"></div>
  		</div>
  	</div>
  	<div class="xingxi">
  		<div class="d1">
  			<p><span>JEECG首页</span>
  			<img src="../../static/github-fill.png" alt="">
  			<span>Ant Design</span>
  			<span>Vue Antd</span></p>
  			<p>Copyright@2019JEECG开源社区出品</p>
  		</div>
  		
  	</div>
  </div>
  
</template>
<style scoped>
	*{
			margin: 0;
			padding: 0;
	
	}
	
		li {
			list-style: none;
		}
	
		.box {
			width: 100%;
			height: 100%;
			background-color: rgba(240, 242, 245);
			display: flex;
			flex-direction: column;
		}
	
		.nav {
			width: calc(100% - 40px);
			height: 52px;
			/* background-color: antiquewhite; */
			padding: 0 20px;
		}
	
		.nav>p {
			width: 76px;
			height: 40px;
			font-size: 14px;
			color: #1890ff;
			text-align: center;
			line-height: 40px;
			border-bottom: 1px solid #1890ff;
		}
	
		.d {
			width: 100%;
			height: 50px;
		}
	
		/* -------------------------------row-------------------------------------------------------------*/
		.row {
			width: calc(100% - 24px);
			height: 190px;
			margin: 12px;
			/* background-color: antiquewhite; */
			display: flex;
			flex-direction: row;
			justify-content: space-around;
	
		}
	
		.row>li {
			width: 194px;
			height: 152px;
			padding: 20px 24px 8px;
			background-color: #fff;
		}
	
		.row>li>div {
			width: 194px;
			height: 22px;
		}
	
		.row>li p:nth-child(1) {
			font-size: 14px;
			color: #00000073;
			float: left;
		}
	
		.row>li>div img {
			width: 22px;
			height: 22px;
			float: right;
		}
	
		.row>li p:nth-child(2) {
			width: 133px;
			height: 40px;
			font-size: 30px;
			color: #000;
		}
	
		.row>li p:nth-child(3) {
			font-size: 14px;
			color: #000000a6;
			line-height: 18px;
		}
	
		.row>li p:nth-child(4) {
			font-size: 14px;
			color: #000000a6;
			line-height: 18px;
		}
	
		.row>li p:nth-child(5) {
			font-size: 14px;
			color: #000000a6;
			margin: 8px 0 0;
			padding: 9px 0 0;
			border-top: 1px solid #cacaca;
			;
		}
	
		.box1 {
			width: 194px;
			height: 100px !important;
			/* background-color: antiquewhite; */
			overflow: hidden;
			position: relative;
		}
	
		.box2 {
			width: 194px;
			height: 100px !important;
			/* background-color: antiquewhite; */
			overflow: hidden;
			position: relative;
		}
	
		.box3 {
			width: 194px;
			height: 100px !important;
			/* background-color: antiquewhite; */
			overflow: hidden;
			position: relative;
		}
	
		#d1 {
			width: 194px;
			height: 150px;
			position: absolute;
			top: -50px;
			/* left:-27px; */
		}
	
		#d2 {
			width: 194px;
			height: 200px;
			position: absolute;
			top: -50px;
		}
	
		#d3 {
			width: 194px;
			height: 200px;
			position: absolute;
			top: -80px;
		}
	
		/* -----------------------main- -----------------------------------------*/
		.main {
			width: calc(100% - 24px);
			height: 430px;
			margin: 12px;
			/* background-color:#fff; */
		}
	
		.main-nav {
			width: calc(100% - 32px);
			height: 60px;
			padding: 0 16px;
			border-bottom: 1px solid #afafaf;
			
		}
	
		.main-nav>.left {
			width: 50%;
			height: 60px;
			float: left;
		}
	
		.main-nav>.left p {
			float: left;
			font-size: 16px;
			margin: 0 32px 0 0;
			line-height: 60px;
		}
	
		.main-nav>.right {
			width: calc(50% - 24px);
			height: 60px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			float: left;
			align-items: center;
			padding-right: 24px;
		}
	
		.main-nav>.right>li {
			color: #55aaff;
		}
	
		.main-nav>.right>input {
			width: 236px;
			height: 32px;
			border-radius: 5px;
			color: #afafaf;
			border: 1px solid #d9d9d9;
			outline: none;
			padding: 4px 11px;
			text-align: center;
		}
	
		.main-nav>.right>input:hover {
			border: 1px solid #55aaff;
		}
	
		.p1 {
			width: 100%;
			height: 347px;
			overflow:hidden;
		}
		
	/* ----------------------------------footer------------------------------------- */
		.footer{
			width: calc(100% - 24px);
			height: auto;
			margin:12px;
			background-color: #fff;
		}
		.footer-nav{
			width: calc(100% - 32px);
			height: 60px;
			padding: 0 16px;
			border-bottom: 1px solid #afafaf;
			/* background-color: antiquewhite; */
		}
		.footer-nav>p{
			font-size: 16px;
			color:#000000d9;
			line-height:60px ;
		}
		.footer-main{
			width: calc(100% - 48px);
			height: 368px;
			padding:24px;
		}
		.footer-main>ul{
			width: 100%;
			height: 58px;
			display:flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
		}
		.footer-main>ul>li{
			width: 180px;
			height: 58px;
			padding:0 32px;
		}
		.footer-main>ul>li>p:nth-child(1){
			font-size:14px;
			color:#00000073;
			margin-bottom: 4px;
			text-align: center;
			line-height: 22px
		}
		.footer-main>ul>li>p:nth-child(2){
			font-size:24px;
			color:#000000d9;
			/* margin-bottom: 4px; */
			text-align: center;
			line-height: 32px
		}
		.footer-main>ul>li>p:nth-child(2)>img{
			width: 24px;
			height:24px;
			line-height: 32px;
			margin-left: 10px;
			margin-top: 5px;
		}
		.footer-main>#b1{
			width: 928px;
			height: 222px;
			overflow: hidden;
			padding:0 0 32px 32px;
			margin: 0 auto;
		}
		.xingxi{
			width: 100%;
			height: 122px;
			background-color: #f0f2f5;
		}
		.xingxi>.d1{
			width: 100%;
			
		}
		.xingxi>.d1>p:nth-child(1){
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin-bottom: 8px;
		}
		.xingxi>.d1 span{
			font-size:14px;
			color:#00000073;
			margin-right: 18px;
		}
		.xingxi>.d1 img{
			width: 14px;
			height: 14px;
			margin-right: 18px;
		}
		.xingxi>.d1>p:nth-child(2){
			font-size:14px;
			color:#00000073;
			text-align: center;
		}
</style>
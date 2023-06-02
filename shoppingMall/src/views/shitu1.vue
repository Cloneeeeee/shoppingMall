<template>
	<div class="box">
		<div class="box1">
			<p>销售额排行</p>
			<div id="d1" ref="d1">
			</div>
		</div>
		<!-- <div class="box2">
			<li>门店销售排行榜</li>
			<li><span>1</span>白鹭一号店</li>
			<li><span>2</span>白鹭二号店</li>
			<li><span>3</span>白鹭三号店</li>
			<li><span>4</span>白鹭四号店</li>
			<li><span>5</span>白鹭五号店</li>
			<li><span>6</span>白鹭六号店</li>
			<li><span>7</span>白鹭七号店</li>
		
		</div> -->
	</div>
</template>

<script setup>
	import {onMounted,getCurrentInstance} from 'vue'
	import * as echarts from 'echarts';
	onMounted(()=>{
		var chartDom = getCurrentInstance().proxy.$refs.d1;
		console.log(chartDom)
		var myChart = echarts.init(chartDom);
		var option;
		option = {
		  xAxis: {
		    type: 'category',
		    data: [
		      '一月',
		      '二月',
		      '三月',
		      '四月',
		      '五月',
		      '六月',
		      '七月',
		      '八月',
		      '九月',
		      '十月',
		      '十一月',
		      '十二月'
		    ]
		  },
		  yAxis: {
		    type: 'value'
		  },
		  series: [
		    {
		      data: [120, 200, 150, 80, 70, 110, 130, 120, 100, 60, 50, 100],
		      type: 'bar'
		    }
		  ]
		};
		option && myChart.setOption(option);
	})
</script>

<style scoped>
	li{list-style: none;}
	.box{
		width: 100%;
		height: 347px;
		overflow: hidden;
		margin: 10px;
		background-color: #fff;
	}
	.box1{
		width:100%;
		height: 100%;
		float:left;
	}
	.box1>p{
		font-size: 24px;
		/* margin-bottom: 20px; */
		margin-left:70px;
		line-height:40px ;
	}
	#d1{
		width:90%;
		height: 400px;
		padding:0 0 32px 32px;
	}
	.box2{
		width:calc(35% - 104px);
		height: calc(100% - 32px);
		float:right;
		padding:0 32px 32px 72px;
	}
	.box2>li{
		margin-bottom: 20px;
	}
	.box2>li:nth-child(1){
		font-size:16px;
		color:#000;
		margin-bottom: 33px;
	
	}
	.box>li:nth-child(2){
		font-size: 14px;
		color:#000000a6;
	}
	.box2>li:nth-child(2)>span{
		width: 20px;
		height: 20px;
		font-size:12px;
		background-color: #314659;
		color:#fff;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		margin-right: 24px;
		line-height: 20px;
		text-align: center;
		display: inline-block;
	}
	.box>li:nth-child(3){
		font-size: 14px;
		color:#000000a6;
	}
	.box2>li:nth-child(3)>span{
		width: 20px;
		height: 20px;
		font-size:12px;
		background-color: #314659;
		color:#fff;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		margin-right: 24px;
		line-height: 20px;
		text-align: center;
		display: inline-block;
	}
	.box>li:nth-child(4){
		font-size: 14px;
		color:#000000a6;
	}
	.box2>li:nth-child(4)>span{
		width: 20px;
		height: 20px;
		font-size:12px;
		background-color: #314659;
		color:#fff;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		margin-right: 24px;
		line-height: 20px;
		text-align: center;
		display: inline-block;
	}
	.box>li:nth-child(4){
		font-size: 14px;
		color:#000000a6;
	}
	.box2>li:nth-child(4)>span{
		width: 20px;
		height: 20px;
		font-size:12px;
		background-color: #314659;
		color:#fff;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		margin-right: 24px;
		line-height: 20px;
		text-align: center;
		display: inline-block;
	}
	.box>li:nth-child(5){
		font-size: 14px;
		color:#000000a6;
	}
	.box2>li:nth-child(5)>span{
		width: 20px;
		height: 20px;
		font-size:12px;
		background-color: #314659;
		color:#fff;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		margin-right: 24px;
		line-height: 20px;
		text-align: center;
		display: inline-block;
	}
	.box>li:nth-child(6){
		font-size: 14px;
		color:#000000a6;
	}
	.box2>li:nth-child(6)>span{
		width: 20px;
		height: 20px;
		font-size:12px;
		background-color: #314659;
		color:#fff;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		margin-right: 24px;
		line-height: 20px;
		text-align: center;
		display: inline-block;
	}
	.box>li:nth-child(7){
		font-size: 14px;
		color:#000000a6;
	}
	.box2>li:nth-child(7)>span{
		width: 20px;
		height: 20px;
		font-size:12px;
		background-color: #314659;
		color:#fff;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		margin-right: 24px;
		line-height: 20px;
		text-align: center;
		display: inline-block;
	}
	.box>li:nth-child(8){
		font-size: 14px;
		color:#000000a6;
	}
	
	.box2>li:nth-child(8)>span{
		width: 20px;
		height: 20px;
		font-size:12px;
		background-color: #314659;
		color:#fff;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		margin-right: 24px;
		line-height: 20px;
		text-align: center;
		display: inline-block;
	}
	
	
</style>
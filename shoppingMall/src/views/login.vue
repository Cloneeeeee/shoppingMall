<template>
	<div class="box">
		<div class="left">
			<div class="ball" ref="ball">
				<div class="balls" ref="balls"></div>
			</div>
			<div class="leftBody">
				<div class="main">
					<div class="tit1">超市管理员</div>
					<div class="tit2">让数据管理更简单</div>
					<div class="tit3">欢迎回来，请登录您的用户</div>
					<div class="user">
						<input type="text" placeholder="请输入用户名" class="useipt" @focus="userfocus" @blur="userblur" @keyup="userinput" :class="{useiptTrue:isuserfocus,useiptErr:isuserErr}" title="请填写此字段" v-model="uservalue">
						<span class="userTit" :class="{usertitTrue:isuserfocus,usertitnull:isusernull}">用户名</span>
						<span class="userlogo" :class="{userlogoTrue:isuserfocus,userlogoErr:isuserErr}"></span>
						<span class="userErr1" :class="{userErr2:isuserErr}">请输入有效的用户名</span>
					</div>
					<div class="pass">
						<input type="password" placeholder="请输入密码" class="passipt" @focus="passfocus" @blur="passblur" @keyup="passinput" :class="{passiptTrue:ispassfocus,passiptErr:ispassErr}" title="请填写此字段" v-model="passvalue">
						<span class="passTit" :class="{passtitTrue:ispassfocus,passtitnull:ispassnull}">密码</span>
						<span class="passlogo" :class="{passlogoTrue:ispassfocus,passlogoErr:ispassErr}"></span>
						<span class="passErr1" :class="{passErr2:ispassErr}">请输入正确的密码</span>
					</div>
					<div class="rem">
						<input type="checkbox" class="check" v-model="checked" :checked='checked'>
						<span class="remtit">记住我</span>
					</div>
					<el-button type="primary" class="submit" :disabled='isdisabled' @click="click">登录</el-button>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="rightBody">
				<span class="righttit">如果你也可以跟我一样</span>
				<span class="righttit">那么我觉得这件事情真的是</span>
				<span class="righttit">泰裤辣！</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref,reactive,getCurrentInstance } from 'vue'
	import Cookie from 'js-cookie'
	import request from '../axios/axios.js'
	import { ElMessage } from 'element-plus'
	import { Clear } from '@idux/components'
	export default{
		data() {
			return{
				isuserfocus:false,
				isusernull:false,
				isuserErr:false,
				uservalue:'',
				ispassfocus:false,
				ispassnull:false,
				ispassErr:false,
				passvalue:'',
				checked:true,
				isdisabled:false,
				time:null
			}
		},
		mounted() {
			// console.log(document.cookie.length)
			this.run()
			if(document.cookie.length>0){
				this.uservalue = Cookie.get('userName')
				this.passvalue = Cookie.get('passName')
			}
		},
		methods:{
			userfocus() {
				this.isuserfocus = !this.isuserfocus
				this.userinput()
			},
			userblur(){
				this.isuserfocus = !this.isuserfocus
				if(!this.uservalue.trim()){
					this.isusernull = true
					this.isuserErr = true
				}else{
					this.isusernull = false
					this.isuserErr = false
				}
			},
			userinput(){
				if(!this.uservalue){
					this.isusernull = true
					this.isuserErr = true
				}else{
					this.isusernull = false
					this.isuserErr = false
				}
				this.istrue()
			},
			passfocus() {
				this.ispassfocus = !this.ispassfocus
				this.passinput()
			},
			passblur(){
				this.ispassfocus = !this.ispassfocus
				if(!this.passvalue.trim()){
					this.ispassnull = true
					this.ispassErr = true
				}else{
					this.ispassnull = false
					this.ispassErr = false
				}
			},
			passinput(){
				if(!this.passvalue){
					this.ispassnull = true
					this.ispassErr = true
				}else{
					this.ispassnull = false
					this.ispassErr = false
				}
				this.istrue()
			},
			click(){
				//3天后过期
				let days = 3
				let expires = new Date(new Date() * 1 + days * 24 * 60 * 60 * 1000);
				if(!this.uservalue||!this.passvalue){
					this.isdisabled = true
				}
				// console.log(this.uservalue,this.passvalue)
				if(this.checked){
					// console.log('记住我')
					Cookie.set('userName',this.uservalue,{expires:expires})
					Cookie.set('passName',this.passvalue,{expires:expires})
				}else{
					// console.log('删除用户信息')
					Cookie.remove('userName')
					Cookie.remove('passName')
				}
				request.get('/',{
					params:{
						user:this.uservalue,
						pass:this.passvalue
					}
				}).then(res=>{
					console.log(res.data)
					// this.open4(res.data)
					if(!res.data.userlogin){
						this.open4(res.data.tit)
					}else if(res.data.userlogin&&!res.data.passlogin){
						this.open4(res.data.tit)
					}else{
						this.open2(res.data.tit)
						let that = this.$router
						setTimeout(function(){
							that.replace('home')
						},1000)
					}
				})
			},
			istrue(){
				if(!this.isuserErr&&!this.ispassErr){
					this.isdisabled = false
				}else{
					this.isdisabled = true
				}
			},
			run(){
				
					// console.log(this.$refs.balls.style)
					let that = this
					
					this.$refs.balls.style.top = Math.floor(Math.random()*(this.$refs.ball.offsetHeight-this.$refs.balls.offsetHeight))+'px'
					this.$refs.balls.style.left = Math.floor(Math.random()*(this.$refs.ball.offsetWidth-this.$refs.balls.offsetWidth))+'px'
					// console.log(this.$refs.ball.offsetHeight)
					
					var vx= Math.random()<0.5?1:-1;
					var vy= Math.random()<0.5?1:-1;
					
					var x = parseInt(this.$refs.balls.style.left);
					var y = parseInt(this.$refs.balls.style.top);
					
					this.time = setInterval(function(){
						x+=vx;
						y+=vy;
						// 设置移动范围
						if(x<=2||x>=(that.$refs.ball.offsetWidth-that.$refs.balls.offsetWidth - 2)){
							vx=-vx
						}
						if(y<=2||y>=(that.$refs.ball.offsetHeight-that.$refs.balls.offsetHeight -2)){
							vy=-vy
						}
						
						that.$refs.balls.style.left = x+'px';
						that.$refs.balls.style.top = y+'px';
					},1)
				
			},
			open2(data){
			  ElMessage.success(data)
			},
			open4(data){
			  ElMessage.error(data)
			}
		},
		unmounted() {
			clearInterval(this.time)
		}
	}
	
</script>

<style scoped lang="less">
	.box{
		width: 100%;
		height: 100vh;
		// background: url('../assets/bg.jpg') no-repeat 0 center/cover;
		display: flex;
		align-items: center;
		.left{
			width: 35%;
			height: 100%;
			display: flex;
			justify-content: center;
			background: url('../assets/left.svg') no-repeat 0 0/cover;
			position: relative;
			.ball{
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				// background: pink;
				// z-index: -1;
				.balls{
					width: 100px;
					height: 100px;
					border-radius: 50%;
					background: pink;
					position: absolute;
					opacity: .5;
				}
			}
			.leftBody{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				z-index: 1;
				.main{
					width: 65%;
					height: 80%;
					.tit1{
						font-size: 28px;
					}
					.tit2{
						font-size: 18px;
						margin: 50px auto 15px;
					}
					.tit3{
						font-size: 14px;
						color: #2a2e30;
						margin-bottom: 50px;
					}
					.user{
						width: 100%;
						height: auto;
						display: flex;
						flex-direction: column;
						position: relative;
						margin-bottom: 35px;
						// justify-content: center;
						.userTit{
							color: rgba(34,41,47,.4);
							font-size: 13px;
							position: absolute;
							top: -20px;
							left: 3px;
							transition: all .3s ease; 
							opacity: 1;
						}
						.usertitTrue{
							color: #3c4b78;
							transition: all .3s ease; 
						}
						.usertitnull{
							top: 10px;
							left: 40px;
							opacity: 0;
						}
						.useipt{
							color: #414750;
							outline: none;
							width: 100%;
							height: 35px;
							border-radius: 5px;
							border: 1px solid #dbe3e6;
							font-size: 13px;
							text-indent: 40px;
							background: rgba(255, 255, 255, .7);
						}
						.useipt::-webkit-input-placeholder{
							color: rgba(34,41,47,.4);
							text-indent: 40px;
							transition: all .2s ease;
						}
						.useiptTrue{
							color: #414750;
							outline: none;
							width: 100%;
							height: 35px;
							border-radius: 5px;
							border: 1px solid #3c4b78;
							font-size: 13px;
							text-indent: 40px;
							background: rgba(255, 255, 255, .7);
						}
						.useiptTrue::-webkit-input-placeholder{
							color: rgba(34,41,47,.4);
							text-indent: 46px;
							transition: all .2s ease;
						}
						.useiptErr{
							border: 1px solid #bd4147;
						}
						.userlogo{
							display: block;
							width: 16px;
							height: 16px;
							background: url('../assets/user1.svg') no-repeat center center/cover;
							position: absolute;
							left: 10px;
							top: 11px;
						}
						.userlogoTrue{
							background: url('../assets/user2.svg') no-repeat center center/cover;
						}
						.userlogoErr{
							background: url('../assets/user3.svg') no-repeat center center/cover;
						}
						.userErr1{
							display: none;
						}
						.userErr2{
							padding-top: 5px;
							color: #bd4147;
							font-size: 14px;
							display: block;
						}
					}
					.pass{
						width: 100%;
						height: auto;
						display: flex;
						flex-direction: column;
						position: relative;
						margin-bottom: 30px;
						// justify-content: center;
						.passTit{
							color: rgba(34,41,47,.4);
							font-size: 13px;
							position: absolute;
							top: -20px;
							left: 3px;
							transition: all .3s ease; 
							opacity: 1;
						}
						.passtitTrue{
							color: #3c4b78;
							transition: all .3s ease; 
						}
						.passtitnull{
							top: 10px;
							left: 40px;
							opacity: 0;
						}
						.passipt{
							color: #414750;
							outline: none;
							width: 100%;
							height: 35px;
							border-radius: 5px;
							border: 1px solid #dbe3e6;
							font-size: 13px;
							text-indent: 40px;
							background: rgba(255, 255, 255, .7);
						}
						.passipt::-webkit-input-placeholder{
							color: rgba(34,41,47,.4);
							text-indent: 40px;
							transition: all .2s ease;
						}
						.passiptTrue{
							color: #414750;
							outline: none;
							width: 100%;
							height: 35px;
							border-radius: 5px;
							border: 1px solid #3c4b78;
							font-size: 13px;
							text-indent: 40px;
							background: rgba(255, 255, 255, .7);
						}
						.passiptTrue::-webkit-input-placeholder{
							color: rgba(34,41,47,.4);
							text-indent: 46px;
							transition: all .2s ease;
						}
						.passiptErr{
							border: 1px solid #bd4147;
						}
						.passlogo{
							display: block;
							width: 16px;
							height: 16px;
							background: url('../assets/lock1.svg') no-repeat center center/cover;
							position: absolute;
							left: 10px;
							top: 11px;
						}
						.passlogoTrue{
							background: url('../assets/lock2.svg') no-repeat center center/cover;
						}
						.passlogoErr{
							background: url('../assets/lock3.svg') no-repeat center center/cover;
						}
						.passErr1{
							display: none;
						}
						.passErr2{
							padding-top: 5px;
							color: #bd4147;
							font-size: 14px;
							display: block;
						}
					
					}
					.rem{
						display: flex;
						align-items: center;
						margin-bottom: 25px;
						.check{
							display: block;
							width: 17px;
							height: 17px;
							box-sizing: border-box;
							border: 2px solid #b8c2cc;
							outline: none;
							border-radius: 2px;
							cursor: pointer;
							margin-right: 5px;
						}
						.remtit{
							font-size: 14px;
							color: #666;
							line-height: 8px;
						}
					}
					.submit{
						display: block;
						width: 100%;
						height: 35px;
						font-size: 16px;
						letter-spacing: 1rem;
					}
				}
			}
		}
		.right{
			width: 65%;
			height: 100%;
			background: url('../assets/bg.jpg') no-repeat center 0/cover;
			.rightBody{
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0,.1);
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				.righttit{
					display: block;
					font-size: 40px;
					letter-spacing: 1rem;
					margin: 10px 0;
					color: #fff;
				}
			}
		}
	}
</style>
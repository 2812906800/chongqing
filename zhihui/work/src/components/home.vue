<template>
	<div id="home_app">
		<!-- home的数据 -->
		<el-row class="one">
			<el-col :span="6">
				<el-row class="left_one">
					<el-col :span="8" class="left_one1">
						<div>
							<div>今日借/还书人次</div>
							<div>
								<span class="left_one_one1">680 / </span>
								<span class="left_one_one2">230</span>
							</div>
							<div>
								<p>公安专业</p>
								<p>今日借/还书人次</p>
							</div>
							<div>
								<span class="left_one_two1">129 / </span>
								<span class="left_one_two2">60</span>
							</div>
						</div>
					</el-col>
					<el-col :span="8">
						<div id="jhNum" style="width: 135px; height: 135px;"></div>
						<el-row :gutter="20">
							<el-col :span="24">
								<div class="left_one_two">
									今日借书人次占比
								</div>
							</el-col>

						</el-row>
					</el-col>
					<el-col :span="8" class="left_one1">
						<div class="">
							<div>今日借/还书册次</div>
							<div>
								<span class="left_one_one1">1680 / </span>
								<span class="left_one_one2">2230</span>
							</div>
							<div>
								<p>公安专业</p>
								<p>今日借/还书册次</p>
							</div>
							<div>
								<span class="left_one_two1">329 / </span>
								<span class="left_one_two2">213</span>
							</div>
						</div>
					</el-col>
					<span class="son1"></span>
					<span class="son2"></span>
					<span class="son3"></span>
					<span class="son4"></span>

				</el-row>
				<el-row class="left_one left_two">
					<div class="left_two_son">
						<el-row class='topList'>
							<el-col :span="24">
								月度借阅排行
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24">
								<el-tabs v-model="activeName" :activeName="activeName">
									<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
									<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
									<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
									<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
								</el-tabs>

							</el-col>
						</el-row>
						<!-- <el-row>
												<el-col :span="24">
													<div class="">
														<div class="block">
															<el-carousel height="150px">
																<el-carousel-item v-for="item in 4" :key="item">
																	<h3>{{ item }}</h3>
																</el-carousel-item>
															</el-carousel>
														</div>
													</div>
												</el-col>
											</el-row> -->

						<span class="son1"></span>
						<span class="son2"></span>
						<span class="son3"></span>
						<span class="son4"></span>

					</div>
				</el-row>
				<el-row class="left_one left_two">
					<div class="left_two_son">
						<el-row class='topList'>
							<el-col :span="24">
								月度借阅排行
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24">
								<el-tabs v-model="activeName" :activeName="activeName">
									<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
									<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
									<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
									<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
								</el-tabs>

							</el-col>
						</el-row>


						<span class="son1"></span>
						<span class="son2"></span>
						<span class="son3"></span>
						<span class="son4"></span>

					</div>
				</el-row>


			</el-col>
			<el-col :span="13">
				<div class="home_center">
					<el-row class='center_one'>
						<el-col :span="8">
							<div>
								<el-row>
									<el-col :span="24">
										<div>总入馆人次</div>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24">
										<div class="center_one_son1">789452</div>
									</el-col>
								</el-row>
							</div>
						</el-col>
						<el-col :span="8" class='center_one2'>
							<div>
								<el-row>
									<el-col :span="24">
										<div>馆藏总册数</div>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24">
										<div class="center_one_son2">154781</div>
									</el-col>
								</el-row>
							</div>
						</el-col>
						<el-col :span="8" class='center_one3'>
							<div>
								<el-row>
									<el-col :span="24">
										<div>本年入馆人次</div>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24">
										<div class="center_one_son3">48721</div>
									</el-col>
								</el-row>
							</div>
						</el-col>

					</el-row>
					<el-row class="left_one left_two">
						<div>
							<el-row class='topList_rigth'>
								<el-col :span="6">
									活动展示
								</el-col>
								<el-col :span="6">

								</el-col>
								<el-col :span="6">

								</el-col>
								<el-col :span="6">
									<span>视频</span>
									<span>/图片</span>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24" class='right_one_two'>


								</el-col>
							</el-row>


							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>

						</div>
					</el-row>
					<el-row>
						<el-col :span="24">
							<div class="grid-content bg-purple-dark"></div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<div class="grid-content bg-purple-dark"></div>
						</el-col>
					</el-row>
				</div>
			</el-col>
			<el-col :span="5">
				<div class="home_rigth">
					<el-row class="left_one left_two">
						<div>
							<el-row class='topList_rigth'>
								<el-col :span="6">
									活动展示
								</el-col>
								<el-col :span="6">

								</el-col>
								<el-col :span="6">

								</el-col>
								<el-col :span="6">
									<span>视频</span>
									<span>/图片</span>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24" class='right_one_two'>


								</el-col>
							</el-row>


							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>

						</div>
					</el-row>
					<el-row class="left_one left_two">
						<div>
							<el-row class='topList_rigth'>
								<el-col :span="6">
									活动公告
								</el-col>
								<el-col :span="6">

								</el-col>
								<el-col :span="6">

								</el-col>
								<el-col :span="6">

								</el-col>
							</el-row>
							<el-row>
								<el-col :span="8" class='right_two_son'>

								</el-col>
								<el-col :span="8" class='right_two_son'>

								</el-col>
								<el-col :span="8" class='right_two_son'>

								</el-col>


							</el-row>


							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>

						</div>
					</el-row>
					<el-row class="left_one left_two">
						<div>
							<el-row class='topList_rigth'>
								<el-col :span="8">
									借书到期通报
								</el-col>
								<el-col :span="8">

								</el-col>
								<el-col :span="8">

								</el-col>

							</el-row>
							<el-row v-for="(item,index) in 5" v-if="index<5" style="width: 350px;">
								<el-col :span="24" class='right_three_son'>
									<p>
										<img src="../img/sanjiaoxing.png" /> 《{{item}}》这本书即将到期，请按时归还。</p>
								</el-col>
							</el-row>


							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>

						</div>
					</el-row>
					<el-row class="left_one left_two">
						<div>
							<el-row class='topList_rigth'>
								<el-col :span="6">
									热门检索词
								</el-col>
								<el-col :span="6">

								</el-col>
								<el-col :span="6">

								</el-col>
								<el-col :span="6">

								</el-col>
							</el-row>
							<el-row>
								<el-col :span="8" class='right_two_son'>

								</el-col>
								<el-col :span="8" class='right_two_son'>

								</el-col>
								<el-col :span="8" class='right_two_son'>

								</el-col>


							</el-row>


							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>

						</div>
					</el-row>
				</div>

			</el-col>
		</el-row>
		<!-- <el-container>
				<el-aside width="500px">Aside</el-aside>
				<el-main>Main</el-main>
				<el-aside width="400px">Aside</el-aside>
			</el-container> -->

	</div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		name: 'home',
		data: function () {
			return {
				activeName: 'first',
				classList: ['first', 'second', 'third', 'fourth']
			}
		},
		mounted() {
			this.jhNum();
			this.handleClick();
		},
		methods: {
			jhNum() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('jhNum'));
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					textStyle: {
						color: '#fff', // 图例文字颜色,
						fontSize: 18
					},
					series: [{
							name: '访问来源',
							type: 'pie',
							selectedMode: 'single',
							radius: [0, '50%'],
							// center:['50%','50%'],
							label: {
								normal: {
									position: 'center'
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [{
								value: 335,
								name: '65%',

								itemStyle: {
									color: 'rgb(111,111,111,0.9)'
								}

							}]


						},
						{
							name: '访问来源',
							type: 'pie',
							selectedMode: 'single',
							radius: ['50%', '75%'],
							// center:['50%','50%'],
							label: {
								normal: {
									position: 'inner'
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [{
									value: 335,
									itemStyle: {
										// color: "#68c030"
										normal: { //颜色渐变
											color: {
												type: 'linear',
												x: 0,
												y: 0,
												x2: 0,
												y2: 1,
												colorStops: [{
													offset: 0,
													color: '#68c030' // 0% 处的颜色
												}, {
													offset: 1,
													color: '#f1fe7c' // 100% 处的颜色
												}],
												global: false // 缺省为 false
											}
										}
									}

								}

							]
						},
						{
							name: '访问来源',
							type: 'pie',
							radius: ['75%', '95%'],
							label: {
								normal: {
									position: 'inner'
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [{
									value: 400,
									itemStyle: {
										color: {
											type: 'linear',
											x: 0,
											y: 0,
											x2: 0,
											y2: 1,
											colorStops: [{
												offset: 0,
												color: '#1a9fdc' // 0% 处的颜色
											}, {
												offset: 1,
												color: '#53f5ff' // 100% 处的颜色
											}],
											global: false // 缺省为 false
										}
									}
								},
								{
									value: 310,
									itemStyle: {
										color: {
											type: 'linear',
											x: 0,
											y: 0,
											x2: 0,
											y2: 1,
											colorStops: [{
												offset: 0,
												color: 'rgba(255,255,255,0)' // 0% 处的颜色
											}, {
												offset: 1,
												color: 'rgba(255,255,255,0)' // 100% 处的颜色
											}],
											global: false // 缺省为 false
										}
									}
								}

							]
						}
					]
				});
			},
			handleClick(tab, event) {
				// 				setInterval(function (){
				// 					for(var i=0;i<4;i++){
				// 						this.activeName=this.classList[i];
				// 						console.log(this.classList[i])
				// 						if(i=4){
				// 							return i=0;
				// 							
				// 						}
				// 					}
				// 					
				// 				},2000)
				// 				console.log(tab, event);
			}
		}
	}
</script>

<style>
	#home_app #jhNum {}

	#home_app .el-col {
		height: 100%;
	}

	#home_app .one .el-row {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#home_app .left_one {
		border: 1px solid #093b94;
		background-color: rgba(1, 1, 1, 0.1);
		padding: 30px 0px 15px;
		position: relative;
		margin-left: 10px;
		margin-bottom: 15px;
	}

	#home_app .left_one .son1 {
		position: absolute;
		left: -1px;
		top: -1px;
		padding: 5px;
		border-style: solid;
		border-color: #00f7fa;
		border-width: 1px 0 0 1px;
	}

	#home_app .left_one .son2 {
		position: absolute;
		right: -1px;
		top: -1px;
		padding: 5px;
		border-style: solid;
		border-color: #00f7fa;
		border-width: 1px 1px 0 0;
	}

	#home_app .left_one .son3 {
		position: absolute;
		right: -1px;
		bottom: -1px;
		padding: 5px;
		border-style: solid;
		border-color: #00f7fa;
		border-width: 0 1px 1px 0;
	}

	#home_app .left_one .son4 {
		position: absolute;
		left: -1px;
		bottom: -1px;
		padding: 5px;
		border-style: solid;
		border-color: #00f7fa;
		border-width: 0 0 1px 1px;
	}

	#home_app .left_one1 div {
		/* display: flex; */
		margin-bottom: 30px;
		font-size: 14px;
		color: #ddd;
	}
	/* 
	#home_app .left_two {
		justify-content: flex-start !important;
		padding-left: 8px;
	} */

	#home_app .left_two .left_two_son {
		width: 100%;
		height: 100%;
		padding-left: 10px;
	}

	.el-tabs__item {
		color: #fff !important;
	}

	#home_app .left_one .topList {
		margin: -20px 0px 10px -350px;
	}

	#home_app .left_one .left_one_one1 {
		/* color: linear-gradient(#40c6d8, #17b4f3);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-transform: uppercase; */
		background: linear-gradient(to bottom, #53f6ff 0%, #17b4f3 100%);
		background-clip: text;
		font-size: 26px;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}

	#home_app .left_one .left_one_one2 {
		background: linear-gradient(to bottom, #ffd1ae 0%, #ff7109 100%);
		font-size: 26px;
		background-clip: text;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}

	#home_app .left_one .left_one_two1 {
		background: linear-gradient(to bottom, #f1fe7c 0%, #5eb737 100%);
		font-size: 26px;
		background-clip: text;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}

	#home_app .left_one .left_one_two2 {
		background: linear-gradient(to bottom, #fdb25f 0%, #d5ce37 100%);
		font-size: 26px;
		background-clip: text;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}

	#home_app .left_one_two {
		margin-top: 20px;
		font-size: 18px;
		font-weight: 500;
	}

	#home_app .home_center {
		background-color: rgba(1, 1, 1, 0);
		height: 950px;
		padding: 30px;
	}
	#home_app .home_center .center_one {
		/* font-weight: 400; */
		margin-bottom: 20px;
	}
	#home_app .home_center .center_one_son1 {
		background: linear-gradient(to bottom, #f4ff7f 0%, #68de2c 100%);
		background-clip: text;
		font-size: 44px;
		margin-top: 20px;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}
	#home_app .home_center .center_one_son2 {
		background: linear-gradient(to bottom, #53f5ff 0%, #0da1ea 100%);
		background-clip: text;
		font-size: 44px;
		margin-top: 20px;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}
	#home_app .home_center .center_one_son3 {
		background: linear-gradient(to bottom, #ff9a99 0%, #ff765b 100%);
		background-clip: text;
		font-size: 44px;
		margin-top: 20px;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}
	
	

	#home_app .home_rigth .topList_rigth {
		/* margin: -20px 0px 10px -285px; */
		margin-top: -20px;
		color: #eee;
	}

	#home_app .home_rigth .right_one_two {
		width: 360px;
		height: 230px;
		background-color: cornsilk;
		margin-top: 20px;
	}

	#home_app .home_rigth .right_two_son {
		width: 105px;
		height: 140px;
		background-color: honeydew;
		margin: 15px 10px 0px;
	}

	#home_app .home_rigth .right_three_son {
		/* justify-content: flex-start; */
		margin-left: -100px;
		font-size: 12px;
		margin-top: 10px;
	}
	/* #home_app  .home_rigth .topList_rigth .el-col {
		justify-content: space-between;
	} */
</style>

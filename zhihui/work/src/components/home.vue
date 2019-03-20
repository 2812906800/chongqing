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
								<img src="../img/monthList.png" />
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24">
								<el-tabs v-model="activeName" class='mothList'>
									<el-tab-pane label="图书类别" name="second1">
										<el-row v-for="item in toplist">
											<el-col :span="24">
												<div class="mothList_son1">
													<span class="left"><img :src="item.src" />{{item.name}}</span>
													<span class="center"><img src="../img/line.png" /></span>
													<span class="right">{{item.number}}</span>
												</div>
											</el-col>
										</el-row>
									</el-tab-pane>
									<el-tab-pane label="读者借阅" name="second2">
										<el-row v-for="item in toplist">
											<el-col :span="24">
												<div class="mothList_son1">
													<span class="left"><img :src="item.src" />{{item.name}}</span>
													<span class="center"><img src="../img/line.png" /></span>
													<span class="right">{{item.number}}</span>
												</div>
											</el-col>
										</el-row>
									</el-tab-pane>
									<el-tab-pane label="图书借阅" name="second3">
										<el-row v-for="item in toplist">
											<el-col :span="24">
												<div class="mothList_son1">
													<span class="left"><img :src="item.src" />{{item.name}}</span>
													<span class="center"><img src="../img/line.png" /></span>
													<span class="right">{{item.number}}</span>
												</div>
											</el-col>
										</el-row>
									</el-tab-pane>
									<el-tab-pane label="各部门" name="second4">
										<el-row v-for="item in toplist">
											<el-col :span="24">
												<div class="mothList_son1">
													<span class="left"><img :src="item.src" />{{item.name}}</span>
													<span class="center"><img src="../img/line.png" /></span>
													<span class="right">{{item.number}}</span>
												</div>
											</el-col>
										</el-row>
									</el-tab-pane>
									<el-tab-pane label="公安专业 图书借阅" name="second5">
										<el-row v-for="item in toplist">
											<el-col :span="24">
												<div class="mothList_son1">
													<span class="left"><img :src="item.src" />{{item.name}}</span>
													<span class="center"><img src="../img/line.png" /></span>
													<span class="right">{{item.number}}</span>
												</div>
											</el-col>
										</el-row>
									</el-tab-pane>
									<el-tab-pane label="公安专业老师借阅" name="second6">
										<el-row v-for="item in toplist">
											<el-col :span="24">
												<div class="mothList_son1">
													<span class="left"><img :src="item.src" />{{item.name}}</span>
													<span class="center"><img src="../img/line.png" /></span>
													<span class="right">{{item.number}}</span>
												</div>
											</el-col>
										</el-row>
									</el-tab-pane>
									<el-tab-pane label="公安专业 学生借阅" name="second7">
										<el-row v-for="item in toplist">
											<el-col :span="24">
												<div class="mothList_son1">
													<span class="left"><img :src="item.src" />{{item.name}}</span>
													<span class="center"><img src="../img/line.png" /></span>
													<span class="right">{{item.number}}</span>
												</div>
											</el-col>
										</el-row>
									</el-tab-pane>

								</el-tabs>


							</el-col>
						</el-row>
						
						<!-- <el-row v-for="item in classList">

							<el-col :span="3">
								<div class="">{{item}}</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24">
								<div class=""></div>
							</el-col>
						</el-row>
 -->
						<span class="son1"></span>
						<span class="son2"></span>
						<span class="son3"></span>
						<span class="son4"></span>

					</div>
				</el-row>
				<el-row class="left_one left_two">
					<div class="left_two_son">
						<el-row class='leftNew'>
							<!-- <el-row class='topList'> -->
								<el-col :span="24">
									<el-tabs v-model="activeName" class='mothList'>
										<el-tab-pane label="新书推荐" name="second1">
											<el-row>
												<el-col :span="24">
													<img class="bookimg" src="../img/newbook.png"/>
												</el-col>
											</el-row>
											
							
									
							
									</el-tab-pane>
									<el-tab-pane label="专家推荐" name="second7">
										<el-row>
											<el-col :span="24">
												<img class="bookimg" src="../img/newbook.png" />
											</el-col>
										</el-row>
									</el-tab-pane>
									</el-tabs>
								</el-col>
							<!-- </el-row> -->
							<!-- <el-col :span="5">
								新书推荐
							</el-col>
							<el-col :span="1">

							</el-col>
							<el-col :span="5">
								专家推荐
							</el-col>
							<el-col :span="13">

							</el-col> -->
						</el-row>
						<!-- <el-row>
							<el-col :span="24">
								<img src="../img/newbook.png" style="width: 100%;" />

							</el-col>
						</el-row> -->


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
						<div style="width: 100%;">
							<el-row class='topList_rigth tableList'>
								<el-col :span="4">
								</el-col>
								<el-col :span="4">
									本年借/还书人次
								</el-col>
								<el-col :span="4">
									本年借/还书册次
								</el-col>
								<el-col :span="4">
									馆藏种类数
								</el-col>
								<el-col :span="4">
									年度新增馆藏数
								</el-col>
								<el-col :span="4">
									生均馆藏量
								</el-col>
							</el-row>
							<el-row v-for="item in tablelist" class="tableList">
								<el-col v-for="numbers in item" :span="4">
									{{numbers}}
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
							<div>
								<div id="pTime">

								</div>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<div id="bookTime">

							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
			<el-col :span="5">
				<div class="home_rigth">
					<el-row class="left_one left_two">
						<div>
							<el-row class='topList_rigth'>
								<el-col :span="8">
									活动展示
								</el-col>
								<el-col :span="8">

								</el-col>

								<el-col :span="8">
									<span>视频</span>
									<span>/图片</span>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24" class='right_one_two'>
									<img src="../img/vd.png" />

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
									活动公告
								</el-col>
								<el-col :span="8">

								</el-col>
								<el-col :span="8">

								</el-col>

							</el-row>
							<el-row>
								<el-col :span="8" class='right_two_son'>
									<img src="../img/active1.png" />
								</el-col>
								<el-col :span="8" class='right_two_son'>
									<img src="../img/active2.png" />
								</el-col>
								<el-col :span="8" class='right_two_son'>
									<img src="../img/active3.png" />
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
								<el-col :span="10">
									借书到期通报
								</el-col>
								<el-col :span="14">

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
								<el-col :span="8">
									热门检索词
								</el-col>
								<el-col :span="8">

								</el-col>
								<el-col :span="8">

								</el-col>

							</el-row>
							<el-row>
								<el-col :span="24" class='hotKey'>
									<img src="../img/hotkey.png" />
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
	// import require form '';
	export default {
		name: 'home',
		data: function() {
			return {
				activeName: 'second1',
				classList: ['图书类别', '读者借阅', '图书借阅', '各部门', '公安专业图书借阅', '公安专业老师借阅', '公安专业学生借阅'],
				index: 1,
				bookList: [1, 2, 3, 4, 5, 6, 7],
				toplist: [{
					src: require("../img/top1.png"),
					name: "《1》",
					number: 1
				}, {
					src: require("../img/top2.png"),
					name: "《2》",
					number: 2
				}, {
					src: require("../img/top3.png"),
					name: "《3》",
					number: 3
				}, {
					src: require("../img/top4.png"),
					name: "《4》",
					number: 4
				}, {
					src: require("../img/top5.png"),
					name: "《55》",
					number: 5
				}, {
					src: require("../img/top6.png"),
					name: "《6》",
					number: 6
				}],
				tablelist: [{
					name: "公安专业",
					pNum: "451711/252053",
					bookNum: "45421/1445",
					claasNum: "11545421",
					newNum: "454414515",
					avgNum: "154545"
				}, {
					name: "非公安专业",
					pNum: "254125/154574",
					bookNum: "12471/6515",
					claasNum: "752651",
					newNum: "12111202",
					avgNum: "244155"
				}]

			}
		},
		mounted() {
			this.jhNum();
			// this.handleClick();
			this.peopleTime();
			this.bookTime();
			var mothtop = document.querySelector(".mothList");
			var _this = this;
			// 			var t1 = setInterval(function() {
			// 				// console.log(_this.index)
			// 				// console.log(mothtop);
			// 				mothtop.click();
			// 				_this.activeName = "second" + _this.index.toString();
			// 				console.log(_this.activeName)
			// 				if (_this.index >= 7) {
			// 					return _this.index = 1;
			// 				}
			// 				_this.index++;
			// 
			// 
			// 			}, 3000)
			// clearInterval(t1);
		},
		methods: {
			// 			handleClick(tab, event) {
			// 				console.log(111)
			// 							var t1=setInterval(function (){
			// 									
			// 										this.activeName="second"+this.index;
			// 										console.log(this.activeName)
			// 										if(index>=7){
			// 											return this.index=0;
			// 											
			// 										}
			// 										this.index++;
			// 									
			// 									
			// 								},800000)
			// 								clearInterval(t1);
			// 								// console.log(tab, event);
			// 			},
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

			peopleTime() {
				// 基于准备好的dom，初始化echarts实例
				let myChart2 = this.$echarts.init(document.getElementById('pTime'));
				// 绘制图表
				myChart2.setOption({
					title: {
						text: '各时间段入馆人次',
						x: 'center',
						textStyle: {
							color: "#fff"
						}
					},
					textStyle: {
						color: '#ccc', // 图例文字颜色,
						fontSize: 18
					},
					xAxis: {
						// type: 'category',
						axisLine: {
							lineStyle: {
								color: '#eee',
							}
						},
						// 						axisLabel:{
						// 							textStyle: {
						// 								// color: '#ccc', // 图例文字颜色,
						// 								fontSize: 18
						// 							}
						// 						},


						boundaryGap: false,
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#999',
								fontSize: '18px'
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: 'dotted',
								color: '#0da1ea'
							}
						}
					},
					series: [{
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						type: 'line',
						areaStyle: {},
						smooth: true,
						label: {
							normal: {
								show: true,
								position: 'top',
								color: "#fff",
								fontSize: "10px"
							}
						},
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
										color: 'rgba(81,243,255,1)' // 0% 处的颜色
									}, {
										offset: 1,
										color: 'rgba(81,243,255,0.5)' // 100% 处的颜色
									}],
									global: false // 缺省为 false
								}
							}
						}

					}]
				})
			},
			bookTime() {
				// 基于准备好的dom，初始化echarts实例
				let myChart3 = this.$echarts.init(document.getElementById('bookTime'));
				// 绘制图表
				myChart3.setOption({
					title: {
						text: '各时间段借还册数',
						x: 'center',
						textStyle: {
							color: "#fff"
						}
					},
					textStyle: {
						color: '#ccc', // 图例文字颜色,
						fontSize: 18
					},
					xAxis: {
						boundaryGap: false,
						type: 'category',
						axisLine: {
							lineStyle: {
								color: '#eee',
							}
						},
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#999',
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: 'dotted',
								color: '#0da1ea'
							}
						}
					},
					legend: {
						show: true,
						icon: 'rect',
						padding: 36,
						textStyle: {
							color: '#fff',
							fontSize: 12,
						},
						data: [{
							name: '借书册数',
							color: ''
						}, {
							name: '还书册数'
						}]
					},
					series: [{
							name: "借书册数",
							data: [820, 932, 901, 934, 1290, 1330, 1320],
							type: 'line',
							areaStyle: {},
							smooth: true,
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
											color: 'rgba(192,106,106,1)' // 0% 处的颜色
										}, {
											offset: 1,
											color: 'rgba(232,123,113,0.5)' // 100% 处的颜色
										}],
										global: false // 缺省为 false
									}
								}
							}
						},
						{
							name: "还书册数",
							data: [754, 999, 111, 444, 1111, 1555, 1320],
							type: 'line',
							areaStyle: {},
							smooth: true,
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
											color: 'rgba(159,243,68,1)' // 0% 处的颜色
										}, {
											offset: 1,
											color: 'rgba(159,243,68,0.5)' // 100% 处的颜色
										}],
										global: false // 缺省为 false
									}
								}
							}
						}
					]
				})
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
		padding: 0px 10px;
	}

	.el-tabs__item {
		color: #fff;
	}

	#home_app .left_one .topList {
		margin: -20px 0px 10px -273px;
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

	#home_app .el-tabs__item {
		font-size: 10px !important;
		width: 60px;
		/* word-wrap: break-all; */
		white-space: pre-line;
		padding: 0px !important;
		height: auto;
		margin-top: -10px;
		/* margin-bottom: -10px; */
	}

	#home_app .mothList {
		width: 100%;
		/* margin-left: 10px;
		padding-right: 20px; */
	}

	#home_app .mothList .mothList_son1 {
		margin-top: 10px;
		font-size: 14px;
		font-weight: 400;
		color: #eee;
		white-space: nowrap;
	}

	#home_app .mothList .left {
		/* position: absolute;
		left: 0px; */
		width: 100%;
	}

	#home_app .mothList .center {
		/* position: absolute;
		left: 0px;
		margin-top: 10px; */
		width: auto;
		/* display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column; */
	}

	#home_app .mothList .right {
		/* z-index: 100;
		text-align: right;
		position: absolute;
		right: 0px; */
		width: 100%;
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

	#home_app .leftNew {
		margin: 0px 0px 10px;
	}

	#home_app .leftNew div {
		/* border: 1px solid #0c3495; */
		padding: 5px 0px;
		/* background-color: rgba(5, 79, 245, 0.2); */
	}

	#home_app .leftNew .el-tabs__header {
		margin: -35px 0 -30px;
	}
	
	#home_app .leftNew .el-tabs__item.is-active {
		border: 1px solid #0c3495;
		color: #fff;
		font-size: 22px;
		background-color: rgba(5, 79, 245, 0.2);
	}
	#home_app .leftNew  .el-tabs__active-bar {
		background-color: rgba(0,0,0,0);
	}
	#home_app .leftNew  .bookimg {
		 z-index: 100;
		 width: 100%;
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

	#home_app .home_center .tableList {
		margin: -10px 0px 25px;

	}

	#home_app .home_center .tableList div {
		color: #eee;
	}

	#home_app .home_center #pTime {
		height: 330px;

	}

	#home_app .home_center #bookTime {
		height: 330px;

	}

	#home_app .home_rigth {
		margin-right: 10px;
	}

	#home_app .home_rigth .topList_rigth {
		/* margin: -20px 0px 10px -285px; */
		margin-top: -20px;
		color: #eee;
		font-size: 22px;
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
		font-size: 14px;
		margin-top: 10px;
	}

	#home_app .home_rigth .hotKey {
		width: 360px;
	}

	/* #home_app  .home_rigth .topList_rigth .el-col {
		justify-content: space-between;
	} */
</style>

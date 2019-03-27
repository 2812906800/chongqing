<template>
	<div id="home_app">
		<!-- home的数据 -->
		<el-row class="one">
			<el-col :span="6">
				<div class="home_left">
					<el-row v-for="(booknumber,index) in todayData" v-if="index<1" class="left_one">
						<el-col :span="8" class="left_one1">
							<div>
								<div>今日借/还书人次</div>
								<div>
									<span class="left_one_one1">{{booknumber.borrow}} / </span>
									<span class="left_one_one2">{{booknumber.repay}}</span>
								</div>
								<div>
									<p>公安专业</p>
									<p>今日借/还书人次</p>
								</div>
								<div>
									<span class="left_one_two1">{{booknumber.majorborrow}} / </span>
									<span class="left_one_two2">{{booknumber.majorrepay}}</span>
								</div>
							</div>
						</el-col>
						<el-col :span="8">
							<div id="jhNum" style="width: 135px; height: 135px;"></div>
							<el-row>
								<el-col :span="24">
									<div class="left_one_two">
										公安专业借书册次占比
									</div>
								</el-col>
							</el-row>
						</el-col>
						<el-col :span="8" class="left_one1">
							<div class="">
								<div>今日借/还书册次</div>
								<div>
									<span class="left_one_one1">{{booknumber.borrowbook}} / </span>
									<span class="left_one_one2">{{booknumber.repaybook}}</span>
								</div>
								<div>
									<p>公安专业</p>
									<p>今日借/还书册次</p>
								</div>
								<div>
									<span class="left_one_two1">{{booknumber.majorborrowbook}} / </span>
									<span class="left_one_two2">{{booknumber.majorrepaybook}}</span>
								</div>
							</div>
						</el-col>
						<span class="son1"></span>
						<span class="son2"></span>
						<span class="son3"></span>
						<span class="son4"></span>
						<img class="lineleft1" src="../img/lineLeft.png" />
						<img class="lineleft2" src="../img/lineLeft.png" />
						<!-- <el-row>
							<el-col :span="24" class='lineleft1'>
								<img src="../img/lineLeft.png" />
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24" class='lineleft2'>
								<img src="../img/lineLeft.png" />
							</el-col>
						</el-row> -->
					</el-row>
					<el-row class="left_one left_two">
						<div class="left_two_son">
							<el-row class='topList'>
								<el-col class="topListson" :span="24">
									<img src="../img/monthList.png" />
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">
									<el-tabs v-model="activeName" class='mothList'>
										<el-tab-pane label="部门" name="second1">
											<el-row>
												<el-col :span="1">
													<div>
														<img  src="../img/tops.png" />
													</div>
												</el-col>
												<el-col :span="23">
													<div>
														<el-row v-for="(item,index) in booklist" v-if="index<6">
															<el-col :span="24">
																<div class="mothList_son1">
																	<span class="left"><span>{{item.name}}</span></span>
																	<span class="center"><img src="../img/line.png" /></span>
																	<span class="right">{{item.number}}</span>
																</div>
															</el-col>
														</el-row>
													</div>
												</el-col>
											</el-row>
										</el-tab-pane>
										<el-tab-pane label="读者" name="second2">
											<el-row>
												<el-col :span="1">
													<div>
														<img  src="../img/tops.png" />
													</div>
												</el-col>
												<el-col :span="23">
													<div>
														<el-row v-for="(item,index) in booklist" v-if="index<6">
															<el-col :span="24">
																<div class="mothList_son1">
																	<span class="left"><span>{{item.name}}</span></span>
																	<span class="center"><img src="../img/line.png" /></span>
																	<span class="right">{{item.number}}</span>
																</div>
															</el-col>
														</el-row>
													</div>
												</el-col>
											</el-row>
										</el-tab-pane>
										<el-tab-pane label="图书" name="second3">
											<el-row>
												<el-col :span="1">
													<div>
														<img  src="../img/tops.png" />
													</div>
												</el-col>
												<el-col :span="23">
													<div>
														<el-row v-for="(item,index) in booklist" v-if="index<6">
															<el-col :span="24">
																<div class="mothList_son1">
																	<span class="left"><span>《{{item.name}}》</span></span>
																	<span class="center"><img src="../img/line.png" /></span>
																	<span class="right">{{item.number}}</span>
																</div>
															</el-col>
														</el-row>
													</div>
												</el-col>
											</el-row>
										</el-tab-pane>
										<el-tab-pane label="图书类别" name="second4">
											<el-row>
												<el-col :span="1">
													<div>
														<img  src="../img/tops.png" />
													</div>
												</el-col>
												<el-col :span="23">
													<div>
														<el-row v-for="(item,index) in booklist" v-if="index<6">
															<el-col :span="24">
																<div class="mothList_son1">
																	<span class="left"><span>{{item.name}}</span></span>
																	<span class="center"><img src="../img/line.png" /></span>
																	<span class="right">{{item.number}}</span>
																</div>
															</el-col>
														</el-row>
													</div>
												</el-col>
											</el-row>
										</el-tab-pane>
										<el-tab-pane label="公安专业图书" class="el-tabs__item_active2" name="second5">
											<el-row>
												<el-col :span="1">
													<div>
														<img  src="../img/tops.png" />
													</div>
												</el-col>
												<el-col :span="23">
													<div>
														<el-row v-for="(item,index) in booklist" v-if="index<6">
															<el-col :span="24">
																<div class="mothList_son1">
																	<span class="left"><span>《{{item.name}}》</span></span>
																	<span class="center"><img src="../img/line.png" /></span>
																	<span class="right">{{item.number}}</span>
																</div>
															</el-col>
														</el-row>
													</div>
												</el-col>
											</el-row>
										</el-tab-pane>
										<el-tab-pane label="公安专业图书类别" class="el-tabs__item_active2" name="second6">
											<el-row>
												<el-col :span="1">
													<div>
														<img  src="../img/tops.png" />
													</div>
												</el-col>
												<el-col :span="23">
													<div>
														<el-row v-for="(item,index) in booklist" v-if="index<6">
															<el-col :span="24">
																<div class="mothList_son1">
																	<span class="left"><span>{{item.name}}</span></span>
																	<span class="center"><img src="../img/line.png" /></span>
																	<span class="right">{{item.number}}</span>
																</div>
															</el-col>
														</el-row>
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
							<img class='lineleft3' src="../img/lineLeft.png" />
							<img class='lineleft4' src="../img/lineLeft.png" />

						</div>
					</el-row>
					<el-row class="left_one left_two">
						<div class="left_two_son">
							<el-row class='leftNew'>
								<!-- <el-row class='topList'> -->
								<el-col :span="24">
									<el-tabs v-model="activeName1" class='show2'>
										<el-tab-pane label="新书推荐" name="three1">
											<el-row>
												<el-col :span="24">
													<el-carousel :interval="4000" type="card" height="180px">
														<el-carousel-item v-for="(item,index) in newbooklist" v-if="index<5" :key="item">
															<img :src="item.src" />
														</el-carousel-item>
													</el-carousel>
													<!-- <img class="bookimg" :src="newbook[0].src" /> -->
												</el-col>
											</el-row>
										</el-tab-pane>
										<el-tab-pane label="专家推荐" name="three2">
											<el-row>
												<el-col :span="24">
													<el-carousel :interval="4000" type="card" height="180px">
														<el-carousel-item v-for="(item,index) in expertsbooklist" v-if="index<5" :key="item">
															<img :src="item.src" />
														</el-carousel-item>
													</el-carousel>
													<!-- <img class="bookimg" :src="newbook[1].src" /> -->
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
							<img class='lineleft5' src="../img/lineLeft.png" />
							<img class='lineleft6' src="../img/lineLeft.png" />

						</div>
					</el-row>

					<!-- 	<el-row>
						<el-col :span="24" class='lineleft3'>
							<img src="../img/lineLeft.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='lineleft4'>
							<img src="../img/lineLeft.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='lineleft5'>
							<img src="../img/lineLeft.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='lineleft6'>
							<img src="../img/lineLeft.png" />
						</el-col>
					</el-row> -->
				</div>
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
										<div class="center_one_son1">{{topNumber[0].peoplenum}}</div>
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
										<div class="center_one_son2">{{topNumber[0].booknum}}</div>
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
										<div class="center_one_son3">{{topNumber[0].allnum}}</div>
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
							<el-row v-for="(item,index) in tablelist" v-if="index<2" class="tableList">
								<el-col :span="4">
									{{item.name}}
								</el-col>
								<el-col :span="4">
									{{item.pNum}}
								</el-col>
								<el-col :span="4">
									{{item.bookNum}}
								</el-col>
								<el-col :span="4">
									{{item.claasNum}}
								</el-col>
								<el-col :span="4">
									{{item.newNum}}
								</el-col>
								<el-col :span="4">
									{{item.avgNum}}
								</el-col>
							</el-row>
							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>
							<img class='linecenter1' src="../img/lineCenter3.png" />
							<img class='linecenter2' src="../img/lineCenter.png" />

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
					<!-- <el-row>
						<el-col :span="24" class='linecenter1'>
							<img src="../img/lineCenter.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='linecenter2'>
							<img src="../img/lineCenter3.png" />
						</el-col>
					</el-row> -->
				</div>
			</el-col>
			<el-col :span="5">
				<div class="home_rigth">
					<el-row class="left_one left_two">
						<div>
							<el-row class='topList_rigth'>
								<el-col :span="8" class='topList_one_one'>
									<img src="../img/activeShow.png" />
								</el-col>
								<el-col :span="8">

								</el-col>

								<el-col :span="8">

								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24" class='right_one_two'>
									<el-tabs v-model="activeName2" class='show3'>
										<el-tab-pane label="视频 " name="five1">
											<el-row>
												<el-col :span="24">
													<!-- <video :src="shipingsrc[0].src">
														您的浏览器不支持 video 标签。
													</video> -->
													<img :src="shipingsrc[0].src" />
												</el-col>
											</el-row>
										</el-tab-pane>
										<el-tab-pane label="/ 公告" name="five2">
											<el-row>
												<el-col :span="24">

													<img :src="shipingsrc[1].src" />
												</el-col>
											</el-row>
											<!-- <el-row>
												<el-col :span="8" v-for="item in activeList" class='right_two_son'>
													<img :src="item.src" />
												</el-col>
											</el-row> -->
										</el-tab-pane>
									</el-tabs>
								</el-col>
							</el-row>


							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>
							<img class='linerigth1' src="../img/lineRight2.png" />
							<img class='linerigth2' src="../img/lineRight2.png" />

						</div>
					</el-row>
					<el-row class="left_one left_two">
						<div class='right_two'>
							<el-row class='topList_rigth'>
								<el-col :span="8" class='topList_one_one'>
									<img src="../img/积分排行.png" />
								</el-col>
								<el-col :span="8">

								</el-col>

								<el-col :span="8">

								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24" class='right_one_two'>
									<el-tabs v-model="activeName3" class='show4'>
										<el-tab-pane label="学生 " name="six1">
											<el-row>
												<el-col :span="24">
													<div class="jifenlist">
														<el-row>
															<el-col :span="4">
																<div class="grid-content bg-purple">
																	<img style="width: 35px; height: 155px;" src="../img/numlist.png" />
																</div>
															</el-col>
															<el-col :span="20">
																<div>
																	<el-row class="jifenlist_son" v-for="(item,index) in jifenList" v-if="index<5">
																		<el-col :span="8">
																			<div class="grid-content bg-purple">{{item.name}}</div>
																		</el-col>
																		<el-col :span="8">
																			<div class="grid-content bg-purple-light">{{item.num}}</div>
																		</el-col>
																		<el-col :span="8">
																			<div class="grid-content bg-purple">{{item.jibie}}</div>
																		</el-col>
																	</el-row>
																</div>
															</el-col>
														</el-row>

														<!-- <div>
															
														</div> -->
													</div>
													<!-- <div style="height: 120px;">
														<el-steps direction="vertical" :active="1">
															<el-step title="张三"></el-step>
															<el-step title="李四"></el-step>
															<el-step title="王小二"></el-step>
															<el-step title="大王"></el-step>
															<el-step title="小王"></el-step>
														</el-steps>
													</div>
 -->
												</el-col>
											</el-row>
										</el-tab-pane>
										<el-tab-pane label="/ 老师" name="six2">
											<el-row>
												<el-col :span="24">
													<div class="jifenlist">
														<el-row>
															<el-col :span="4">
																<div class="grid-content bg-purple">
																	<img style="width: 35px; height: 155px;" src="../img/numlist.png" />
																</div>
															</el-col>
															<el-col :span="20">
																<div>
																	<el-row class="jifenlist_son" v-for="(item,index) in jifenList" v-if="index<5">
																		<el-col :span="8">
																			<div class="grid-content bg-purple">{{item.name}}</div>
																		</el-col>
																		<el-col :span="8">
																			<div class="grid-content bg-purple-light">{{item.num}}</div>
																		</el-col>
																		<el-col :span="8">
																			<div class="grid-content bg-purple">{{item.jibie}}</div>
																		</el-col>
																	</el-row>
																</div>
															</el-col>
														</el-row>
													</div>

												</el-col>
											</el-row>

										</el-tab-pane>
									</el-tabs>
								</el-col>
							</el-row>
							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>
							<img class='linerigth3' src="../img/lineRight2.png" />
							<img class='linerigth4' src="../img/lineRight2.png" />

						</div>
					</el-row>
					<el-row class="left_one left_two">
						<div>
							<el-row class='topList_rigth'>
								<el-col :span="10">
									<img src="../img/timeouttitle.png" />
								</el-col>
								<el-col :span="14">

								</el-col>


							</el-row>
							<el-row v-for="(item,index) in timeOutList" v-if="index<5" style="width: 350px;">
								<el-col :span="24" class='right_three_son'>
									<p>
										<!-- <img src="../img/sjx.png" />&nbsp; --><img src="../img/sjxIcon.png" /> {{item.info}}即将到期，请按时归还。</p>
								</el-col>
							</el-row>


							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>
							<img class='linerigth5' src="../img/lineRight2.png" />
							<img class='linerigth6' src="../img/lineRight2.png" />

						</div>
					</el-row>
					<el-row class="left_one left_two">
						<div>
							<el-row class='topList_rigth'>
								<el-col :span="8">
									<img src="../img/hotkeytitle.png" />
								</el-col>
								<el-col :span="8">

								</el-col>
								<el-col :span="8">

								</el-col>

							</el-row>
							<el-row>
								<el-col :span="24" class='hotKey'>
									<bull />
								</el-col>

							</el-row>


							<span class="son1"></span>
							<span class="son2"></span>
							<span class="son3"></span>
							<span class="son4"></span>
							<img class='linerigth7' src="../img/lineRight2.png" />
							<img class='linerigth8' src="../img/lineRight2.png" />

						</div>
					</el-row>
					<!-- <el-row>
						<el-col :span="24" class='linerigth1'>
							<img src="../img/lineRight2.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='linerigth2'>
							<img src="../img/lineRight2.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='linerigth3'>
							<img src="../img/lineRight2.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='linerigth4'>
							<img src="../img/lineRight2.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='linerigth5'>
							<img src="../img/lineRight2.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='linerigth6'>
							<img src="../img/lineRight2.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='linerigth7'>
							<img class='linerigth7' src="../img/lineRight2.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class='linerigth8'>
							<img src="../img/lineRight2.png" />
						</el-col>
					</el-row> -->

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
	import 'url-search-params-polyfill';
	import echarts from 'echarts';
	import bull from '@/components/bull';
	// import require form '';
	export default {
		name: 'home',
		data: function() {
			return {
				todayData: [{ //今日借书人次占比数据
					borrow: 680,
					repay: 230,
					majorborrow: 129,
					majorrepay: 60,
					borrowbook: 1680,
					repaybook: 2230,
					majorborrowbook: 539,
					majorrepaybook: 180
				}],
				activeName: 'second1', //及以下总共6个变量为月度借阅排行轮播效果的数据
				activeName1: 'three1',
				activeName2: 'five1',
				activeName3: 'six1',
				index: 1,
				index2: 1,
				index3: 1,
				index4: 1,
				booklist: [{ //月度借阅排行轮播每个页面的列表数据
					name: "1",
					number: 1
				}, {
					
					name: "2",
					number: 2
				}, {
					
					name: "3",
					number: 333
				}, {
					
					name: "4",
					number: 4
				}, {
					
					name: "55",
					number: 5
				}, {
					
					name: "6",
					number: 6
				}],
// 				newbook: [{ //新书推荐和专家推荐的图片地址
// 					src: require("../img/newbook.png")
// 				}, {
// 					src: require("../img/newbook.png")
// 				}],
				newbooklist:[{//新书推荐的图片地址
					src: require("../img/newbook1.png")
				},{
					src: require("../img/newbook1.png")
				},{
					src: require("../img/newbook1.png")
				},{
					src: require("../img/newbook1.png")
				},{
					src: require("../img/newbook1.png")
				}],
				expertsbooklist:[{//专家推荐的图片地址
					src: require("../img/newbook1.png")
				},{
					src: require("../img/newbook1.png")
				},{
					src: require("../img/newbook1.png")
				},{
					src: require("../img/newbook1.png")
				},{
					src: require("../img/newbook1.png")
				}],
				topNumber: [{ //中间最上面图书馆总数据
					peoplenum: 789452,
					booknum: 154781,
					allnum: 48721
				}],
				tablelist: [{ //中间表格的数据
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
				}],
				shipingsrc: [{ //右边最上面的活动展示模块的路径数据
					src: require("../img/vd.png")
				}, {
					src: require("../img/vd.png")
				}],
				activeList: [{ //右边活动公告模块的图片路径
					src: require("../img/active1.png")
				}, {
					src: require("../img/active2.png")
				}, {
					src: require("../img/active3.png")
				}],
				timeOutList: [{
					info: "张三有《天下美食》等3本书"
				}, {
					info: "李四有《天下美食》等2本书"
				}, {
					info: "王二有《天下美食》等1本书"
				}, {
					info: "大王有《天下美食》等5本书"
				}, {
					info: "晓红有《天下美食》等2本书"
				}],
				timePeople: [{ //中间各时间段入馆人次模块的数据
					name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'eee'],
					data: [820, 932, 901, 934, 1290, 1330, 1320, 324]
				}],
				timeBook: [{ //中间底部各时间段借还册数模块的数据
					name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					data1: [520, 932, 901, 334, 1290, 1330, 320],
					data2: [0, 432, 771, 534, 290, 630, 1620]
				}],
				jifenList: [{
					name: "张三",
					num: "10000分",
					jibie: "等级一"
				}, {
					name: "李四",
					num: "8000分",
					jibie: "等级二"
				}, {
					name: "王小二",
					num: "6000分",
					jibie: "等级三"
				}, {
					name: "大王",
					num: "4000分",
					jibie: "等级四"
				}, {
					name: "小王",
					num: "2000分",
					jibie: "等级五"
				}]
			}
		},
		mounted() {
			this.jhNum();
			this.peopleTime();
			this.bookTime();
			this.show1();
			this.show2();
			this.show3();
			this.show4();

		},
		methods: {

			show1() { //左边中部的阅读排行模块轮播效果的方法
				var _this = this;
				var mothtop = document.querySelector(".mothList");
				clearInterval(t1);
				var t1 = setInterval(function() {
					// console.log(_this.index)
					// console.log(mothtop);
					mothtop.click();
					_this.activeName = "second" + _this.index.toString();
					// console.log(_this.activeName)
					if (_this.index >= 6) {
						return _this.index = 1;
					}
					_this.index++;
				}, 2000)
				// clearInterval(t1);
			},
			show2() { //左边最下面新书推荐/专家推荐模块的轮播效果方法
				var _this = this;
				var mothtop2 = document.querySelector(".show2");
				clearInterval(t2);
				var t2 = setInterval(function() {
					// console.log(_this.index2)
					// console.log(mothtop2);
					mothtop2.click();
					_this.activeName1 = "three" + _this.index2.toString();
					// console.log(_this.activeName1)
					if (_this.index2 >= 2) {
						return _this.index2 = 1;
					}
					_this.index2++;
				}, 10000)
				// 
			},
			show3() { //右边的视频/图片模块的轮播效果函数
				var _this = this;
				var mothtop3 = document.querySelector(".show3");
				clearInterval(t3);
				var t3 = setInterval(function() {
					// console.log(_this.index3)
					// console.log(mothtop3);
					mothtop3.click();
					_this.activeName2 = "five" + _this.index3.toString();
					// console.log(_this.activeName2)
					if (_this.index3 >= 2) {
						return _this.index3 = 1;
					}
					_this.index3++;
				}, 3000)
			},
			show4() { //右边的积分排行模块的轮播效果函数
				var _this = this;

				var mothtop4 = document.querySelector(".show4");
				clearInterval(t4);
				var t4 = setInterval(function() {
					// console.log(_this.index4)
					mothtop4.click();
					_this.activeName3 = "six" + _this.index4.toString();
					// console.log(_this.activeName3)
					if (_this.index4 >= 2) {
						return _this.index4 = 1;
					}
					_this.index4++;
				}, 3000)
			},
			jhNum() { //首页左边最上面今日借书人次占比，模块的echarts图形canvas，数据由上面的todayData里面来的
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
							hoverAnimation: false,
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
								name: (this.todayData[0].majorborrowbook / this.todayData[0].borrowbook).toFixed(4) * 100 + "%",
								itemStyle: {
									color: 'rgb(111,111,111,0.9)'
								}

							}]


						},
						{
							name: '访问来源',
							type: 'pie',
							hoverAnimation: false,
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
									value: this.todayData[0].majorborrowbook,
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
							hoverAnimation: false,
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
									value: this.todayData[0].borrowbook,
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
								}
								// 								{
								// 									value: this.todayData[0].borrowbook-this.todayData[0].majorborrowbook,
								// 									itemStyle: {
								// 										color: {
								// 											type: 'linear',
								// 											x: 0,
								// 											y: 0,
								// 											x2: 0,
								// 											y2: 1,
								// 											colorStops: [{
								// 												offset: 0,
								// 												color: 'rgba(255,255,255,0)' // 0% 处的颜色
								// 											}, {
								// 												offset: 1,
								// 												color: 'rgba(255,255,255,0)' // 100% 处的颜色
								// 											}],
								// 											global: false // 缺省为 false
								// 										}
								// 									}
								// 								}

							]
						}
					]
				});
			},

			peopleTime() { //中间的中部的各时间段入馆人次模块的echarts图形，数据由data中的timePeople来的
				// 基于准备好的dom，初始化echarts实例
				let myChart2 = this.$echarts.init(document.getElementById('pTime'));
				// 绘制图表
				myChart2.setOption({
					title: {
						text: '各时间段入馆人次',
						x: 'center',
						textStyle: {
							color: "#fff",
							fontWeight:500
						}
					},
					// 					grid: {
					// 						// x1:-30,
					// 						// y:0,
					// 						containLabel: true
					// 					},

					textStyle: {
						color: '#ccc', // 图例文字颜色,
						fontSize: 18,
						fontWeight:400
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
						data: this.timePeople[0].name
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
						data: this.timePeople[0].data,
						type: 'line',
						areaStyle: {},
						// symbol: 'none',
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
			bookTime() { //中间的底部的各时间段借还模块的echarts图形，数据由data中的timeBook来的
				// 基于准备好的dom，初始化echarts实例
				let myChart3 = this.$echarts.init(document.getElementById('bookTime'));
				// 绘制图表
				myChart3.setOption({
					title: {
						text: '各时间段借还册数',
						x: 'center',
						y: -6,
						// padding:-20,
						textStyle: {
							color: "#fff",
							fontWeight:500
						}
					},
					textStyle: {
						color: '#ccc', // 图例文字颜色,
						fontSize: 18,
						fontWeight:400
					},
					xAxis: {
						boundaryGap: false,
						type: 'category',
						axisLine: {
							lineStyle: {
								color: '#eee',
							}
						},
						data: this.timeBook[0].name
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
						padding: 30,
						textStyle: {
							color: '#fff',
							fontSize: 10
						},
						data: [{
							name: '借书册数'
							// color: '#ccc'
						}, {
							name: '还书册数'
						}]
					},
					series: [{
							name: "借书册数",
							data: this.timeBook[0].data1,
							type: 'line',
							areaStyle: {},
							smooth: true,
							label: {
								normal: {
									show: true,
									position: 'top',
									color: "#fff",
									fontSize: 10
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
							data: this.timeBook[0].data2,
							type: 'line',
							areaStyle: {},
							smooth: true,
							label: {
								normal: {
									show: true,
									position: 'top',
									color: "#fff",
									fontSize: "8px"
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
					// color:['#eee']
				})
			}
		},
		components: {
			bull
		}
	}
</script>

<style>
	#home_app .one {
		width: 1895px;
		height: 960px;
		overflow: hidden;
	}

	#home_app .el-col {
		height: 100%;
	}

	#home_app .one .el-row {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#home_app .home_left {
		position: relative;
	}

	#home_app .left_one {
		border: 1px solid #093b94;
		background-color: rgba(1, 1, 1, 0.2);
		padding: 28px 0px 10px;
		position: relative;
		margin-left: 10px;
		margin-bottom: 15px;
		/* margin-top: -10px; */

	}

	#home_app .left_one .son1 {
		position: absolute;
		left: -1px;
		top: -1px;
		padding: 5px;
		border-style: solid;
		border-color: #00f7fa;
		border-width: 1px 0 0 1px;
		/* z-index: 200000000; */
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
		padding: 0px 15px;
	}

	/* .el-tabs__item {
		color: #fff !important;
	} */

	#home_app .left_one .topList {
		margin: -28px 0px 10px -250px;
		position: relative;
	}

	#home_app .left_one .topListson {
		position: absolute;
		top: 15px;
		left: 0px;
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
		font-size: 12px !important;
		/* width: 60px; */
		/* word-wrap: break-all; */
		/* white-space: pre-line; */
		padding: 0px !important;

		height: auto;
		/* padding: -10px 20px 0px !important; */
		color: #f2f2f2;
		/* margin-bottom: -10px; */
	}

	#home_app .mothList .el-tabs__item {
		margin-left: 25px;
	}

	#home_app #tab-second6 {
		/* margin-left: 30px; */
	}

	#home_app #tab-second5 {
		/* margin-left: 12px; */
	}

	.el-tabs__nav-wrap::after {
		background-color: rgba(0, 0, 0, 0);
		/* width: auto; */
	}

	#home_app .mothList {
		width: 100%;
		/* margin-left: 10px;
		padding-right: 20px; */
		margin-bottom: 0px;
		margin-top: 40px;
	}
	#home_app .mothList .el-tabs__content {
		padding-left: 20px;
	}
	#home_app .mothList .el-tabs__nav-scroll {
		/* padding-left: 12px; */
		margin-top: 5px;
	}

	#home_app .mothList .el-tabs__active-bar {
		/* left: -20px;
		width: 80px !important; */
		/* margin-left: 20px; */
		height: 0px !important;
		width: 0px !important;
		/* border-bottom: 1px solid ##409eff; */
	}

	#home_app .mothList .el-tabs__item.is-active {
		/* left: 20px; */
		border-bottom: 1px solid #409eff;
	}

	#home_app .mothList .mothList_son1 {
		margin: 3px 0px 7px;
		font-size: 14px;
		font-weight: 400;
		color: #eee;
		display: flex;
		width: auto;
		font-size: 16px;
		font-weight: 500;
		padding: 0px 20px 0px 15px;
		/* position: relative; */

	}

	#home_app .mothList .left {
		/* position: absolute;
		left: 0px;
		top: 0px; */
		float: left;
		white-space: nowrap;
		/* width: 100%; */
		z-index: 10000;
		margin-top: 4px;
		margin-right: 5px;
		position: relative;
	}

	#home_app .mothList .left img {
		/* padding-top: 3px; */
		/* margin-top: -3px; */
		/* margin-right: 3px; */
		position: absolute;
		top: 0px;
		left: 0px;
	}

	#home_app .mothList .left span {
		/* margin-bottom: 2px; */
		/* margin-left: 25px; */
	}

	#home_app .mothList .center {
		/* 	position: absolute;
		left: 0px;
		top: 0px; */
		/* margin-top: 10px; */
		width: 100%;
		overflow: hidden;
		/* float: left; */
		/* display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column; */
	}

	#home_app .mothList .center img {
		width: 400px;
	}

	#home_app .mothList .right {
		/* z-index: 100;
		text-align: right; */
		/* position: absolute;
		right: 0px;
		top: 0px; */
		float: right;
		margin-left: 8px;
		padding-top: 3px;
		z-index: 10000;
		/* width: 100%; */
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
		font-size: 15px;
		font-weight: 500;
	}

	#home_app .leftNew {
		margin: 0px 0px -20px;
	}
	#home_app .leftNew .el-carousel__indicators--outside button {
		display: none !important;
	}

	#home_app .leftNew div {
		/* border: 1px solid #0c3495; */
		padding: 5px 0px 3px;
		/* background-color: rgba(5, 79, 245, 0.2); */
	}

	#home_app .leftNew .el-carousel__item:nth-of-type(1) {
		/* background: url(../img/newbook1.png); */
		background-color: rgba(0, 0, 0, 0);
	}

	#home_app .leftNew .el-carousel__item:nth-of-type(2) {
		/* background: url(../img/newbook1.png); */
		background-color: rgba(0, 0, 0, 0);
	}

	#home_app .leftNew .el-carousel__item:nth-of-type(3) {
		/* background: url(../img/newbook1.png); */
		background-color: rgba(0, 0, 0, 0);
	}

	#home_app .leftNew .el-carousel__item:nth-of-type(4) {
		/* background: url(../img/newbook1.png); */
		background-color: rgba(0, 0, 0, 0);
	}

	#home_app .leftNew .el-carousel__item:nth-of-type(5) {
		/* background: url(../img/newbook1.png); */
		background-color: rgba(0, 0, 0, 0) !important;
	}

	#home_app .leftNew .el-carousel--card {
		/* z-index: 3; */
		/* width: 200px; */
		margin-top: -20px;
	}

	#home_app .leftNew .el-carousel__mask {
		/* z-index: 1; */
		/* display: block !important; */
	}

	#home_app .leftNew .el-tabs__header {
		margin: -45px 0 -15px;
	}

	#home_app .leftNew .el-tabs__item {
		width: 100px;
		font-size: 18px !important;
		font-weight: 300;
	}

	#home_app .leftNew .el-tabs__item.is-active {
		border: 1px solid #0c3495;
		color: #fff;
		/* padding: 2px 0px !important; */
		background-color: rgba(5, 79, 245, 0.2);
	}

	#home_app .leftNew .el-tabs__active-bar {
		background-color: rgba(0, 0, 0, 0);
	}

	#home_app .leftNew .bookimg {
		z-index: 100;
		width: 100%;
	}

	#home_app .lineleft1 {
		position: absolute;
		/* bottom: 27px; */
		top: -1px;
		left: 10px;
	}

	#home_app .lineleft2 {
		position: absolute;
		bottom: -1px;
		left: 10px;
	}

	#home_app .lineleft3 {
		position: absolute;
		top: -1px;
		left: 10px;
	}

	#home_app .lineleft4 {
		position: absolute;
		bottom: -1px;
		left: 10px;
	}

	#home_app .lineleft5 {
		position: absolute;
		top: -1px;
		left: 10px;
	}

	#home_app .lineleft6 {
		position: absolute;
		bottom: -1px;
		left: 10px;
	}

	#home_app .home_center {
		background-color: rgba(1, 1, 1, 0);
		height: 950px;
		padding: 30px;
		position: relative;
	}

	#home_app .home_center .left_one {
		background-color: rgba(0, 0, 0, 0);
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

	#home_app .home_center .left_one {
		border: 1px solid #2463D4;
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
		/* width: 1000px; */

	}

	/* #home_app .home_center #pTime cavas {
		width: 100px;
	}
 */
	#home_app .home_center #bookTime {
		height: 333px;

	}

	#home_app .home_center canvas {
		width: 1130px !important;
		margin: 0 -70px 0 !important;
		/* 	z-index: 2000000;
	overflow: visible !important; */
	}

	#home_app .home_center .linecenter1 {
		position: absolute;
		top: -3px;
		left: 7px;
	}

	#home_app .home_center .linecenter2 {
		position: absolute;
		bottom: -5px;
		left: 7px;
	}

	#home_app .home_center img {
		width: 940px;
	}

	#home_app .home_rigth {
		margin-right: 10px;
		position: relative;
	}

	#home_app .home_rigth .el-tabs__item {
		/* 第一次打包后改的 */
		/* width: 40px; */
	}

	#home_app .home_rigth .topList_rigth {
		/* margin: -20px 0px 10px -285px; */
		margin-top: -20px;
		margin-bottom: -10px;
		color: #eee;
		font-size: 22px;
		font-weight: 600;
		position: relative;
	}

	#home_app .home_rigth .topList_rigth .topList_one_one {
		position: absolute;
		top: 0px;
		left: -5px;
	}

	/* #home_app .home_rigth .right_two .topList_one_one {
		position: absolute;
		top: 0px;
		left: -110px;
	} */

	#home_app .home_rigth .show3 {
		margin-top: 5px;
	}

	#home_app .home_rigth .el-tabs__active-bar {
		background-color: rgba(0, 0, 0, 0);
	}

	#home_app .el-tabs__item.is-active {
		color: #409EFF;
	}

	#home_app .home_rigth .el-tabs__item {
		position: relative;
		right: -240px;
		font-size: 20px !important;
		margin-left: 12px;
	}
	#home_app .home_rigth .right_two {
		width: 100%;
		/* margin-right: 20px; */
	}
	/* #home_app .home_rigth .right_two .el-tabs__item {
		position: relative;
		right: -240px;
	} */
	#home_app .home_rigth .right_one_two img {
		width: 360px;
		height: 210px;
		background-color: cornsilk;
		margin-top: 5px;
	}

	#home_app .home_rigth video {
		width: 360px;
		height: 210px;
		background-color: rgba(0, 0, 0, 0);
		margin-top: 5px;
	}

	#home_app .home_rigth .right_two_son {
		/* padding: 2px; */
	}

	#home_app .home_rigth .right_two_son img {
		width: 116px;
		height: 200px;
		background-color: honeydew;
		margin: 15px 5px 0px 0px;
	}

	#home_app .home_rigth .right_three_son {
		/* justify-content: flex-start; */
		/* margin-left: -100px; */
		font-size: 12px;
		margin: 11px 0px -2px;
		font-weight: 300;
		text-align: left;
	}

	#home_app .home_rigth .hotKey {
		width: 360px;
	}

	#home_app .home_rigth .linerigth1 {
		position: absolute;
		right: 10px;
		top: -1px;
	}

	#home_app .home_rigth .linerigth2 {
		position: absolute;
		right: 11px;
		bottom: -1px;
	}

	#home_app .home_rigth .linerigth3 {
		position: absolute;
		right: 11px;
		top: -1px;
	}

	#home_app .home_rigth .linerigth4 {
		position: absolute;
		right: 11px;
		bottom: -1px;
	}

	#home_app .home_rigth .linerigth5 {
		position: absolute;
		right: 11px;
		top: -1px;
	}

	#home_app .home_rigth .linerigth6 {
		position: absolute;
		right: 11px;
		bottom: -1px;
	}

	#home_app .home_rigth .linerigth7 {
		position: absolute;
		right: 11px;
		top: -1px;
	}

	#home_app .home_rigth .linerigth8 {
		position: absolute;
		right: 11px;
		bottom: -1px;
	}

	#home_app .home_rigth .el-tabs__header {
		margin: 0 -2px 15px;
	}

	/* #home_app .home_rigth .el-step__line {
		background-color: #113da5;
	}

	#home_app .home_rigth .el-step__title {
		color: #eee;
	}

	#home_app .home_rigth .el-step__icon {
		width: 15px;
		height: 15px;
		background-color: #1756ed;
		border-color: #1756ed;
		color: #eee;
	} */
	#home_app .home_rigth .jifenlist {
		display: flex;
		margin-top: -10px;

	}

	#home_app .home_rigth .jifenlist .el-row {
		width: 100%;
	}

	#home_app .home_rigth .jifenlist_son {
		padding: 7px 0px 4px;
		text-align: left;
	}

	/* #home_app  .home_rigth .topList_rigth .el-col {
		justify-content: space-between;
	} */
</style>

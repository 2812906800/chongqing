<template>
	<div id="myheader_app">
		<el-row>
			<el-col :span="7" class="header_left">
				<div class="timer">
					{{weatherData[0].time}}
				</div>
				<div class="date">
					<div>{{weatherData[0].date|mydate}}</div>
					<div>{{list.week}}</div>
				</div>
				<div>
					<div>{{weatherData[0].address}}</div>
					<div>空气质量<span class="kongqizhiliang">{{air}}</span></div>
				</div>
				<img class="myicon" :src="weatherIcon" />
				<div>
					<div><span>今天</span> <span>{{list.type}}</span></div>
					<div>{{list.high}}-{{list.low}}</div>
				</div>
			</el-col>
			<el-col :span="10" class="header_center">
				<img src="../img/myheader.png" />
			</el-col>
			<el-col :span="7" class="header_right">
				您是今天的第 <span v-for="item in topNumder">{{item}}</span> 位读者
			</el-col>
		</el-row>

	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'myheader',
		data: function() {
			return {
				weatherData: [{
					time: "",
					date: new Date(),
					// week: "星期一",
					address: "重庆",
// 					air: "优",
// 					temperatureTop: 15,
// 					temperatureLow: 11,
// 					weather: "多云"
				}],
				list:{},
				air:"",
				// weatherimgList:[require("../img/qing.png"),require("../img/yin.png"),require("../img/xiaoyu.png"),require("../img/duoyun.png"),require("../img/yu.png")],
				weatherIcon:"",
				topNumder: 2589
				// _this:this
			}
		},
		filters: {
			// 			mytime: function(value) {
			// 				// setInterval(function(){
			// 					if (!value) return '';
			// 						console.log(value);
			// 						value= value.getHours()+':'+(Array(2).join('0')+value.getMinutes()).slice(-2)+':'+(Array(2).join('0')+value.getSeconds()).slice(-2);
			// 						
			// 						return value;
			// 						
			// 					
			// 				// },1000);
			// 					
			// 			},
			mydate: function(value) {
				if (!value) return '';
				value = value.getFullYear() + '/' + (Array(2).join('0') + (value.getMonth() + 1)).slice(-2) + '/' + (Array(2).join('0') + value.getDate()).slice(-2);
				return value;
			}
		},
		methods: {
			mytopNumder() {
				var str = this.topNumder.toString();
				var array = str.split('');
				this.topNumder = array;
				// console.log(array)
			},
			mytimes() {
				var _this = this;
				clearInterval(tt1);
				var tt1 = setInterval(function() {
					// if (!_this.weatherData[0].time) return '';
					// console.log('1'.padStart(2, '0'));
					// console.log('1'.padStart(2,'0')); (Array(length).join('0') + num).slice(-length)
					// console.log()
					// console.log(_this.weatherData[0].time);
					_this.weatherData[0].time = new Date().getHours() + ':' + (Array(2).join('0') + new Date().getMinutes()).slice(-2) + ':' + (Array(2).join('0') + new Date().getSeconds()).slice(-2);

					// return _this.weatherData[0].time;


				}, 1000);

			},
			myIcon(){
				// console.log(this)
				
				
			}
		},
		mounted() {
			this.mytopNumder();
			this.mytimes();
			var url="http://t.weather.sojson.com/api/weather/city/101040100";//重庆天气api
			var _this=this;
			axios.get(url, {
					params: {
					}
				})
				.then(function(response) {
					// console.log(response.data.data.forecast[0]);
					// console.log(this);
					_this.list=response.data.data.forecast[0];
					_this.air=response.data.data.quality;
					// console.log(_this.list.date);
					// console.log(_this.list.type);
					switch(_this.list.type){
						
						case "晴": _this.weatherIcon=require("../img/qing.png");
							break;
						case "阴": _this.weatherIcon=require("../img/yin.png");
							break;
						case '小雨': _this.weatherIcon=require("../img/xiaoyu.png");
							break;
						case "多云": _this.weatherIcon=require("../img/duoyun.png");
							break;
						case "雨": _this.weatherIcon=require("../img/yu.png");
							break;
						default:_this.weatherIcon=require("../img/yin.png");
						
					}
					
				})
				.catch(function(error) {
					console.log(error);
				});
				_this.myIcon();
		}
	}
</script>

<style>
	#myheader_app {
		width: 1895px;
		height: 110px;
		/* line-height: 100px; */
		/* position: relative; */
	}

	#myheader_app .el-row {
		height: 100%;
	}

	#myheader_app .header_left {
		/* position: absolute;
		left: 0px;
		top: 0px; */
		/* width: 500px; */
		display: flex;
		justify-content: center;
		align-items: center;
		height: 52px;
		background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
	}

	#myheader_app .header_left .timer {
		font-size: 28px !important;
		color: #bfd7ff;
	}

	#myheader_app .header_left .date div {
		color: #bfd7ff !important;
	}


	#myheader_app .header_left  .myicon {
		width: 40px;
		height: 35px;
		margin-right: 5px;
	}
	#myheader_app .header_left div {
		margin-right: 14px;
		font-size: 12px !important;
		color: #ddd;
	}

	#myheader_app .header_left .kongqizhiliang {
		display: inline-block;
		width: 17px;
		height: 17px;
		background-color: #409519;
		margin-top: 5px;
		margin-bottom: -5px;
	}

	#myheader_app .header_center {
		/* background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.1)); */
		/* width: 100%; */
		height: 100%;
		/* position: absolute;
		background-color: yellow;
		left: 0px;
		top: 0px; */
		position: relative;
	}

	#myheader_app .header_right {
		/* position: absolute;
		right: 0px;
		top: 0px; */
		/* width: 300px; */
		height: 52px;
		background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
		text-align: right;
		font-size: 18px !important;
		padding-right: 20px;
		padding-top: 17px;
		font-size: 12px;
		color: #ccc;

	}

	#myheader_app .header_right span {
		display: inline-block;
		width: 17px;
		height: 17px;
		background-color: #053796;
		color: #00ccf4;
		/* font-size: 14px; */
		margin: 5px 5px -5px;
		padding: 2px 2px 5px;
		font-weight: 900;
		/* font-family: "方正黑体简体"; */
		text-align: center;
	}

	/* #myheader_app img {
		width: 300px;
		height: 50px;
		margin-top: 35px;
	} */
	#myheader_app .username {
		font-size: 40px;
		position: relative;
		top: -13px;
		left: 0px;
		font-weight: 900;
		/* font-family: "宋体"; */
	}
</style>

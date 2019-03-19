<template>
	<div id="myheader_app">
		<el-row>
			<el-col :span="7"  class="header_left">
				<div class="timer">
					16：08：33
				</div>
				<div>
					<div>2019/03/18</div>
					<div>星期一</div>
				</div>
				<div>
					<div>成都</div>
					<div>空气质量<span class="kongqizhiliang">优</span></div>
				</div>
				
				<div>
					<div><span>今天</span><span>多云</span></div>
					<div>17°C-10°C</div>
				</div>
			</el-col>
			<el-col :span="10"  class="header_center">
					<img src="../img/logo.png" />
					<span class="username">大数据智慧墙</span>
			</el-col>
			<el-col :span="7"  class="header_right">
				您是今天的第 <span></span> 位读者
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
	export default {
		name: 'myheader'
	}
</script>

<style>
	#myheader_app {
		width: 100%;
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
		height: 50px;
		background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.3));
	}
	#myheader_app .header_left .timer {
		font-size: 22px !important;
		color: #fff;
	}
	#myheader_app .header_left div {
		margin-right: 20px;
		font-size: 12px !important;
		color: #ccc;
	}
	#myheader_app .header_left 	.kongqizhiliang {
		display: inline-block;
		width: 17px;
		height: 17px;
		background-color: #409519;
		margin-top: 5px;
		margin-bottom: -5px;
		}

	#myheader_app .header_center {
		background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.1));
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
		height: 50px;
		background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.3));
		text-align: right;
		padding-right: 20px;
		padding-top: 20px;
		font-size: 12px;
		color: #ccc;
		
	}
	#myheader_app .header_right span {
		display: inline-block;
		width: 17px;
		height: 17px;
		background-color: #053796;
		color: #053c99;
		margin-top: 5px;
		margin-bottom: -5px;
	}

	#myheader_app img {
		width: 300px;
		height: 50px;
		margin-top: 35px;
	}
	#myheader_app .username {
		font-size: 40px;
		position: relative;
		top: -13px;
		left: 0px;
		font-weight: 900;
		/* font-family: "宋体"; */
	}
</style>

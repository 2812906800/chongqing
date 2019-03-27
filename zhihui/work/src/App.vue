<template>
  <div id="app">
		<myheader/>
   <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

 <script>
import myheader from '@/components/myheader';

export default {
  name: 'App',
	data:function(){
		return {
			
		}
	},
	components:{
		myheader
	},
	mounted(){
		
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
	background: url(./img/bj.png);
	background-color: rgba(1,1,1,0.2);
	height: 1066px;
	width: 1895px;
  /* margin-top: 60px; */
	overflow: hidden;
}
* {
	margin: 0;
	padding: 0;
	font-family: '方正黑体简体';
	}
	body {
		background-color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

<template>
  <div id="app">
		<myheader/>
   <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

 <script>
import myheader from '@/components/myheader'
export default {
  name: 'App',
	components:{
		myheader
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
	background: url(img/bj.png);
	background-color: rgba(1,1,1,0.2);
	height: 1066px;
  /* margin-top: 60px; */
}
* {
	margin: 0;
	padding: 0;
	/* overflow: hidden; */
	font-family: '方正黑体简体';
	}
</style>

<template>
	<div class="tagcloud">
		
	</div>
</template>

<script>
	import "../assets/Bubble";
	import "../assets/jquery-1.11.2.min.js";
	export default {
		name:'bull',
		data:function (){
			return {
				cloudData:[]
			}
		},
		mounted(){
			this.mycloud();
		},
		methods:{
			mycloud(){
				$(function (){
				    getData()
				    /*3D标签云*/
				    tagcloud({
				        selector: ".tagcloud", //元素选择器
				        fontsize: 16, //基本字体大小, 单位px
				        radius: 30, //滚动半径, 单位px 页面宽度和高度的五分之一
				        mspeed: "slow", //滚动最大速度, 取值: slow, normal(默认), fast
				        ispeed: "slow", //滚动初速度, 取值: slow, normal(默认), fast
				        direction: 135, //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
				        keep: false //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
				    });
				
					// var _this=this;
					clearInterval(ttt1);
				    var ttt1 = setInterval(function () {
				        var data =[{
				            num: 40,
				            text: "matlab"
				        }, {
				            num: 30,
				            text: "python"
				        }, {
				            num: 35,
				            text: "java"
				        }, {
				            num: 30,
				            text: "C++"
				        }, {
				            num: 35,
				            text: "C#"
				        }, {
				            num: 25,
				            text: "autoCAD"
				        }, {
				            num: 35,
				            text: "JavaScript"
				        }, {
				            num: 25,
				            text: "PHP"
				        }, {
				            num: 30,
				            text: "C"
				        }, {
				            num: 20,
				            text: "SQL"
				        }];
				        $.each($(".tagcloud div"), function (i, v) {
				            $(v).css({
				                width: (data[i].num - 0) * 2 + "px",
				                height: (data[i].num - 0) * 2 + "px",
				                lineHeight: (data[i].num - 0) * 2 + "px"
				            }).text(data[i].text)
				        })
				    }, 5000)
				})
				
				function getData() {
				    var data =[{
				            num: 40,
				               text: "matlab"
				           }, {
				               num: 30,
				               text: "python"
				           }, {
				               num: 35,
				               text: "java"
				           }, {
				               num: 30,
				               text: "C++"
				           }, {
				               num: 35,
				               text: "C#"
				           }, {
				               num: 25,
				               text: "autoCAD"
				           }, {
				               num: 35,
				               text: "JavaScript"
				           }, {
				               num: 25,
				               text: "PHP"
				           }, {
				               num: 30,
				               text: "C"
				           }, {
				               num: 20,
				               text: "SQL"
				        }],
				        html = '';
				    for (var i = 0; i < data.length; i++) {
				        html += " <div class=\"co0" + (i + 1) + "\" style=\"width:" + (data[i].num - 0) * 2 + "px;height:" + (
				                data[i].num - 0) * 2 +
				            "px;line-height:" + (data[i].num - 0) * 2 +
				            "px\">" + data[i].text + "</div>"
				    }
				    $(".tagcloud").html(html);
				}
			}	
		}
	}
	
</script>

<style>
	@import "../assets/Bubble.css";
	.tagcloud  {
		min-height: 166px !important;
	}
	
	
</style>

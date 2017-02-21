//这个scoped不是vue里面特有的,是html的style标签里面就有的,在某个代码块内,局部的样式起作用
//多了vue-template-compiler and wrapper by div in pages document but components document no need like this===>只要是渲染在<router-view></router-view>上的都需要套一个<div></div>否则怎么识别哇
<style lang='less' scoped>
	*{
		padding:0;margin:0;
	}
	a{
		color:black;
		text-decoration: none;
	}
</style>
<template>
	<div id="root">
		<h1 @click="change">{{header}}</h1>
		<router-view></router-view>
		<h1>{{footer}}</h1>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState([
				'header',
				'footer'
			])
		},
		methods:{
			change(){
				this.$store.dispatch({
					type:'changeThem',
					header:"这是我点击后改变的脑阔",
					footer:"这是我点击后改变的脚啊!!"
				})
			}
		}
	}
</script>
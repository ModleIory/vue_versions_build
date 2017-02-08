<template>
	<header>
		<h2>{{header}}</h2>
	</header>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
				header:'ddd'
			}
		},
		/*这个自动构建工具里面要使用这个需要在安装babel-runtime core-js*/
		computed:{
			...mapState([
				'header'
			])
		}
	}
</script>
<style>
	
</style>
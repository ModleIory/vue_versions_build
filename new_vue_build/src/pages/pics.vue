//这个scoped不是vue里面特有的,是html的style标签里面就有的,在某个代码块内,局部的样式起作用
<style lang='less' scoped>
</style>
<template>
	<div>
		<one-img></one-img>
		<two-img></two-img>
	</div>
</template>
<script>
	import one from '../components/picOne'
	import two from '../components/picTwo'
	export default{
		data(){
			return {

			}
		},
		components:{
			oneImg:one,
			twoImg:two
		}
	}
</script>
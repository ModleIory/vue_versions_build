<template>
	<header>
		<h2>{{footer}}</h2>
	</header>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState([
				'footer'
			])
		}
	}
</script>
<style>
	
</style>
<template>
	<div id="home">
		<header-component></header-component>
		<button @click="change">click and change</button>
		<footer-component></footer-component>
	</div>
</template>
<script>
	import Header from '../components/headerComponent'
	import Footer from '../components/footerComponent'
	export default{
		data(){
			return {

			}
		},
		components:{
			headerComponent:Header,
			footerComponent:Footer
		},
		methods:{
			change(){
				this.$store.dispatch({
					type:"change",
					header:"hahaha header has been changed",
					footer:"hahaha footer has been changed"
				})
			}
		}
	}
</script>
<style>
	
</style>
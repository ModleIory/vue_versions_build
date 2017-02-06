<style>
	
</style>
<template>
	<div>
		<h1 v-touch:tap="warn">{{title}}</h1>
		<img-one></img-one>
		<img-two></img-two>
	</div>
</template>
<script>
	import imgOne from '../components/imgOneComponent'
	import imgTwo from '../components/imgTwoComponent'
	import {mapState,mapActions} from 'vuex'
	export default{
		data(){
			return {

			}
		},
		computed:{
			...mapState([
				'title'
			])
		},
		components:{
			imgTwo:imgTwo,
			imgOne:imgOne
		},
		methods:{
			show(){
				alert(this.$store.state.title)
			},
			...mapActions([
				'warn'
			])
		}
	}
</script>
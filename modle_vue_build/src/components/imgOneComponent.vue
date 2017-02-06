<style>
	img{
		float:left;
	}
</style>
<template>
	<img src="../../assets/img_little.jpg" width='400' v-touch:tap="change_title">
</template>
<script>
	export default{
		methods:{
			change_title(){
				this.$store.dispatch({
					type:"changeTitle",
					father:"he is naive and I feel bored"
				})
			}
		}
	}
</script>
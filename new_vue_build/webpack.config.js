const webpack = require('webpack')
const path = require('path')

const root = __dirname

module.exports = {
	entry:{
		index:path.resolve(root,'index.js')
	},
	output:{
		path:path.resolve(root,'assets'),
		publicPath:'/assets/',
		filename:"[name].bundle.js"
	},
	devServer:{
		contentBase:"./",
		port:2345
	},
	resolve:{
		extensions:['','.css','.js','.vue'],
		alias:{
			'vue$':'vue/dist/vue.common.js'
		}
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel'
			},
			{
				test:/\.css$/,
				loader:'style!css!autoprefixer?{browsers["last 100 versions"]}'
			},
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.(png)|(jpg)|(jpeg)|(gif)$/,
				loader:'url?limit='+1024*100
			},
			{
				test:/\.less$/,
				loader:'style!css!autoprefixer?{browsers:["last 100 versions"]}!less'
			}
		]
	}
}
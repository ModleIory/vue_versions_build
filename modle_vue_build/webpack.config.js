const webpack = require('webpack')
const path = require('path')

const root = __dirname
const entry = path.resolve(root,'index.js')

module.exports = {
	entry:{
		'index':entry
	},
	output:{
		path:path.resolve(root,'assets'),
		//***
		publicPath:'/assets/',
		filename:'[name].bundle.js'
	},
	//single style 单数形式这里
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel'
			},
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.css$/,
				loader:'style!css'
			},
			//用这个就可以了,小于100k的base64,否则就是去到output里面的path里面.
			//只要我开始时候的资源也放在assets里面,就可以不用调图片的src了
			//如果用绝对路径写资源,这个没有效果,相对路径可以使用之
			{
				test:/\.(png)|(jpg)|(jpeg)|(gif)$/,
				loader:'url?limit='+1024*100
			}
			//这两个不能连用,否则不生效,url也就是file的高级形式了
			// {
			// 	test:/\.(png|jpg|jpeg|gif|mp4|mp3)$/,
			// 	loader:"file"
			// }
		]
	},
	devServer:{
		port:1234,
		contentBase:'./'
	},
	resolve:{
		extensions:['','.css','.js','.vue'],
		alias:{
			'vue$':'vue/dist/vue.common.js'
		}
	}
}
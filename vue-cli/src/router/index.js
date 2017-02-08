import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'pages/home'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/hello',
			name: 'Hello',
			component: Hello
		},
		{
			path:'/',
			name:'home',
			component:Home
		}
	]
})


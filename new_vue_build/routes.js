import App from './src/pages/App'
import home from './src/pages/pics'

const routes = [
	{
		path:'/',
		component:App,
		children:[
			{
				path:'home',
				component:home
			}
		]
	}
]

export {routes}
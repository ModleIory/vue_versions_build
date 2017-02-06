import vue from 'vue'
import vue_router from 'vue-router'
import vue_touch from 'vue-touch'
import vue_resource from 'vue-resource'
import App from './src/App'
import routes from './src/routes'

vue.use(vue_router)
vue.use(vue_touch)
vue.use(vue_resource)


const router = new vue_router({
	mode:'hash'
})

router.map(routes)

router.start(App,'#app')

router.redirect({
	'*':'/index'
})

import vue from 'vue'
import vue_router from 'vue-router'
import vue_resource from 'vue-resource'
import vue_touch from 'vue-touch'
import {routes} from './routes'
import store from './src/store/store'

vue.use(vue_router)
//vue touch 不支持vue2.0
//只能够自定义directive了,后面再说
// vue.use(vue_touch)
vue.use(vue_resource)

const router  = new vue_router({
	routes
})

new vue({
	router,
	store
}).$mount('#app')




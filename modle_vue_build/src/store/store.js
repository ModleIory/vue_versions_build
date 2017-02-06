import vue from 'vue'
import vuex from 'vuex'
import * as m from './mutation-types'

vue.use(vuex)

const state = {
	title:"this is initial title from store"
}
const mutations = {
	[m.TEST_MUTATION](state,payload){
		console.log(payload)
		state.title = payload.father
	}
}
const actions = {
	warn({commit,state,dispatch},payload){
		alert('haha without payload')
	},
	changeTitle(context,payload){
		context.commit(m.TEST_MUTATION,payload)
	}
}
const getters = {

}

export default new vuex.Store({
	state,
	mutations,
	actions,
	getters
})
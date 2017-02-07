import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const state = {
	header:'this is header from store',
	footer:'this is footer from store'
}
const getters = {

}
const mutations = {
	mutation_name(state,payload){
		state.header = payload.header
		state.footer = payload.footer
	}
}
const actions = {
	changeThem({commit},payload){
		commit('mutation_name',payload)
	}
}

export default new vuex.Store({
	state,
	getters,
	mutations,
	actions
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	header:"this is header from store",
	footer:"this is footer from store"
}
const getters = {

}
const mutations = {
	change_logo(state,payload){
		state.header = payload.header
		state.footer = payload.footer
	}
}
const actions = {
	change({commit,state,dispatch},payload){
		commit('change_logo',payload)
	}
}
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
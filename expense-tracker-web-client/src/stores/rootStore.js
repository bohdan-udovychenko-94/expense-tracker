import { createStore } from 'vuex'
import VuexPersister from 'vuex-persister'

const vuexPersister = new VuexPersister()

export default createStore({
    plugins: [vuexPersister],
    state() {
        return {
            googleToken: null
        }
    },
    mutations: {
        setGoogleToken(state, googleToken) {
            state.googleToken = googleToken
        }
    },
    actions: {
        setGoogleToken({ commit }, googleToken) {
            commit('setGoogleToken', googleToken)
        }
    }
})